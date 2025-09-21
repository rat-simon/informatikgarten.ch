---
title: Tracking (Experimental!)
---

# Erweiterte Kamera-Tracking Techniken in Blender 4.0

*Achtung: Bei längeren Sequenzen wird oft empfohlen, alle Bilder Ihres Videos zuerst separat als eine Bildsequenz zu speichern. Wie Sie das tun können, erklärt [dieses Kurz-Tutorial](31-imagesequence).*

<StickMe>
## Tutorial-Video

<Youtube id="ui0JUHE12k8" />
</StickMe>

## Zusammenfassung

Ein umfassendes, aktualisiertes Tutorial für Camera Tracking in Blender 4.0 mit erweiterten Techniken und Optimierungen. Perfekt für Visual Effects Artists, die professionelle Tracking-Workflows erlernen möchten - von der ersten Marker-Platzierung bis zur finalen 3D-Integration.

## Intro

<YT time={0} videoId="ui0JUHE12k8" label="Einführung und Projektübersicht (0:00)" />

**Was Sie lernen werden:**
- Professionelle Camera Tracking Workflows
- <YT time={4} videoId="ui0JUHE12k8" label="Aktualisierte Techniken für Blender 4.0 (0:04)" />
- <YT time={9} videoId="ui0JUHE12k8" label="Neue Tricks und Optimierungen (0:09)" />
- <YT time={17} videoId="ui0JUHE12k8" label="Ziel: Realistische 3D-Integration (0:17)" />

## 1. Camera Tracking Settings

<YT time={25} videoId="ui0JUHE12k8" label="Camera Tracking Einstellungen (0:25)" />

### Workspace und Footage Setup
<YT time={25} videoId="ui0JUHE12k8" label="VFX Motion Tracking Workspace öffnen (0:25)" />

**Image Sequence vs. Video:**
- <YT time={31} videoId="ui0JUHE12k8" label="Image Sequence für bessere Performance (0:31)" />
- Nicht an Frame Rate gebunden
- <YT time={36} videoId="ui0JUHE12k8" label="Einfacher zu verarbeiten (0:36)" />

### Farb-Management
<YT time={42} videoId="ui0JUHE12k8" label="Color Management korrigieren (0:42)" />

1. <YT time={43} videoId="ui0JUHE12k8" label="Color Management → Standard (0:43)" />
2. <YT time={48} videoId="ui0JUHE12k8" label="Tracking Settings konfigurieren (0:48)" />
3. <YT time={51} videoId="ui0JUHE12k8" label="Set Scene Frames und Prefetch (0:51)" />

### Manuelle Marker-Platzierung
<YT time={56} videoId="ui0JUHE12k8" label="Marker manuell hinzufügen (0:56)" />

**Marker-Shortcuts:**
- **Ctrl + Click**: Marker hinzufügen
- <YT time={59} videoId="ui0JUHE12k8" label="Alt + S: Search Area anzeigen (0:59)" />

**Optimale Marker-Platzierung:**
- <YT time={61} videoId="ui0JUHE12k8" label="Hoher Kontrast, statische Objekte (1:01)" />
- <YT time={66} videoId="ui0JUHE12k8" label="Verteilung über gesamten Frame (1:06)" />
- <YT time={73} videoId="ui0JUHE12k8" label="Angemessene Pattern- und Search-Grösse (1:13)" />

### Erweiterte Tracking-Einstellungen
<YT time={88} videoId="ui0JUHE12k8" label="Tracking-Konfiguration optimieren (1:28)" />

**Empfohlene Einstellungen:**
- <YT time={91} videoId="ui0JUHE12k8" label="Match: Previous Frame (1:31)" />
- <YT time={96} videoId="ui0JUHE12k8" label="Normalize aktivieren für Luminanz-Stabilität (1:36)" />
- <YT time={103} videoId="ui0JUHE12k8" label="Correlation: 0.9 (90% Genauigkeit) (1:43)" />

## 2. Tracking the Markers

<YT time={120} videoId="ui0JUHE12k8" label="Marker-Tracking Prozess (2:00)" />

### Automatische Feature Detection
<YT time={122} videoId="ui0JUHE12k8" label="Detect Features für automatische Marker (2:02)" />

