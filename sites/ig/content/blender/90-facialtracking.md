---
title: Gesicht tracken (mit Python)
---

# Facial Motion Capture

<StickMe>
## Tutorial-Video

<Youtube id="uNK8S19OSmA" />
</StickMe>

## Zusammenfassung

Ein komplettes Tutorial über Gesichts-Motion-Capture mit Blender als kostenlose Motion-Capture-Lösung. Nur mit Handy-Kamera und Marker erstellen Sie professionelles Facial Tracking ohne teure Hardware.

### Überblick der 6 Arbeitsschritte
<YT time={0} videoId="uNK8S19OSmA" label="Willkommen und Motion Capture Einführung (0:00)" />

<YT time={25} videoId="uNK8S19OSmA" label="Workflow-Übersicht: 6 Schritte zum Facial Tracking (0:25)" />

Dieses 24-minütige Tutorial zeigt einen 6-stufigen Workflow, der später grösstenteils automatisiert werden kann:

1. **Recording**: Footage mit Tracking-Markern aufnehmen
2. **Tracking**: Marker in Blender verfolgen
3. **Mesh Creation**: Gesichts-Mesh erstellen
4. **Depth + Bones**: 3D-Tiefe und Armature hinzufügen
5. **Rigging**: Face-Rig mit Weight Painting
6. **Animation**: Tracker mit Rig verknüpfen

<YT time={42} videoId="uNK8S19OSmA" label="Python-Script für Workflow-Automatisierung (0:42)" />

---

## Schritt 1: Recording
<YT time={53} videoId="uNK8S19OSmA" label="Aufnahme-Prinzipien und Marker-Platzierung (0:53)" />

### Tracking-Marker erstellen
<YT time={114} videoId="uNK8S19OSmA" label="Kontraststarke Marker für Motion Capture (1:54)" />

**Marker-Optionen:**
1. <YT time={128} videoId="uNK8S19OSmA" label="Schwarzer Sharpie für die meisten Hauttöne (2:08)" />
2. <YT time={137} videoId="uNK8S19OSmA" label="Weisser Korrektor für dunkle Haut (2:17)" />
3. <YT time={147} videoId="uNK8S19OSmA" label="Dunkles Make-up als sicherste Option (2:27)" />
   - Für Haut entwickelt
   - Leicht abwaschbar
   - Ungiftig

### Marker-Platzierung Prinzipien
<YT time={165} videoId="uNK8S19OSmA" label="Grundlagen der Marker-Verteilung (2:45)" />

**Wichtige Bereiche identifizieren:**
<YT time={169} videoId="uNK8S19OSmA" label="Höchste Deformation: Mund, Augen, Augenbrauen (2:49)" />
- <YT time={177} videoId="uNK8S19OSmA" label="Höhere Marker-Dichte in beweglichen Bereichen (2:57)" />

**Bereiche vermeiden:**
<YT time={184} videoId="uNK8S19OSmA" label="Unsichtbare Bereiche: Unter Nase, Haarverdeckung (3:04)" />
- Unter der Nase
- Seitliche Gesichtsbereiche
- Von Haaren verdeckte Stellen

<YT time={194} videoId="uNK8S19OSmA" label="Symmetrische Marker-Verteilung für ausgewogenes Detail (3:14)" />

### Filming-Richtlinien
<YT time={203} videoId="uNK8S19OSmA" label="Sichere Aufnahme-Techniken (3:23)" />

**Optimale Aufnahme:**
- <YT time={204} videoId="uNK8S19OSmA" label="Frontale Aufnahme mit minimal Kamera-Shake (3:24)" />
- <YT time={210} videoId="uNK8S19OSmA" label="Marker bleiben sichtbar für volle Deformation (3:30)" />
- <YT time={212} videoId="uNK8S19OSmA" label="Keine Kamera-Bewegung als Performance interpretiert (3:32)" />

**Problematische Aufnahmen:**
<YT time={215} videoId="uNK8S19OSmA" label="Schlechte Shots: Verdeckte Tracker (3:35)" />
<YT time={219} videoId="uNK8S19OSmA" label="Kamera-Shake wird als Motion interpretiert (3:39)" />

