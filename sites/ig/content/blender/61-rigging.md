---
title: Rigging
---

# Roboter-Arme erstellen

<StickMe>
## Tutorial-Video

<Youtube id="-2HCxy4Kh4E" />
</StickMe>

## Zusammenfassung

Ein komplettes Tutorial zum Modellieren und Rigging von vier robotischen Armen, die an einen animierten Charakter angebracht werden - perfekt für Rigging-Einsteiger.

### Überblick
<YT time={0} videoId="-2HCxy4Kh4E" label="Modellierung und Rigging von vier Roboter-Armen (0:00)" />

Dieses 20-minütige Tutorial zeigt den kompletten Workflow für robotische Arme mit funktionalen Greifern und Motion Capture Integration, auch ohne Rigging-Vorerfahrung.

### Kapitel-Übersicht
<YT time={18} videoId="-2HCxy4Kh4E" label="Gelenk-Segmente modellieren (0:18)" />
<YT time={251} videoId="-2HCxy4Kh4E" label="Arm-Form erstellen (4:11)" />
<YT time={309} videoId="-2HCxy4Kh4E" label="Arm rigging (5:09)" />
<YT time={441} videoId="-2HCxy4Kh4E" label="Inverse Kinematic Setup (7:21)" />
<YT time={558} videoId="-2HCxy4Kh4E" label="Greifer modellieren und rigging (9:18)" />
<YT time={754} videoId="-2HCxy4Kh4E" label="Roboter-Arm Assembly (12:34)" />
<YT time={797} videoId="-2HCxy4Kh4E" label="Motion Capture importieren (13:17)" />
<YT time={853} videoId="-2HCxy4Kh4E" label="Arm am Menschen befestigen (14:13)" />
<YT time={979} videoId="-2HCxy4Kh4E" label="Arm duplizieren (16:19)" />
<YT time={1082} videoId="-2HCxy4Kh4E" label="Limitierungen des Setups (18:02)" />

---

## Gelenk-Segmente modellieren
<YT time={20} videoId="-2HCxy4Kh4E" label="Blender 3.0, alles löschen und Circle erstellen (0:20)" />

### Triangle Base
<YT time={31} videoId="-2HCxy4Kh4E" label="Bottom-left Menu: Vertices auf 3 reduzieren (0:31)" />
<YT time={37} videoId="-2HCxy4Kh4E" label="Triangle auf Y-Achse duplizieren (0:37)" />
<YT time={42} videoId="-2HCxy4Kh4E" label="Duplikat zu 'Claw Duplicator' umbenennen (0:42)" />
<YT time={48} videoId="-2HCxy4Kh4E" label="Original zu 'Robot Arm.000' umbenennen (0:48)" />

### Segment-Form erstellen
<YT time={63} videoId="-2HCxy4Kh4E" label="Edit Mode (Tab), Right-click Subdivide (1:03)" />
<YT time={70} videoId="-2HCxy4Kh4E" label="Number of Cuts: 2 für mehr Geometrie (1:10)" />
<YT time={76} videoId="-2HCxy4Kh4E" label="Top View (Z), Edge-Pieces mit Shift selektieren (1:16)" />
<YT time={82} videoId="-2HCxy4Kh4E" label="R für Rotation, F für Face-Fill (1:22)" />

### Subdivision und Glättung
<YT time={96} videoId="-2HCxy4Kh4E" label="Object Mode, Subdivision Surface (Ctrl+2) (1:36)" />
<YT time={106} videoId="-2HCxy4Kh4E" label="Right-click Convert to Mesh für Apply (1:46)" />

### 1-Meter-Segment erstellen
<YT time={117} videoId="-2HCxy4Kh4E" label="Edit Mode: A für alles selektieren (1:57)" />
<YT time={119} videoId="-2HCxy4Kh4E" label="E für Z-Achse Extrusion, Ctrl für 1 Meter (1:59)" />
<YT time={140} videoId="-2HCxy4Kh4E" label="Präzise 1-Meter-Höhe wichtig für 40 Duplikate (2:20)" />

### Segment-Details hinzufügen
<YT time={150} videoId="-2HCxy4Kh4E" label="Ctrl+R für Loop Cut, 2x Scroll für 3 Cuts (2:30)" />
<YT time={158} videoId="-2HCxy4Kh4E" label="Ctrl+I Select Inverted, X Delete Vertices (2:38)" />
<YT time={168} videoId="-2HCxy4Kh4E" label="0.5 Meter hohes Shape für Joint-Design (2:48)" />

