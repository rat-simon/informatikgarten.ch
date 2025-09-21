---
title: Objekt-Tracking
---

# Objekt-Tracking in Blender

*Achtung: Bei längeren Sequenzen wird oft empfohlen, alle Bilder Ihres Videos zuerst separat als eine Bildsequenz zu speichern. Wie Sie das tun können, erklärt [dieses Kurz-Tutorial](31-imagesequence).*

<StickMe>
## Tutorial-Video

<Youtube id="grclmlKzwY4" />
</StickMe>

## Zusammenfassung

Ein kompaktes Tutorial zum Object Tracking in Blender - die Technik zum Verfolgen sich bewegender Objekte in Videos. Lernen Sie, wie Sie Objekte mit Markern tracken, 3D-Elemente an bewegte Objekte anhängen und realistische Integrationen erstellen.

## 1. Grundlagen und Vorbereitung

<YT time={0} videoId="grclmlKzwY4" label="Motion of Objects can be tracked (0:00)" />

### Object Tracking vs. Camera Tracking
<YT time={2} videoId="grclmlKzwY4" label="Object tracking technique (0:02)" />

**Unterschied zu Camera Tracking:**
- <YT time={5} videoId="grclmlKzwY4" label="Same principles as camera tracking (0:05)" />
- <YT time={8} videoId="grclmlKzwY4" label="Explained in another video (0:08)" />
- Object Tracking: Objekt bewegt sich, Kamera steht still
- Camera Tracking: Kamera bewegt sich, Objekte sind statisch

## 2. Filming Guidelines

<YT time={17} videoId="grclmlKzwY4" label="Guidelines for filming (0:17)" />

### Kamera Setup
<YT time={21} videoId="grclmlKzwY4" label="Place camera on tripod (0:21)" />

**Wichtige Kamera-Einstellungen:**
- <YT time={24} videoId="grclmlKzwY4" label="Camera does not have to move (0:24)" />
- <YT time={26} videoId="grclmlKzwY4" label="DSLR or mirrorless camera (0:26)" />
- <YT time={29} videoId="grclmlKzwY4" label="Note focal length you use (0:29)" />

### Objekt-Präparation
<YT time={32} videoId="grclmlKzwY4" label="Select simple object (0:32)" />

**Marker-Platzierung:**
- <YT time={35} videoId="grclmlKzwY4" label="Mark object with markers (0:35)" />
- <YT time={37} videoId="grclmlKzwY4" label="At least 8 markers needed (0:37)" />
- <YT time={39} videoId="grclmlKzwY4" label="Software can easily track markers (0:39)" />
- <YT time={44} videoId="grclmlKzwY4" label="Tape with dots as markers (0:44)" />
- <YT time={47} videoId="grclmlKzwY4" label="Applied to entire object surface (0:47)" />

### Bewegungs-Guidelines
<YT time={51} videoId="grclmlKzwY4" label="Slowly move the object (0:51)" />

**Optimale Bewegung:**
- <YT time={54} videoId="grclmlKzwY4" label="Markers visible for majority of movement (0:54)" />
- Langsame, gleichmäßige Bewegungen
- Marker sollten nicht verdeckt werden

## 3. Blender Setup

<YT time={59} videoId="grclmlKzwY4" label="Open Blender and set frame rate (0:59)" />

### Initial Configuration
<YT time={61} videoId="grclmlKzwY4" label="Frame rate same as video (1:01)" />

<YT time={63} videoId="grclmlKzwY4" label="Navigate to Motion Tracking workspace (1:03)" />

**Workspace Setup:**
- <YT time={66} videoId="grclmlKzwY4" label="Watch camera tracking fundamentals video (1:06)" />
- Motion Tracking Workspace verwenden
- <YT time={71} videoId="grclmlKzwY4" label="Import the video (1:11)" />

### Video Import und Range
<YT time={74} videoId="grclmlKzwY4" label="Set small portion of video range (1:14)" />

## 4. Object Tracking Setup

### Solving Method Configuration
<YT time={84} videoId="grclmlKzwY4" label="Solving method set to camera by default (1:24)" />

**Method Selection:**
- <YT time={87} videoId="grclmlKzwY4" label="Camera method for camera movement (1:27)" />
- <YT time={91} videoId="grclmlKzwY4" label="We want to track object (1:31)" />
- <YT time={93} videoId="grclmlKzwY4" label="Click plus icon in object section (1:33)" />
- <YT time={97} videoId="grclmlKzwY4" label="Object solving method (1:37)" />

### Kamera Properties
<YT time={100} videoId="grclmlKzwY4" label="Set camera sensor width and focal length (1:40)" />

**Camera Settings:**
- <YT time={105} videoId="grclmlKzwY4" label="Don't be worried (1:45)" />
- <YT time={107} videoId="grclmlKzwY4" label="Can be left at default values (1:47)" />
- <YT time={111} videoId="grclmlKzwY4" label="Makes it easier for Blender to solve (1:51)" />

## 5. Marker Tracking Process

### Marker Placement
<YT time={115} videoId="grclmlKzwY4" label="Add markers where real markers were (1:55)" />

**Marker Setup:**
- <YT time={119} videoId="grclmlKzwY4" label="If blurry, select blurry footage option (1:59)" />
- <YT time={126} videoId="grclmlKzwY4" label="Move cross to center of marker (2:06)" />
- <YT time={131} videoId="grclmlKzwY4" label="Select track markers button (2:11)" />