<YT time={225} videoId="uNK8S19OSmA" label="Beispiele für perfekt trackbare Shots (3:45)" />
- <YT time={227} videoId="uNK8S19OSmA" label="Beleuchtung egal, solange Marker sichtbar (3:47)" />
- <YT time={230} videoId="uNK8S19OSmA" label="Bewegliche Shots OK wenn Gesicht zentriert (3:50)" />

### Footage-Vorbereitung
<YT time={234} videoId="uNK8S19OSmA" label="Beispiel-Footage: Vertikale Handyaufnahme (3:54)" />

<YT time={249} videoId="uNK8S19OSmA" label="Video zu Bildsequenz konvertieren (4:09)" />

**Video Editing Workspace:**
1. <YT time={254} videoId="uNK8S19OSmA" label="Video Editing Workspace für Konvertierung (4:14)" />
2. <YT time={259} videoId="uNK8S19OSmA" label="Footage als Movie Strip importieren (4:19)" />
3. <YT time={262} videoId="uNK8S19OSmA" label="Framerate wird automatisch angepasst (4:22)" />
4. <YT time={266} videoId="uNK8S19OSmA" label="Projekt-Endpunkt am Strip-Ende anpassen (4:26)" />
5. <YT time={277} videoId="uNK8S19OSmA" label="View Transform: Filmic zu Standard ändern (4:37)" />
6. <YT time={289} videoId="uNK8S19OSmA" label="PNG-Sequenz mit 0 Kompression rendern (4:49)" />
7. <YT time={297} videoId="uNK8S19OSmA" label="Ctrl+F12 für Animation-Render (4:57)" />

<YT time={308} videoId="uNK8S19OSmA" label="30 FPS für bessere Performance wählen (5:08)" />

---

## Schritt 2: Tracking
<YT time={64} videoId="uNK8S19OSmA" label="Tracking-Methoden und schwierige Marker (1:04)" />

### Movie Clip Editor Setup
<YT time={312} videoId="uNK8S19OSmA" label="Layout zu Movie Clip Editor wechseln (5:12)" />

1. <YT time={318} videoId="uNK8S19OSmA" label="3D Viewport zu Movie Clip Editor ändern (5:18)" />
2. <YT time={324} videoId="uNK8S19OSmA" label="Bildsequenz importieren (5:24)" />
3. <YT time={326} videoId="uNK8S19OSmA" label="Prefetch für Memory-Loading (5:26)" />

### Basis-Tracking
<YT time={335} videoId="uNK8S19OSmA" label="Ersten Marker auf Stirn tracken (5:35)" />

1. <YT time={338} videoId="uNK8S19OSmA" label="Ctrl+Klick für Tracker platzieren (5:38)" />
2. <YT time={342} videoId="uNK8S19OSmA" label="Pattern-Bereich um Feature positionieren (5:42)" />
3. <YT time={344} videoId="uNK8S19OSmA" label="Ctrl+T für Forward-Tracking (5:44)" />
4. <YT time={350} videoId="uNK8S19OSmA" label="Ctrl+L für Tracker-Lock (5:50)" />

### Tracking-Probleme lösen
<YT time={356} videoId="uNK8S19OSmA" label="Default-Settings nicht optimal für Facial Marker (5:56)" />

<YT time={363} videoId="uNK8S19OSmA" label="Tracking-Fehler bei seitlichen Markern (6:03)" />
- <YT time={365} videoId="uNK8S19OSmA" label="Marker deformieren sich im Shot (6:05)" />
- <YT time={368} videoId="uNK8S19OSmA" label="Location Motion Model ist unzureichend (6:08)" />

### Optimierte Tracker-Einstellungen
<YT time={381} videoId="uNK8S19OSmA" label="Tracker-Settings für bessere Performance (6:21)" />

**Motion Model ändern:**
<YT time={384} videoId="uNK8S19OSmA" label="Perspective oder Affine für Deformation (6:24)" />
<YT time={391} videoId="uNK8S19OSmA" label="Affine Model für Shears und Stretches (6:31)" />

