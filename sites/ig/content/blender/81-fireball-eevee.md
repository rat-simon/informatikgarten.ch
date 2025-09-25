---
title: 🔥 Feuer simulieren in EEVEE
---
# Feuer simulieren in EEVEE

<StickMe>
## Tutorial-Video

<Youtube id="LYy_YaoMTck" />
</StickMe>

## Zusammenfassung: Professionelle Feuer-Simulationen in Blender EEVEE

Dieses ausführliche Tutorial von Blender Made Easy zeigt Ihnen Schritt für Schritt, wie Sie realistische Feuer-Simulationen in Blender EEVEE erstellen. Als Teil der "Beginner's Guide to Simulations" Series lernen Sie alle wichtigen Aspekte der Gas-Simulation kennen - von der Grundkonfiguration über erweiterte Shader-Techniken bis hin zu Performance-Optimierungen.

### Schnellnavigation
<YT time={0} videoId="LYy_YaoMTck" label="Tutorial starten (0:00)" />
<YT time={63} videoId="LYy_YaoMTck" label="Flow Object erstellen (1:03)" />
<YT time={340} videoId="LYy_YaoMTck" label="Domain konfigurieren (5:40)" />
<YT time={470} videoId="LYy_YaoMTck" label="Wind-Kraft hinzufügen (7:50)" />
<YT time={578} videoId="LYy_YaoMTck" label="Feuer-Material & EEVEE Settings (9:38)" />
<YT time={951} videoId="LYy_YaoMTck" label="Abschluss & Tipps (15:51)" />

## Teil 1: Grundlagen der Feuer-Simulation

### Was sind Gas-Simulationen?
<YT time={21} videoId="LYy_YaoMTck" label="Simulation verstehen (0:21)" />
Feuer- und Rauch-Simulationen sind Teil des Fluid-Systems in Blender:
- **Voxel-basiert**: Simulation generiert 3D-Pixel (Voxel) mit Informationen zu Hitze, Dichte und Geschwindigkeit
- **Auflösungsabhängig**: Höhere Domain-Auflösung = kleinere Voxel = bessere Qualität = längere Render-Zeit
- **Datentypen**: Heat (Hitze), Density (Dichte), Velocity (Geschwindigkeit)

### Projekt-Setup
<YT time={67} videoId="LYy_YaoMTck" label="Projekt vorbereiten (1:07)" />
- Standard-Cube löschen (X → Delete)
- Saubere Szene für optimale Performance

## Teil 2: Flow Object (Feuer-Emitter) erstellen

### Grundgeometrie
<YT time={76} videoId="LYy_YaoMTck" label="Icosphere hinzufügen (1:16)" />
- **Shift+A** → Mesh → Icosphere
- **Subdivisions**: 3-4 (für glattere Oberfläche)
- **Skalierung**: Alle Achsen auf 1m setzen (N-Panel verwenden)
- **WICHTIG**: Ctrl+A → Apply Scale (Scale-Werte zurück auf 1.0)

### Domain automatisch erstellen
<YT time={108} videoId="LYy_YaoMTck" label="Quick Smoke (1:48)" />
- **Object** → **Quick Effects** → **Quick Smoke**
- Erstellt automatisch Domain und Basis-Material
- Domain mit G+Z nach oben verschieben (Sphere näher zum Boden)
- **Ctrl+A** → Apply Scale auch für Domain

## Teil 3: Flow Object Einstellungen

### Basis-Konfiguration
<YT time={144} videoId="LYy_YaoMTck" label="Flow Type ändern (2:24)" />
- **Physics Properties** → **Flow Type**: **Fire** (nicht "Fire + Smoke")
- **Fire**: Erzeugt Feuer mit wenig Rauch
- **Fire + Smoke**: Zu viel Rauch für realistische Flammen

### Erweiterte Flow-Parameter
<YT time={191} videoId="LYy_YaoMTck" label="Fuel-Einstellungen (3:11)" />

**Fuel (Brennstoff)**:
- **Wert**: 1.3 (höher = chaotischere Flammen)
- Kontrolliert Flammenintensität und Bewegung

**Surface Emission**:
- **Wert**: 1.0 (runter von Standard)
- Bringt Feuer näher zur Mesh-Oberfläche
- Reduziert Gap zwischen Objekt und Flammen

### Texture-basierte Emission
<YT time={242} videoId="LYy_YaoMTck" label="Texture aktivieren (4:02)" />

**Texture erstellen**:
- **Properties** → **Texture** → New Texture
- **Type**: **Clouds**
- **Colors** → **Contrast**: 5 (mehr Definition zwischen Weiss/Schwarz)

**Texture anwenden**:
- **Physics Properties** → **Texture**: Clouds-Texture auswählen
- **Size**: 0.5 (kleinere Patches für detaillierteres Feuer)
- **Weiss** = Feuer-Emission, **Schwarz** = keine Emission

