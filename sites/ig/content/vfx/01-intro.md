---
title: Intro
---


<StickMe>
## Das berühmte Blender Donut Tutorial (4+ Stunden)

<Youtube id="4haAdmHqGOw" />
</StickMe>

## Zusammenfassung: Der komplette Blender-Einstieg mit dem Donut

Dieses umfassende Tutorial von Andrew Price (Blender Guru) ist DAS Standard-Tutorial für Blender-Anfänger. In über 4 Stunden lernen Sie alle wichtigen Grundlagen von Blender, während Sie einen fotorealistischen Donut mit Glasur und Streuseln erstellen. Das Tutorial wurde bereits millionenfach angeschaut und hat unzähligen Anfängern den Einstieg in die 3D-Welt ermöglicht.

### Schnellnavigation
<YT time={0} videoId="4haAdmHqGOw" label="Tutorial starten" />
<YT time={916} videoId="4haAdmHqGOw" label="Donut modellieren (15:16)" />
<YT time={3428} videoId="4haAdmHqGOw" label="Glasur hinzufügen (57:08)" />
<YT time={5856} videoId="4haAdmHqGOw" label="Streusel erstellen (1:37:36)" />
<YT time={14091} videoId="4haAdmHqGOw" label="Animation beginnen (3:54:51)" />
<YT time={17291} videoId="4haAdmHqGOw" label="Finales Video exportieren (4:48:11)" />

### Teil 1: Grundlagen & Interface
<YT time={0} videoId="4haAdmHqGOw" label="Download und Installation" />
<YT time={135} videoId="4haAdmHqGOw" label="Render-Modus & Navigation" />
<YT time={393} videoId="4haAdmHqGOw" label="Materialien ändern" />

**Was Sie lernen werden:**
- **Navigation im 3D-Raum**: Mit der mittleren Maustaste können Sie die Kamera um Objekte rotieren (Orbit), die Ansicht verschieben (Pan mit Shift+MMB) und zoomen (Scrollrad)
- **Die zwei Hauptmodi**: Object Mode zum Auswählen und Transformieren ganzer Objekte, Edit Mode (Tab-Taste) zum Bearbeiten einzelner Vertices, Edges und Faces
- **Die wichtigsten Hotkeys**:
  - G (Grab/Move): Objekte bewegen
  - R (Rotate): Objekte rotieren
  - S (Scale): Objekte skalieren
  - Shift+A: Neues Objekt hinzufügen
  - X/Y/Z nach G, R oder S: Bewegung auf bestimmte Achse beschränken
- **Die Blender-Philosophie**: Arbeiten mit Hotkeys statt Menüs für schnelleren Workflow

### Teil 2: Donut-Modellierung
<YT time={916} videoId="4haAdmHqGOw" label="Torus hinzufügen" />
<YT time={1346} videoId="4haAdmHqGOw" label="Proportional Editing" />
<YT time={1889} videoId="4haAdmHqGOw" label="Form anpassen" />
<YT time={2496} videoId="4haAdmHqGOw" label="Subdivision Surface Modifier" />

**Wichtige Modellierungstechniken:**
- **Torus als Ausgangspunkt**: Sie beginnen mit einem Torus-Primitiv (32 Major, 12 Minor Segments) - die perfekte Grundform für einen Donut
- **Proportional Editing (O-Taste)**: Ermöglicht organische Verformungen, bei denen benachbarte Vertices automatisch mit bewegt werden - essentiell für natürlich aussehende Formen
- **Shade Smooth**: Verwandelt eckige Polygone in weich aussehende Oberflächen ohne zusätzliche Geometrie hinzuzufügen
- **Subdivision Surface Modifier**: Erhöht intelligent die Polygonanzahl für glatte, hochauflösende Meshes. Wichtig: Viewport und Render können unterschiedliche Subdivision-Level haben
- **Loop Cuts (Ctrl+R)**: Fügen Sie strategisch neue Edge Loops hinzu, um mehr Kontrolle über die Form zu erhalten

### Teil 3: Die Glasur
<YT time={2975} videoId="4haAdmHqGOw" label="Extrusion für Glasur" />
<YT time={3428} videoId="4haAdmHqGOw" label="Shrinkwrap Modifier" />
<YT time={3674} videoId="4haAdmHqGOw" label="Sculpting-Tools" />

**Sculpting-Werkzeuge im Detail:**
- **Inflate Brush**: Bläht die Glasur auf und gibt ihr Volumen - simuliert das natürliche Verlaufen der Glasur
- **Grab Brush**: Zieht und formt größere Bereiche - perfekt für das charakteristische "Herunterlaufen" der Glasur
- **Mask Brush (M-Taste)**: Schützt bestimmte Bereiche vor Veränderungen - wichtig, um nur die Glasur und nicht den Donut zu bearbeiten
- **Smooth Brush**: Glättet raue Stellen und sorgt für einen gleichmäßigen Fluss der Glasur
- **Shrinkwrap Modifier**: Lässt die Glasur perfekt am Donut "kleben" und folgt dessen Form

