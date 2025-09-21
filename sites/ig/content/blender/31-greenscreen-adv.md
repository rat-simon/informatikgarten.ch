---
title: Greenscreen-Advanced Tutorial 🎬
---
# Greenscreen-Advanced Tutorial

<StickMe>
## Tutorial-Video

<Youtube id="5ZpGpfQjzJA" />
</StickMe>

## Zusammenfassung: Professionelle Green Screen Effekte in Blender 2.8

Dieses umfassende VFX-Tutorial von CG Geek zeigt, wie Sie professionelle Green Screen Effekte in Blender erstellen können. In knapp 49 Minuten lernen Sie alle wichtigen Schritte von der Aufnahme bis zum finalen Compositing - inklusive fortgeschrittener Techniken wie Motion Tracking und 3D-Integration.

### Schnellnavigation
<YT time={0} videoId="5ZpGpfQjzJA" label="Tutorial starten (0:00:00)" />
<YT time={143} videoId="5ZpGpfQjzJA" label="Green Screen Separation (0:02:23)" />
<YT time={617} videoId="5ZpGpfQjzJA" label="Chroma Key Setup (0:10:17)" />
<YT time={1045} videoId="5ZpGpfQjzJA" label="Footage Overlay (0:17:25)" />
<YT time={1886} videoId="5ZpGpfQjzJA" label="Motion Tracking (0:31:26)" />
<YT time={2125} videoId="5ZpGpfQjzJA" label="Rendering (0:35:25)" />
<YT time={2684} videoId="5ZpGpfQjzJA" label="Subject Blending (0:44:44)" />

## Teil 1: Einführung & Vorbereitung

### Willkommen zum VFX-Tutorial
<YT time={0} videoId="5ZpGpfQjzJA" label="Einführung (0:00:00)" />
Steve von CG Geek zeigt, wie Sie professionelle Green Screen Effekte mit Blender 2.8 erstellen. Das Tutorial ist eine komplette Überarbeitung seiner älteren Version mit moderneren und einfacheren Methoden.

<YT time={54} videoId="5ZpGpfQjzJA" label="Story Blocks Sponsor (0:00:54)" />
Einführung in Story Blocks (ehemals Video Blocks) als Quelle für professionelles Stock Footage. Die verwendeten Hintergrundaufnahmen stammen von dieser Plattform.

### Filming-Tipps für perfektes Green Screen Material
<YT time={94} videoId="5ZpGpfQjzJA" label="Green Screen Setup (0:01:34)" />
Wichtige Tipps für die Aufnahme:
- Green Screen von Amazon (Link in Videobeschreibung)
- Einfache Aufhängung über Regale oder andere Strukturen
- Kontrollierte Lichtverhältnisse sind wichtig

<YT time={127} videoId="5ZpGpfQjzJA" label="Beleuchtung einrichten (0:02:07)" />
- Separate Beleuchtung für Green Screen (weiche Schatten)
- Backlighting für das Subjekt (Kantentrennung)
- Schatten sind die schwierigsten Bereiche beim Keying

<YT time={154} videoId="5ZpGpfQjzJA" label="Footage-Auswahl (0:02:34)" />
Wichtig: Wissen, welches Hintergrund-Footage verwendet wird, um Beleuchtung anzupassen. Inspiration vom Coldplay-Musikvideo mit Chris Martin über einer Stadtlandschaft.

<YT time={193} videoId="5ZpGpfQjzJA" label="Story Blocks durchsuchen (0:03:13)" />
Suche nach "city landscape" für passende Hintergründe. Viele Optionen für verschiedene Arten von Shots verfügbar.

### Kamera-Einstellungen
<YT time={266} videoId="5ZpGpfQjzJA" label="Beleuchtung anpassen (0:04:26)" />
Beleuchtung sollte zur Sonnenposition im Hintergrund-Footage passen - Schatten auf dem Gesicht müssen übereinstimmen.

<YT time={288} videoId="5ZpGpfQjzJA" label="Focal Length matching (0:04:48)" />
- Gleiche Framerate verwenden (24 fps)
- Focal Length des Hintergrund-Footage schätzen und nachahmen
- Subjekt möglichst weit vom Green Screen entfernt (mehr Depth of Field)

## Teil 2: Blender Setup & Masking

### Movie Clip Editor
<YT time={320} videoId="5ZpGpfQjzJA" label="Footage in Blender laden (0:05:20)" />
Öffnen Sie Blender 2.8 und wechseln Sie zum Movie Clip Editor, um Ihr Green Screen Footage zu importieren.

<YT time={361} videoId="5ZpGpfQjzJA" label="Masking Setup (0:06:01)" />
- Wechsel von "Tracking" zu "Masking"
- Circle Mask hinzufügen
- Mit G-Taste positionieren

