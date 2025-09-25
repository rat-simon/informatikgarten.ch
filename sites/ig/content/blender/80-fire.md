---
title: 🔥 Feuer-Effekt in EEVEE
---
# Feuer-Effekt in EEVEE

<StickMe>
## Tutorial-Video

<Youtube id="orNRbPw-KZ0" />
</StickMe>

## Zusammenfassung: Realistische Feuer-Effekte ohne Volumetrics

Dieses kompakte Tutorial von CG Patrick zeigt, wie Sie einen realistischen Flammen-Effekt in Blender EEVEE erstellen - ganz ohne komplizierte Volumetrics. In nur 11 Minuten lernen Sie eine effiziente Methode mit Shader-Nodes und Modifiern, um ein beeindruckendes Feuer zu animieren, das in Echtzeit rendert.

### Schnellnavigation
<YT time={0} videoId="orNRbPw-KZ0" label="Tutorial starten (0:00)" />
<YT time={34} videoId="orNRbPw-KZ0" label="Flammen-Geometrie erstellen (0:34)" />
<YT time={73} videoId="orNRbPw-KZ0" label="Shader-Effekte hinzufügen (1:13)" />
<YT time={126} videoId="orNRbPw-KZ0" label="Gradient Mapping (2:06)" />
<YT time={224} videoId="orNRbPw-KZ0" label="Node Setup (3:44)" />
<YT time={264} videoId="orNRbPw-KZ0" label="Alpha Blend aktivieren (4:24)" />
<YT time={304} videoId="orNRbPw-KZ0" label="Animation hinzufügen (5:04)" />
<YT time={359} videoId="orNRbPw-KZ0" label="Modifiers für Bewegung (5:59)" />
<YT time={496} videoId="orNRbPw-KZ0" label="Material duplizieren (8:16)" />
<YT time={586} videoId="orNRbPw-KZ0" label="Finales Ergebnis (9:46)" />

## Teil 1: Grundform und Setup

### Basisgeometrie erstellen
<YT time={34} videoId="orNRbPw-KZ0" label="Flammen-Grundform (0:34)" />
- Standard-Sphere löschen und neue Sphere hinzufügen
- In Edit Mode wechseln
- Mit Proportional Editing die oberen Vertices nach oben ziehen
- Untere Hälfte löschen → Flammenform ist fertig

### Render-Einstellungen
<YT time={63} videoId="orNRbPw-KZ0" label="Shading Tab & Bloom (1:03)" />
- Zu Shading Tab wechseln und Hintergrund abdunkeln
- In Properties Tab: Bloom-Optionen aktivieren für realistischen Glow-Effekt

## Teil 2: Shader-Nodes Setup

### Grundlegende Node-Struktur
<YT time={73} videoId="orNRbPw-KZ0" label="Nodes hinzufügen (1:13)" />
- Principled BSDF löschen (wird nicht benötigt)
- **Mix Shader** hinzufügen und mit Surface Input verbinden
- **Transparent BSDF** (oben) und **Emission Shader** (unten) mit Mix Shader verbinden
- **ColorRamp Node** und **Noise Texture** hinzufügen
- ColorRamp mit Factor des Mix Shaders verbinden
- Noise Texture mit ColorRamp verbinden

### Noise Texture Einstellungen
<YT time={111} videoId="orNRbPw-KZ0" label="Noise Settings (1:51)" />
- Mit Ctrl+T Mapping Node hinzufügen (Node Wrangler)
- Texture Coordinate auf Generated belassen
- **Scale**: 3
- **Detail**: 16 (maximaler Wert für feine Details)
- **Distortion**: 3

### ColorRamp anpassen
<YT time={122} videoId="orNRbPw-KZ0" label="ColorRamp justieren (2:02)" />
- Schwarzen Handle der ColorRamp zur Mitte ziehen
- Dies kontrolliert die Verteilung zwischen transparenten und leuchtenden Bereichen

## Teil 3: Gradient Mapping für Flammenform

### Gradient-System hinzufügen
<YT time={126} videoId="orNRbPw-KZ0" label="Gradient Setup (2:06)" />
- **Gradient Texture** und zusätzliche **ColorRamp** hinzufügen
- Mapping Node duplizieren für Gradient Texture
- **Mix RGB Node** hinzufügen: Noise (oben), Gradient (unten)
- Mix Mode auf **Multiply** setzen, Clamp aktivieren, Factor auf 1.0

### Gradient-Einstellungen
<YT time={207} videoId="orNRbPw-KZ0" label="Gradient Rotation (3:27)" />
- Mapping für Gradient: **Y-Rotation** auf -90°
- **X-Location** auf 1.6 setzen
- Dies begrenzt den Effekt auf die Flammenspitze

## Teil 4: Material-Eigenschaften finalisieren

### Transparency aktivieren
<YT time={264} videoId="orNRbPw-KZ0" label="Alpha Blend (4:24)" />
- **M** drücken für Material Properties
- Blend Mode auf **Alpha Blend** umstellen