### Teil 4: Die Arbeitsplatte
<YT time={4366} videoId="4haAdmHqGOw" label="Arbeitsplatte erstellen" />
<YT time={4764} videoId="4haAdmHqGOw" label="Textur hinzufügen" />
<YT time={5074} videoId="4haAdmHqGOw" label="Texture Painting" />

**Texturierungs-Workflow:**
- **UV Unwrapping**: Lernen Sie, wie 3D-Oberflächen in 2D "ausgepackt" werden für Texturen
- **Texture Painting**: Malen Sie direkt auf dem 3D-Modell für realistische Abnutzung und Details
- **PBR-Texturen**: Arbeiten mit Base Color, Roughness und Normal Maps für fotorealistische Materialien

### Teil 5: Streusel-System
<YT time={5856} videoId="4haAdmHqGOw" label="Geometry Nodes Setup" />
<YT time={6151} videoId="4haAdmHqGOw" label="Weight Painting" />
<YT time={6895} videoId="4haAdmHqGOw" label="Streusel-Dichte anpassen" />
<YT time={7373} videoId="4haAdmHqGOw" label="Streusel modellieren" />

**Geometry Nodes - Das prozedurale System:**
- **Distribute Points on Faces**: Verteilt automatisch Punkte auf der Oberfläche, wo später die Streusel platziert werden
- **Weight Painting für präzise Kontrolle**: Sie malen direkt auf dem Modell, wo Streusel erscheinen sollen (rot = viele Streusel, blau = keine Streusel)
- **Randomisierung für Realismus**:
  - Zufällige Rotation für natürliche Verteilung
  - Variation in der Größe (0.8x bis 1.2x)
  - Verschiedene Streusel-Formen aus einer Collection
- **Collections als Objektbibliothek**: Organisieren Sie verschiedene Streusel-Typen (lang, kurz, Kugeln) in Collections für einfache Verwaltung
- **Instance on Points**: Der Node, der die eigentliche Magie bewirkt - platziert Objekte an den verteilten Punkten

### Teil 6: Materialien & Shading
<YT time={8584} videoId="4haAdmHqGOw" label="Materialien zuweisen" />
<YT time={8858} videoId="4haAdmHqGOw" label="Metallische Streusel" />
<YT time={9335} videoId="4haAdmHqGOw" label="Render Engines (Cycles vs Eevee)" />

**Shader-Grundlagen:**
- **Principled BSDF**: Der Universalshader für fast alle Materialien
- **Subsurface Scattering**: Lässt Licht durch die Glasur scheinen für realistisches Aussehen
- **Roughness-Werte**: Bestimmen, wie glänzend oder matt eine Oberfläche ist
- **Cycles vs. Eevee**: Cycles für fotorealistische Ergebnisse (aber langsamer), Eevee für Echtzeit-Preview

### Teil 7: Szene & Beleuchtung
<YT time={10032} videoId="4haAdmHqGOw" label="Teller modellieren" />
<YT time={11923} videoId="4haAdmHqGOw" label="Küchen-Umgebung" />
<YT time={12204} videoId="4haAdmHqGOw" label="Fenster hinzufügen" />
<YT time={12825} videoId="4haAdmHqGOw" label="Beleuchtung optimieren" />
<YT time={13166} videoId="4haAdmHqGOw" label="Color Management" />

**Beleuchtung und Umgebung:**
- **Drei-Punkt-Beleuchtung**: Key Light (Hauptlicht), Fill Light (Aufhellung), Rim Light (Kantenlicht)
- **HDRI-Beleuchtung**: Verwenden Sie 360°-Bilder für realistische Umgebungsbeleuchtung
- **Area Lights für Fenster**: Simulieren Sie natürliches Tageslicht
- **Color Management**: Filmic für größeren Dynamikumfang, sRGB für Standard-Ausgabe
- **Light Linking**: Kontrollieren Sie, welche Lichter welche Objekte beleuchten

### Teil 8: Compositing
<YT time={13518} videoId="4haAdmHqGOw" label="Echtzeit-Compositing" />

**Compositing-Techniken im Detail:**
- **Render Layers**: Trennen Sie Vordergrund und Hintergrund für flexible Nachbearbeitung
- **Glare Node**: Fügt realistisches Glühen zu hellen Bereichen hinzu (besonders schön bei der Glasur)
- **Color Balance**: Justieren Sie Highlights, Midtones und Shadows separat
- **Lens Distortion**: Simuliert echte Kamera-Objektive für mehr Realismus
- **Denoise Node**: Entfernt Rauschen bei niedrigen Sample-Zahlen
- **Cryptomatte**: Ermöglicht nachträgliche Masken ohne erneutes Rendern

