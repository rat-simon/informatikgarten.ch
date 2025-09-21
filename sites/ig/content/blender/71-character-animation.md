---
title: Character Animation
---

# Character Animation

<StickMe>
## Tutorial-Video

<Youtube id="imbIsNAvUpM" />
</StickMe>

## Zusammenfassung

Ein vollständiges Tutorial zum Modellieren, Rigging und Animieren eines vierbeinigen Charakters in Blender - von der ersten Vertex bis zur fertigen Walk-Animation mit Persönlichkeit.

### Überblick
<YT time={0} videoId="imbIsNAvUpM" label="Was wir erstellen werden (0:00)" />

Dieses 15-minütige Tutorial zeigt den kompletten Workflow für einen animierten vierbeinigen Charakter, der in jede Richtung laufen, springen und Persönlichkeit zeigen kann.

### Kapitel-Übersicht
<YT time={21} videoId="imbIsNAvUpM" label="Bein modellieren (0:21)" />
<YT time={99} videoId="imbIsNAvUpM" label="IK Rig Setup (1:39)" />
<YT time={175} videoId="imbIsNAvUpM" label="Körper erstellen (2:55)" />
<YT time={237} videoId="imbIsNAvUpM" label="Motion Path erstellen (3:57)" />
<YT time={291} videoId="imbIsNAvUpM" label="Bein-Bewegung animieren (4:51)" />
<YT time={363} videoId="imbIsNAvUpM" label="Weitere Beine erstellen (6:03)" />
<YT time={427} videoId="imbIsNAvUpM" label="Direction Controller Setup (7:07)" />
<YT time={514} videoId="imbIsNAvUpM" label="Zufällige Bewegung hinzufügen (8:34)" />
<YT time={616} videoId="imbIsNAvUpM" label="Über den Bildschirm laufen (10:16)" />
<YT time={715} videoId="imbIsNAvUpM" label="Das Sahnehäubchen! (11:55)" />

---

## Bein-Modellierung
<YT time={25} videoId="imbIsNAvUpM" label="Blender 2.93, alles löschen und Plane erstellen (0:25)" />

### Basis-Geometrie
<YT time={30} videoId="imbIsNAvUpM" label="Edit Mode (Tab), Merge Vertices at Center (0:30)" />
<YT time={36} videoId="imbIsNAvUpM" label="Einzelner Vertex als Ausgangspunkt (0:36)" />
<YT time={38} videoId="imbIsNAvUpM" label="E + Z für Z-Achsen Extrusion, 4m Höhe (0:38)" />

### Skin Modifier für Dicke
<YT time={46} videoId="imbIsNAvUpM" label="Skin Modifier für Bein-Dicke hinzufügen (0:46)" />
<YT time={55} videoId="imbIsNAvUpM" label="Ctrl+A für Vertex-Radius anpassen (0:55)" />
<YT time={59} videoId="imbIsNAvUpM" label="Spitz oben, breiter unten (verkehrt herum) (0:59)" />

### Gelenke hinzufügen
<YT time={67} videoId="imbIsNAvUpM" label="X-Ray Mode für bessere Sicht (1:07)" />
<YT time={72} videoId="imbIsNAvUpM" label="Beide Vertices selektieren, Subdivide mit 2 Cuts (1:12)" />
<YT time={77} videoId="imbIsNAvUpM" label="G zum Bewegen der Gelenke (1:17)" />

### Armature erstellen
<YT time={85} videoId="imbIsNAvUpM" label="Vertices zu Bones konvertieren (1:25)" />
<YT time={91} videoId="imbIsNAvUpM" label="Object Mode verlassen für Create Armature Button (1:31)" />
<YT time={96} videoId="imbIsNAvUpM" label="Armature Object mit verbundenen Bones (1:36)" />

---

## IK Rig Setup
<YT time={100} videoId="imbIsNAvUpM" label="Pose Mode für Bone-Rotation (1:40)" />

### Inverse Kinematics
<YT time={109} videoId="imbIsNAvUpM" label="Mächtige Tools: Inverse Kinematics (1:49)" />
<YT time={112} videoId="imbIsNAvUpM" label="Pose > Inverse Kinematics > Add IK to Bone (1:52)" />
<YT time={117} videoId="imbIsNAvUpM" label="Letzten Bone selektieren, IK zu New Empty Object (1:57)" />

