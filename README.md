# Coffeewiz – Web-App

Deine Kaffee-Rezepte an einem Ort, mit einem kleinen Zauberer, der beim Einstellen hilft.
Du notierst, wie du einen Kaffee zubereitest. Nach dem Probieren sagst du, wie er war,
und der Wizard schlägt vor, was du beim nächsten Mal ändern kannst.

Coffeewiz läuft komplett im Browser. Es gibt kein Konto und keinen Server,
deine Daten bleiben auf deinem Handy.

**Öffnen:** https://knippca-sketch.github.io/coffeewiz/

## Installieren

- **Android (Chrome):** Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“
- **iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm“

Danach startet Coffeewiz wie eine normale App und funktioniert auch ohne Internet.
Neue Versionen kommen beim nächsten Öffnen von selbst.

## Erste Schritte

Beim ersten Start fragt Coffeewiz deine Ausstattung ab:

- **Methoden:** Siebträger, Filter oder beides. Den Namen für die Siebträger-Methode wählst du selbst (z. B. „Espresso“).
- **Maschine:** Wie endet der Bezug (Zeit, Menge, von Hand)? Sind Preinfusion, Wartezeit und Temperatur einstellbar? Welche Siebe hast du, sind sie druckbehaftet, ist der Siebträger bodenlos?
- **Mühle:** Skala (Eureka-Rad mit Umdrehungszähler, Zahlenskala oder Stufen/Klicks), Bereich von–bis, wie weit der Wizard pro Vorschlag verstellt und ob die kleinere Zahl feiner ist.
- **Filter:** Waage beim Aufgießen? Wasserkocher mit Temperatur?

Felder und Vorschläge, die zu deiner Ausstattung nicht passen, blendet Coffeewiz aus.
Alles lässt sich später unter Einstellungen › Ausstattung ändern.

## Funktionen

**Kaffees und Rezepte**
- Ein Kaffee hat Name, Hersteller, Röstgrad (1–5), Ursprungsland, Bewertung, Röstdatum und ein eigenes Foto.
- Jeder Kaffee kann beliebig viele Rezepte haben, z. B. Espresso, V60 und Chemex.
- **Siebträger:** je Sieb (klein, mittel, groß) Mahlgrad, Kaffeemenge, Zielmenge, Preinfusion, Wartezeit und Shot-Zeit. Ein Sieb lässt sich als „Recommended“ markieren.
- **Filter:** Mahlgrad, Kaffeemenge, Temperatur und Schritte (Filter anfeuchten, Blooming, Aufgüsse). Zu jedem Schritt siehst du, was die Waage anzeigen soll und wann er beginnt.
- Suche nach Name, Hersteller und Ursprungsland, Filter nach Methode und Favoriten.
- „Im Mahlwerk“ markiert den Kaffee, der gerade in der Mühle ist. Er steht oben in der Liste.
- **Röstdatum:** Coffeewiz zeigt, wie alt die Bohnen sind, und gibt einen Hinweis, wenn sie noch sehr frisch oder schon älter sind. Ist die Packung leer, löscht „Kaffee leer“ das Röstdatum und die Markierung „Im Mahlwerk“.

**Fürs nächste Mal anpassen**
- Geänderte Werte erscheinen beim nächsten Öffnen grün mit „Neu“, der alte Wert steht durchgestrichen daneben. So weißt du immer, was du zuletzt verstellt hast.
- Zu jeder Anpassung gehört ein kurzer Kommentar, z. B. „War leicht sauer“.
- „Probiert“ blendet die Markierungen aus, wenn du die Änderung getestet hast.
- „Rückgängig“ holt die alten Werte zurück.

## Was der Wizard kann

**Rückmeldung auswerten.** Nach dem Bezug fragt der Wizard, wie der Kaffee war:
- Siebträger: Menge in der Tasse im Vergleich zur Zielmenge und der Geschmack (sauer, bitter, wässrig, trocken, flach, zu intensiv oder passt).
- Mit bodenlosem Siebträger zusätzlich: wann die ersten Tropfen kamen und wie der Shot lief (Spritzer, einseitig, mehrere Strahlen, früh hell). Auf Wunsch auch, wie der Puck aussah.
- Filter: wie schnell es durchlief, wie das Kaffeebett aussah und der Geschmack.