### Teil 9: Animation
<YT time={14091} videoId="4haAdmHqGOw" label="Keyframe-Grundlagen" />
<YT time={14418} videoId="4haAdmHqGOw" label="Parenting & Empty Objects" />
<YT time={14531} videoId="4haAdmHqGOw" label="Dope Sheet & Graph Editor" />
<YT time={14795} videoId="4haAdmHqGOw" label="Skalierung animieren" />

**Animations-Grundlagen ausführlich:**
- **Keyframes setzen**: Mit der I-Taste speichern Sie die aktuelle Position/Rotation/Skalierung zu einem bestimmten Zeitpunkt
- **Die 12 Prinzipien der Animation**: Besonders wichtig sind Ease In/Out (langsames Starten und Stoppen) und Anticipation (Vorbereitung der Bewegung)
- **Graph Editor**: Hier sehen und bearbeiten Sie die Bewegungskurven - flache Kurven = langsame Bewegung, steile Kurven = schnelle Bewegung
- **Dope Sheet**: Übersicht aller Keyframes für besseres Timing
- **Auto Keying**: Automatisches Setzen von Keyframes bei Änderungen

### Teil 10: Rendering & Export
<YT time={15480} videoId="4haAdmHqGOw" label="Pre-Rendering Checkliste" />
<YT time={15720} videoId="4haAdmHqGOw" label="Fehlersuche (Intersections)" />
<YT time={15874} videoId="4haAdmHqGOw" label="Belichtung & Farben prüfen" />
<YT time={16289} videoId="4haAdmHqGOw" label="Details hinzufügen" />
<YT time={16622} videoId="4haAdmHqGOw" label="Motion Blur aktivieren" />
<YT time={17139} videoId="4haAdmHqGOw" label="Video-Editing in Blender" />
<YT time={17291} videoId="4haAdmHqGOw" label="Finales Video exportieren" />

### Wichtige Tipps für Anfänger

**Die 80/20-Regel:**
- Nur 20% der Blender-Features werden 80% der Zeit genutzt
- Fokussieren Sie sich auf die Grundlagen, nicht auf jedes Detail
- Die wichtigsten 20%: Modellierung, Materialien, Beleuchtung, Rendering

**Häufige Anfängerfehler und wie Sie sie vermeiden:**
- **Zu hohe Polygonzahl**: Beginnen Sie immer mit niedriger Auflösung und fügen Sie Details nur wo nötig hinzu
- **Fehlende Benennung**: Geben Sie ALLEN Objekten sinnvolle Namen - "Cube.047" hilft niemandem
- **Kein Speichern**: Speichern Sie alle 10 Minuten (Strg+S) und nutzen Sie inkrementelle Saves (Strg+Shift+S)
- **Unorganisierte Szene**: Nutzen Sie Collections wie Ordner - trennen Sie Donut, Umgebung, Lichter etc.
- **Proportionen ignorieren**: Verwenden Sie Referenzbilder und achten Sie auf realistische Größenverhältnisse
- **Apply Scale vergessen**: Nach dem Skalieren im Object Mode immer Strg+A → Scale anwenden

**Render-Optimierung:**
- Eevee für schnelle Previews
- Cycles für finales Rendering
- Samples anpassen für Qualität vs. Geschwindigkeit
- Denoising nutzen für saubere Bilder

### Was Sie nach diesem Tutorial können werden

**Konkrete Fähigkeiten:**
- **3D-Modellierung**: Sie können organische und harte Oberflächen modellieren
- **Sculpting**: Sie beherrschen die Grundlagen des digitalen Bildhauens
- **Texturierung**: Sie können UV-Maps erstellen und Texturen malen
- **Shading**: Sie verstehen das Node-System und können realistische Materialien erstellen
- **Beleuchtung**: Sie können Szenen professionell ausleuchten
- **Animation**: Sie können Objekte animieren und Bewegungskurven anpassen
- **Rendering**: Sie kennen die Unterschiede zwischen Render-Engines und optimale Einstellungen
- **Compositing**: Sie können Ihre Renders nachbearbeiten

**Ihr Portfolio-Stück:**
Ein fotorealistischer, animierter Donut mit Glasur und Streuseln in einer stimmungsvollen Küchenszene - das perfekte erste Projekt für Ihr 3D-Portfolio!

**Warum dieses Tutorial so wertvoll ist:**
Dieses Tutorial deckt ALLE Kernbereiche von Blender ab. Nach dem Durcharbeiten haben Sie nicht nur einen Donut erstellt, sondern verstehen die komplette Pipeline von der Idee bis zum finalen Render. Sie sind dann bereit für eigene Projekte!
