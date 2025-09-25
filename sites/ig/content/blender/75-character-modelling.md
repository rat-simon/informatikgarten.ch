---
title: Charakter-Modellierung Tutorial 🎨
---
# Charakter-Modellierung Tutorial

<StickMe>
## Tutorial-Video

<Youtube id="O6HQhs-gk50" />
</StickMe>

## Zusammenfassung: Charakter-Modellierung für Anfänger in Blender

In diesem umfassenden 48-minütigen Tutorial von Joey Carlino lernen Sie zwei verschiedene Ansätze für die Charaktermodellierung: einen Low-Poly Menschen und einen stilisierten Katzen-Charakter. Das Tutorial zeigt Box-Modeling-Techniken und wie man mit einfachen Formen komplexe Charaktere erstellt.

### Schnellnavigation
<YT time={0} videoId="O6HQhs-gk50" label="Tutorial starten (0:00:00)" />
<YT time={84} videoId="O6HQhs-gk50" label="Human Model (0:01:24)" />
<YT time={568} videoId="O6HQhs-gk50" label="Playbook Sponsor (0:09:28)" />
<YT time={674} videoId="O6HQhs-gk50" label="Cat Character (0:11:14)" />
<YT time={982} videoId="O6HQhs-gk50" label="Head (0:16:22)" />
<YT time={1802} videoId="O6HQhs-gk50" label="Coat (0:30:02)" />
<YT time={2054} videoId="O6HQhs-gk50" label="Hands (0:34:14)" />
<YT time={2132} videoId="O6HQhs-gk50" label="Shoes (0:35:32)" />
<YT time={2445} videoId="O6HQhs-gk50" label="Color (0:40:45)" />
<YT time={2774} videoId="O6HQhs-gk50" label="Join & Apply (0:46:14)" />

## Teil 1: Einführung in Character Modeling

### Verschiedene Modeling-Ansätze
<YT time={0} videoId="O6HQhs-gk50" label="Einführung (0:00:00)" />
Joey erklärt die zwei Hauptmethoden für Character Modeling:
- **Box Modeling**: Start mit einfachen Formen, Punkte verschieben und Details hinzufügen
- **Sculpting + Retopology**: Freiheit bei Formen, aber dichtes Mesh erfordert Nachbearbeitung

<YT time={32} videoId="O6HQhs-gk50" label="Stil-Überlegungen (0:00:32)" />
- Realistische Modelle: Gliedmassen mit Torso verbunden
- Stilisierte Modelle: Gliedmassen als separate Objekte (anfängerfreundlicher)

## Teil 2: Low-Poly Human Model

### Basis-Setup
<YT time={84} videoId="O6HQhs-gk50" label="Blender Setup (0:01:24)" />
- Blender 4.1 verwenden (funktioniert auch ab Version 3.0)
- Matcap-Shading mit Cavity für bessere Sichtbarkeit
- Reference-Bilder direkt in Blender ziehen

### Torso erstellen
<YT time={150} videoId="O6HQhs-gk50" label="Cube zu Torso (0:02:30)" />
- Cube als Ausgangspunkt für den Torso
- G+Z: Nach oben bewegen
- S: Skalieren für richtige Proportionen
- 2m Höhe als Referenz (2 Grid-Quadrate)

<YT time={203} videoId="O6HQhs-gk50" label="Kopf und Hals (0:03:23)" />
- Face Select Mode (3)
- I: Inset für Hals
- E: Extrudieren für Hals und Kopf
- Mehrfaches Extrudieren für Kopfform

### Arme modellieren
<YT time={240} videoId="O6HQhs-gk50" label="Arm-Ansatz (0:04:00)" />
- Ctrl+R: Loop Cut für Schulterposition
- E: Extrudieren für Oberarm und Unterarm
- S: Skalieren für Handgelenk

<YT time={275} videoId="O6HQhs-gk50" label="Hand und Daumen (0:04:35)" />
- E: Extrudieren für Mittens-Style Hand
- Ctrl+R: Loop Cut für Daumen-Position
- Separates Extrudieren für Daumen

### Beine erstellen
<YT time={315} videoId="O6HQhs-gk50" label="Bein-Basis (0:05:15)" />
- Ctrl+R: Loop Cut in der Mitte
- Face am Boden auswählen
- E: Extrudieren bis zum Knöchel
- S: Skalieren für Beinform

<YT time={360} videoId="O6HQhs-gk50" label="Fuss modellieren (0:06:00)" />
- E: Extrudieren für Fuss
- Absolute Grid Snap für perfekte Bodenposition
- Loop Cut für bessere Deformation

