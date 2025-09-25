---
title: Character Rigging für Anfänger 🦴
---
# Character Rigging für Anfänger

<StickMe>
## Tutorial-Video

<Youtube id="m-Obo_nC3SM" />
</StickMe>

## Zusammenfassung: Der komplette Einstieg ins Character Rigging

In diesem umfassenden Tutorial von Joey Carlino lernen Sie, wie Sie Charaktere in Blender mit Bones (Knochen) ausstatten, um sie animieren zu können. Das Tutorial deckt zwei Ansätze ab: die Verwendung des Rigify-Add-ons für menschliche Charaktere und das manuelle Erstellen eines Custom-Rigs für stilisierte Charaktere. In knapp einer Stunde lernen Sie alle wichtigen Grundlagen des Riggings, von der Armature-Erstellung über IK-Constraints bis zum Weight Painting.

### Schnellnavigation
<YT time={0} videoId="m-Obo_nC3SM" label="Tutorial starten" />
<YT time={58} videoId="m-Obo_nC3SM" label="Rigify Add-on verwenden" />
<YT time={454} videoId="m-Obo_nC3SM" label="Custom Character rigging" />
<YT time={627} videoId="m-Obo_nC3SM" label="Armature Setup" />
<YT time={1084} videoId="m-Obo_nC3SM" label="Automatic Weights" />
<YT time={1666} videoId="m-Obo_nC3SM" label="IK Constraints" />
<YT time={2351} videoId="m-Obo_nC3SM" label="Weight Painting" />
<YT time={2688} videoId="m-Obo_nC3SM" label="Bendy Bones" />
<YT time={3384} videoId="m-Obo_nC3SM" label="Posing & Animation" />

## Teil 1: Rigging Grundlagen

### Einführung
<YT time={0} videoId="m-Obo_nC3SM" label="Was ist Rigging?" />
Rigging ist der Prozess, ein 3D-Modell mit einem Skelett (Armature) auszustatten, damit es sich bewegen und animieren lässt. Das Tutorial zeigt zwei Methoden: Rigify für schnelle Ergebnisse bei humanoiden Charakteren und Custom Rigging für volle Kontrolle.

### Warum Custom Rigging lernen?
<YT time={37} videoId="m-Obo_nC3SM" label="Vorteile des manuellen Riggings" />
- Volle Kontrolle über das Rig-Verhalten
- Funktioniert für alle Arten von Modellen (nicht nur Menschen)
- Wichtig um Probleme zu beheben, wenn Add-ons versagen
- Grundverständnis hilft auch bei der Verwendung von Add-ons

## Teil 2: Rigify für humanoide Charaktere

### Rigify aktivieren
<YT time={58} videoId="m-Obo_nC3SM" label="Rigify Add-on Setup" />
1. Edit → Preferences → Add-ons
2. Nach "Rigify" suchen und aktivieren
3. Shift+A → Armature → Basic Human Meta-Rig hinzufügen

### Meta-Rig anpassen
<YT time={72} videoId="m-Obo_nC3SM" label="Bones sichtbar machen" />
- Object Data Properties → Viewport Display → "In Front" aktivieren
- Overlays → Wireframe für bessere Sichtbarkeit der Vertices

<YT time={85} videoId="m-Obo_nC3SM" label="Rig skalieren und positionieren" />
- Im Object Mode: Hüftbereich ausrichten
- S+X für horizontale Skalierung
- Ctrl+A → Apply Scale nach dem Skalieren

### Bones ausrichten
<YT time={106} videoId="m-Obo_nC3SM" label="Edit Mode für Bone-Anpassung" />
- Tab für Edit Mode
- Period-Taste für Active Element Pivot
- Symmetrie aktivieren für beidseitige Bearbeitung

<YT time={134} videoId="m-Obo_nC3SM" label="Torso und Kopf ausrichten" />
- Alle Torso-Bones auswählen
- Hüfte als Active Element (zuletzt selektiert)
- Skalieren vom Hüftpunkt aus

<YT time={157} videoId="m-Obo_nC3SM" label="Arme positionieren" />
- Schulter in Armmitte platzieren
- Ellenbogen und Handgelenk ausrichten
- Leichte Beugung in Beugerichtung einbauen

<YT time={223} videoId="m-Obo_nC3SM" label="Beine und Füsse" />
- Knie in Beinmitte positionieren
- Fuss-Bones für Ferse und Zehen
- Foot Roll Controller ausrichten