### IK Target Control
<YT time={123} videoId="imbIsNAvUpM" label="Object Mode: Empty für mächtiges Rig (2:03)" />
<YT time={129} videoId="imbIsNAvUpM" label="Empty bewegen = clevere Bein-Animation (2:09)" />
<YT time={135} videoId="imbIsNAvUpM" label="Empty zu 'IK Target' umbenennen (2:15)" />

### Bewegungsbereich optimieren
<YT time={141} videoId="imbIsNAvUpM" label="Problem: Begrenzte Bewegung nach unten (2:21)" />
<YT time={151} videoId="imbIsNAvUpM" label="Front Orthographic View (Numpad 1) (2:31)" />
<YT time={161} videoId="imbIsNAvUpM" label="45° Bereich für komfortable Zone benötigt (2:41)" />
<YT time={166} videoId="imbIsNAvUpM" label="Ctrl-Rotation um -45° für bessere Zone (2:46)" />

---

## Körper erstellen
<YT time={177} videoId="imbIsNAvUpM" label="Shift+A Cube für Body hinzufügen (2:57)" />
<YT time={181} videoId="imbIsNAvUpM" label="G+Z für Z-Achsen Bewegung (3:01)" />
<YT time={184} videoId="imbIsNAvUpM" label="Cube zu 'Body' umbenennen (3:04)" />

### Parenting-System
<YT time={193} videoId="imbIsNAvUpM" label="Armature und Leg zum Body parenten (3:13)" />
<YT time={200} videoId="imbIsNAvUpM" label="Ctrl+P für Object Parent (3:20)" />
<YT time={204} videoId="imbIsNAvUpM" label="Body bewegen und rotieren = Character-ähnlich (3:24)" />

### Fake Joint hinzufügen
<YT time={215} videoId="imbIsNAvUpM" label="Shift+A Icosphere für Gelenk-Illusion (3:35)" />
<YT time={219} videoId="imbIsNAvUpM" label="Subdivisions auf 4, Smooth Shading (3:39)" />
<YT time={226} videoId="imbIsNAvUpM" label="Z-Achse Positionierung für realistisches Gelenk (3:46)" />
<YT time={231} videoId="imbIsNAvUpM" label="Sphere auch zum Body parenten (3:51)" />

---

## Motion Path erstellen
<YT time={241} videoId="imbIsNAvUpM" label="Kreis-Path für Walk-Animation (4:01)" />

### Bezier Circle Setup
<YT time={247} videoId="imbIsNAvUpM" label="Shift+A > Curve > Circle (4:07)" />
<YT time={250} videoId="imbIsNAvUpM" label="Edit Mode: 90° Rotation auf X-Achse (4:10)" />

### Follow Path Constraint
<YT time={256} videoId="imbIsNAvUpM" label="IK Target: Object Constraint Properties (4:16)" />
<YT time={260} videoId="imbIsNAvUpM" label="Add Follow Path, Target = Bezier Circle (4:20)" />
<YT time={271} videoId="imbIsNAvUpM" label="Alt+G für Clear Location (seltsame Position) (4:31)" />
<YT time={280} videoId="imbIsNAvUpM" label="Follow Path Offset für Walking-Bewegung (4:40)" />

---

## Bein-Bewegung animieren
<YT time={292} videoId="imbIsNAvUpM" label="Frame 10: Offset Keyframe einfügen (4:52)" />
<YT time={296} videoId="imbIsNAvUpM" label="Frame 30 (20 Frames später) (4:56)" />
<YT time={302} videoId="imbIsNAvUpM" label="Offset 100 = exakt ein Zyklus (5:02)" />

### Loop-Animation
<YT time={309} videoId="imbIsNAvUpM" label="Timeline: Shift+E für Linear Extrapolation (5:09)" />
<YT time={317} videoId="imbIsNAvUpM" label="Endlose Animation nach Keyframe-Ende (5:17)" />

### Path-Anpassung für Bodenkontakt
<YT time={324} videoId="imbIsNAvUpM" label="Circle berührt Boden nicht richtig (5:24)" />
<YT time={327} videoId="imbIsNAvUpM" label="Edit Mode: Zwei Control Points selektieren (5:27)" />
<YT time={332} videoId="imbIsNAvUpM" label="Set Handle Type Vector (5:32)" />
<YT time={336} videoId="imbIsNAvUpM" label="S zum Skalieren der Control Points (5:36)" />
<YT time={340} videoId="imbIsNAvUpM" label="Unteren Control Point Z-Achse verschieben (5:40)" />
<YT time={343} videoId="imbIsNAvUpM" label="3D Cursor Pivot, Z-Achse Scale = 0 (5:43)" />
<YT time={355} videoId="imbIsNAvUpM" label="Realistisches Walking mit Boden-Kontakt (5:55)" />