<YT time={409} videoId="5ZpGpfQjzJA" label="Mask anpassen (0:06:49)" />
Handles an die Ecken ziehen, um unnötiges Footage auszuschneiden. Mask muss das Subjekt während der gesamten Animation umschließen.

<YT time={435} videoId="5ZpGpfQjzJA" label="Timeline durchscrubben (0:07:15)" />
Überprüfen Sie, dass das Subjekt nie außerhalb der Maske ist. Bei Bedarf Mask-Größe anpassen.

## Teil 3: Compositing & Keying

### Node Setup
<YT time={462} videoId="5ZpGpfQjzJA" label="Compositing Tab (0:07:42)" />
- Zum Compositing Tab wechseln
- "Use Nodes" aktivieren
- Render Layer löschen

<YT time={488} videoId="5ZpGpfQjzJA" label="Movie Clip hinzufügen (0:08:08)" />
Movie Clip Node hinzufügen und mit Ctrl+Shift+Klick einen Viewer erstellen.

<YT time={522} videoId="5ZpGpfQjzJA" label="Keying Node Setup (0:08:42)" />
- Keying Node hinzufügen (unter Matte)
- Mask Input hinzufügen
- Mask in Garbage Matte verbinden

<YT time={563} videoId="5ZpGpfQjzJA" label="Invert Node (0:09:23)" />
Invert Node zwischen Mask und Keying Node einfügen für korrekte Maskierung.

<YT time={592} videoId="5ZpGpfQjzJA" label="Resolution anpassen (0:09:52)" />
Blender-Resolution auf 4K (3840x2160) setzen für höchste Qualität beim Compositing.

### Chroma Key Feintuning
<YT time={617} videoId="5ZpGpfQjzJA" label="Key Color Setup (0:10:17)" />
Mit Eyedropper die dunkelste Stelle des Green Screens auswählen für beste Ergebnisse.

<YT time={678} videoId="5ZpGpfQjzJA" label="Clip Black/White (0:11:18)" />
- Zu Matte-Ansicht wechseln für bessere Sichtbarkeit
- Clip Black und Clip White anpassen
- Screen Balance auf ~0.2 reduzieren

<YT time={780} videoId="5ZpGpfQjzJA" label="Edge Kernel (0:13:00)" />
- Edge Kernel Size und Radius feinjustieren
- Typische Werte: Size 0.3, Radius 4

<YT time={818} videoId="5ZpGpfQjzJA" label="Edge bearbeiten (0:13:38)" />
- Dilate/Erode auf -3 bis -4 für saubere Kanten
- Feather Distance erhöhen für weichere Übergänge

<YT time={839} videoId="5ZpGpfQjzJA" label="Feather & Blur (0:13:59)" />
- Pre Blur (2-5) für Entfernung von Artefakten
- Post Blur für weichere Kanten
- Feather Falloff experimentieren

<YT time={947} videoId="5ZpGpfQjzJA" label="Footage durchscrubben (0:15:47)" />
Überprüfen Sie das Keying-Ergebnis über die gesamte Animation.

## Teil 4: 3D Integration

### Alpha Over für Standbilder
<YT time={1009} videoId="5ZpGpfQjzJA" label="Alpha Over Node (0:16:49)" />
Für statische Hintergründe: Alpha Over Node zwischen Keying und Viewer einfügen.

<YT time={1045} videoId="5ZpGpfQjzJA" label="Footage überlagern (0:17:25)" />
- Green Screen in Bottom Socket
- Hintergrund in Top Socket
- "Convert Premultiply" aktivieren

### Motion Tracking Setup
<YT time={1073} videoId="5ZpGpfQjzJA" label="3D Scene Setup (0:17:53)" />
Wechsel zum Motion Tracking Workspace für Kameratracking des Hintergrund-Footage.

<YT time={1112} videoId="5ZpGpfQjzJA" label="Tracking Points (0:18:32)" />
- Automatische Feature Detection
- Mindestens 8 gute Tracking Points
- Track forward durch die Animation

<YT time={1180} videoId="5ZpGpfQjzJA" label="Camera Solver (0:19:40)" />
Solve Camera Motion für 3D-Kamera-Rekonstruktion.

<YT time={1208} videoId="5ZpGpfQjzJA" label="Scene Setup (0:20:08)" />
- Set as Background
- Setup Tracking Scene
- Kamera an Viewport snappen

### 3D Objekte hinzufügen
<YT time={1314} videoId="5ZpGpfQjzJA" label="Ground Plane (0:21:54)" />
Ground Plane als Schatten-Catcher für realistische Integration.

<YT time={1367} videoId="5ZpGpfQjzJA" label="Split Screen Setup (0:22:47)" />
Geteilte Ansicht für gleichzeitige Bearbeitung von 3D View und Camera View.