### Topologie für bessere Deformation
<YT time={260} videoId="m-Obo_nC3SM" label="Topologie-Optimierung" />
- Extra Loop Cuts bei Gelenken hinzufügen
- Mehr Vertices auf der Aussenseite von Gelenken

<YT time={286} videoId="m-Obo_nC3SM" label="Ellenbogen-Topologie" />
1. Edge Loop auswählen mit Alt+Click
2. Ctrl+X zum Auflösen
3. Face Select → 3 Faces → I für Inset
4. GG zum Verschieben der Vertices

<YT time={315} videoId="m-Obo_nC3SM" label="Knie-Topologie" />
- Gleiches Prinzip wie beim Ellenbogen
- Mehr Geometrie vorne am Knie
- Bessere Deformation bei Beugung

### Rig generieren
<YT time={362} videoId="m-Obo_nC3SM" label="Rigify Rig erstellen" />
1. Meta-Rig auswählen
2. Object Data Properties → Rigify Buttons → Generate Rig
3. Neues Control-Rig wird erstellt

<YT time={382} videoId="m-Obo_nC3SM" label="Mesh mit Rig verbinden" />
- Model auswählen
- Shift+Click auf generiertes Rig
- Ctrl+P → Parent with Automatic Weights

### Rig testen
<YT time={390} videoId="m-Obo_nC3SM" label="Pose Mode aktivieren" />
- Tab oder Dropdown für Pose Mode
- Controls bewegen und testen
- N-Panel → Item Tab für Rig Layers

<YT time={427} videoId="m-Obo_nC3SM" label="Weight Paint bei Problemen" />
- Bone Collections → ORG Layer
- Stern-Symbol für "nur diese anzeigen"
- Diese Bones für Weight Painting verwenden

## Teil 3: Custom Character Rig

### Vorbereitung
<YT time={454} videoId="m-Obo_nC3SM" label="Zweiter Character Setup" />
- Komplexerer Katzen-Character ("Beeswax")
- Topologie-Anpassungen vor dem Rigging
- Backup-Kopie der Collection erstellen

<YT time={474} videoId="m-Obo_nC3SM" label="Topologie für Kleidung" />
- Loop Cuts für bessere Deformation hinzufügen
- Topologie von Kleidung und darunterliegendem Mesh angleichen
- Verhindert Durchdringen beim Animieren

<YT time={493} videoId="m-Obo_nC3SM" label="Loop Cuts hinzufügen" />
- Ctrl+R für Loop Cut Tool
- Scrollrad für mehrere Cuts
- Alt+S für Shrink/Fatten zum Anpassen

### Armature erstellen
<YT time={628} videoId="m-Obo_nC3SM" label="Basis-Armature hinzufügen" />
- Shift+A → Armature → Single Bone
- Object Data Properties → Viewport Display → In Front
- Names und Axes aktivieren für bessere Übersicht

### Skelett aufbauen
<YT time={654} videoId="m-Obo_nC3SM" label="Wirbelsäule erstellen" />
- Hüft-Bone positionieren
- E zum Extrudieren nach oben
- Rechtsklick → Subdivide für mehr Kontrolle

<YT time={690} videoId="m-Obo_nC3SM" label="Bones benennen" />
- F2 für Umbenennen
- Klare Namen: hips, spine, neck, head
- Hilft bei der Organisation

### Arme rigging
<YT time={703} videoId="m-Obo_nC3SM" label="Arm-Bones erstellen" />
- Von Wirbelsäule aus extrudieren
- Shoulder-Bone als Non-Deform markieren
- Bicep und Forearm Bones

<YT time={721} videoId="m-Obo_nC3SM" label="Non-Deform Bones" />
- Bone Properties → Deform deaktivieren
- Für Control-Bones ohne direkte Mesh-Deformation
- Verhindert unerwünschte Einflüsse

### Hand-Setup
<YT time={742} videoId="m-Obo_nC3SM" label="Hand-Bones positionieren" />
- Von oben (Numpad 7) arbeiten
- Hand-Bone bis zum Handgelenk

<YT time={748} videoId="m-Obo_nC3SM" label="Finger-Bones" />
- Shift+D zum Duplizieren
- Ctrl+P → Keep Offset für Parenting
- Ein Bone pro Finger und Daumen

<YT time={801} videoId="m-Obo_nC3SM" label="Volume Snapping" />
- Snapping auf Volume setzen
- Ctrl beim Bewegen für automatisches Einrasten
- Hilfreich bei komplexen Formen

