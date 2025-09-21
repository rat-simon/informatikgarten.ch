---
title: Handschrift simulieren
---

# Handschrift simulieren in Blender

<StickMe>
## Tutorial-Video

<Youtube id="vy_4rH7pRc0" />
</StickMe>

## Überblick

Dieses Tutorial zeigt, wie man handgeschriebenen Text und Linien in Blender mit Cloth-Simulation realistisch animiert. Die Technik funktioniert sowohl für einfache Strings als auch für komplexe Handschrift-Animationen mit Real-Footage-Integration.

## 1. Grundlegende String-Simulation

<YT time={33} videoId="vy_4rH7pRc0" label="Grundlegende String-Simulation (0:33)" />

### Curve erstellen
- Alles löschen und **Curve** hinzufügen
- **Tab** → Edit Mode → Drawing Tool verwenden
- Zurück zu **Object Mode** → **Right-click** → **Convert to Mesh**

### Cloth Simulation einrichten
- **Physics Properties** → **Cloth** aktivieren
- **Object Data Properties** → **Vertex Groups** → Plus-Icon
- **Tab** → Edit Mode → Ein Vertex auswählen (linkes Ende)
- **Assign** klicken → zurück zu **Object Mode**
- **Physics Properties** → **Pin Group** auf **Group** setzen

## 2. Sichtbarkeit und Material

<YT time={123} videoId="vy_4rH7pRc0" label="Sichtbarkeit und Material (2:03)" />

### Skin Modifier
- **Modifier Properties** → **Skin** hinzufügen
- **Tab** → Edit Mode → **X-Ray** aktivieren
- **A** → alle auswählen → **Ctrl+A** → Dicke anpassen
- **Subdivision Surface** Modifier hinzufügen
- **Smooth Shading** aktivieren

### Glowing Material
- **Material Properties** → **New** → Name: "String"
- **Surface** von **Principled BSDF** auf **Emission** ändern
- **Color** auf **Blackbody** setzen (Kelvin-Temperatur)
- **Strength** auf hohen Wert (z.B. 15)
- **Render Properties** → **Bloom** aktivieren
- **Viewport Shading** auf **Rendered** setzen

## 3. Handschrift-Animation

<YT time={314} videoId="vy_4rH7pRc0" label="Handschrift-Animation (5:14)" />

### Text schreiben
- Neue **Curve** erstellen → **Tab** → Edit Mode
- Mit **Drawing Tool** handgeschriebenen Text erstellen
- **Select Box Tool** für Nachbearbeitungen
- **V** → **Automatic** für weniger scharfe Kanten
- **Right-click** → **Convert to Mesh**

### Gleiche Simulation Setup
- **Physics Properties** → **Cloth**
- **Vertex Group** erstellen → Endpunkt auswählen
- **Pin Group** konfigurieren

## 4. Hook-System für Kontrolle

<YT time={390} videoId="vy_4rH7pRc0" label="Hook-System für Kontrolle (6:30)" />

### Hook erstellen
- **Tab** → Edit Mode → Gepinnten Vertex auswählen
- **Ctrl+H** → **Hook to New Object**
- **Empty Object** wird erstellt und mit Vertex verknüpft

### Modifier-Reihenfolge
- **Modifier Properties** → **Hook** vor **Cloth** verschieben
- Ermöglicht Real-Time-Kontrolle des Vertex
- **Scene Properties** → **Gravity** deaktivieren für Zero-G-Effekt

## 5. Writing Animation

<YT time={497} videoId="vy_4rH7pRc0" label="Writing Animation (8:17)" />

### Build Modifier
- **Physics Properties** → **Cache** → **Simulation Start**: Frame 60
- **Modifier Properties** → **Build** hinzufügen
- **Length**: 60 Frames (entspricht Simulation Start)
- **Build** vor **Skin** verschieben für bessere Darstellung

### Cache Management
- Bei Problemen: **Tab** → Edit → **Tab** → Object (Reset Cache)
- **Overlays** → **Relationship Lines** deaktivieren

## 6. Real-Footage Integration

<YT time={592} videoId="vy_4rH7pRc0" label="Real-Footage Integration (9:52)" />