### Gelenk-Form finalisieren
<YT time={179} videoId="-2HCxy4Kh4E" label="Alt für Loop Select (Top+Bottom) (2:59)" />
<YT time={184} videoId="-2HCxy4Kh4E" label="E, S, Shift+Z für inward Extrusion (3:04)" />
<YT time={196} videoId="-2HCxy4Kh4E" label="Front View: E, S, Z für height scaling (3:16)" />
<YT time={203} videoId="-2HCxy4Kh4E" label="Ctrl für Scale x2 = exakt 1 Meter (3:23)" />

### Detail-Verfeinerung
<YT time={225} videoId="-2HCxy4Kh4E" label="Alt Loop Select, Ctrl+B für Bevel (3:45)" />
<YT time={232} videoId="-2HCxy4Kh4E" label="E Extrude, Scale Up, Shift+Z (3:52)" />
<YT time={241} videoId="-2HCxy4Kh4E" label="X-Ray Mode für Box Select Details (4:01)" />

---

## Arm-Form erstellen
<YT time={253} videoId="-2HCxy4Kh4E" label="Front View für 40-Meter-Grid-Pattern (4:13)" />

### 40x Duplication
<YT time={269} videoId="-2HCxy4Kh4E" label="10-20-30-40 Meter Grid-Lines (4:29)" />
<YT time={272} videoId="-2HCxy4Kh4E" label="Shift+D, Ctrl für Grid-Snap Duplication (4:32)" />
<YT time={287} videoId="-2HCxy4Kh4E" label="Shift+R zum Wiederholen der Aktion (4:47)" />
<YT time={304} videoId="-2HCxy4Kh4E" label="40 Segmente für kompletten Roboter-Arm (5:04)" />

---

## Arm rigging
<YT time={317} videoId="-2HCxy4Kh4E" label="Shift+A Armature hinzufügen (5:17)" />

### Bone Visibility Setup
<YT time={324} videoId="-2HCxy4Kh4E" label="Unsichtbarer Bone zwischen Segmenten (5:24)" />
<YT time={330} videoId="-2HCxy4Kh4E" label="Object Data Properties > Viewport Display (5:30)" />
<YT time={337} videoId="-2HCxy4Kh4E" label="In Front für bessere Bone-Sichtbarkeit (5:37)" />

### Bone-Erstellung
<YT time={346} videoId="-2HCxy4Kh4E" label="Edit Mode: Top Point selektiert (5:46)" />
<YT time={353} videoId="-2HCxy4Kh4E" label="Shift+C für gesamten Arm View (5:53)" />
<YT time={357} videoId="-2HCxy4Kh4E" label="G, Ctrl für 39 Meter = 40 Meter total (5:57)" />
<YT time={370} videoId="-2HCxy4Kh4E" label="Grosse Zahlen für einfacheres Grid-Working (6:10)" />

### 40 Bones erstellen
<YT time={385} videoId="-2HCxy4Kh4E" label="Ein Bone pro Segment benötigt (6:25)" />
<YT time={390} videoId="-2HCxy4Kh4E" label="Right-click Subdivide (6:30)" />
<YT time={394} videoId="-2HCxy4Kh4E" label="1 Cut = 2 Bones, 2 Cuts = 3 Bones (6:34)" />
<YT time={399} videoId="-2HCxy4Kh4E" label="39 Cuts für 40 Bones (6:39)" />

### Parenting Setup
<YT time={407} videoId="-2HCxy4Kh4E" label="Object Mode: A für alle Segmente (6:47)" />
<YT time={414} videoId="-2HCxy4Kh4E" label="Armature highlighted, Ctrl+P Parent (6:54)" />
<YT time={419} videoId="-2HCxy4Kh4E" label="With Automatic Weights für Deformation (6:59)" />

### Pose Mode Testing
<YT time={427} videoId="-2HCxy4Kh4E" label="Pose Mode für Bone-Rotation (7:07)" />
<YT time={431} videoId="-2HCxy4Kh4E" label="Jeder Bone rotiert entsprechende Segmente (7:11)" />
<YT time={438} videoId="-2HCxy4Kh4E" label="Langsame Animation-Methode (7:18)" />

