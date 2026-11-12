// Service Worker der Web-App: hält alle Dateien für den Offline-Betrieb bereit.
// Jeder Bau setzt eine neue Version ein (make_app.py); beim nächsten Öffnen
// lädt der Browser die neuen Dateien, alte Zwischenspeicher werden gelöscht.
const VERSION = '40a18cc4';
const CACHE = 'coffeewiz-' + VERSION;
const FILES = ['./', 'index.html', 'coffeewiz_core.js', 'coffeewiz_core.wasm', 'core_bridge.js',
  'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  // cache: 'reload' umgeht den HTTP-Zwischenspeicher (GitHub Pages hält Dateien ca. 10 min),
  // damit eine neue Version nicht mit alten Dateien gefüllt wird
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k.startsWith('coffeewiz-') && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Erst aus dem Zwischenspeicher (offline), sonst aus dem Netz
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});
