---
title: 🔥 Feuer simulieren in Cycles
---

# Feuer simulieren in Cycles

_Achtung: Dieses Tutorial wird in Cycles gerendert. Dafür benötigen Sie einen leistungsstarken Computer. In Eevee wäre es wohl einfacher, Feuer nicht zu simulieren sondern künstlich nachzumachen, wie [in diesem Tutorial](80-fire), oder [dieses Simulations-Tutorial zu wählen](81-fireball-eevee)._

<StickMe>
## Tutorial-Video

<Youtube id="zyIJQHlFQs0" />
</StickMe>

## Zusammenfassung

Ein umfassendes Tutorial über Smoke-Simulation, Volumetric Shading und Rendering in Blender 3.0 mit Cycles X - von der Basis-Simulation bis zum finalen Video-Export.

### Überblick
<YT time={0} videoId="zyIJQHlFQs0" label="No Smoke Without Fire! (0:00)" />

Dieses 39-minütige Tutorial führt durch den kompletten Workflow einer realistischen Fireball-Simulation, einschliesslich Advanced Shading und Post-Production Techniken.

### Kapitel-Übersicht
<YT time={81} videoId="zyIJQHlFQs0" label="Downloads und Save Data (1:21)" />
<YT time={143} videoId="zyIJQHlFQs0" label="Smoke Settings kennenlernen (2:23)" />
<YT time={239} videoId="zyIJQHlFQs0" label="Fire erstellen (3:59)" />
<YT time={365} videoId="zyIJQHlFQs0" label="Emitter animieren (6:05)" />
<YT time={591} videoId="zyIJQHlFQs0" label="Domain tweaking (9:51)" />
<YT time={774} videoId="zyIJQHlFQs0" label="Previews erstellen (12:54)" />
<YT time={1014} videoId="zyIJQHlFQs0" label="Smoke Resolution erhöhen (16:54)" />
<YT time={1150} videoId="zyIJQHlFQs0" label="Volumetric Shading Setup (19:10)" />
<YT time={1671} videoId="zyIJQHlFQs0" label="Simulation rendern (27:51)" />
<YT time={1877} videoId="zyIJQHlFQs0" label="Glow im Compositor hinzufügen (31:17)" />
<YT time={2020} videoId="zyIJQHlFQs0" label="Mit EXR Sequences arbeiten (33:40)" />
<YT time={2116} videoId="zyIJQHlFQs0" label="Video File exportieren (35:16)" />
<YT time={2215} videoId="zyIJQHlFQs0" label="Advanced Part! (36:55)" />

---

## Projekt Setup
<YT time={88} videoId="zyIJQHlFQs0" label="5 Wochen Entwicklungszeit für Smoke Simulation (1:28)" />

### Blender 3.0 Vorbereitung
<YT time={94} videoId="zyIJQHlFQs0" label="Blender 3.0 Experimental mit Cycles X (1:34)" />
<YT time={108} videoId="zyIJQHlFQs0" label="Ctrl+S Blend File speichern: 'Fireball' (1:48)" />
<YT time={117} videoId="zyIJQHlFQs0" label="Bake Data wird neben Blend File gespeichert (1:57)" />

### Basis-Objekte erstellen
<YT time={129} videoId="zyIJQHlFQs0" label="A+X alles löschen (2:09)" />
<YT time={135} videoId="zyIJQHlFQs0" label="Shift+A Icosphere als Smoke Emitter (2:15)" />
<YT time={142} videoId="zyIJQHlFQs0" label="Double-click 'Smoke Emitter' benennen (2:22)" />

---

## Smoke Settings verstehen
<YT time={146} videoId="zyIJQHlFQs0" label="Object > Quick Effects > Quick Smoke (2:26)" />

### Domain und Emitter Setup
<YT time={151} videoId="zyIJQHlFQs0" label="Domain Object umgibt Emitter (2:31)" />
<YT time={155} videoId="zyIJQHlFQs0" label="Emitter in Wireframe View (2:35)" />
<YT time={161} videoId="zyIJQHlFQs0" label="Physics Properties: Neue Settings (2:41)" />

