# 🌐 Website Online Stellen - Schritt für Schritt

Ihr Code ist bereits auf GitHub! Jetzt müssen Sie nur noch GitHub Pages aktivieren.

## 📋 Schritt-für-Schritt Anleitung

### Schritt 1: Zum Repository gehen
1. Öffnen Sie Ihren Browser
2. Gehen Sie zu: **https://github.ibm.com/Philipp-Zillmann-CIC/hochzeit**
3. Sie sollten jetzt Ihre Dateien sehen (index.html, css/, js/, etc.)

### Schritt 2: Settings öffnen
1. Klicken Sie oben rechts auf **"Settings"** (Zahnrad-Symbol)
2. Falls Sie Settings nicht sehen, haben Sie möglicherweise keine Admin-Rechte für das Repository

### Schritt 3: GitHub Pages aktivieren
1. Im linken Menü scrollen Sie nach unten zu **"Pages"**
2. Klicken Sie auf **"Pages"**
3. Sie sehen jetzt die GitHub Pages Einstellungen

### Schritt 4: Source konfigurieren
1. Bei **"Source"** (Quelle):
   - Wählen Sie **"Deploy from a branch"**
2. Bei **"Branch"**:
   - Wählen Sie **"main"** aus dem Dropdown
   - Wählen Sie **"/ (root)"** als Ordner
3. Klicken Sie auf **"Save"**

### Schritt 5: Warten und URL erhalten
1. Nach dem Speichern erscheint oben eine blaue Box mit:
   - "Your site is ready to be published at https://pages.github.ibm.com/Philipp-Zillmann-CIC/hochzeit/"
2. Warten Sie 1-2 Minuten
3. Die Box wird grün und zeigt: "Your site is published at..."
4. Klicken Sie auf die URL oder kopieren Sie sie

### Schritt 6: Website testen
1. Öffnen Sie die URL in einem neuen Tab
2. Geben Sie das Passwort ein (das in js/script.js definiert ist)
3. Testen Sie alle Funktionen:
   - Navigation
   - Google Maps Karte
   - RSVP Formular
   - Alle Links

---

## 🎯 Ihre Website URL

Nach der Aktivierung wird Ihre Website verfügbar sein unter:

```
https://pages.github.ibm.com/Philipp-Zillmann-CIC/hochzeit/
```

---

## ⚠️ Falls GitHub Pages nicht verfügbar ist

GitHub Enterprise hat manchmal GitHub Pages deaktiviert. In diesem Fall:

### Alternative 1: Netlify (Empfohlen - Sehr einfach!)

1. **Gehen Sie zu:** https://www.netlify.com
2. **Klicken Sie auf:** "Sign up" (kostenlos)
3. **Nach dem Login:**
   - Klicken Sie auf "Add new site"
   - Wählen Sie "Deploy manually"
4. **Dateien hochladen:**
   - Öffnen Sie auf Ihrem Mac den Ordner `wedding-website`
   - Ziehen Sie den GESAMTEN Ordner-Inhalt in das Netlify-Fenster
   - (Alle Dateien: index.html, css/, js/, images/, etc.)
5. **Fertig!**
   - Ihre Website ist sofort online
   - Sie bekommen eine URL wie: `random-name-123.netlify.app`
   - Diese können Sie in den Settings ändern zu: `uta-philipp-hochzeit.netlify.app`

**Vorteile von Netlify:**
- ✅ Extrem einfach (Drag & Drop)
- ✅ Komplett kostenlos
- ✅ Automatisches HTTPS
- ✅ Sehr schnell
- ✅ Keine Git-Kenntnisse nötig

### Alternative 2: Vercel

1. **Gehen Sie zu:** https://vercel.com
2. **Klicken Sie auf:** "Sign up" (kostenlos)
3. **Nach dem Login:**
   - Klicken Sie auf "Add New" → "Project"
   - Wählen Sie "Import Git Repository"
   - Verbinden Sie Ihr GitHub Enterprise Account
   - Wählen Sie das Repository "hochzeit"
   - Klicken Sie auf "Deploy"
4. **Fertig!**
   - Ihre Website ist online
   - URL: `hochzeit-xyz.vercel.app`

---

## 🔄 Updates durchführen

### Wenn Sie Änderungen an der Website machen:

```bash
cd wedding-website
git add .
git commit -m "Beschreibung der Änderung"
git push
```

- Bei **GitHub Pages**: Automatisch nach 1-2 Minuten aktualisiert
- Bei **Netlify**: Entweder neu hochladen oder GitHub verbinden für Auto-Deploy
- Bei **Vercel**: Automatisch aktualisiert wenn mit GitHub verbunden

---

## 📱 Website teilen

Sobald die Website online ist:

1. **Kopieren Sie die URL**
2. **Teilen Sie sie mit Ihren Gästen:**
   - Per WhatsApp
   - Per E-Mail
   - In der Einladungskarte

**Beispiel-Nachricht:**
```
🤍 Einladung zu unserer Hochzeit 🤍

Alle Informationen zu unserer Hochzeit findet ihr auf unserer Website:
https://pages.github.ibm.com/Philipp-Zillmann-CIC/hochzeit/

Passwort: [IHR-PASSWORT]

Wir freuen uns auf euch!
Uta & Philipp
```

---

## ❓ Probleme?

### "Settings" nicht sichtbar?
→ Sie benötigen Admin-Rechte für das Repository

### "Pages" nicht im Menü?
→ GitHub Pages ist möglicherweise deaktiviert → Nutzen Sie Netlify (siehe oben)

### Website lädt nicht?
→ Warten Sie 2-3 Minuten nach der Aktivierung
→ Leeren Sie den Browser-Cache (Cmd+Shift+R auf Mac)

### Google Maps zeigt nicht?
→ Für Produktion benötigen Sie einen eigenen Google Maps API Key
→ Siehe GOOGLE-MAPS-API.md für Anleitung

---

## ✅ Checkliste vor dem Teilen

- [ ] Website ist online und erreichbar
- [ ] Passwort funktioniert
- [ ] Alle Seiten laden korrekt
- [ ] Navigation funktioniert
- [ ] Google Maps Karte wird angezeigt
- [ ] RSVP Formular funktioniert
- [ ] Alle Links funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Rechtschreibung geprüft
- [ ] Datum und Uhrzeit korrekt

---

Viel Erfolg! 🎉