**Weitere Optimierungen:**
<YT time={398} videoId="uNK8S19OSmA" label="Normalize für Licht-Invarianz aktivieren (6:38)" />
<YT time={403} videoId="uNK8S19OSmA" label="Correlation auf 0.9 für 90% Konfidenz (6:43)" />

<YT time={410} videoId="uNK8S19OSmA" label="Verbesserte Tracking-Ergebnisse mit neuen Settings (6:50)" />

### Gruppen-Tracking
<YT time={419} videoId="uNK8S19OSmA" label="Multiple Marker gleichzeitig tracken (6:59)" />
<YT time={423} videoId="uNK8S19OSmA" label="Box-Select für Feature-Gruppen (7:03)" />
<YT time={431} videoId="uNK8S19OSmA" label="Schnelle und genaue Gruppen-Resultate (7:11)" />

### Problematische Tracker beheben
<YT time={453} videoId="uNK8S19OSmA" label="Tracker-Cluster mit Fehlern (7:33)" />

**Falten-Problem:**
<YT time={459} videoId="uNK8S19OSmA" label="Falten stören Pattern-Bereich (7:39)" />

**Lösungsschritte:**
1. <YT time={464} videoId="uNK8S19OSmA" label="Letzten aktiven Frame finden (7:44)" />
2. <YT time={467} videoId="uNK8S19OSmA" label="Pattern-Bereich updaten = neuer Keyframe (7:47)" />
3. <YT time={473} videoId="uNK8S19OSmA" label="Search Area mit Alt+S vergrössern (7:53)" />
4. <YT time={480} videoId="uNK8S19OSmA" label="Erfolgreicher Re-Track (8:00)" />

### Augen-Marker (schwierigste Bereiche)
<YT time={503} videoId="uNK8S19OSmA" label="Andere Tracker verstecken mit H (8:23)" />
<YT time={511} videoId="uNK8S19OSmA" label="Augen-Cluster: Starke Deformation (8:31)" />
<YT time={516} videoId="uNK8S19OSmA" label="Augenlider beeinträchtigen Pattern (8:36)" />

**Manuelle Supervision:**
<YT time={520} videoId="uNK8S19OSmA" label="Aktiven Frame finden und Tracker updaten (8:40)" />
<YT time={524} videoId="uNK8S19OSmA" label="Mehrere Keyframes für Augenlid-Marker (8:44)" />
<YT time={530} videoId="uNK8S19OSmA" label="Wiederholung bis Frame 418 (8:50)" />

**Präventions-Tipps:**
<YT time={538} videoId="uNK8S19OSmA" label="Marker näher zur Augenbraue positionieren (8:58)" />
<YT time={542} videoId="uNK8S19OSmA" label="Kleinere Punkte für bessere Genauigkeit (9:02)" />

<YT time={550} videoId="uNK8S19OSmA" label="Alt+H zum Tracker Unhide (9:10)" />

---

## Schritt 3: Mesh Creation
<YT time={76} videoId="uNK8S19OSmA" label="Mesh als Motion Capture Target (1:16)" />

### 3D Viewport Integration
<YT time={565} videoId="uNK8S19OSmA" label="Tracking-Daten in 3D Viewport bringen (9:25)" />

**Kamera-Setup:**
<YT time={570} videoId="uNK8S19OSmA" label="Kamera auf Z-Achse nach unten ausrichten (9:30)" />

**Tracker zu Empties:**
1. <YT time={575} videoId="uNK8S19OSmA" label="Alle Tracker im Movie Clip Editor selektieren (9:35)" />
2. <YT time={580} videoId="uNK8S19OSmA" label="Reconstruction > Link Empty to Track (9:40)" />
3. <YT time={587} videoId="uNK8S19OSmA" label="Empties herunterskalieren für übersichtlichen Viewport (9:47)" />

<YT time={593} videoId="uNK8S19OSmA" label="Camera View: Empties umreissen Gesichts-Struktur (9:53)" />
<YT time={601} videoId="uNK8S19OSmA" label="Problem: Nur 2D-Daten, Gesicht braucht Tiefe (10:01)" />