### Video Background Setup
- **Shift+A** → **Plane** → **F2** → "Video Background"
- **R** → **X** → **90°** (Rotation)
- **G** → **Y** (nach hinten verschieben)
- **S** (hochskalieren)

### Video Texture
- **Material Properties** → **New** → "Background Texture"
- **Surface**: **Emission** → **Color**: **Image Texture**
- Video-Datei öffnen
- **Render Properties** → **Color Management** → **View Transform**: **Standard**

### Camera Setup
- **Shift+A** → **Camera**
- **View** → **Align View** → **Align Active Camera to View**
- **Material** → **Vector**: **Window** → **Extension**: **Clip**

## 7. Timeline und Timing

<YT time={799} videoId="vy_4rH7pRc0" label="Timeline und Timing (13:19)" />

### Video Analysis
- **Frames** auf hohen Wert (z.B. 2000)
- **Auto Refresh** aktivieren
- Timeline durchgehen für wichtige Momente:
  - **Writing Start**: Frame 249
  - **Grab**: Frame 439
  - **End**: Frame 700
- **M** → Marker setzen → **Ctrl+M** → umbenennen

## 8. Camera Matching

<YT time={857} videoId="vy_4rH7pRc0" label="Camera Matching (14:17)" />

### Focal Length anpassen
- Kamera-Eigenschaften: **Focal Length** auf 30mm
- **G** → **Y** → Kamera näher bewegen
- Bei Zero Gravity: Kamera rotieren für Alignment
- Grab-Frame für finale Positionierung verwenden

## 9. Rotoscoping mit Auto-Keying

<YT time={913} videoId="vy_4rH7pRc0" label="Rotoscoping mit Auto-Keying (15:13)" />

### Auto-Keying Setup
- **Physics Properties** → **Cloth** temporär deaktivieren
- **Auto Keying** aktivieren
- **Empty Object** auswählen

### Rotoscoping-Prozess
- **G** → Empty zur Hand-Position bewegen
- **Alt** + **Scroll** → 3-4 Frames vorwärts
- **G** → neue Position → automatischer Keyframe
- Prozess für gesamte Hand-Bewegung wiederholen
- Am Ende: **Auto Keying** DEAKTIVIEREN!

## 10. Final Simulation

<YT time={1050} videoId="vy_4rH7pRc0" label="Final Simulation (17:30)" />

### Timing koordinieren
- **Cloth Simulation** wieder aktivieren
- **Cache End**: Frame 700
- **Simulation Start**: Frame 439 (Grab)
- **Build Modifier Start**: Frame 249 (Writing Start)
- **Build Length**: 174 Frames (249 bis 439)

### Frame Rate
- **Output Properties** → **Frame Rate**: 30 FPS (Video-Match)
- **Physics Properties** → **Bake** für finale Simulation

## 11. Erweiterte Techniken

<YT time={1237} videoId="vy_4rH7pRc0" label="Erweiterte Techniken (20:37)" />

### Motion Capture Integration
- **Proportional Editing** (**O**) für Vertex-Radius-Anpassung
- **Ctrl+A** + **Scroll** für Dicke-Falloff
- **Add-on Integration** für MoCap-Daten

### Spider Web Simulation
- Komplexere Geometrie mit mehreren Pin-Points
- **Force Fields** für Wind-Effekte
- **Collision Objects** für Interaktion

## Wichtige Tipps

- **Immer Convert to Mesh** vor Cloth-Simulation
- **Hook vor Cloth** in Modifier-Stack
- **Auto-Keying nach Rotoscoping deaktivieren**
- **Bake Physics** für finale Ausgabe
- **Frame Rate** zwischen Video und Blender abgleichen
- **Proportional Editing** für realistische Verdickung
- **Cache Reset** über Edit Mode Toggle

## Weiterführende Möglichkeiten

- **Particle Systems** für komplexere Effekte
- **Force Fields** für externe Einflüsse
- **Collision Objects** für Interaktionen
- **Multi-Layer Rotoscoping** für komplexe Szenen
- **Motion Blur** für cineastische Qualität