### Mouse-Over Tooltips
<YT time={167} videoId="zyIJQHlFQs0" label="Resolution Division erklärt (2:47)" />
<YT time={172} videoId="zyIJQHlFQs0" label="Buoyancy Density: Faster Rising Smoke (2:52)" />
<YT time={178} videoId="zyIJQHlFQs0" label="Beste Mouse-Over Texte in Blender (2:58)" />
<YT time={190} videoId="zyIJQHlFQs0" label="Noise Scale: Large Vortices (3:10)" />
<YT time={198} videoId="zyIJQHlFQs0" label="Alle Settings vor Klicken lesen (3:18)" />

### Workflow Setup
<YT time={206} videoId="zyIJQHlFQs0" label="Vertical Split für Properties Panel (3:26)" />
<YT time={213} videoId="zyIJQHlFQs0" label="Domain Physics Properties kopieren (3:33)" />
<YT time={222} videoId="zyIJQHlFQs0" label="Pin Icon für festes Properties Panel (3:42)" />
<YT time={234} videoId="zyIJQHlFQs0" label="80% der Zeit in Physics Properties (3:54)" />

---

## Fire erstellen
<YT time={242} videoId="zyIJQHlFQs0" label="Smoke Emitter selektieren (4:02)" />
<YT time={246} videoId="zyIJQHlFQs0" label="Flow Type: Smoke zu Fire + Smoke ändern (4:06)" />
<YT time={251} videoId="zyIJQHlFQs0" label="Play: Burning Ball Animation (4:11)" />

### Emitter Size Problem
<YT time={259} videoId="zyIJQHlFQs0" label="S Scale Ball smaller (4:19)" />
<YT time={269} videoId="zyIJQHlFQs0" label="Play: Fireball Size unchanged (4:29)" />
<YT time={273} videoId="zyIJQHlFQs0" label="Domain wurde nicht updated (4:33)" />
<YT time={278} videoId="zyIJQHlFQs0" label="Domain Settings ändern für Update (4:38)" />
<YT time={286} videoId="zyIJQHlFQs0" label="Resolution Division 34 für Update (4:46)" />
<YT time={292} videoId="zyIJQHlFQs0" label="Updated Smoke Simulation (4:52)" />

### Resolution und Quality
<YT time={305} videoId="zyIJQHlFQs0" label="Höhere Quality durch Resolution (5:05)" />
<YT time={311} videoId="zyIJQHlFQs0" label="Voxel-Grösse im Corner Cube (5:11)" />
<YT time={317} videoId="zyIJQHlFQs0" label="Viewport Display > Interpolation Closest (5:17)" />
<YT time={321} videoId="zyIJQHlFQs0" label="Minecraft-Style Smoke (nur Viewport) (5:21)" />
<YT time={332} videoId="zyIJQHlFQs0" label="Resolution Divisions erhöhen (5:32)" />

### Performance Problem
<YT time={341} videoId="zyIJQHlFQs0" label="Viel langsamere Simulation (5:41)" />
<YT time={347} videoId="zyIJQHlFQs0" label="Blender berechnet überall (5:47)" />
<YT time={356} videoId="zyIJQHlFQs0" label="Adaptive Domain für Performance (5:56)" />
<YT time={362} videoId="zyIJQHlFQs0" label="Box adaptiert sich an Simulation (6:02)" />

---

## Emitter animieren
<YT time={369} videoId="zyIJQHlFQs0" label="Real-time Animation Technique (6:09)" />

### Auto-Keying Animation
<YT time={375} videoId="zyIJQHlFQs0" label="Auto Keying aktivieren (6:15)" />
<YT time={380} videoId="zyIJQHlFQs0" label="Space+G für Motion (6:20)" />
<YT time={385} videoId="zyIJQHlFQs0" label="Animation erstellt (6:25)" />
<YT time={389} videoId="zyIJQHlFQs0" label="Resolution Divisions 62 Update (6:29)" />

### Domain Size Problem
<YT time={399} videoId="zyIJQHlFQs0" label="Emitter geht ausserhalb Domain (6:39)" />
<YT time={403} videoId="zyIJQHlFQs0" label="Adaptive Domain unchecken für Border (6:43)" />
<YT time={409} videoId="zyIJQHlFQs0" label="S+X Domain breiter skalieren (6:49)" />

