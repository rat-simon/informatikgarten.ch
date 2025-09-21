---
title: Physik-Simulationen
---

# Physik-Simulationen in Blender

<StickMe>
## Tutorial-Video

<Youtube id="2Dnks7C2q9U" />
</StickMe>

## Einführung

Rigid Body Simulationen sind ein mächtiges Werkzeug in Blender für realistische Physik-Animationen. Dieses Tutorial zeigt, wie man Stapel von Würfeln erstellt und diese mit verschiedenen Objekten umstösst, um beeindruckende physikalische Simulationen zu erstellen.

## 1. Grundlegende Rigid Body Einrichtung

<YT time={68} videoId="2Dnks7C2q9U" label="Grundlegende Rigid Body Einrichtung (1:08)" />

### Ersten Würfel erstellen
- Würfel hinzufügen und skalieren (`S` → `0.2`)
- Position anpassen (`G` → `Z` → `0.2`)
- In **Physics Properties** → **Rigid Body** aktivieren

### Boden hinzufügen
- Plane hinzufügen (`Shift+A`)
- Ebenfalls **Rigid Body** aktivieren
- **Type** auf **Passive** setzen (damit der Boden nicht fällt)

## 2. Würfelstapel erstellen

<YT time={113} videoId="2Dnks7C2q9U" label="Würfelstapel erstellen (1:53)" />

### Stapel aufbauen
- Würfel duplizieren (`Shift+D` → `Z` → `0.4`)
- Aktion wiederholen (`Shift+R`)
- **Scale anwenden** (`Ctrl+A`) - sehr wichtig für korrekte Physik!

### Interaktions-Objekt
- Neues Objekt (z.B. Zylinder) erstellen
- **Rigid Body** aktivieren, **Type** auf **Passive**
- **Animated** checkbox aktivieren für Keyframe-Animation
- **Scene Properties** → **Speed** auf 2 erhöhen

### Stabilisierung
- Alle Würfel auswählen
- In Physics Properties → **Deactivation** und **Start Deactivated** aktivieren (mit `Alt` für alle)

## 3. Erweiterte Setups

<YT time={234} videoId="2Dnks7C2q9U" label="Erweiterte Setups (3:54)" />

### Mehrere Stapel
- Stapel duplizieren (`Shift+D` → `X` → 2m)
- Mit `Shift+R` mehrfach wiederholen
- Boden entsprechend vergrössern und **Scale anwenden**

### Animation hinzufügen
- Interaktions-Objekt auswählen
- Keyframes setzen (`I` → Location)
- Nach 200 Frames neuen Keyframe setzen

## 4. Interessante Strukturen

<YT time={305} videoId="2Dnks7C2q9U" label="Interessante Strukturen (5:05)" />

### Kugel hinzufügen
- Icosphere erstellen (`Shift+A`)
- **Collision Shape** auf **Sphere** setzen für realistischere Bewegung
- **Mass** erhöhen (z.B. auf 25) für mehr Impact

### Kreisförmige Anordnung
- **Transform Pivot Point** auf **3D Cursor** setzen
- Würfel um 1m verschieben
- Duplizieren und rotieren (`Shift+D` → `R` → `Z` → 30°)
- Mit `Shift+R` um den Kreis vervollständigen

## 5. Slow Motion Effekte

<YT time={437} videoId="2Dnks7C2q9U" label="Slow Motion Effekte (7:17)" />

### Zeit-Skalierung animieren
- Zu Frame vor Impact gehen
- **Scene Properties** → **Speed** → Keyframe setzen
- 2-3 Frames später **Speed** auf 0.1 setzen
- Ergibt dramatische Slow-Motion Effekte

## 6. Erweiterte Techniken

<YT time={454} videoId="2Dnks7C2q9U" label="Erweiterte Techniken (7:34)" />

### Mesh-Kollisionen
- Komplexe Formen mit **Collision Shape: Mesh**
- Als **Passive** Objekte für Rampen verwenden

### Animation-Layer
- Simulation zu Keyframes "backen"
- Objekte parenten (`Ctrl+P`)
- Zusätzliche Animation über Simulation legen

### Kreative Möglichkeiten
- Überraschungseffekte durch versteckte Öffnungen
- Unvorhersagbare Ergebnisse durch Wert-Anpassungen nutzen

## Wichtige Tipps

- **Immer Scale anwenden** bei Rigid Body Objekten (`Ctrl+A`)
- **Deactivation** verwenden für stabile Startpositionen
- **Collision Shapes** an Objekt-Form anpassen
- **Time Scale Keyframes** für cineastische Effekte
- Mit **Mass** und **Friction** experimentieren

## Weiterführende Ideen

- Verschiedene **Collision Shapes** ausprobieren
- **Constraints** für komplexere Verbindungen
- **Force Fields** für externe Kräfte
- Kombination mit **Particle Systems**
- **Cloth Simulation** Integration