---

## Weitere Beine erstellen
<YT time={364} videoId="imbIsNAvUpM" label="Alles ausser Body selektieren (6:04)" />
<YT time={369} videoId="imbIsNAvUpM" label="Top View (Z-Button oder Numpad 7) (6:09)" />

### Duplicate + Rotate Workflow
<YT time={377} videoId="imbIsNAvUpM" label="Shift+D > R sofort für Duplicate+Rotate (6:17)" />
<YT time={385} videoId="imbIsNAvUpM" label="Ctrl für exakt 90° Rotation (6:25)" />
<YT time={392} videoId="imbIsNAvUpM" label="Shift+R zum Wiederholen der Aktion (6:32)" />
<YT time={398} videoId="imbIsNAvUpM" label="Scheinbares Chaos, aber korrekt (6:38)" />

### Position Reset
<YT time={405} videoId="imbIsNAvUpM" label="IK Targets: Alt+G für Clear Location (6:45)" />
<YT time={415} videoId="imbIsNAvUpM" label="Bezier Circles: Alt+R für Clear Rotation (6:55)" />
<YT time={422} videoId="imbIsNAvUpM" label="Alle Beine bewegen synchron (7:02)" />

### Walk-Timing korrigieren
<YT time={431} videoId="imbIsNAvUpM" label="Erstes und letztes Bein IK Target wählen (7:11)" />
<YT time={440} videoId="imbIsNAvUpM" label="20 Frames = 10 Frames Halbweg-Punkt (7:20)" />
<YT time={445} videoId="imbIsNAvUpM" label="A für alle Keyframes, G für 10 Frames verschieben (7:25)" />
<YT time={451} videoId="imbIsNAvUpM" label="Realistisches Walking-Pattern (7:31)" />

---

## Direction Controller Setup
<YT time={455} videoId="imbIsNAvUpM" label="Vier Paths kontrollieren Character-Richtung (7:35)" />
<YT time={461} videoId="imbIsNAvUpM" label="Individual Origins: Z-Achse Rotation (7:41)" />

### Master Controller erstellen
<YT time={475} videoId="imbIsNAvUpM" label="Rotation reset, neuer Direction Controller (7:55)" />
<YT time={478} videoId="imbIsNAvUpM" label="Shift+A > Empty > Sphere (7:58)" />
<YT time={485} videoId="imbIsNAvUpM" label="Empty Display Size anpassen (8:05)" />

### Copy Rotation Constraints
<YT time={488} videoId="imbIsNAvUpM" label="Erster Path: Add Copy Rotation Constraint (8:08)" />
<YT time={495} videoId="imbIsNAvUpM" label="Target = Direction Controller (8:15)" />
<YT time={501} videoId="imbIsNAvUpM" label="Drei weitere Paths: Copy Constraints to Selected (8:21)" />
<YT time={509} videoId="imbIsNAvUpM" label="Direction Controller = Master-Richtungssteuerung (8:29)" />

---

## Zufällige Bewegung hinzufügen
<YT time={520} videoId="imbIsNAvUpM" label="Vertical Split: Graph Editor (8:40)" />

### Keyframe Setup
<YT time={528} videoId="imbIsNAvUpM" label="Body selektieren, I für Location+Rotation Keyframes (8:48)" />
<YT time={535} videoId="imbIsNAvUpM" label="X Location: N für Modifier-Panel (8:55)" />

### Noise Modifier
<YT time={543} videoId="imbIsNAvUpM" label="F-Curve Modifiers: Noise hinzufügen (9:03)" />
<YT time={549} videoId="imbIsNAvUpM" label="Body beginnt sofort zu shaken (9:09)" />
<YT time={552} videoId="imbIsNAvUpM" label="Scale 15 für stärkere Bewegung (9:12)" />
<YT time={556} videoId="imbIsNAvUpM" label="Strength 1, Phase für Variation (9:16)" />

### Multi-Achsen Noise
<YT time={562} videoId="imbIsNAvUpM" label="Copy F-Modifiers zu Y Location (9:22)" />
<YT time={571} videoId="imbIsNAvUpM" label="Diagonale Bewegung durch gleiche Phase (9:31)" />
<YT time={575} videoId="imbIsNAvUpM" label="Phase anpassen für echte Zufallsbewegung (9:35)" />
<YT time={584} targetTime={586} videoId="imbIsNAvUpM" label="Z Location: niedrigere Strength (9:44)" />