### Buoyancy Settings
<YT time={421} videoId="zyIJQHlFQs0" label="Smoke steigt nach oben (seltsam) (7:01)" />
<YT time={427} videoId="zyIJQHlFQs0" label="Buoyancy Density und Heat auf 0 (7:07)" />
<YT time={432} videoId="zyIJQHlFQs0" label="2D-3D Drawing Effect (7:12)" />

### Frame-by-Frame Pattern Problem
<YT time={441} videoId="zyIJQHlFQs0" label="Frame-by-Frame Patterns sichtbar (7:21)" />
<YT time={450} videoId="zyIJQHlFQs0" label="Sampling Sub Steps für Quality (7:30)" />
<YT time={459} videoId="zyIJQHlFQs0" label="Sub Steps 3 für smoothere Line (7:39)" />

### Initial Velocity
<YT time={473} videoId="zyIJQHlFQs0" label="Problem: Kein Movement-Impact auf Smoke (7:53)" />
<YT time={489} videoId="zyIJQHlFQs0" label="Initial Velocity für Simulation-Impact (8:09)" />
<YT time={503} videoId="zyIJQHlFQs0" label="Initial Velocity Button aktivieren (8:23)" />
<YT time={512} videoId="zyIJQHlFQs0" label="Organischere Fireball durch Movement (8:32)" />

### Frame Rate Optimization
<YT time={523} videoId="zyIJQHlFQs0" label="24 FPS zu 30 FPS ändern (8:43)" />
<YT time={532} videoId="zyIJQHlFQs0" label="Resolution 50% für Non-HD Render (8:52)" />

### Animation Refinement
<YT time={545} videoId="zyIJQHlFQs0" label="Front View Emitter Animation (9:05)" />
<YT time={552} videoId="zyIJQHlFQs0" label="Space+G für controlled Movement (9:12)" />
<YT time={563} videoId="zyIJQHlFQs0" label="Graph Editor: Keyframes sichtbar (9:23)" />
<YT time={576} videoId="zyIJQHlFQs0" label="Key > Sample Keyframes > Smooth Keys (9:36)" />

---

## Domain Tweaking
<YT time={595} videoId="zyIJQHlFQs0" label="Domain zu klein für Animation (9:55)" />
<YT time={597} videoId="zyIJQHlFQs0" label="S+X und S+Z Domain vergrössern (9:57)" />

### Dissolve Feature
<YT time={603} videoId="zyIJQHlFQs0" label="Zu viel Smoke in Scene (10:03)" />
<YT time={608} videoId="zyIJQHlFQs0" label="Dissolve für Smoke Over Time (10:08)" />
<YT time={614} videoId="zyIJQHlFQs0" label="Kürzerer Smoke Trail (10:14)" />
<YT time={621} videoId="zyIJQHlFQs0" label="Dissolve 25 für längeren Trail (10:21)" />

### Adaptive Domain vs Dissolve
<YT time={630} videoId="zyIJQHlFQs0" label="Adaptive Domain 'frisst' Smoke (10:30)" />
<YT time={641} videoId="zyIJQHlFQs0" label="Frames vorwärts: Domain entfernt Smoke (10:41)" />
<YT time={651} videoId="zyIJQHlFQs0" label="Adaptive Domain sucht Shrink-Möglichkeiten (10:51)" />
<YT time={663} videoId="zyIJQHlFQs0" label="Dissolve vs Adaptive Domain Konkurrenz (11:03)" />
<YT time={684} videoId="zyIJQHlFQs0" label="Threshold 0.005 für Balance (11:24)" />

### Fire Emission Control
<YT time={708} videoId="zyIJQHlFQs0" label="Fire am Ende stoppen (11:48)" />
<YT time={719} videoId="zyIJQHlFQs0" label="Motion bis Frame 71 (11:59)" />
<YT time={727} videoId="zyIJQHlFQs0" label="Density und Fuel controls (12:07)" />
<YT time={740} videoId="zyIJQHlFQs0" label="Particle System Verhalten (12:20)" />
<YT time={751} videoId="zyIJQHlFQs0" label="Frame 60-64 Keyframe Fade-out (12:31)" />