### Beine und Füsse
<YT time={865} videoId="m-Obo_nC3SM" label="Bein-Bones erstellen" />
- Spine-Bone duplizieren für Oberschenkel
- 180° rotieren und positionieren
- Leichte Beugung für IK-Setup

<YT time={919} videoId="m-Obo_nC3SM" label="Fuss-Setup" />
- Foot-Bone für Hauptfuss
- Toe-Bone für Zehen
- Heel-Bone als Controller (Non-Deform)

### Bone Roll anpassen
<YT time={960} videoId="m-Obo_nC3SM" label="Bone Roll verstehen" />
- Bestimmt lokale Rotationsachsen
- X-Achse sollte in Hauptbewegungsrichtung zeigen
- Konsistenz über gesamtes Rig wichtig

<YT time={978} videoId="m-Obo_nC3SM" label="Roll in Pose Mode testen" />
- R dann X zweimal für lokale Rotation
- Überprüfen der natürlichen Bewegungsrichtung
- Bei Bedarf in Edit Mode anpassen

### Symmetrie und Finalisierung
<YT time={1098} videoId="m-Obo_nC3SM" label="Auto-Naming für Seiten" />
- Rightclick → Names → Auto-Name Left/Right
- Wichtig für symmetrische Posen
- .L und .R Suffix

<YT time={1110} videoId="m-Obo_nC3SM" label="Symmetrize" />
- Alle einseitigen Bones auswählen
- Rightclick → Symmetrize
- Kopiert auf andere Seite mit korrekten Namen

## Teil 4: Automatic Weights

### Parenting
<YT time={1122} videoId="m-Obo_nC3SM" label="Mesh mit Armature verbinden" />
- Alle Mesh-Objekte auswählen
- Armature zuletzt auswählen
- Ctrl+P → Parent with Automatic Weights

<YT time={1134} videoId="m-Obo_nC3SM" label="Erstes Testen" />
- Ctrl+Tab für Pose Mode
- Bones bewegen und Deformation prüfen
- Problembereiche identifizieren

## Teil 5: Bone Collections

### Organisation
<YT time={1195} videoId="m-Obo_nC3SM" label="Bone Collections erstellen" />
- Properties → Armature → Bone Collections
- Plus-Button für neue Collection
- Bones zu Collections zuweisen

<YT time={1215} videoId="m-Obo_nC3SM" label="Collections verwalten" />
- M-Taste zum Verschieben in Collections
- Sichtbarkeit mit Auge-Symbol
- Bessere Übersicht bei komplexen Rigs

## Teil 6: Zusätzliche Bones

### Gesichts-Bones
<YT time={1269} videoId="m-Obo_nC3SM" label="Face Bones hinzufügen" />
- Bones für Augen und Mund
- Shift+D vom Head-Bone
- Alt+P → Clear Parent für Unabhängigkeit

<YT time={1297} videoId="m-Obo_nC3SM" label="Augen-Setup" />
- Ein Bone pro Auge
- Position in Augenmitte
- Für Look-At Controller vorbereitet

<YT time={1346} videoId="m-Obo_nC3SM" label="Mund-Bones" />
- Obere und untere Mundpartie
- Corner-Bones für Lächeln
- Alle als Non-Deform bei Bedarf

### Kleidungs-Bones
<YT time={1567} videoId="m-Obo_nC3SM" label="Coat Bones" />
- Extra Bones für Mantelschösse
- Bessere Kontrolle über Kleidungssimulation
- Parent zu Hips für Folgebewegung

<YT time={1612} videoId="m-Obo_nC3SM" label="Haar-Bones" />
- Bones entlang der Haarsträhnen
- Volume Snapping verwenden
- Für dynamische Haarbewegung

## Teil 7: IK (Inverse Kinematics)

### IK Grundlagen
<YT time={1666} videoId="m-Obo_nC3SM" label="Was ist IK?" />
- Inverse Kinematik ermöglicht intuitiveres Posing
- Endpunkt bestimmt Gelenkpositionen
- Besonders nützlich für Arme und Beine

### IK Target erstellen
<YT time={1680} videoId="m-Obo_nC3SM" label="IK Target Bone" />
- Hand-Bone duplizieren
- Nach hinten verschieben
- Alt+P → Clear Parent

<YT time={1710} videoId="m-Obo_nC3SM" label="IK Constraint hinzufügen" />
- Forearm-Bone auswählen
- Bone Constraint Properties → Add Constraint → IK
- Target: Armature, Bone: IK Target