### Joint-Optimierung
<YT time={300} videoId="O6HQhs-gk50" label="Ellenbogen-Loops (0:05:00)" />
- Ctrl+R: Loop Cut am Ellenbogen
- Ctrl+B: Bevel mit Scroll Wheel für zusätzliche Loops
- Bessere Deformation beim Animieren

<YT time={408} videoId="O6HQhs-gk50" label="Knie-Loops (0:06:48)" />
- Ctrl+R: Loop Cut für Knie
- Ctrl+B: Bevel für weiche Deformation

### Mirror Modifier
<YT time={428} videoId="O6HQhs-gk50" label="Symmetrie hinzufügen (0:07:08)" />
- Eine Seite löschen (X-Ray Mode mit Alt+Z)
- Mirror Modifier hinzufügen
- Ctrl+A: Apply Location falls nötig

### Smoothing
<YT time={464} videoId="O6HQhs-gk50" label="Subdivision Surface (0:07:44)" />
- Ctrl+1/2/3: Subdivision Levels
- Alt+Click: Edge Loops auswählen
- S+Y: Skalieren für rundere Form

<YT time={518} videoId="O6HQhs-gk50" label="Proportionen anpassen (0:08:38)" />
- Kopf breiter machen
- Körper-Loops für bessere Deformation
- Ctrl+R: 1-2 zusätzliche Loops im Torso

## Teil 3: Stilisierter Katzen-Charakter

### Sponsor-Segment
<YT time={568} videoId="O6HQhs-gk50" label="Playbook Cloud Storage (0:09:28)" />
Playbook bietet 4TB kostenlosen Cloud-Speicher speziell für Kreative mit Features für Collaboration und Organisation.

### Setup mit Reference Images
<YT time={674} videoId="O6HQhs-gk50" label="Reference Setup (0:11:14)" />
- Neue Collection für References (C)
- Bilder für Front, Side, Top View
- Alt+G: Zum Center snappen
- Opacity anpassen (Alt halten für alle)

### Basis-Geometrie
<YT time={765} videoId="O6HQhs-gk50" label="Kopf und Körper (0:12:45)" />
- Cube für Kopf mit Subdivision (Ctrl+2)
- Shift+D: Duplizieren für Körper
- Separate Objekte für einfacheres Modeling

### Skin Modifier für Gliedmassen
<YT time={788} videoId="O6HQhs-gk50" label="Skin Modifier Setup (0:13:08)" />
- Plane hinzufügen
- Mirror + Skin + Subdivision Modifier
- M: Merge at Center

<YT time={831} videoId="O6HQhs-gk50" label="Gliedmassen erstellen (0:13:51)" />
- Ctrl+A: Skalieren der Skin-Dicke
- E: Extrudieren für Beine
- Shift+D: Duplizieren für Arme
- Mark Root für fehlende Roots

### Füsse modellieren
<YT time={896} videoId="O6HQhs-gk50" label="Füsse Setup (0:14:56)" />
- Cube hinzufügen
- Origin Point nach unten verschieben
- Mirror Modifier mit Mirror Object

## Teil 4: Kopf-Details

### Mouth Area
<YT time={982} videoId="O6HQhs-gk50" label="Schnauze erstellen (0:16:22)" />
- Shift+D: Kopf duplizieren
- S+Y: Nach vorne skalieren
- Position anpassen für Schnauzen-Form

### Subdivision anwenden
<YT time={1035} videoId="O6HQhs-gk50" label="Modifier Apply (0:17:15)" />
- Subdivision mit niedriger Auflösung anwenden
- Mehr Kontrolle über Geometrie
- Loop Tools Add-on aktivieren

### Ohren modellieren
<YT time={1095} videoId="O6HQhs-gk50" label="Ohren erstellen (0:18:15)" />
- Faces auswählen
- Loop Tools > Circle
- E: Extrudieren
- Form anpassen

### Fell-Details
<YT time={1222} videoId="O6HQhs-gk50" label="Fell-Tufts (0:20:22)" />
- Face auswählen
- I: Inset (zweimal für Individual)
- E: Extrudieren
- S: Skalieren für spitze Form

<YT time={1308} videoId="O6HQhs-gk50" label="Weitere Fell-Details (0:21:48)" />
- Random Select für Variation
- Alt+S: Shrink/Fatten
- Proportional Editing für organische Formen

### Augen erstellen
<YT time={1420} videoId="O6HQhs-gk50" label="Augen-Setup (0:23:40)" />
- UV Sphere hinzufügen
- Positionieren und skalieren
- Mirror Modifier für Symmetrie

<YT time={1517} videoId="O6HQhs-gk50" label="Augenlider (0:25:17)" />
- Sphere duplizieren
- Boolean Modifier (Difference)
- Solidify Modifier für Dicke