### Texture-Animation
<YT time={294} videoId="LYy_YaoMTck" label="Texture animieren (4:54)" />
- **Frame 1**: Offset auf 0, Keyframe setzen (I-Taste)
- **Frame 200**: Offset auf 1.5, Keyframe setzen
- **Timeline**: Beide Keyframes auswählen → **T** → **Linear**
- Ergebnis: Gleichmässige Texture-Bewegung für organischeres Aussehen

## Teil 4: Domain-Konfiguration

### Auflösungseinstellungen
<YT time={345} videoId="LYy_YaoMTck" label="Resolution Divisions (5:45)" />

**Resolution Divisions** (Simulationsqualität):
- **Schwächere Computer**: 96-128
- **Stärkere Computer**: 256
- **Performance vs. Qualität**: Höhere Werte = besseres Aussehen = längere Bake-Zeit

### Timing und Dynamik
<YT time={372} videoId="LYy_YaoMTck" label="Time Scale (6:12)" />
- **Time Scale**: 1.2 (Standard 1.0 ist oft zu langsam)
- **End Frame**: 200 (für Animation)
- **Type**: **Modular** (für Baking)
- **Is Resumable**: Aktivieren (Bake kann unterbrochen/fortgesetzt werden)

### Adaptive Domain
<YT time={394} videoId="LYy_YaoMTck" label="Adaptive Domain (6:34)" />
- **Adaptive Domain**: Aktivieren
- **Threshold**: 0 (verhindert ungewolltes Clipping)
- **Vorteil**: Domain schrumpft automatisch auf Feuer-Bereich → schnelleres Baking

### Dissolve-Effekt
<YT time={435} videoId="LYy_YaoMTck" label="Dissolve aktivieren (7:15)" />
- **Dissolve**: Aktivieren
- **Time**: 20 Frames (Auflösungsgeschwindigkeit)
- **Slow**: Aktivieren (graduellerer Übergang)

### Flame-Parameter
<YT time={450} videoId="LYy_YaoMTck" label="Reaction Speed (7:30)" />
- **Reaction Speed**: 0.6
- **Höhere Werte** = kürzere Flammen
- **Niedrigere Werte** = längere Flammen

## Teil 5: Wind Force Field für Realismus

### Wind-Kraft erstellen
<YT time={476} videoId="LYy_YaoMTck" label="Wind Force Field (7:56)" />
- **Add** → **Force Field** → **Wind**
- **Front View** (Numpad 1) → 90° rotieren
- Links neben dem Feuer positionieren

### Wind-Einstellungen
<YT time={490} videoId="LYy_YaoMTck" label="Wind-Parameter (8:10)" />
- **Strength**: 0 (Basis-Windstärke)
- **Flow**: 0
- **Noise**: 0.2 (für zufällige Bewegung)

### Animierte Wind-Stärke
<YT time={508} videoId="LYy_YaoMTck" label="Wind Animation (8:28)" />

**Graph Editor Setup**:
- **Strength**: Keyframe in Frame 1 setzen
- **View** split → **Graph Editor**
- **Modifiers** → **Add Modifier** → **Noise**

**Noise-Parameter**:
- **Scale**: 15
- **Strength**: 0.1
- **Limits Modifier** hinzufügen: **Min Y** auf 0 (keine negativen Werte)

## Teil 6: Material und EEVEE-Optimierung

### Basis-Material verstehen
<YT time={595} videoId="LYy_YaoMTck" label="Material Basics (9:55)" />
- **Principled Volume Shader**: Automatisch durch Quick Smoke erstellt
- **Render Preview** (Z-Taste): Noch kein sichtbares Feuer

### Volume Info Node Setup
<YT time={636} videoId="LYy_YaoMTck" label="Volume Info Node (10:36)" />
- **Shift+A** → Search → **Volume Info**
- **Flame** Attribute → **Emission Strength** (Principled Volume)
- **Math Node** (Multiply) hinzufügen: **Value 50** für Helligkeit

### EEVEE Volume Settings
<YT time={683} videoId="LYy_YaoMTck" label="Volumetric Settings (11:23)" />

**Render Properties** → **Volumetrics**:
- **Tile Size**: **2 Pixels** (statt 8 für mehr Detail)
- Dramatische Qualitätsverbesserung bei geringem Performance-Verlust

### Camera und Lighting Setup
<YT time={709} videoId="LYy_YaoMTck" label="Camera Setup (11:49)" />
- **Front View** (Numpad 1)
- **Ctrl+Alt+Numpad 0**: Kamera zu aktueller Sicht
- **G + Middle Mouse**: Kamera zurückbewegen
- **Resolution**: 1080x1080 (quadratisch)

