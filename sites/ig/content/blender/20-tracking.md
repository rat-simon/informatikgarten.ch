---
title: Kamera-Tracking
---

# Kamera-Tracking in Blender

*Achtung: Bei längeren Sequenzen wird oft empfohlen, alle Bilder Ihres Videos zuerst separat als eine Bildsequenz zu speichern. Wie Sie das tun können, erklärt [dieses Kurz-Tutorial](31-imagesequence).*

<StickMe>
## Tutorial-Video

<Youtube id="vB07Bws8bmY" />
</StickMe>

## Zusammenfassung

Ein grundlegendes Tutorial zum Motion Tracking in Blender, das zeigt, wie man 3D-Elemente realistisch in reale Videoaufnahmen integriert. Perfekt für Einsteiger, die VFX und Motion Graphics erstellen möchten.

## 1. Vorbereitung und Setup

<YT time={0} videoId="vB07Bws8bmY" label="Einführung ins Motion Tracking (0:00)" />

### Video-Material vorbereiten
<YT time={12} videoId="vB07Bws8bmY" label="Video-Footage Anforderungen (0:12)" />

**Wichtige Kriterien für gutes Tracking-Material:**
- <YT time={26} videoId="vB07Bws8bmY" label="Kein Motion Blur - hohe Shutter Speed verwenden (0:26)" />
- Klare, kontrastierte Details im Bild
- Stabile Kameraführung ohne zu schnelle Bewegungen

### Blender Workspace einrichten
<YT time={38} videoId="vB07Bws8bmY" label="Motion Tracking Workspace öffnen (0:38)" />

1. **Motion Tracking Workspace** auswählen (nicht Standard Layout)
2. <YT time={53} videoId="vB07Bws8bmY" label="Video-Footage importieren (0:53)" />
3. <YT time={61} videoId="vB07Bws8bmY" label="Frame Rate abgleichen (1:01)" />

## 2. Tracking-Prozess

### Grundeinstellungen
<YT time={70} videoId="vB07Bws8bmY" label="Tracking-Vorbereitung (1:10)" />

**Wichtige Schritte:**
- **Set Scene Frames** klicken
- **Prefetch** aktivieren für bessere Performance
- <YT time={83} videoId="vB07Bws8bmY" label="Motion Model auf 'Location, Rotation, Scale' setzen (1:23)" />

### Automatische Marker-Erkennung
<YT time={88} videoId="vB07Bws8bmY" label="Tracking Marker automatisch hinzufügen (1:28)" />

1. <YT time={98} videoId="vB07Bws8bmY" label="'Detect Features' für automatische Marker (1:38)" />
2. <YT time={106} videoId="vB07Bws8bmY" label="'Track Forward' zum Starten des Trackings (1:46)" />

### Tracking-Probleme lösen
<YT time={119} videoId="vB07Bws8bmY" label="Verlorene Tracking-Marker identifizieren (1:59)" />

**Marker-Status verstehen:**
- **Gelb**: Erfolgreiche Tracking-Marker
- **Rot**: Verlorene/fehlerhafte Marker

<YT time={131} videoId="vB07Bws8bmY" label="Re-Tracking bei verlorenen Markern (2:11)" />

**Workflow bei Tracking-Verlust:**
1. Zu Frame mit verlorenen Markern zurückgehen
2. <YT time={134} videoId="vB07Bws8bmY" label="'Detect Features' erneut ausführen (2:14)" />
3. <YT time={140} videoId="vB07Bws8bmY" label="Alle Marker auswählen (A) und weiter tracken (2:20)" />
4. Prozess wiederholen bis komplettes Video getrackt ist

## 3. Track-Bereinigung

### Fehlerhafte Marker entfernen
<YT time={156} videoId="vB07Bws8bmY" label="Tracking-Qualität beurteilen (2:36)" />

<YT time={170} videoId="vB07Bws8bmY" label="Track-Bereinigung im Solve Tab (2:50)" />

**Filter Track Einstellungen:**
1. **Solve Tab** → **Cleanup** → **Filter Track**
2. <YT time={178} videoId="vB07Bws8bmY" label="Track Threshold auf 10 Pixel setzen (2:58)" />
3. <YT time={194} videoId="vB07Bws8bmY" label="Schlechte Marker löschen (X) (3:14)" />

### Solve-Qualität verbessern
<YT time={201} videoId="vB07Bws8bmY" label="Graph-Analyse für Track-Qualität (3:21)" />

**Qualitätsindikatoren:**
- Sauberer, glatter Graph = guter Track
- <YT time={210} videoId="vB07Bws8bmY" label="Solve Error unter 1 Pixel anstreben (3:30)" />

### Erweiterte Bereinigung
<YT time={254} videoId="vB07Bws8bmY" label="Clean Tracks für bessere Präzision (4:14)" />

1. **Clean Tracks** verwenden
2. <YT time={257} videoId="vB07Bws8bmY" label="Reprojection Error auf 1 setzen (4:17)" />
3. <YT time={270} videoId="vB07Bws8bmY" label="Solve Error auf 0.5 Pixel reduzieren (4:30)" />