---

## Inverse Kinematic Setup
<YT time={443} videoId="-2HCxy4Kh4E" label="IK-Konzept: Blender berechnet Armature automatisch (7:23)" />

### IK Constraint hinzufügen
<YT time={460} videoId="-2HCxy4Kh4E" label="Alle Bones selektieren, Alt+R Clear Rotation (7:40)" />
<YT time={466} videoId="-2HCxy4Kh4E" label="Top Bone: Pose > Inverse Kinematics (7:46)" />
<YT time={470} videoId="-2HCxy4Kh4E" label="Add IK to Bone > To New Empty Object (7:50)" />
<YT time={476} videoId="-2HCxy4Kh4E" label="Blender erkennt Connected Bones automatisch (7:56)" />

### IK Target Control
<YT time={483} videoId="-2HCxy4Kh4E" label="Object Mode: Empty Object bewegen (8:03)" />
<YT time={490} videoId="-2HCxy4Kh4E" label="Blender berechnet Arm-Rotation automatisch (8:10)" />

### Rotation Problem lösen
<YT time={496} videoId="-2HCxy4Kh4E" label="Problem: Empty Rotation funktioniert nicht (8:16)" />
<YT time={502} videoId="-2HCxy4Kh4E" label="Bone Constraint Properties (8:22)" />
<YT time={508} videoId="-2HCxy4Kh4E" label="Rotation Enable für IK Constraint (8:28)" />
<YT time={513} videoId="-2HCxy4Kh4E" label="Empty zu 'IK Target' umbenennen (8:33)" />

### Vollständige IK Control
<YT time={517} videoId="-2HCxy4Kh4E" label="G für Movement, R für Rotation, RR für Doppel-Rotation (8:37)" />
<YT time={531} videoId="-2HCxy4Kh4E" label="Armature Base auch bewegbar (8:51)" />
<YT time={540} videoId="-2HCxy4Kh4E" label="Zwei Kontrollpunkte für komplette Arm-Kontrolle (9:00)" />

---

## Greifer modellieren und rigging
<YT time={559} videoId="-2HCxy4Kh4E" label="Claw am einen Ende, Human am anderen (9:19)" />

### Claw Base Setup
<YT time={563} videoId="-2HCxy4Kh4E" label="H für Hide All, Claw Duplicator Eye Icon (9:23)" />
<YT time={573} videoId="-2HCxy4Kh4E" label="Edit Mode: X-Rotation -90°, F Fill (9:33)" />
<YT time={582} videoId="-2HCxy4Kh4E" label="Scale Down, E Extrude für Claw Base (9:42)" />

### Claw Finger erstellen
<YT time={597} videoId="-2HCxy4Kh4E" label="Plane, Edit Mode, Merge Vertices at Center (9:57)" />
<YT time={607} videoId="-2HCxy4Kh4E" label="Infinitely Small Point, E Y-Achse Extrusion (10:07)" />
<YT time={614} videoId="-2HCxy4Kh4E" label="Ctrl für 2 Meter, dünne Linie (10:14)" />

### Skin Modifier für Thickness
<YT time={622} videoId="-2HCxy4Kh4E" label="Modifier Properties: Add Skin Modifier (10:22)" />
<YT time={631} videoId="-2HCxy4Kh4E" label="N Panel: Vertex Data für Radius-Kontrolle (10:31)" />
<YT time={641} videoId="-2HCxy4Kh4E" label="Y Radius anpassen für Finger-Form (10:41)" />

### Claw Joint hinzufügen
<YT time={654} videoId="-2HCxy4Kh4E" label="Alt+Z X-Ray, A Select Both Vertices (10:54)" />
<YT time={663} videoId="-2HCxy4Kh4E" label="Right-click Subdivide für Middle Point (11:03)" />
<YT time={672} videoId="-2HCxy4Kh4E" label="Create Armature Button (Object Mode erforderlich) (11:12)" />

### Claw Rigging
<YT time={679} videoId="-2HCxy4Kh4E" label="Automatisches Claw Rig durch Create Armature (11:19)" />
<YT time={683} videoId="-2HCxy4Kh4E" label="Pose Mode: R+X für X-Achse Rotation (11:23)" />