### Troubleshooting Tracking
<YT time={140} videoId="grclmlKzwY4" label="Delete marker if too difficult to track (2:20)" />

**Problem Solving:**
- <YT time={156} videoId="grclmlKzwY4" label="Reposition the tracker (2:36)" />
- <YT time={159} videoId="grclmlKzwY4" label="Track again (2:39)" />
- <YT time={164} videoId="grclmlKzwY4" label="If tracking fails (2:44)" />
- <YT time={166} videoId="grclmlKzwY4" label="Return to last tracked frame (2:46)" />
- <YT time={171} videoId="grclmlKzwY4" label="Follow marker once more (2:51)" />

### Manual vs. Automatic Tracking
<YT time={174} videoId="grclmlKzwY4" label="Manual tracking rarely yields good results (2:54)" />

**Best Practice:**
- <YT time={179} videoId="grclmlKzwY4" label="Rely on high quality automatically tracked markers (2:59)" />
- <YT time={198} videoId="grclmlKzwY4" label="Expand search area (3:18)" />
- <YT time={201} videoId="grclmlKzwY4" label="Allow Blender to search larger area (3:21)" />

### Marker Quality Requirements
<YT time={208} videoId="grclmlKzwY4" label="Critical to have good markers (3:28)" />

**Quality Criteria:**
- <YT time={212} videoId="grclmlKzwY4" label="Must be easily seen (3:32)" />
- <YT time={214} videoId="grclmlKzwY4" label="High contrast (3:34)" />
- <YT time={215} videoId="grclmlKzwY4" label="Move slowly (3:35)" />
- <YT time={217} videoId="grclmlKzwY4" label="Repeat for at least 8 markers (3:37)" />

## 6. Solving Process

### Object Motion Solve
<YT time={223} videoId="grclmlKzwY4" label="Click solve object motion button (3:43)" />

**Solve Configuration:**
- <YT time={227} videoId="grclmlKzwY4" label="Check keyframes A and B placement (3:47)" />
- <YT time={238} videoId="grclmlKzwY4" label="If solve error less than 1 (3:58)" />
- <YT time={241} videoId="grclmlKzwY4" label="Solution is correct (4:01)" />

### Background Setup
<YT time={244} videoId="grclmlKzwY4" label="Set as background (4:04)" />

<YT time={247} videoId="grclmlKzwY4" label="Set video as camera background (4:07)" />

## 7. Camera Configuration

### Camera Constraint
<YT time={251} videoId="grclmlKzwY4" label="Select the camera (4:11)" />

**Constraint Setup:**
- <YT time={255} videoId="grclmlKzwY4" label="Add Camera Solver constraint (4:15)" />
- <YT time={258} videoId="grclmlKzwY4" label="See newly created markers (4:18)" />

### Camera View Verification
<YT time={264} videoId="grclmlKzwY4" label="Switch to camera view (4:24)" />

**View Check:**
- <YT time={267} videoId="grclmlKzwY4" label="Press 0 on numeric pad (4:27)" />
- <YT time={269} videoId="grclmlKzwY4" label="Markers perfectly aligned with object (4:29)" />
- <YT time={274} videoId="grclmlKzwY4" label="Change background manually if needed (4:34)" />

### Camera Alignment
<YT time={286} videoId="grclmlKzwY4" label="Camera can be rotated (4:46)" />

<YT time={288} videoId="grclmlKzwY4" label="Align with world axis (4:48)" />

## 8. Object Integration

### 3D Object Setup
<YT time={297} videoId="grclmlKzwY4" label="Add object that follows markers (4:57)" />

**Object Creation:**
- <YT time={302} videoId="grclmlKzwY4" label="Add simple cube (5:02)" />
- <YT time={306} videoId="grclmlKzwY4" label="Apply Object Solver constraint (5:06)" />
- <YT time={310} videoId="grclmlKzwY4" label="Select object and camera from motion tracking (5:10)" />

### Object Positioning
<YT time={315} videoId="grclmlKzwY4" label="Matter of modeling the object (5:15)" />

**3D Positioning:**
- <YT time={321} videoId="grclmlKzwY4" label="Position object using markers as 3D guide (5:21)" />
- <YT time={325} videoId="grclmlKzwY4" label="Ensure correct position in 3D space (5:25)" />

### Animation Example
<YT time={338} videoId="grclmlKzwY4" label="Simple animation example (5:38)" />

<YT time={348} videoId="grclmlKzwY4" label="How to create animation in another video (5:48)" />

## Wichtige Tipps

**Für erfolgreiches Object Tracking:**
- Stativ für stabile Kamera verwenden
- Mindestens 8 gut sichtbare Marker am Objekt
- Hoher Kontrast der Marker zum Objekt
- Langsame, gleichmäßige Objektbewegung
- Marker über gesamte Objektoberfläche verteilen

**Häufige Probleme:**
- Tracking-Verlust → Tracker repositionieren und erneut tracken
- Unzureichende Marker → Mehr kontrastierte Marker hinzufügen
- Hoher Solve Error → Marker-Qualität verbessern oder mehr Marker verwenden

**Workflow-Übersicht:**
1. Video mit markiertem Objekt aufnehmen
2. Blender Motion Tracking Workspace öffnen
3. Object Solving Method aktivieren
4. Marker platzieren und tracken
5. Object Motion lösen
6. Camera Solver Constraint hinzufügen
7. 3D-Objekt mit Object Solver Constraint erstellen
8. Objekt in 3D-Raum positionieren