**Einen Vorschlag machen.** Der Wizard empfiehlt immer nur **eine** Stellschraube, damit du siehst, was wirkt:
- Mahlgrad, Shot-Zeit, Preinfusion, Wartezeit, Kaffeemenge oder Temperatur. Eine Empfehlung steht oben, bis zu zwei Alternativen darunter, weitere lassen sich aufklappen.
- Dazu kommen Tipps zur Ursache, z. B. Kanäle im Puck (verteilen, gerade tampen) oder ungleichmäßiges Aufgießen.
- Der Kommentar wird gleich mit vorgeschlagen.
- Hast du im Formular schon selbst etwas geändert, vergleicht der Wizard deine Änderung mit der Rückmeldung. Er sagt, ob sie passt oder dagegen spricht. Bei einer anderen Kaffeemenge schlägt er den passenden Mahlgrad-Ausgleich vor.

**Übernehmen oder merken.** „Übernehmen“ trägt die Änderung ins Formular ein, gespeichert wird erst mit „Speichern“. „Als Vorschlag merken“ hebt sie auf: Ein gelber Pfeil am Rezept erinnert dich daran.

**Mitlernen.** Beim nächsten Mal fragt der Wizard, ob die letzte Änderung geholfen hat (besser, zu wenig, gleich, schlechter, zu weit). Die Antworten sammelt er je Sieb als Lernrunden. Daraus soll er später lernen, welche Änderungen bei dir wirken.

**Gelbe Vorschläge von sich aus**
- **Aus dem Verlauf:** Hast du den Mahlgrad mehrmals in dieselbe Richtung verstellt und ist die übliche Zeit wieder um, schlägt er den nächsten Schritt vor.
- **Aus dem Röstdatum:** Sind die Bohnen älter (je nach Röstgrad ab 28 bis 42 Tagen), schlägt er einmal je Packung vor, eine halbe Unterteilung feiner zu mahlen. Das ist eine Faustregel, keine gesicherte Regel.

**Startwerte für neue Kaffees und Rezepte**
- Der Wizard fragt nach Sieben bzw. Wassermenge und Stärke. Beim Filter fragt er, wie du aufgießt: in Etappen, alles auf einmal oder Blooming und dann alles.
- Auf Wunsch orientiert er sich an bis zu drei ähnlichen Kaffees, die du schon hast.
- Daraus füllt er das Rezept vor, mit Hinweis, woher die Werte stammen.

**Aufpassen**
- Er hält die Reihenfolge der Filterschritte sauber (anfeuchten, Blooming, dann Aufgüsse) und sortiert falsch eingereihte Schritte ein.
- Er meldet sich, wenn ein Kaffee mit gleichem Namen und Hersteller schon existiert.

## Sichern

Deine Kaffees liegen nur im Browser auf diesem Gerät. Wird das Handy verloren
oder werden die Browserdaten gelöscht, sind sie weg. Deshalb:

- **Erinnerung:** Coffeewiz erinnert dich ans Sichern, spätestens alle 14 Tage oder nach 10 Lernrunden. „Jetzt sichern“ lädt die Sicherungsdatei herunter. Am iPhone öffnet sich dafür das Teilen-Menü, dort „In Dateien sichern“ wählen.
- **Android (Chrome):** Unter Einstellungen › Sicherung kannst du eine Datei wählen, in die Coffeewiz nach jeder Änderung automatisch sichert.
- **Wiederherstellen:** Einstellungen › Sicherung › Import. Bei Kaffees, die es schon gibt, wählst du: behalten, überschreiben oder zusätzlich anlegen.

Die Sicherung enthält alle Kaffees mit Rezepten, Vergleichsständen, Kommentaren, Lernverlauf und Fotos.
Mit derselben Datei kannst du Kaffees mit einem Coffeewiz-Panel austauschen, in beide Richtungen.

## Datenschutz

Es gibt keine Anmeldung, keine Werbung und kein Tracking. Coffeewiz schickt deine Daten nirgendwohin.
Gespeichert wird nur im Browser deines Geräts und in Sicherungsdateien, die du selbst anlegst.

---

Dieses Repository enthält nur die fertig gebauten Dateien und wird automatisch
aktualisiert. Lizenz und Hinweise zu fremden Bestandteilen: [LICENSE.md](LICENSE.md).
