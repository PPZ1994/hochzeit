# Hochzeitswebsite mit Passwortschutz

Eine wunderschöne, passwortgeschützte Hochzeitswebsite für Uta & Philipp.

## 🔐 Passwort

Das Passwort ist: **Coco**

Um das Passwort zu ändern, bearbeite Zeile 3 in `js/script.js`:
```javascript
const CORRECT_PASSWORD = "Coco";
```

## 📁 Project Structure

```
wedding-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Password protection & interactions
├── images/             # Folder for your wedding photos
└── README.md           # This file
```

## 🎨 Funktionen

- **Passwortschutz**: Sicherer Zugang zu den Hochzeitsdetails
- **Responsives Design**: Funktioniert auf allen Geräten (Desktop, Tablet, Handy)
- **Elegantes Styling**: Schöne Farbverläufe und sanfte Animationen
- **Mehrere Bereiche**:
  - Hero-Bereich mit Namen und Datum
  - Unsere Geschichte
  - Hochzeitsdetails (Trauung & Feier)
  - Zeitplan
  - RSVP-Informationen
  - Fotogalerie

## 🚀 Verwendung

1. **Fotos hinzufügen**:
   - Lege deine Fotos in den `images/` Ordner
   - Aktualisiere den Galerie-Bereich in `index.html`:
   ```html
   <img src="images/dein-foto.jpg" alt="Beschreibung">
   ```

2. **Passwort ändern** (optional):
   - Öffne `js/script.js`
   - Ändere Zeile 3: `const CORRECT_PASSWORD = "dein-neues-passwort";`

3. **Farben anpassen** (optional):
   - Öffne `css/styles.css`
   - Die Hauptfarben sind: `#667eea` und `#764ba2`
   - Suche und ersetze diese Farben in der Datei

4. **Inhalte anpassen**:
   - Bearbeite `index.html` für weitere Anpassungen
   - Ändere die Geschichte, Kontaktinformationen, etc.

## 🌐 Veröffentlichungsoptionen

### Option 1: GitHub Pages (Kostenlos)
1. GitHub-Konto erstellen
2. Neues Repository erstellen
3. Alle Dateien hochladen
4. Gehe zu Einstellungen > Pages
5. Wähle main branch und speichern
6. Deine Seite ist live unter: `https://deinbenutzername.github.io/repository-name`

### Option 2: Netlify (Kostenlos)
1. Netlify-Konto erstellen
2. Den `wedding-website` Ordner per Drag & Drop hochladen
3. Deine Seite ist sofort live mit einer benutzerdefinierten URL

### Option 3: Lokales Testen
Öffne einfach `index.html` in deinem Webbrowser zum Testen.

## 📝 Anpassungstipps

- **Farbschema ändern**: Bearbeite die Farbverläufe in `styles.css`
- **Weitere Bereiche hinzufügen**: Kopiere die bestehende Struktur in `index.html`
- **Zeitplan ändern**: Füge Zeitplan-Einträge hinzu oder entferne sie
- **Navigation aktualisieren**: Füge neue Links im Navigationsmenü hinzu

## 🔒 Sicherheitshinweis

Dies ist ein einfacher clientseitiger Passwortschutz, der für normale Besucher ausreichend ist. Für hochsensible Informationen sollte eine serverseitige Authentifizierung verwendet werden.

## 💡 Hochzeitsdetails

**Namen**: Uta & Philipp
**Datum**: 20. Juni 2027
**Ort**: Amberger Straße 7, 92245 Kümmersbruck
**Passwort**: Coco

## 📝 RSVP Funktionalität

Die Website hat jetzt ein vollständiges RSVP-Formular! Gäste können:
- Ihre Zusage/Absage mitteilen
- Anzahl der Personen angeben
- Ernährungswünsche mitteilen
- Eine persönliche Nachricht hinterlassen

**RSVPs verwalten:**
- Öffne die Browser-Console (F12)
- Tippe `viewAllRSVPs()` um alle Anmeldungen zu sehen
- Tippe `exportRSVPsAsCSV()` um eine CSV-Datei zu exportieren

**Detaillierte Anleitung**: Siehe `RSVP-ANLEITUNG.md`

---

**Viel Freude an eurem besonderen Tag! 💕**