### Wichtiger Hinweis zu Kamera-Settings
<YT time={219} videoId="vB07Bws8bmY" label="Focal Length und Keyframes A/B setzen (3:39)" />

**Kritische Einstellungen:**
- **Focal Length** der Kamera eingeben
- **Keyframes A & B**: Zwei Frames mit gleichen Objekten aus verschiedenen Winkeln
- Benötigt für Parallax-Berechnung

## 4. Scene Setup

### 3D-Szene vorbereiten
<YT time={282} videoId="vB07Bws8bmY" label="Scene Setup konfigurieren (4:42)" />

1. <YT time={285} videoId="vB07Bws8bmY" label="'Set as Background' aktivieren (4:45)" />
2. **Setup Tracking Scene** klicken

### Boden-Orientierung
<YT time={291} videoId="vB07Bws8bmY" label="Drei Boden-Marker auswählen (4:51)" />

1. **Drei Tracking-Marker** auf dem Boden auswählen
2. <YT time={295} videoId="vB07Bws8bmY" label="Orientation Tab → Floor (4:55)" />
3. Richtet 3D-Boden mit Video-Boden aus

### Tracking-Ergebnis prüfen
<YT time={305} videoId="vB07Bws8bmY" label="Layout Tab für Kamera-Ansicht (5:05)" />

- Camera View zeigt getrackte Footage als Hintergrund
- <YT time={315} videoId="vB07Bws8bmY" label="Track-Präzision beurteilen (5:15)" />

## 5. Tracking-Verfeinerung

### Erweiterte Marker-Einstellungen
<YT time={324} videoId="vB07Bws8bmY" label="Zurück zum Motion Tracking Workspace (5:24)" />

<YT time={330} videoId="vB07Bws8bmY" label="Detect Features mit erweiterten Einstellungen (5:30)" />

**Verbesserte Detection-Parameter:**
- <YT time={337} videoId="vB07Bws8bmY" label="Threshold: 0.05 (5:37)" />
- <YT time={343} videoId="vB07Bws8bmY" label="Distance: 70-80 (5:43)" />
- Fügt deutlich mehr Tracking-Marker hinzu

### Finaler Tracking-Durchlauf
<YT time={356} videoId="vB07Bws8bmY" label="Mehrere Detection-Durchläufe (5:56)" />

1. Mehrmals **Detect Features** in verschiedenen Video-Bereichen
2. <YT time={364} videoId="vB07Bws8bmY" label="Komplettes Video erneut tracken (6:04)" />
3. <YT time={369} videoId="vB07Bws8bmY" label="Track-Bereinigung wiederholen (6:09)" />
4. <YT time={374} videoId="vB07Bws8bmY" label="Camera Motion erneut lösen (6:14)" />
5. <YT time={380} videoId="vB07Bws8bmY" label="Neue Boden-Marker für Orientierung wählen (6:20)" />

## 6. 3D-Integration

### 3D-Elemente hinzufügen
<YT time={389} videoId="vB07Bws8bmY" label="3D-Objekte zur Szene hinzufügen (6:29)" />

- Motion Tracking abgeschlossen
- <YT time={395} videoId="vB07Bws8bmY" label="Zeit für 3D-Elemente (6:35)" />
- Objekte bewegen sich automatisch mit der Kamera

## 7. Compositing und Rendering

### Compositor-Einstellungen
<YT time={401} videoId="vB07Bws8bmY" label="Compositing Tab für Render-Setup (6:41)" />

**Render-Optionen:**
- <YT time={416} videoId="vB07Bws8bmY" label="Video automatisch in Render integriert (6:56)" />
- <YT time={425} videoId="vB07Bws8bmY" label="Transparente PNG-Sequenz Option (7:05)" />
- <YT time={433} videoId="vB07Bws8bmY" label="Compositor-Nodes anpassen (7:13)" />

### Shadow Catcher Bonus-Tipp
<YT time={442} videoId="vB07Bws8bmY" label="Shadow Catcher für realistischere Integration (7:22)" />

**Cycles Shadow Catcher:**
1. <YT time={445} videoId="vB07Bws8bmY" label="Plane zur Szene hinzufügen (7:25)" />
2. <YT time={448} videoId="vB07Bws8bmY" label="Als Shadow Catcher konfigurieren (7:28)" />
3. Rendert nur Schatten für realistische Integration

## Wichtige Tipps

**Für erfolgreiches Motion Tracking:**
- Hohe Shutter Speed beim Filmen (kein Motion Blur)
- Genügend kontrastierte Details im Bild
- Tracking iterativ verbessern mit mehreren Detection-Durchläufen
- Solve Error unter 1 Pixel, idealerweise 0.5 Pixel
- Shadow Catcher für realistische Schatten verwenden

**Häufige Probleme:**
- Rote Marker = Tracking verloren → Re-Detection nötig
- Unruhiger Graph = schlechte Marker → Bereinigung erforderlich
- Hoher Solve Error = mehr/bessere Marker benötigt