### Volumetric Clipping optimieren
<YT time={752} videoId="LYy_YaoMTck" label="Start/End Frames (12:32)" />

**Problem**: 64 Samples über 100m Tiefe verteilt
**Lösung**: 
- **Start**: 4m (bis Feuer leicht verschwindet)
- **End**: 8m
- **Ergebnis**: 64 Samples über nur 4m = deutlich mehr Detail

**Zusätzliche Einstellungen**:
- **Volumetric Shadows**: Aktivieren
- **World Color**: Schwarz (für besseren Kontrast)

### Farb-Setup mit ColorRamp
<YT time={813} videoId="LYy_YaoMTck" label="Color Ramp (13:33)" />

**ColorRamp hinzufügen**:
- **Shift+A** → **Converter** → **ColorRamp**
- **Flame** → **ColorRamp** → **Emission Color**

**Farb-Handles**:
1. **Links (Rot)**: Flame-Basis
2. **Mitte (Schwarz)**: Für Detail-Kontrast  
3. **Rechts (Gelb)**: Flame-Spitzen

### Color Management
<YT time={874} videoId="LYy_YaoMTck" label="Color Management (14:34)" />
- **Render Properties** → **Color Management**
- **View Transform**: **Filmic** (statt AgX)
- **Look**: **High Contrast**
- **Ergebnis**: Lebendigere, realistischere Feuer-Farben

### Finale Material-Optimierung
<YT time={898} videoId="LYy_YaoMTck" label="Final Adjustments (14:58)" />
- **ColorRamp**: Schwarzen Handle leicht nach rechts
- **Orange**: Sättigung erhöhen
- **Multiply Value**: ~40 (finale Helligkeit)

## Teil 7: Rauch-Integration (Optional)

### Rauch sichtbar machen
<YT time={914} videoId="LYy_YaoMTck" label="Smoke hinzufügen (15:14)" />
- **Lamp** näher zum Feuer bewegen
- **Domain** → **Density**: 10
- **Ergebnis**: Rauch wird zusätzlich zum Feuer sichtbar

## Teil 8: Finale Schritte und Render

### Render-Vorbereitung
<YT time={954} videoId="LYy_YaoMTck" label="Render Prep (15:54)" />
- **Flow Object**: In Outliner → Camera-Icon deaktivieren (nicht im Render sichtbar)
- **Start/End Frame Warnung**: Bei Kamera-Animation auf Clipping-Bereiche achten

### Export-Einstellungen
<YT time={967} videoId="LYy_YaoMTck" label="Export Settings (16:07)" />
- **Output Properties** → Output-Pfad festlegen
- **File Format**: Movie-Format wählen
- **Render Animation** für finale Ausgabe

## Technische Erkenntnisse

### Performance-Optimierung
- **Adaptive Domain**: Reduziert Bake-Zeit erheblich
- **Resolution Balance**: 96-256 je nach Hardware
- **Tile Size**: 2 Pixels optimal für Quality/Performance-Balance

### Realismus-Faktoren
- **Wind-Animation**: Zufällige Bewegung durch Noise Modifier
- **Texture-Animation**: Organische Emission-Verteilung
- **ColorRamp-Setup**: Realistische Flammen-Farbverläufe
- **Volumetric Clipping**: Maximale Detail-Ausnutzung

### EEVEE-Spezifika
- **Filmic Color Management**: Bessere Farb-Darstellung als AgX
- **Volumetric Settings**: Start/End Frame kritisch für Qualität
- **Volume Info Node**: Präzise Kontrolle über Flame-Attribute

## Erweiterte Anwendungen

### Serie "Beginner's Guide to Simulations"
Dieses Tutorial ist Teil einer umfassenden Serie:
1. **Fluid Simulation** (vorheriges Video)
2. **Fire Simulation** (aktuelles Video)  
3. **Rigid Body Simulation** (nächstes video)

### Praktische Anwendungen
- **VFX-Shots**: Integration in Live-Action-Material
- **Motion Graphics**: Abstrakte Feuer-Effekte
- **Architektur-Visualisierung**: Kamin-/Feuerstellen-Simulation
- **Game Assets**: Optimierte Feuer-Texturen

### Experimentier-Möglichkeiten
- **Verschiedene Flow-Geometrien**: Komplexere Emitter-Formen
- **Multiple Domains**: Verschiedene Feuer-Bereiche
- **Particle Integration**: Kombination mit Funken-Systemen
- **Displacement Mapping**: Detailliertere Flammen-Oberflächen

**Empfohlene nächste Schritte:**
- Experimentieren mit verschiedenen Texture-Typen
- Wind-Pattern für spezifische Effekte entwickeln
- Integration in grössere Szenen mit Beleuchtung
- Performance-Tests für verschiedene Hardware-Konfigurationen