---

## Previews erstellen
<YT time={779} videoId="zyIJQHlFQs0" label="Motion in Real-time bewerten (12:59)" />
<YT time={783} videoId="zyIJQHlFQs0" label="Red Number = Nicht Real-time (13:03)" />

### Viewport Render Setup
<YT time={792} videoId="zyIJQHlFQs0" label="Animation ohne Camera rendern (13:12)" />
<YT time={798} videoId="zyIJQHlFQs0" label="Output Folder Icon Desktop (13:18)" />
<YT time={804} videoId="zyIJQHlFQs0" label="Flipbook MP4 Folder erstellen (13:24)" />
<YT time={813} videoId="zyIJQHlFQs0" label="Fireball_A File benennen (13:33)" />
<YT time={820} videoId="zyIJQHlFQs0" label="File Format: FFmpeg Video MP4 (13:40)" />

### Viewport Animation Render
<YT time={828} videoId="zyIJQHlFQs0" label="End Frame 100, Resolution 50% (13:48)" />
<YT time={838} videoId="zyIJQHlFQs0" label="View > Viewport Render Animation (13:58)" />
<YT time={850} videoId="zyIJQHlFQs0" label="Render > View Animation für Playback (14:10)" />
<YT time={858} videoId="zyIJQHlFQs0" label="Real-time Movement Understanding crucial (14:18)" />

---

## Smoke Resolution erhöhen
<YT time={874} videoId="zyIJQHlFQs0" label="Resolution Divisions 128 (14:34)" />

### Baking Problem
<YT time={887} videoId="zyIJQHlFQs0" label="Frame 10 zurück: Simulation Bug (14:47)" />
<YT time={894} videoId="zyIJQHlFQs0" label="Is Resumable Button fehlt (14:54)" />
<YT time={902} videoId="zyIJQHlFQs0" label="Timeline-Simulation problematisch (15:02)" />

### Cache Type All
<YT time={909} videoId="zyIJQHlFQs0" label="Cache Type: All für Bake All Button (15:09)" />
<YT time={917} videoId="zyIJQHlFQs0" label="End Frame 100, Bake All (15:17)" />
<YT time={926} videoId="zyIJQHlFQs0" label="Kein Timeline-Dependency mehr (15:26)" />

### Version Comparison
<YT time={943} videoId="zyIJQHlFQs0" label="Fireball_B für Overwrite-Prevention (15:43)" />
<YT time={962} videoId="zyIJQHlFQs0" label="Ctrl+F11 für View Animation (16:02)" />
<YT time={972} videoId="zyIJQHlFQs0" label="Fireball_A parallel laden (16:12)" />
<YT time={988} videoId="zyIJQHlFQs0" label="Side-by-side Comparison (16:28)" />
<YT time={1006} videoId="zyIJQHlFQs0" label="Wertvoll für 3-Stunden Bakes (16:46)" />

### Noise Upres
<YT time={1020} videoId="zyIJQHlFQs0" label="Noise für Resolution ohne Movement-Change (17:00)" />
<YT time={1027} videoId="zyIJQHlFQs0" label="Upres für höhere Resolution (17:07)" />
<YT time={1033} videoId="zyIJQHlFQs0" label="Free Bake, Noise aktivieren (17:13)" />

### Final Quality Settings
<YT time={1075} videoId="zyIJQHlFQs0" label="Noise Strength zu stark (17:55)" />
<YT time={1083} videoId="zyIJQHlFQs0" label="Photoshop Smear Effect (18:03)" />
<YT time={1088} videoId="zyIJQHlFQs0" label="Fireball zu thick (18:08)" />
<YT time={1098} videoId="zyIJQHlFQs0" label="Flow Source Surface Emission 0.5 (18:18)" />
<YT time={1116} videoId="zyIJQHlFQs0" label="Noise Strength 0.3, Upres Factor 3 (18:36)" />

---

## Volumetric Shading Setup
<YT time={1153} videoId="zyIJQHlFQs0" label="Custom Fire Material erstellen (19:13)" />