**Optimierte Detection-Parameter:**
- <YT time={128} videoId="ui0JUHE12k8" label="Threshold: 0.01 (2:08)" />
- <YT time={131} videoId="ui0JUHE12k8" label="Distance: 80 (2:11)" />
- <YT time={132} videoId="ui0JUHE12k8" label="Ziel: Maximale Marker-Anzahl (2:12)" />

### Multi-Point Tracking Strategy
<YT time={140} videoId="ui0JUHE12k8" label="Ctrl + T: Forward Tracking (2:20)" />

**Strategisches Vorgehen:**
1. <YT time={150} videoId="ui0JUHE12k8" label="Marker am Footage-Anfang (2:30)" />
2. <YT time={152} videoId="ui0JUHE12k8" label="Zu Footage-Ende und neue Detection (2:32)" />
3. <YT time={158} videoId="ui0JUHE12k8" label="Ctrl + Shift + T: Backward Tracking (2:38)" />
4. <YT time={169} videoId="ui0JUHE12k8" label="Mittlere Frames für vollständige Abdeckung (2:49)" />

**Tracking-Shortcuts:**
- **Ctrl + T**: Vorwärts tracken
- **Ctrl + Shift + T**: Rückwärts tracken

## 3. Getting a Camera Solve

<YT time={180} videoId="ui0JUHE12k8" label="Camera Solve erstellen (3:00)" />

### Graph-basierte Qualitätskontrolle
<YT time={185} videoId="ui0JUHE12k8" label="Schlechte Marker visuell identifizieren (3:05)" />

<YT time={194} videoId="ui0JUHE12k8" label="Graph Editor für Marker-Analyse (3:14)" />

**Fehler-Identifikation:**
- <YT time={208} videoId="ui0JUHE12k8" label="Grüne Spikes = Tracking-Fehler (3:28)" />
- <YT time={216} videoId="ui0JUHE12k8" label="Visuelle Marker-Überprüfung (3:36)" />
- <YT time={224} videoId="ui0JUHE12k8" label="Haywire Movement eliminieren (3:44)" />

### Manuelle Bereinigung
<YT time={231} videoId="ui0JUHE12k8" label="Graph-Spikes manuell löschen (3:51)" />

**Bereinigungsstrategie:**
- Grüne und rote Spikes identifizieren
- <YT time={243} videoId="ui0JUHE12k8" label="Graph wird sauberer und glatter (4:03)" />
- <YT time={251} videoId="ui0JUHE12k8" label="Manuelle Footage-Durchsicht (4:11)" />

### Keyframe-Definition für Parallax
<YT time={261} videoId="ui0JUHE12k8" label="Keyframes A & B für Parallax (4:21)" />

**Parallax-Optimierung:**
- <YT time={267} videoId="ui0JUHE12k8" label="Maximale Parallax-Bereiche finden (4:27)" />
- <YT time={281} videoId="ui0JUHE12k8" label="Lange blaue Linien = gute Parallax (4:41)" />
- <YT time={295} videoId="ui0JUHE12k8" label="Frame 20-60 als optimaler Bereich (4:55)" />

### Initial Solve
<YT time={308} videoId="ui0JUHE12k8" label="Solve Camera Motion ausführen (5:08)" />

<YT time={314} videoId="ui0JUHE12k8" label="Solve Error: 2.6 Pixel erhalten (5:14)" />

**Qualitätsbewertung:**
- <YT time={318} videoId="ui0JUHE12k8" label="Unter 3.0 = akzeptabel (5:18)" />
- <YT time={324} videoId="ui0JUHE12k8" label="Unter 2.0 = angestrebt (5:24)" />

## 4. Cleaning Up the Solve

<YT time={313} videoId="ui0JUHE12k8" label="Solve-Optimierung (5:13)" />

### Automatische Track-Bereinigung
<YT time={330} videoId="ui0JUHE12k8" label="Clean Tracks für Optimierung (5:30)" />

<YT time={335} videoId="ui0JUHE12k8" label="Cleanup Section verwenden (5:35)" />

**Iterative Bereinigung:**
1. <YT time={340} videoId="ui0JUHE12k8" label="Reprojection Error schrittweise erhöhen (5:40)" />
2. <YT time={350} videoId="ui0JUHE12k8" label="Schlechte Tracks löschen (5:50)" />
3. <YT time={352} videoId="ui0JUHE12k8" label="Camera Motion neu lösen (5:52)" />

### Warum iterative Bereinigung?
<YT time={362} videoId="ui0JUHE12k8" label="Schrittweise vs. Komplett-Bereinigung (6:02)" />