### Rotation Noise
<YT time={596} videoId="imbIsNAvUpM" label="X Rotation: Strength 0.4 (9:56)" />
<YT time={611} videoId="imbIsNAvUpM" label="Lebendige Kreatur durch Rotation+Location Noise (10:11)" />

---

## Über den Bildschirm laufen
<YT time={622} videoId="imbIsNAvUpM" label="Shift+A > Empty > Cube für Character Controller (10:22)" />
<YT time={627} videoId="imbIsNAvUpM" label="Display Size vergrössern (10:27)" />

### Character Controller Parenting
<YT time={633} videoId="imbIsNAvUpM" label="Shift: Direction Controller, Paths, Body selektieren (10:33)" />
<YT time={641} videoId="imbIsNAvUpM" label="Character Controller: Ctrl+P zum Parenten (10:41)" />

### Screen-Animation
<YT time={656} videoId="imbIsNAvUpM" label="X-Achse Bewegung, I für Location Keyframe (10:56)" />
<YT time={664} videoId="imbIsNAvUpM" label="Paar Frames später: G+X für weitere Bewegung (11:04)" />
<YT time={675} videoId="imbIsNAvUpM" label="Timeline: Shift+E Linear Extrapolation (11:15)" />

### Sliding-Problem beheben
<YT time={681} videoId="imbIsNAvUpM" label="Zu schnell = Sliding-Effekt (11:21)" />
<YT time={688} videoId="imbIsNAvUpM" label="Keyframe verschieben für perfektes Timing (11:28)" />
<YT time={693} videoId="imbIsNAvUpM" label="Erster Versuch erfolgreich! (11:33)" />

---

## Das Sahnehäubchen!
<YT time={720} videoId="imbIsNAvUpM" label="Ein finaler, absolut verrückter Trick (12:00)" />

### Built-in Function Modifier
<YT time={730} videoId="imbIsNAvUpM" label="Graph Editor: Z Location selektieren (12:10)" />
<YT time={734} videoId="imbIsNAvUpM" label="F-Curve Modifier: Built-in Function (12:14)" />
<YT time={739} videoId="imbIsNAvUpM" label="Sine Wave = absolut verrückte Bewegung (12:19)" />
<YT time={744} videoId="imbIsNAvUpM" label="Additive Mode für Kombination mit Noise (12:24)" />

### Amplitude und Frequency
<YT time={753} videoId="imbIsNAvUpM" label="Amplitude reduzieren (12:33)" />
<YT time={759} videoId="imbIsNAvUpM" label="Phase Multiplier (Frequency) auf 0.5 (12:39)" />
<YT time={768} videoId="imbIsNAvUpM" label="Unglaublich viel Charakter-Persönlichkeit (12:48)" />
<YT time={774} videoId="imbIsNAvUpM" label="Nicht synchron mit Beinen = natürliche Emotion (12:54)" />

---

## Rig-Testing und Verwendung
<YT time={785} videoId="imbIsNAvUpM" label="Mächtiges Rig: Direction Controller Z-Rotation (13:05)" />
<YT time={793} videoId="imbIsNAvUpM" label="Character Controller entgegengesetzte Rotation (13:13)" />
<YT time={799} videoId="imbIsNAvUpM" label="Seitlich laufender Character (13:19)" />
<YT time={810} videoId="imbIsNAvUpM" label="Sprung-Animation möglich (13:30)" />

### Projekt-Wiederverwendung
<YT time={818} videoId="imbIsNAvUpM" label="Collection 'Creature' für einfache Nutzung (13:38)" />
<YT time={824} videoId="imbIsNAvUpM" label="Blender 3.0 Cycles X Kompatibilität (13:44)" />
<YT time={832} videoId="imbIsNAvUpM" label="File > Append > Collection für andere Projekte (13:52)" />

---

## Zusammenfassung

Dieses Tutorial demonstriert einen kompletten Character-Animation-Workflow:

**Modellierung:**
- Skin Modifier für organische Formen
- Vertex-zu-Bone Konvertierung
- Fake Joints für Realismus

**Rigging:**
- Inverse Kinematics für intuitive Kontrolle
- Follow Path Constraints für Bewegungszyklen
- Hierarchisches Parenting-System

**Animation:**
- Motion Paths für natürliche Bewegung
- F-Curve Modifiers für prozedurales Verhalten
- Noise und Built-in Functions für Persönlichkeit

**Controller-System:**
- Direction Controller für Richtungssteuerung
- Character Controller für Screen-Movement
- Wiederverwendbare Collection-Struktur