<YT time={1742} videoId="m-Obo_nC3SM" label="Chain Length" />
- Chain Length auf 2 für Arm
- Umfasst Forearm und Bicep
- Automatische Berechnung der Gelenkwinkel

### Pole Target
<YT time={1765} videoId="m-Obo_nC3SM" label="Pole Target für Ellenbogen" />
- Kontrolliert Ellenbogenrichtung
- Neuer Bone hinter Ellenbogen
- Als Pole Target im IK Constraint

<YT time={1823} videoId="m-Obo_nC3SM" label="Pole Angle anpassen" />
- Korrigiert Bone-Verdrehung
- Meist -90° oder 90°
- Experimentieren für beste Einstellung

### Bein-IK
<YT time={1861} videoId="m-Obo_nC3SM" label="IK für Beine" />
- Gleiches Prinzip wie Arme
- Foot-Bone als IK Target
- Heel-Bone für zusätzliche Kontrolle

<YT time={1925} videoId="m-Obo_nC3SM" label="Fuss-Controller" />
- Copy Rotation Constraint für Zehen
- Ermöglicht Fuss-Roll
- Parent-Chain für intuitive Kontrolle

## Teil 8: Root und Torso Control

### Root Bone
<YT time={2066} videoId="m-Obo_nC3SM" label="Root Controller erstellen" />
- Zentraler Controller für gesamten Character
- Im Zentrum unter den Füssen
- Alle Hauptbones als Children

<YT time={2104} videoId="m-Obo_nC3SM" label="Parenting-Struktur" />
- Root → Hips → Rest des Körpers
- Root → IK Targets
- Ermöglicht Bewegung des gesamten Characters

### Torso Controller
<YT time={2139} videoId="m-Obo_nC3SM" label="Torso Control Bone" />
- Separater Controller für Oberkörper
- Unabhängig von Hips
- Bessere Animation Control

## Teil 9: Bone Shapes

### Custom Shapes
<YT time={2187} videoId="m-Obo_nC3SM" label="Bone Shapes erstellen" />
- Bessere visuelle Darstellung
- Mesh-Objekte als Shapes
- Circle, Cube, oder Custom Shapes

<YT time={2215} videoId="m-Obo_nC3SM" label="Shape zuweisen" />
- Bone Properties → Viewport Display
- Custom Object auswählen
- Scale anpassen für Sichtbarkeit

<YT time={2258} videoId="m-Obo_nC3SM" label="Shape Collection" />
- Separate Collection für Shapes
- Ausblenden für sauberen Viewport
- Wiederverwendbar für andere Rigs

## Teil 10: Weight Painting

### Automatic Weights verbessern
<YT time={2293} videoId="m-Obo_nC3SM" label="Neue Automatic Weights" />
- Nach Bone-Änderungen
- Mesh auswählen → Armature auswählen
- Ctrl+P → Parent with Automatic Weights

### Weight Paint Mode
<YT time={2351} videoId="m-Obo_nC3SM" label="Weight Paint Mode aktivieren" />
- Mesh auswählen → Weight Paint Mode
- Ctrl+Click auf Bones zum Auswählen
- Rot = voller Einfluss, Blau = kein Einfluss

<YT time={2388} videoId="m-Obo_nC3SM" label="Paint-Werkzeuge" />
- Add/Subtract Brushes
- Blur zum Glätten
- Weight und Strength anpassen

### Problemlösung
<YT time={2424} videoId="m-Obo_nC3SM" label="Häufige Probleme" />
- Überlappende Einflüsse
- Vertices ohne Weights
- Unnatürliche Deformationen

<YT time={2460} videoId="m-Obo_nC3SM" label="Symmetrie beim Painting" />
- X-Mirror aktivieren
- Gleichzeitiges Malen auf beiden Seiten
- Zeitsparend und konsistent

### Masking
<YT time={2509} videoId="m-Obo_nC3SM" label="Vertex-Masking" />
- Bestimmte Bereiche schützen
- Mask-Modus aktivieren
- Präzises Weight Painting

<YT time={2563} videoId="m-Obo_nC3SM" label="Face-Masking" />
- Face Selection Masking
- Nur ausgewählte Faces beeinflussen
- Gut für isolierte Bereiche

## Teil 11: Bendy Bones

### Setup
<YT time={2688} videoId="m-Obo_nC3SM" label="Bendy Bones aktivieren" />
- Bone Properties → Bendy Bones
- Segments erhöhen (z.B. 3-5)
- Für weichere Deformationen