**Probleme bei kompletter Bereinigung:**
- <YT time={366} videoId="ui0JUHE12k8" label="Potenziell gute Marker werden gelöscht (6:06)" />
- <YT time={371} videoId="ui0JUHE12k8" label="Kann zu höheren Solve Errors führen (6:11)" />

### Minimale Marker-Anforderungen
<YT time={377} videoId="ui0JUHE12k8" label="8 Tracks Minimum für Camera Solve (6:17)" />

**Optimal Balance:**
- <YT time={383} videoId="ui0JUHE12k8" label="Mehr Tracks = bessere Stabilität (6:23)" />
- <YT time={389} videoId="ui0JUHE12k8" label="Ziel: 0.2 Pixel Solve Error (6:29)" />

## 5. Setting Up 3D Scene

<YT time={394} videoId="ui0JUHE12k8" label="3D-Szene einrichten (6:34)" />

### Scene Setup Workflow
<YT time={405} videoId="ui0JUHE12k8" label="Window-Layout für bessere Übersicht (6:45)" />

<YT time={407} videoId="ui0JUHE12k8" label="Set Background and Tracking Scene (6:47)" />

**Automatische Setup-Ergebnisse:**
- <YT time={411} videoId="ui0JUHE12k8" label="Objekte und Kamera in Szene (6:51)" />
- <YT time={415} videoId="ui0JUHE12k8" label="Falsche Orientierung korrigieren (6:55)" />

### Floor Orientation
<YT time={423} videoId="ui0JUHE12k8" label="Boden-Ebene definieren (7:03)" />

<YT time={432} videoId="ui0JUHE12k8" label="Orientation Tab verwenden (7:12)" />

**Floor Setup Process:**
1. <YT time={439} videoId="ui0JUHE12k8" label="Drei Bodenpunkte auswählen (7:19)" />
2. <YT time={445} videoId="ui0JUHE12k8" label="Floor Button klicken (7:25)" />
3. <YT time={453} videoId="ui0JUHE12k8" label="Origin und X-Axis definieren (7:33)" />

### Scale Definition - Kritischer Schritt
<YT time={464} videoId="ui0JUHE12k8" label="Scale Definition - wichtigster Schritt (7:44)" />

**Massstab-Bestimmung:**
- <YT time={467} videoId="ui0JUHE12k8" label="Reale Messungen verwenden (7:47)" />
- <YT time={479} videoId="ui0JUHE12k8" label="Schätzung: 8 Fuss Distanz (7:59)" />
- <YT time={486} videoId="ui0JUHE12k8" label="Umrechnung: 8ft = 2.44m (8:06)" />
- <YT time={500} videoId="ui0JUHE12k8" label="Scale: 2.44 setzen (8:20)" />

**Warum Scale wichtig ist:**
- <YT time={505} videoId="ui0JUHE12k8" label="Depth of Field Korrektheit (8:25)" />
- <YT time={509} videoId="ui0JUHE12k8" label="Motion Blur Genauigkeit (8:29)" />

### Layout Verification
<YT time={522} videoId="ui0JUHE12k8" label="Layout Tab für Verifikation (8:42)" />

<YT time={525} videoId="ui0JUHE12k8" label="Camera View überprüfen (8:45)" />

**Object Positioning:**
- <YT time={531} videoId="ui0JUHE12k8" label="Tab + G + Z: Objekt auf Boden (8:51)" />
- <YT time={542} videoId="ui0JUHE12k8" label="Tracking-Qualität beurteilen (9:02)" />

### Floor Orientation Refinement
<YT time={547} videoId="ui0JUHE12k8" label="Schiefe Bodenebene korrigieren (9:07)" />

<YT time={550} videoId="ui0JUHE12k8" label="Motion Tracking Tab für Korrekturen (9:10)" />

**Iterative Verbesserung:**
1. <YT time={558} videoId="ui0JUHE12k8" label="Andere drei Punkte auswählen (9:18)" />
2. <YT time={562} videoId="ui0JUHE12k8" label="Floor erneut setzen (9:22)" />
3. <YT time={566} videoId="ui0JUHE12k8" label="Origin und X-Axis neu definieren (9:26)" />
4. <YT time={575} videoId="ui0JUHE12k8" label="Horizon Line Verifikation (9:35)" />

## 6. Final Checks

<YT time={620} videoId="ui0JUHE12k8" label="Finale Überprüfungen (10:20)" />

