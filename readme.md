# Informatikgarten 🪴

**Informatikgarten** ist ein Open-Source-Lehrmittel für die Informatik. Das Ziel ist, ein modernes, interaktives Lehrmittel zu schaffen, das Spass macht. 

## Implementierte Features

- **Obsidian-kompatibel**: Informatikgarten kann man direkt in Obsidian bearbeiten und Änderungen direkt pushen.
- **Excalidraw**: In Obsidian kann man mit Excalidraw Grafiken bearbeiten, die automatisch als SVG in Light- und Dark-Mode exportiert werden.
- **Turtle-Editor**: Python mit Turtle direkt im Browser.
- **SQLite**: Interaktive Aufgaben zu SQL direkt im Browser.
- **Anmeldung mit Microsoft**: Schülerinnen und Schüler können sich mit ihrem Schulaccount anmelden.
- **Quiz-Fragen**: Schülerinnen und Schüler können interaktiv Fragen beantworten, die lokal und in Postgres-SQL gespeichert werden.
- **Video**: Videos werden mit `pnpm syncvideo` automatisch auf Muxvideo geladen und in Obsidian normal verlinkt.

Den aktuellen Stand und Todos finden Sie auf [informatikgarten.ch](https://www.informatikgarten.ch).

## 📂 Struktur

- `sites/ig/`: Hauptwebsite mit Inhalten für informatikgarten.ch.
- `shared/`: Gemeinsame Komponenten und Hilfsprogramme (künftig werde ich weitere Webseiten hinzufügen).

Weil alle Pakete alle Dependencies teilen, sind sie im Root installiert. So muss man keine separaten package.json-Dateien führen.

## 🤝 Mitarbeit

Ich freue mich über Beiträge! Kleinere Korrekturen können Sie direkt hier auf Github anbringen. 

- Klonen Sie das Repository lokal
- Installieren Sie die Dependencies mit `pnpm install`
- Wechseln Sie ins Verzeichnis `/sites/ig`
- Starten Sie den Entwicklungsserver mit `pnpm dev`
- Öffnen Sie `/sites/ig/content` als Vault in Obsidian (installieren Sie die Plugins)