### Array Modifier für Finger
<YT time={704} videoId="-2HCxy4Kh4E" label="Plane zu 'Claw' umbenennen (11:44)" />
<YT time={711} videoId="-2HCxy4Kh4E" label="Array Modifier für 3 Finger (11:51)" />
<YT time={716} videoId="-2HCxy4Kh4E" label="Relative Offset disable, Object Offset enable (11:56)" />
<YT time={723} videoId="-2HCxy4Kh4E" label="Eyedropper: Claw Duplicator auswählen (12:03)" />

### Finger-Rotation Sync
<YT time={728} videoId="-2HCxy4Kh4E" label="Claw Duplicator Y-Rotation, Ctrl für 120° (12:08)" />
<YT time={736} videoId="-2HCxy4Kh4E" label="Zwei Finger kopieren Main Claw Rotation (12:16)" />
<YT time={746} videoId="-2HCxy4Kh4E" label="Claw Armature Pose Mode für Animation (12:26)" />

---

## Roboter-Arm Assembly
<YT time={756} videoId="-2HCxy4Kh4E" label="Alt+H Reveal Hidden Items (12:36)" />

### Scaling und Positioning
<YT time={760} videoId="-2HCxy4Kh4E" label="Claw S Scale Up, Z-Achse Movement (12:40)" />
<YT time={766} videoId="-2HCxy4Kh4E" label="Alignment mit Roboter-Arm (12:46)" />

### Claw zu IK Target verknüpfen
<YT time={771} videoId="-2HCxy4Kh4E" label="Claw + IK Target, Ctrl+P Parent to Object (12:51)" />
<YT time={782} videoId="-2HCxy4Kh4E" label="Vollständig geriggter Roboter-Arm mit Claw (13:02)" />
<YT time={789} videoId="-2HCxy4Kh4E" label="R+X+X für Local Axis Claw-Rotation (13:09)" />

---

## Motion Capture importieren
<YT time={802} videoId="-2HCxy4Kh4E" label="Mixamo Website für Motion Capture (13:22)" />

### Mixamo Character Setup
<YT time={805} videoId="-2HCxy4Kh4E" label="YBot Character Model (13:25)" />
<YT time={810} videoId="-2HCxy4Kh4E" label="Search Idle für Animation (13:30)" />
<YT time={819} videoId="-2HCxy4Kh4E" label="Breathing Idle: Subtle Back-and-Forth (13:39)" />
<YT time={828} videoId="-2HCxy4Kh4E" label="Download FBX File (13:48)" />

### FBX Import
<YT time={836} videoId="-2HCxy4Kh4E" label="File > Import > FBX (13:56)" />
<YT time={848} videoId="-2HCxy4Kh4E" label="Animierter Mocap Character in Scene (14:08)" />

---

## Arm am Menschen befestigen
<YT time={854} videoId="-2HCxy4Kh4E" label="Arm skalieren und am Rücken befestigen (14:14)" />

### Scaling und Naming
<YT time={859} videoId="-2HCxy4Kh4E" label="S Scale Down für passende Grösse (14:19)" />
<YT time={873} videoId="-2HCxy4Kh4E" label="Armature zu 'Human' umbenennen (14:33)" />
<YT time={877} videoId="-2HCxy4Kh4E" label="Robot Armature zu 'Robot' umbenennen (14:37)" />
<YT time={881} videoId="-2HCxy4Kh4E" label="Human 180° Z-Rotation (14:41)" />

### Attachment Positioning
<YT time={891} videoId="-2HCxy4Kh4E" label="G Move Arm zu Rücken-Position (14:51)" />
<YT time={906} videoId="-2HCxy4Kh4E" label="IK Target Display Size anpassen (15:06)" />

### Bone Connection
<YT time={919} videoId="-2HCxy4Kh4E" label="Human Armature Pose Mode (15:19)" />
<YT time={925} videoId="-2HCxy4Kh4E" label="X-Ray für alle Bones sichtbar (15:25)" />
<YT time={930} videoId="-2HCxy4Kh4E" label="G Move einzelne Bones zum Testen (15:30)" />
<YT time={936} videoId="-2HCxy4Kh4E" label="Korrekte Bone für Attachment finden (15:36)" />