### Precision Alignment
<YT time={584} videoId="ui0JUHE12k8" label="Feature-basierte Präzisions-Alignierung (9:44)" />

<YT time={587} videoId="ui0JUHE12k8" label="Camera Background Opacity anpassen (9:47)" />

**Alignment-Prozess:**
- <YT time={593} videoId="ui0JUHE12k8" label="Bodenpunkt als Referenz verwenden (9:53)" />
- <YT time={597} videoId="ui0JUHE12k8" label="Cube-Kante zu Punkt alignieren (9:57)" />
- <YT time={604} videoId="ui0JUHE12k8" label="G + Shift + Z: XY-Bewegung (10:04)" />
- <YT time={615} videoId="ui0JUHE12k8" label="Frame-by-Frame Verifikation (10:15)" />

### Optional Display Features
<YT time={623} videoId="ui0JUHE12k8" label="Tracking Marker Display (10:23)" />

**Visualisierung-Optionen:**
- <YT time={626} videoId="ui0JUHE12k8" label="Motion Tracking Markers einblenden (10:26)" />
- <YT time={632} videoId="ui0JUHE12k8" label="Camera Path anzeigen (10:32)" />

### Scene Cleanup
<YT time={641} videoId="ui0JUHE12k8" label="Automatische Scene-Bereinigung (10:41)" />

**Zu löschende Elemente:**
- <YT time={644} videoId="ui0JUHE12k8" label="Foreground/Background Collections (10:44)" />
- <YT time={649} videoId="ui0JUHE12k8" label="Background View Layer (10:49)" />

### Compositing Node Cleanup
<YT time={651} videoId="ui0JUHE12k8" label="Compositing Tab Optimierung (10:51)" />

<YT time={656} videoId="ui0JUHE12k8" label="Überflüssige Nodes entfernen (10:56)" />

**Node-Vereinfachung:**
- Vier automatische Nodes löschen
- <YT time={658} videoId="ui0JUHE12k8" label="Image direkt zu Alpha Over (10:58)" />
- <YT time={665} videoId="ui0JUHE12k8" label="Vereinfachung für Anfänger (11:05)" />

### Shadow Catcher Setup
<YT time={673} videoId="ui0JUHE12k8" label="Automatischer Shadow Catcher (11:13)" />

<YT time={678} videoId="ui0JUHE12k8" label="Cycles Render Engine für Realismus (11:18)" />

**Shadow Catcher Demonstration:**
- <YT time={688} videoId="ui0JUHE12k8" label="Automatische Shadow Catcher Konfiguration (11:28)" />
- <YT time={691} videoId="ui0JUHE12k8" label="Film → Transparent für Sichtbarkeit (11:31)" />
- <YT time={697} videoId="ui0JUHE12k8" label="Nur Schatten werden gerendert (11:37)" />

### Critical Camera Settings
<YT time={702} videoId="ui0JUHE12k8" label="WICHTIG: Render Undistorted deaktivieren (11:42)" />

**Distortion-Problem:**
- <YT time={705} videoId="ui0JUHE12k8" label="Blender kompensiert automatisch Distortion (11:45)" />
- <YT time={714} videoId="ui0JUHE12k8" label="Camera Settings → Render Undistorted OFF (11:54)" />
- <YT time={721} videoId="ui0JUHE12k8" label="Viewport vs. Render Diskrepanz vermeiden (12:01)" />
- <YT time={729} videoId="ui0JUHE12k8" label="Compositing-Probleme verhindern (12:09)" />

## Wichtige Erkenntnisse

**Workflow-Effizienz:**
- <YT time={735} videoId="ui0JUHE12k8" label="80% aller Shots mit diesem Workflow (12:15)" />
- <YT time={739} videoId="ui0JUHE12k8" label="20% schwierigere Shots für andere Software (12:19)" />

**Professionelle Tipps:**
- Image Sequences über Videos bevorzugen
- Iterative Track-Bereinigung für beste Ergebnisse
- Scale-Definition ist kritisch für realistische Ergebnisse
- Render Undistorted immer deaktivieren
- Shadow Catcher für professionelle Integration

**Qualitätsstandards:**
- Solve Error unter 2.0 Pixel anstreben
- Minimum 8 Tracks, mehr ist besser
- Feature-basierte Präzisions-Alignierung
- Frame-by-Frame Verifikation

