// Brücke zwischen Browserseite und WebAssembly-Kern (core_main.cpp).
//
// - lädt den Kern (coffeewiz_core.js, von build.sh erzeugt),
// - hängt das Datenverzeichnis in IndexedDB ein (Emscripten IDBFS) und lädt es,
// - reicht Anfragen wie an das Panel durch: call(method, path, query, body)
//   liefert {code, type, body},
// - schreibt nach jeder Änderung den Stand zurück nach IndexedDB.
//
// Ohne IndexedDB (z. B. Node-Test) läuft alles im Arbeitsspeicher (persistent: false).
/* global CoffeewizCore */
var CoffeewizBridge = (function () {
  'use strict';
  var M = null, persistent = false, queue = Promise.resolve();

  function syncfs(populate) {
    return new Promise(function (resolve, reject) {
      M.FS.syncfs(populate, function (err) { if (err) reject(err); else resolve(); });
    });
  }

  // Schreibvorgänge nacheinander, nie zwei syncfs gleichzeitig
  function flush() {
    if (!persistent) return Promise.resolve();
    queue = queue.then(function () { return syncfs(false); }).catch(function (e) {
      console.error('Speichern in IndexedDB fehlgeschlagen', e);
      throw e;
    });
    return queue;
  }

  // Zeichenkette in den Heap kopieren (große Rümpfe wie Fotos passen nicht auf den Stack)
  function heapString(s) {
    var n = M.lengthBytesUTF8(s) + 1, p = M._malloc(n);
    M.stringToUTF8(s, p, n);
    return p;
  }

  function cCall(fn, args) {
    var ptrs = args.map(heapString);
    try { return M.UTF8ToString(fn.apply(null, ptrs)); }
    finally { ptrs.forEach(function (p) { M._free(p); }); }
  }

  // opts.factory: Modul-Fabrik (Standard: globales CoffeewizCore), opts.root: Datenverzeichnis
  async function start(opts) {
    opts = opts || {};
    var factory = opts.factory || (typeof CoffeewizCore !== 'undefined' ? CoffeewizCore : null);
    if (!factory) throw new Error('coffeewiz_core.js nicht geladen');
    var root = opts.root || '/data';
    M = await factory(opts.moduleArgs || {});
    try { M.FS.mkdir(root); } catch (e) { /* existiert schon */ }
    persistent = typeof indexedDB !== 'undefined' && !!M.FS.filesystems.IDBFS && opts.memoryOnly !== true;
    if (persistent) {
      M.FS.mount(M.FS.filesystems.IDBFS, {}, root);
      await syncfs(true);
    }
    var info = JSON.parse(cCall(M._cw_init, [root]));
    await flush();  // Startkaffees beim ersten Start sichern
    info.persistent = persistent;
    // Browser bitten, die Daten nicht bei Speicherknappheit zu löschen
    info.storagePersisted = false;
    if (persistent && typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
      try { info.storagePersisted = await navigator.storage.persist(); } catch (e) { /* abgelehnt */ }
    }
    return info;
  }

  async function call(method, path, query, body) {
    if (!M) throw new Error('Kern nicht gestartet');
    var q = query && Object.keys(query).length ? JSON.stringify(query) : '';
    var r = JSON.parse(cCall(M._cw_call, [method || 'GET', path, q, body || '']));
    if (method && method !== 'GET') await flush();
    return r;
  }

  return { start: start, call: call, flush: flush };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = CoffeewizBridge;