### Cycles X Setup
<YT time={1202} videoId="zyIJQHlFQs0" label="Render Properties: Cycles GPU (20:02)" />
<YT time={1215} videoId="zyIJQHlFQs0" label="Shift+A Camera hinzufügen (20:15)" />
<YT time={1221} videoId="zyIJQHlFQs0" label="View > Align Active Camera to View (20:21)" />
<YT time={1243} videoId="zyIJQHlFQs0" label="Ctrl+B Render Region für Performance (20:43)" />

### Shader Editor Setup
<YT time={1258} videoId="zyIJQHlFQs0" label="Editor Type: Shader Editor (21:58)" />
<YT time={1267} videoId="zyIJQHlFQs0" label="Domain: Principled Volume Node (21:07)" />
<YT time={1280} videoId="zyIJQHlFQs0" label="Black Body Intensity 5-50 (21:20)" />
<YT time={1296} videoId="zyIJQHlFQs0" label="World Background Strength 0 (21:36)" />

### Lighting Setup
<YT time={1309} videoId="zyIJQHlFQs0" label="Shift+A Light Point für Volumetric (21:49)" />
<YT time={1322} videoId="zyIJQHlFQs0" label="G+Z+Y Light Positioning (22:02)" />
<YT time={1331} videoId="zyIJQHlFQs0" label="Object Data: 1000 Watts Power (22:11)" />
<YT time={1342} videoId="zyIJQHlFQs0" label="Highlight Detail auf Smoke (22:22)" />

### Volume Info Node
<YT time={1358} videoId="zyIJQHlFQs0" label="Volume Info Node für Data Extraction (22:38)" />
<YT time={1364} videoId="zyIJQHlFQs0" label="Shift+A > Input > Volume Info (22:44)" />
<YT time={1370} videoId="zyIJQHlFQs0" label="Flame Output für Feuer-Detail (22:50)" />
<YT time={1378} videoId="zyIJQHlFQs0" label="ColorRamp für Flame Control (22:58)" />

### Advanced Shading
<YT time={1388} videoId="zyIJQHlFQs0" label="ColorRamp Handles für Flame Shape (23:08)" />
<YT time={1398} videoId="zyIJQHlFQs0" label="Emission Color für Fire Color (23:18)" />
<YT time={1408} videoId="zyIJQHlFQs0" label="Temperature Output für Color Variation (23:28)" />
<YT time={1418} videoId="zyIJQHlFQs0" label="Zweite ColorRamp für Temperature (23:38)" />

### Density Control
<YT time={1428} videoId="zyIJQHlFQs0" label="Density Output für Smoke Control (23:48)" />
<YT time={1438} videoId="zyIJQHlFQs0" label="Dritte ColorRamp für Density Shaping (23:58)" />
<YT time={1448} videoId="zyIJQHlFQs0" label="Mix Node für Flame+Density Kombination (24:08)" />

### Material Finalization
<YT time={1458} videoId="zyIJQHlFQs0" label="Anisotropy für Volumetric Direction (24:18)" />
<YT time={1468} videoId="zyIJQHlFQs0" label="Final Material mit allen Controls (24:28)" />

---

## Simulation rendern
<YT time={1678} videoId="zyIJQHlFQs0" label="Render Settings für Final Output (27:58)" />

### Render Properties
<YT time={1688} videoId="zyIJQHlFQs0" label="Max Samples 512 für Quality (28:08)" />
<YT time={1698} videoId="zyIJQHlFQs0" label="Volume Max Steps für Volumetric (28:18)" />
<YT time={1708} videoId="zyIJQHlFQs0" label="Resolution 100% für Final (28:28)" />

### Output Format
<YT time={1718} videoId="zyIJQHlFQs0" label="File Format: OpenEXR für 32-bit (28:38)" />
<YT time={1728} videoId="zyIJQHlFQs0" label="Color Depth: Float (Half) (28:48)" />
<YT time={1738} videoId="zyIJQHlFQs0" label="Render > Render Animation (28:58)" />

---

## Glow im Compositor
<YT time={1884} videoId="zyIJQHlFQs0" label="Compositor für Post-Production (31:24)" />