<YT time={2730} videoId="m-Obo_nC3SM" label="Anwendungsfälle" />
- Wirbelsäule für flüssigere Bewegung
- Schwänze und Tentakel
- Augenbrauen und Gesichtszüge

<YT time={2790} videoId="m-Obo_nC3SM" label="Custom Handles" />
- Start und End Handles definieren
- Bessere Kontrolle über Kurvenform
- Kombinierbar mit IK

### Bendy Bone Settings
<YT time={2850} videoId="m-Obo_nC3SM" label="Ease In/Out" />
- Kurvenübergänge anpassen
- Weichere Start- und Endpunkte
- Natürlichere Deformation

## Teil 12: Face Constraints

### Damped Track
<YT time={3130} videoId="m-Obo_nC3SM" label="Augen-Tracking" />
- Damped Track Constraint
- Target: Eye-Controller
- Track Axis anpassen (meist -Z)

<YT time={3190} videoId="m-Obo_nC3SM" label="Eye Controller Setup" />
- Zentraler Controller für beide Augen
- Parent zu Head-Bone
- Intuitive Blicksteuerung

### Stretch To
<YT time={3250} videoId="m-Obo_nC3SM" label="Stretch To Constraint" />
- Für dehnbare Körperteile
- Volume Preservation Option
- Gut für Cartoon-Effekte

## Teil 13: Posing und Animation

### Pose Library
<YT time={3384} videoId="m-Obo_nC3SM" label="Erste Posen erstellen" />
- Pose Mode aktivieren
- Character in gewünschte Pose bringen
- Pose speichern für Wiederverwendung

<YT time={3420} videoId="m-Obo_nC3SM" label="Pose Tools" />
- Select All → Clear Transforms
- Copy/Paste Pose
- Flip Pose für Symmetrie

### Animation Basics
<YT time={3460} videoId="m-Obo_nC3SM" label="Keyframes setzen" />
- I-Taste für Insert Keyframe
- Timeline-Navigation
- Auto-Keyframe Option

## Teil 14: Objekte vereinen

### Mesh-Optimierung
<YT time={3489} videoId="m-Obo_nC3SM" label="Objekte verbinden" />
- Alle Mesh-Teile auswählen
- Ctrl+J zum Verbinden
- Vereinfacht Weight Painting

<YT time={3530} videoId="m-Obo_nC3SM" label="Vertex Groups bereinigen" />
- Unnötige Groups löschen
- Weights normalisieren
- Performance-Optimierung

## Abschluss und Tipps

### Best Practices
<YT time={3560} videoId="m-Obo_nC3SM" label="Wichtige Tipps" />
- Immer mit guter Topologie beginnen
- Bone Roll früh korrekt einstellen
- Regelmässig speichern und Backups erstellen
- Klein anfangen, dann komplexer werden

### Weiterführende Ressourcen
Das Tutorial endet mit dem Verweis auf weitere Animations-Tutorials und ermutigt zum Experimentieren mit den gelernten Techniken. Der Dozent betont, dass Rigging eine Fähigkeit ist, die durch Übung verbessert wird.

## Praktische Übungen

1. **Basis-Rig**: Erstellen Sie ein einfaches Armature für einen Würfel-Character
2. **Rigify-Test**: Verwenden Sie Rigify für einen humanoiden Character
3. **Custom Rig**: Bauen Sie ein eigenes Rig für ein nicht-menschliches Objekt
4. **Weight Painting**: Üben Sie präzises Weight Painting an Gelenken
5. **IK-Setup**: Implementieren Sie IK für Arme und Beine
6. **Face-Rig**: Erstellen Sie ein einfaches Gesichts-Rig mit Augen-Tracking

## Häufige Fehler vermeiden

- **Fehler**: Bones nicht korrekt ausgerichtet → **Lösung**: Zeit in präzise Platzierung investieren
- **Fehler**: Vergessene Apply Scale → **Lösung**: Immer Ctrl+A nach Skalierung
- **Fehler**: Falsche Bone Roll → **Lösung**: Früh testen und korrigieren
- **Fehler**: Zu viele Deform-Bones → **Lösung**: Control-Bones als Non-Deform markieren
- **Fehler**: Schlechte Weight Distribution → **Lösung**: Normalize All verwenden

Diese Grundlagen des Character Riggings bilden die Basis für professionelle Character-Animation in Blender!