### Drei Methoden für Face Mesh
<YT time={624} videoId="uNK8S19OSmA" label="Drei Methoden für automatische Mesh-Erstellung (10:24)" />

#### Option 1: Kostenlose Downloads
<YT time={637} videoId="uNK8S19OSmA" label="TurboSquid: Kostenlose Face Models (10:37)" />

**Nachteile:**
<YT time={649} videoId="uNK8S19OSmA" label="Keine Kontrolle über Aussehen (10:49)" />
<YT time={654} videoId="uNK8S19OSmA" label="Passt selten zum eigenen Gesicht (10:54)" />

#### Option 2: MakeHuman (Open Source)
<YT time={665} videoId="uNK8S19OSmA" label="MakeHuman: 3D Character Creator (11:05)" />

**Arbeitsschritte:**
<YT time={673} videoId="uNK8S19OSmA" label="Gesichts-Parameter über Slider anpassen (11:13)" />
<YT time={679} videoId="uNK8S19OSmA" label="Background Image als Referenz hinzufügen (11:19)" />
<YT time={684} videoId="uNK8S19OSmA" label="Export als OBJ-Datei zu Blender (11:24)" />

**Bewertung:**
<YT time={690} videoId="uNK8S19OSmA" label="Vorteil: Jedes gewünschte Gesicht möglich (11:30)" />
<YT time={694} videoId="uNK8S19OSmA" label="Nachteil: Zeitaufwendiger Prozess (11:34)" />

#### Option 3: FaceGen Modeler (Demo)
<YT time={702} videoId="uNK8S19OSmA" label="FaceGen: Teuer, aber Demo-Version ausreichend (11:42)" />

**Rechtliche Hinweise:**
<YT time={712} videoId="uNK8S19OSmA" label="Demo: Keine Distributions-Rechte (11:52)" />
<YT time={716} videoId="uNK8S19OSmA" label="Motion Capture: Kein Distribution-Bedarf (11:56)" />

**Funktionalität:**
<YT time={723} videoId="uNK8S19OSmA" label="3D-Model aus 3 Fotos: Front + 2 Seiten (12:03)" />

### FaceGen Workflow
<YT time={734} videoId="uNK8S19OSmA" label="FaceGen Interface: Photo Section (12:14)" />

**Setup:**
<YT time={741} videoId="uNK8S19OSmA" label="3 Referenz-Bilder importieren (12:21)" />
<YT time={746} videoId="uNK8S19OSmA" label="Next für Alignment-Prozess (12:26)" />

**Alignment:**
<YT time={750} videoId="uNK8S19OSmA" label="Bild aufrecht drehen (12:30)" />
<YT time={754} videoId="uNK8S19OSmA" label="Features lokalisieren wie angefragt (12:34)" />

**Processing:**
<YT time={760} videoId="uNK8S19OSmA" label="Checkboxes deaktiviert lassen (12:40)" />
<YT time={768} videoId="uNK8S19OSmA" label="Processing unter 1 Minute (12:48)" />
<YT time={773} videoId="uNK8S19OSmA" label="Akkurates Custom Head Model (12:53)" />

**Export:**
<YT time={777} videoId="uNK8S19OSmA" label="FaceGen Logo Watermark (Demo-Version) (12:57)" />
<YT time={785} videoId="uNK8S19OSmA" label="Textur nicht benötigt für Motion Capture (13:05)" />
<YT time={794} videoId="uNK8S19OSmA" label="Expression: Current Expression (13:14)" />
<YT time={799} videoId="uNK8S19OSmA" label="OBJ Format für Export (13:19)" />
<YT time={805} videoId="uNK8S19OSmA" label="4 Dateien exportiert: OBJ + Material + Texturen (13:25)" />
<YT time={815} videoId="uNK8S19OSmA" label="Nur OBJ-Datei für Motion Capture behalten (13:35)" />

---