### Emission anpassen
<YT time={275} videoId="orNRbPw-KZ0" label="Emission Color (4:35)" />
- Emission Shader: Farbe auf Rot ändern
- **Strength** auf 50 erhöhen für intensives Leuchten

### Funktionsweise verstehen
<YT time={225} videoId="orNRbPw-KZ0" label="Node-Logik erklärt (3:45)" />
- **Mix Factor** steuert Verteilung der Shader
- **Schwarz** = Transparent BSDF (unsichtbar)
- **Weiss** = Emission Shader (leuchtend)
- Diese Technik funktioniert für alle Node-basierten Effekte

## Teil 5: Animation der Flammen

### Grundanimation
<YT time={304} videoId="orNRbPw-KZ0" label="Noise Animation (5:04)" />
- Timeline-Fenster öffnen
- In Noise Texture Mapping: **Z-Location** animieren
- Frame 1: I-Taste für Keyframe (Wert 0)
- Frame 250: Z-Location auf -10, erneut I-Taste
- Ergebnis: Flammen bewegen sich nach oben

## Teil 6: Realistische Bewegung mit Modifiern

### Subsurf Modifier
<YT time={359} videoId="orNRbPw-KZ0" label="Subsurf hinzufügen (5:59)" />
- **Subsurf Modifier** hinzufügen
- Render Level auf 1 belassen (für Performance)

### Wave Modifier
<YT time={368} videoId="orNRbPw-KZ0" label="Wave Modifier (6:08)" />
- **Wave Modifier** hinzufügen
- **Normals**: X, Y, Z aktivieren
- **Height**: 0.1 (subtile Bewegung)
- **Speed**: 0.10
- **Width**: 0.9

### Deform Modifiers für seitliche Bewegung
<YT time={408} videoId="orNRbPw-KZ0" label="Deform Modifier (6:48)" />
- **Simple Deform Modifier** hinzufügen, Typ: **Bend**
- X-Axis: Frame 1 setzen, I-Taste für Keyframe
- Modifier duplizieren, zweiten auf **Y-Axis** setzen
- Beide bekommen Keyframes in Frame 1

### Noise Modifier im Graph Editor
<YT time={448} videoId="orNRbPw-KZ0" label="Noise Modifier (7:28)" />
- Window zu **Graph Editor** wechseln
- X-Axis Angle auswählen, **N** drücken
- **Noise Modifier** hinzufügen:
  - **Scale**: 6
  - **Strength**: 3
  - **Phase**: 1 (default)
- Noise Modifier zu Y-Axis kopieren
- **Offset** für Y-Axis ändern (für Variation)

## Teil 7: Layering für Realismus

### Zusätzliche Flammen-Ebenen
<YT time={507} videoId="orNRbPw-KZ0" label="Objekt duplizieren (8:27)" />
- Flammen-Objekt mit **Shift+D** duplizieren
- In Edit Mode kleiner skalieren
- **Material duplizieren** (wichtig!)

### Material-Variationen
<YT time={530} videoId="orNRbPw-KZ0" label="Material anpassen (8:50)" />
- ColorRamp der zweiten Ebene anpassen
- Noise Scale auf 0.9 reduzieren
- Subtile Unterschiede für natürlicheren Look

### Innere Flamme (optional)
<YT time={548} videoId="orNRbPw-KZ0" label="Innere Flamme (9:08)" />
- Erneut duplizieren und kleiner skalieren
- Obere Hälfte löschen
- Material duplizieren
- **Emission Strength**: 0.3
- **Farbe**: Weiss (für heissen Kern)

## Technische Erkenntnisse

### Performance-Vorteile
- **Echtzeit-Rendering** in EEVEE
- Keine Volumetrics erforderlich
- Funktioniert auch auf schwächerer Hardware

### Anpassungsmöglichkeiten
- Farben ändern für verschiedene Feuerarten
- Scale-Werte für Flammengrösse
- Modifier-Stärke für Bewegungsintensität
- Zusätzliche Ebenen für Komplexität

### Node-Prinzip verstehen
<YT time={225} videoId="orNRbPw-KZ0" label="Allgemeines Prinzip (3:45)" />
Das verwendete Prinzip (Mix Factor mit Noise) funktioniert für:
- Magische Effekte
- Rauch-Simulation
- Energiefelder
- Abstrakte Shader-Effekte

## Erweiterte Anwendungen

Das Tutorial zeigt eine Grundtechnik, die sich für viele andere Effekte adaptieren lässt. CG Patrick erwähnt weitere Videos mit ähnlichen Techniken für komplexere Setups.

**Empfohlene nächste Schritte:**
- Experimentieren mit verschiedenen Noise-Einstellungen
- Kombinieren mit Particle Systems
- Integration in grössere Szenen
- Verwendung für andere Elementar-Effekte