<YT time={1428} videoId="5ZpGpfQjzJA" label="Plane positionieren (0:23:48)" />
Ground Plane an korrekter Position im 3D-Raum platzieren.

<YT time={1556} videoId="5ZpGpfQjzJA" label="Beleuchtung anpassen (0:25:56)" />
Sonne rotieren um Schatten mit Footage abzustimmen.

<YT time={1715} videoId="5ZpGpfQjzJA" label="3D Objekte (0:28:35)" />
Würfel und andere Objekte für Interaktion hinzufügen.

<YT time={1781} videoId="5ZpGpfQjzJA" label="Weitere Objekte (0:29:41)" />
Mehrere 3D-Objekte für komplexere Szene hinzufügen.

### Animation
<YT time={1886} videoId="5ZpGpfQjzJA" label="Keyframes für Bewegung (0:31:26)" />
Objekt-Animation mit Keyframes für realistische Bewegung.

<YT time={1985} videoId="5ZpGpfQjzJA" label="Animation fortsetzen (0:33:05)" />
Weitere Keyframes für flüssige Bewegung hinzufügen.

<YT time={2025} videoId="5ZpGpfQjzJA" label="Alpha Masks (0:33:45)" />
Bilder mit Alpha-Kanal für zusätzliche Elemente verwenden.

## Teil 5: Rendering & Post-Production

### Render-Einstellungen
<YT time={2125} videoId="5ZpGpfQjzJA" label="Rendering Setup (0:35:25)" />
- Cycles oder Eevee Renderer
- Sample-Einstellungen optimieren
- Output-Format festlegen

<YT time={2211} videoId="5ZpGpfQjzJA" label="Mist hinzufügen (0:36:51)" />
Atmosphärische Effekte mit Mist Pass für mehr Tiefe.

<YT time={2284} videoId="5ZpGpfQjzJA" label="1080p Setup (0:38:04)" />
Auflösung auf 1080p reduzieren für schnelleres Rendering.

<YT time={2296} videoId="5ZpGpfQjzJA" label="Footage skalieren (0:38:16)" />
Footage an neue Resolution anpassen.

### Color Grading
<YT time={2364} videoId="5ZpGpfQjzJA" label="Color Changes (0:39:24)" />
Farbkorrekturen für einheitlichen Look.

<YT time={2410} videoId="5ZpGpfQjzJA" label="Clouds hinzufügen (0:40:10)" />
Wolken-Elemente für dramatischeren Himmel.

<YT time={2420} videoId="5ZpGpfQjzJA" label="Color RGB (0:40:20)" />
RGB-Kurven für Farbkorrektur verwenden.

<YT time={2491} videoId="5ZpGpfQjzJA" label="Matte hinzufügen (0:41:31)" />
Zusätzliche Matte-Elemente für Compositing.

<YT time={2508} videoId="5ZpGpfQjzJA" label="Y-Position anpassen (0:41:48)" />
Feinpositionierung der Elemente.

### Final Compositing
<YT time={2684} videoId="5ZpGpfQjzJA" label="Subject Blending (0:44:44)" />
Finale Integration des Subjekts in die Szene.

<YT time={2718} videoId="5ZpGpfQjzJA" label="Color Ramp (0:45:18)" />
Color Ramp für Übergangseffekte.

<YT time={2766} videoId="5ZpGpfQjzJA" label="Color Ramp Converter (0:46:06)" />
Zusätzliche Color Ramp mit Converter für komplexere Effekte.

<YT time={2837} videoId="5ZpGpfQjzJA" label="Ambient Occlusion (0:47:17)" />
Ambient Occlusion für realistischere Schatten und Kontakte.

<YT time={2886} videoId="5ZpGpfQjzJA" label="Animation rendern (0:48:06)" />
Finale Animation als Video-Datei exportieren.

## Wichtige Tipps & Tricks

### Green Screen Aufnahme
- Höchstmögliche Qualität (4K wenn möglich)
- Gleichmäßige Beleuchtung des Green Screens
- Subjekt weit vom Green Screen entfernt
- Keine grüne Kleidung tragen
- Backlighting für bessere Kantentrennung

### Keying-Optimierung
- Dunkelste Green Screen Stelle für Key Color wählen
- Matte-Ansicht für bessere Kontrolle
- Pre-Blur für Artefakt-Entfernung
- Feather für weiche Kanten

### 3D-Integration
- Motion Tracking für Kamera-Bewegung
- Shadow Catcher für realistische Schatten
- Beleuchtung an Footage anpassen
- Ambient Occlusion für Kontakt-Schatten

### Post-Production
- Color Grading für einheitlichen Look
- Atmosphärische Effekte (Mist, Fog)
- Multiple Render Passes für Flexibilität
- Compositing-Nodes für Feintuning