## Schritt 4: Depth + Bones
<YT time={86} videoId="uNK8S19OSmA" label="Mesh für Tracker-Tiefe und Armatures (1:26)" />

### Tiefe-Projektion verstehen
<YT time={823} videoId="uNK8S19OSmA" label="Tracker auf einzelner Ebene > Tiefe hinzufügen (13:43)" />

**Lern-Beispiel mit einfacher Geometry:**
<YT time={831} videoId="uNK8S19OSmA" label="Curved Plane über Tracker positionieren (13:51)" />
<YT time={836} videoId="uNK8S19OSmA" label="Empties auf Geometrie projizieren (13:56)" />

**Follow Track Constraint verstehen:**
<YT time={840} videoId="uNK8S19OSmA" label="Empty-Position durch Follow Track Constraint (14:00)" />
<YT time={846} videoId="uNK8S19OSmA" label="Constraint entfernen = keine Tracking-Bewegung (14:06)" />

**Depth Property:**
<YT time={853} videoId="uNK8S19OSmA" label="Depth Property: Plane Object zuweisen (14:13)" />
<YT time={859} videoId="uNK8S19OSmA" label="Projektion funktioniert wie gewünscht (14:19)" />

### Face Mesh Integration
<YT time={864} videoId="uNK8S19OSmA" label="Face Model importieren (14:24)" />

**Import und Cleanup:**
<YT time={869} videoId="uNK8S19OSmA" label="Head Mesh + Extra Mouth Geometry (14:29)" />
<YT time={874} videoId="uNK8S19OSmA" label="Mouth Object löschen (nicht benötigt) (14:34)" />
<YT time={880} videoId="uNK8S19OSmA" label="Head proportional zu Trackern skalieren (14:40)" />

**Geometrie-Optimierung:**
<YT time={885} videoId="uNK8S19OSmA" label="Überflüssige Geometrie entfernen (14:45)" />
<YT time={891} videoId="uNK8S19OSmA" label="UV Islands von FaceGen nutzen (14:51)" />
<YT time={897} videoId="uNK8S19OSmA" label="UV Edit Workspace mit Sync Mode (14:57)" />
<YT time={902} videoId="uNK8S19OSmA" label="Face Island mit L selektieren (15:02)" />
<YT time={905} videoId="uNK8S19OSmA" label="Selektion invertieren und löschen (15:05)" />
<YT time={911} videoId="uNK8S19OSmA" label="Restliche Stirn- und Seiten-Faces entfernen (15:11)" />

### Mesh-Alignment
<YT time={919} videoId="uNK8S19OSmA" label="Face mit Footage alignen (15:19)" />

**Camera View Setup:**
<YT time={924} videoId="uNK8S19OSmA" label="Background Images für Kamera aktivieren (15:24)" />
<YT time={930} videoId="uNK8S19OSmA" label="Image Sequence als Movie Clip wählen (15:30)" />
<YT time={933} videoId="uNK8S19OSmA" label="Alignment auf erstem Frame durchführen (15:33)" />

**Alignment-Prozess:**
<YT time={940} videoId="uNK8S19OSmA" label="Wireframe Mode (Z) für bessere Sicht (15:40)" />
<YT time={947} videoId="uNK8S19OSmA" label="Edit Mode mit Proportional Editing (O) (15:47)" />
<YT time={953} videoId="uNK8S19OSmA" label="Wichtige Features alignen: Augen, Nase, Mund (15:53)" />
<YT time={960} videoId="uNK8S19OSmA" label="Präzise initiale Ausrichtung ist kritisch (16:00)" />

### Alle Tracker projizieren
<YT time={971} videoId="uNK8S19OSmA" label="Face Object als Depth Target zuweisen (16:11)" />
<YT time={980} videoId="uNK8S19OSmA" label="Tracker perfekt auf korrekter Tiefe projiziert (16:20)" />
<YT time={984} videoId="uNK8S19OSmA" label="Prozess für alle Empties wiederholen (16:24)" />

### Python-Automatisierung
<YT time={987} videoId="uNK8S19OSmA" label="Automatisierung durch eigenes Script (16:27)" />