### Node Setup
<YT time={1894} videoId="zyIJQHlFQs0" label="Use Nodes, Image Input (31:34)" />
<YT time={1904} videoId="zyIJQHlFQs0" label="Filter > Glare Node (31:44)" />
<YT time={1914} videoId="zyIJQHlFQs0" label="Glare Type: Fog Glow (31:54)" />
<YT time={1924} videoId="zyIJQHlFQs0" label="Threshold für Glow-Bereiche (32:04)" />

### Glow Refinement
<YT time={1934} videoId="zyIJQHlFQs0" label="Size Parameter für Glow-Radius (32:14)" />
<YT time={1944} videoId="zyIJQHlFQs0" label="Mix Node für Glow-Intensität (32:24)" />
<YT time={1954} videoId="zyIJQHlFQs0" label="Factor Control für Glow-Amount (32:34)" />

---

## EXR Sequences arbeiten
<YT time={2027} videoId="zyIJQHlFQs0" label="EXR Sequence Handling (33:47)" />

### File Management
<YT time={2037} videoId="zyIJQHlFQs0" label="Image Editor: Open Image (33:57)" />
<YT time={2047} videoId="zyIJQHlFQs0" label="First Frame EXR auswählen (34:07)" />
<YT time={2057} videoId="zyIJQHlFQs0" label="Image Sequence für alle Frames (34:17)" />

### Compositor Integration
<YT time={2067} videoId="zyIJQHlFQs0" label="Movie Clip Node für Sequence (34:27)" />
<YT time={2077} videoId="zyIJQHlFQs0" label="Auto-Refresh für Live Updates (34:37)" />

---

## Video Export
<YT time={2123} videoId="zyIJQHlFQs0" label="Final Video File Export (35:23)" />

### Export Settings
<YT time={2133} videoId="zyIJQHlFQs0" label="File Format: FFmpeg Video (35:33)" />
<YT time={2143} videoId="zyIJQHlFQs0" label="Container: MPEG-4, Codec: H.264 (35:43)" />
<YT time={2153} videoId="zyIJQHlFQs0" label="Output Quality: High Quality (35:53)" />
<YT time={2163} videoId="zyIJQHlFQs0" label="Render Animation für Final Video (36:03)" />

---

## Advanced Techniques
<YT time={2222} videoId="zyIJQHlFQs0" label="Advanced Part Preview (37:02)" />

### Multiple Emitters
<YT time={2232} videoId="zyIJQHlFQs0" label="Mehrere Emitter für Complex Effects (37:12)" />
<YT time={2242} videoId="zyIJQHlFQs0" label="Force Fields für Wind Effects (37:22)" />
<YT time={2252} videoId="zyIJQHlFQs0" label="Collision Objects für Interaction (37:32)" />

### Performance Optimization
<YT time={2262} videoId="zyIJQHlFQs0" label="Adaptive Time Steps (37:42)" />
<YT time={2272} videoId="zyIJQHlFQs0" label="Cache Memory Management (37:52)" />
<YT time={2282} videoId="zyIJQHlFQs0" label="Network Rendering Setup (38:02)" />

---

## Zusammenfassung

Dieses Tutorial demonstriert den kompletten Fireball-Workflow:

**Simulation Setup:**
- Smoke Domain und Emitter Configuration
- Flow Types und Emission Controls
- Adaptive Domain für Performance

**Animation Techniques:**
- Real-time Keyframe Animation
- Initial Velocity für Movement Impact
- Sub Steps für Frame-Quality

**Quality Optimization:**
- Resolution Divisions vs Performance
- Noise Upres für Detail ohne Movement-Change
- Dissolve vs Adaptive Domain Balance

**Volumetric Shading:**
- Principled Volume mit Volume Info
- ColorRamps für Flame/Temperature/Density
- Black Body Radiation Controls

**Production Pipeline:**
- Viewport Render für Previews
- EXR Sequences für Post-Production
- Compositor Glow Effects
- Video Export Optimization

**Advanced Features:**
- Multiple Emitter Systems
- Force Fields Integration
- Performance Management