### Parent zu Bone
<YT time={945} videoId="-2HCxy4Kh4E" label="Object Mode: Robot + Human Armature (15:45)" />
<YT time={958} videoId="-2HCxy4Kh4E" label="Ctrl+P Parent to Bone (15:58)" />
<YT time={964} videoId="-2HCxy4Kh4E" label="Relationship Line zu selektiertem Bone (16:04)" />
<YT time={971} videoId="-2HCxy4Kh4E" label="Connected Rig mit Animation Data (16:11)" />

---

## Arm duplizieren
<YT time={983} videoId="-2HCxy4Kh4E" label="Human Ctrl+I Select Inverted (16:23)" />

### 3x Duplication
<YT time={986} videoId="-2HCxy4Kh4E" label="Back View für Positioning (16:26)" />
<YT time={992} videoId="-2HCxy4Kh4E" label="Shift+D Duplicate, nur Claw beachten (16:32)" />
<YT time={1001} videoId="-2HCxy4Kh4E" label="Robot Armature für Position Control (16:41)" />

### Final Positioning
<YT time={1015} videoId="-2HCxy4Kh4E" label="X-Achse Rotation für bessere Platzierung (16:55)" />
<YT time={1022} videoId="-2HCxy4Kh4E" label="Overlay Relationship Lines ausblenden (17:02)" />
<YT time={1030} videoId="-2HCxy4Kh4E" label="Vier geriggde Roboter-Arme mit Mocap (17:10)" />
<YT time={1034} videoId="-2HCxy4Kh4E" label="Alle Arme individuell animierbar (17:14)" />

---

## Limitierungen des Setups
<YT time={1084} videoId="-2HCxy4Kh4E" label="Warnung: Rig ist teilweise instabil (18:04)" />

### Glitching Problem
<YT time={1088} videoId="-2HCxy4Kh4E" label="IK Target Bewegung kann glitchen (18:08)" />
<YT time={1094} videoId="-2HCxy4Kh4E" label="Problem mit diesem Rig-Typ (18:14)" />

### Pole Target Lösung
<YT time={1099} videoId="-2HCxy4Kh4E" label="3D Animator Beispiel: Knie-Richtung (18:19)" />
<YT time={1111} videoId="-2HCxy4Kh4E" label="Pole Target für Knee-Control (18:31)" />
<YT time={1129} videoId="-2HCxy4Kh4E" label="Empty Object als Pole Target (18:49)" />
<YT time={1138} videoId="-2HCxy4Kh4E" label="Bone Constraint Properties: Pole Target (18:58)" />
<YT time={1148} videoId="-2HCxy4Kh4E" label="Stabileres Verhalten mit Pole Target (19:08)" />

### Trade-off Problem
<YT time={1157} videoId="-2HCxy4Kh4E" label="Nachteile: Armature-Rotation unmöglich (19:17)" />
<YT time={1162} videoId="-2HCxy4Kh4E" label="Verlust der Schulter-Micro-Bewegungen (19:22)" />
<YT time={1168} videoId="-2HCxy4Kh4E" label="Funktionalität vs. Stabilität (19:28)" />
<YT time={1174} videoId="-2HCxy4Kh4E" label="Spass-Rig mit buggy Behavior (19:34)" />

### Kompatibilität
<YT time={1187} videoId="-2HCxy4Kh4E" label="Funktioniert mit den meisten Mocap Data (19:47)" />
<YT time={1200} videoId="-2HCxy4Kh4E" label="Part 2 angekündigt für Video-Produktion (20:00)" />

---

## Zusammenfassung

Dieses Tutorial demonstriert einen kompletten Roboter-Arm-Workflow:

**Modellierung:**
- Präzise 1-Meter-Segmente für 40x Duplication
- Triangle-Base mit Details für interessante Form
- Skin Modifier für organische Claw-Finger

**Rigging:**
- Inverse Kinematics für intuitive Kontrolle
- 40 Bones für segmentierte Bewegung
- Automatic Weights für Mesh-Deformation

**Assembly:**
- Array Modifier für Multi-Finger-Claws
- Parent-to-Bone für Mocap-Integration
- Hierarchische Duplication für 4 Arme

**Motion Capture:**
- Mixamo Integration für realistische Animation
- Bone-basierte Attachment-Punkte
- Kombinierte procedural + Mocap Animation

**Technische Herausforderungen:**
- IK-Stabilität vs. Funktionalität
- Pole Target Trade-offs
- Performance mit komplexen Rigs


