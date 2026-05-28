# RSVP Funktionalität - Anleitung

## 📋 Wie funktioniert das RSVP-System?

Die RSVP-Funktion speichert alle Anmeldungen lokal im Browser (localStorage). Dies ist eine einfache Lösung für den Anfang.

## 🔍 RSVPs Anzeigen

Um alle eingegangenen RSVPs zu sehen:

1. Öffne die Website
2. Drücke `F12` (oder Rechtsklick → "Untersuchen")
3. Gehe zum "Console" Tab
4. Tippe ein: `viewAllRSVPs()`
5. Drücke Enter

Du siehst dann eine Tabelle mit allen Anmeldungen!

## 💾 RSVPs Exportieren

Um alle RSVPs als CSV-Datei zu exportieren:

1. Öffne die Console (wie oben)
2. Tippe ein: `exportRSVPsAsCSV()`
3. Drücke Enter
4. Die Datei wird automatisch heruntergeladen

## 📧 Email-Benachrichtigungen (Optional)

Für automatische Email-Benachrichtigungen bei neuen RSVPs gibt es mehrere Optionen:

### Option 1: EmailJS (Empfohlen - Kostenlos)

1. Gehe zu https://www.emailjs.com/
2. Erstelle ein kostenloses Konto
3. Richte einen Email-Service ein
4. Erstelle ein Email-Template
5. Füge den Code in `js/script.js` ein (siehe Kommentare in der Datei)

### Option 2: Formspree

1. Gehe zu https://formspree.io/
2. Erstelle ein Konto
3. Ersetze das Formular mit einem Formspree-Formular

### Option 3: Eigener Server

Wenn du einen eigenen Server hast, kannst du die Daten an deine eigene API senden.

## ⚠️ Wichtige Hinweise

### Lokale Speicherung
- Die RSVPs werden im Browser gespeichert
- Wenn du den Browser-Cache löschst, gehen die Daten verloren
- **Exportiere regelmäßig die RSVPs als CSV!**

### Für Produktiv-Nutzung
Für eine professionelle Lösung empfehle ich:

1. **Google Forms Integration**
   - Erstelle ein Google Form
   - Verlinke es oder bette es ein
   - Alle Antworten gehen automatisch in Google Sheets

2. **Backend-Service**
   - Nutze einen Service wie Netlify Forms
   - Oder erstelle eine einfache Backend-API

3. **Email-Service**
   - Integriere EmailJS für automatische Benachrichtigungen

## 🎯 Schnellstart für Google Forms (Einfachste Lösung)

1. Gehe zu https://forms.google.com/
2. Erstelle ein neues Formular mit den Feldern:
   - Name
   - Email
   - Telefon
   - Zusage (Ja/Nein/Vielleicht)
   - Anzahl Personen
   - Ernährungswünsche
   - Nachricht

3. Klicke auf "Senden" → "Link"
4. Ersetze das RSVP-Formular in `index.html` mit einem Link oder iframe zum Google Form

**Vorteil**: Alle Antworten werden automatisch in Google Sheets gespeichert!

## 📱 Kontakt bei Fragen

Wenn du Hilfe bei der Einrichtung brauchst, frag einfach!

---

**Tipp**: Teste das RSVP-Formular selbst, um zu sehen wie es funktioniert!