### Nase und Details
<YT time={1605} videoId="O6HQhs-gk50" label="Nase hinzufügen (0:26:45)" />
- Sphere für Nase
- Positionieren und skalieren
- Material-Zuordnung vorbereiten

## Teil 5: Körper und Kleidung

### Torso-Anpassung
<YT time={1704} videoId="O6HQhs-gk50" label="Körper formen (0:28:24)" />
- Subdivision anwenden
- Proportional Editing
- Form verfeinern

### Mantel erstellen
<YT time={1802} videoId="O6HQhs-gk50" label="Coat modellieren (0:30:02)" />
- Torso duplizieren als Basis
- Alt+S: Aufblähen
- Faces löschen für Öffnungen

<YT time={1896} videoId="O6HQhs-gk50" label="Kragen und Details (0:31:36)" />
- Loop Cuts hinzufügen
- E: Extrudieren für Kragen
- Form anpassen

<YT time={1978} videoId="O6HQhs-gk50" label="Taschen (0:32:58)" />
- Faces auswählen
- I: Inset
- E: Extrudieren

## Teil 6: Hände und Schuhe

### Hände modellieren
<YT time={2054} videoId="O6HQhs-gk50" label="Hand-Basis (0:34:14)" />
- Cube oder Sphere als Start
- Subdivision Surface
- Form anpassen

<YT time={2088} videoId="O6HQhs-gk50" label="Finger vereinfacht (0:34:48)" />
- Mittens-Style für Einfachheit
- Loop Cuts für Definition
- Proportional Editing

### Schuhe erstellen
<YT time={2132} videoId="O6HQhs-gk50" label="Schuh-Basis (0:35:32)" />
- Cube als Ausgangspunkt
- Subdivision Surface
- Form anpassen

<YT time={2239} videoId="O6HQhs-gk50" label="Schuh-Details (0:37:19)" />
- Loop Cuts für Sohle
- Extrude für Absatz
- Material-Slots vorbereiten

### Schwanz hinzufügen
<YT time={2325} videoId="O6HQhs-gk50" label="Schwanz modellieren (0:38:45)" />
- Bezier Curve verwenden
- Taper Object für Verjüngung
- In Mesh konvertieren

## Teil 7: Materialien und Farben

### Material-Setup
<YT time={2445} videoId="O6HQhs-gk50" label="Shader Editor (0:40:45)" />
- Zum Shading Workspace wechseln
- Neue Materialien erstellen
- Base Color einstellen

<YT time={2516} videoId="O6HQhs-gk50" label="Material-Zuweisung (0:41:56)" />
- Edit Mode
- Faces auswählen
- Material Slots und Assign

### Farb-Schema
<YT time={2598} videoId="O6HQhs-gk50" label="Farbpalette (0:43:18)" />
- Hauptfarben definieren
- Akzentfarben hinzufügen
- Konsistentes Farbschema

### UV Unwrapping (Optional)
<YT time={2680} videoId="O6HQhs-gk50" label="UV-Basics (0:44:40)" />
- Smart UV Project
- Texture Painting vorbereiten
- Seams markieren

## Teil 8: Finalisierung

### Objekte verbinden
<YT time={2774} videoId="O6HQhs-gk50" label="Join Objects (0:46:14)" />
- Alle Teile auswählen
- Ctrl+J: Join
- Modifier anwenden

<YT time={2820} videoId="O6HQhs-gk50" label="Modifier Apply (0:47:00)" />
- Reihenfolge beachten
- Mirror zuerst anwenden
- Subdivision zuletzt

### Clean-up
<YT time={2860} videoId="O6HQhs-gk50" label="Optimierung (0:47:40)" />
- Duplikate entfernen
- Normalen neu berechnen
- Scale anwenden (Ctrl+A)

## Wichtige Tipps & Tricks

### Modeling-Workflow
- Box Modeling für Anfänger empfohlen
- Separate Objekte für stilisierte Charaktere
- Immer Scale anwenden (Ctrl+A)
- Reference Images verwenden

### Modifier-Stack
- Mirror für Symmetrie
- Subdivision für Smoothing
- Skin Modifier für Gliedmassen
- Richtige Reihenfolge wichtig

### Proportionen
- 2m Höhe als Menschen-Referenz
- Kopf als Masseinheit (7-8 Köpfe hoch)
- Joints mit Extra-Loops für Animation

### Deformation vorbereiten
- Loop Cuts an Gelenken
- Bevel für weiche Deformation
- Topology für Animation optimieren

### Zeit-Spar-Tipps
- Loop Tools Add-on verwenden
- Proportional Editing für organische Formen
- Mirror Modifier früh einsetzen
- Skin Modifier für schnelle Gliedmassen