**Scripting Workspace:**
<YT time={994} videoId="uNK8S19OSmA" label="Neues Script im Scripting Workspace (16:34)" />

**Script-Struktur:**
<YT time={1001} videoId="uNK8S19OSmA" label="import bpy für Blender-Objekt-Referenzen (16:41)" />
<YT time={1009} videoId="uNK8S19OSmA" label="Loop durch alle Empties (16:49)" />
<YT time={1016} videoId="uNK8S19OSmA" label="if tracker.type == 'EMPTY' (16:56)" />
<YT time={1024} videoId="uNK8S19OSmA" label="Face Mesh als Depth Target zuweisen (17:04)" />
<YT time={1038} videoId="uNK8S19OSmA" label="Empty als active object setzen (17:18)" />
<YT time={1051} videoId="uNK8S19OSmA" label="Script ausführen und testen (17:31)" />
<YT time={1053} videoId="uNK8S19OSmA" label="Alle Empties erfolgreich projiziert (17:33)" />

---

## Schritt 5: Rigging
<YT time={95} videoId="uNK8S19OSmA" label="Face Mesh Rigging mit Armature (1:35)" />

### Armature und Bone Setup
<YT time={1061} videoId="uNK8S19OSmA" label="Rigging-Konzept: Empties zu Bones (17:41)" />

**Armature hinzufügen:**
<YT time={1068} videoId="uNK8S19OSmA" label="Armature zum ersten Frame hinzufügen (17:48)" />
<YT time={1071} videoId="uNK8S19OSmA" label="Parent Empty für Armature-Transfer wählen (17:51)" />
<YT time={1077} videoId="uNK8S19OSmA" label="Shift+S > Cursor to Selected (17:57)" />
<YT time={1080} videoId="uNK8S19OSmA" label="Armature selektieren und Shift+S > Selection to Cursor (18:00)" />

### Automatisierte Bone-Erstellung
<YT time={1083} videoId="uNK8S19OSmA" label="Extrud-Script für alle Tracker-Positionen (18:03)" />

**Extrud-Script Funktionalität:**
- Geht durch alle Empties
- Extrudiert Bone zu jeder Empty-Position
- Automatisiert den kompletten Armature-Aufbau

### Weight Painting
<YT time={1089} videoId="uNK8S19OSmA" label="Weight Painting für Mesh-Deformation (18:09)" />

**Weight Paint Workflow:**
1. Face Mesh selektieren
2. Weight Paint Mode aktivieren
3. Bones individual bemalen
4. Deformation-Bereiche definieren

---

## Schritt 6: Animation
<YT time={105} videoId="uNK8S19OSmA" label="Rig mit Trackern verknüpfen (1:45)" />

### Constraint-Setup
**Copy Location Constraints:**
- Jeden Bone mit entsprechendem Empty verknüpfen
- Tracking-Bewegung wird an Rig übertragen
- Real-time Animation der Gesichts-Geometrie

### Performance-Optimierung
<YT time={108} videoId="uNK8S19OSmA" label="Action baken für bessere Playback-Performance (1:48)" />

**Baking-Prozess:**
- Animation zu Keyframes konvertieren
- Constraints entfernen nach Baking
- Verbesserte Viewport-Performance

### Finale Automation
**Kompletter Python Workflow:**
1. Tracking-Daten verarbeiten
2. Depth-Projektion anwenden
3. Armature automatisch erstellen
4. Weight Painting vorbereiten
5. Constraints automatisch zuweisen

---

## Zusammenfassung

Dieses Tutorial zeigt einen kompletten Workflow für professionelles Facial Motion Capture mit kostenlosen Tools:

**Vorteile der Methode:**
- Keine teure Hardware erforderlich
- Handy-Kamera ausreichend
- Blender als einzige Software
- Automatisierbar durch Python-Scripts

**Anwendungsbereiche:**
- Character Animation
- VFX und Film-Produktion
- Game Development
- Virtual Production

**Erlerntes Wissen übertragbar auf:**
- Object Tracking
- Camera Tracking
- Andere Motion Capture Bereiche

