---
title: Gesicht tracken
---

<StickMe>

## Video Tutorial

<Youtube id="uNK8S19OSmA" />
</StickMe>

## Zusammenfassung: Facial Motion Capture in Blender

Dieses Tutorial zeigt, wie man Blender für Motion-Capturing von Gesichtsanimationen nutzen kann - ohne zusätzliche Plugins, nur mit einer Handykamera und einem Marker/Schminke.

### Schnellnavigation
<YT time={0} videoId="uNK8S19OSmA" label="Zum Anfang springen" />
<YT time={27} videoId="uNK8S19OSmA" label="Übersicht der 6 Schritte" />
<YT time={1345} videoId="uNK8S19OSmA" label="Finale Animation und Ergebnis" />

### Benötigte Materialien
- **Blender**
- **Smartphone-Kamera** für die Aufnahme
- **Tracking-Marker**: Schwarzer Marker, Schminke oder Whiteout (Schminke empfohlen, da hautfreundlicher und leichter abwaschbar)

### Der 6-Schritte-Workflow

#### 1. Footage aufnehmen
<YT time={114} videoId="uNK8S19OSmA" label="Schritt 1: Recording starten" />

- **Marker platzieren**: Kleine Punkte auf dem Gesicht anbringen, besonders dicht in Bereichen mit viel Bewegung (Mund, Augen, Augenbrauen)
- **Symmetrisch arbeiten**: Marker gleichmässig auf beiden Gesichtshälften verteilen
- **Kameraposition**: Frontalaufnahme ohne Kamerabewegung für beste Ergebnisse
- **Vermeiden**: Verdeckte Marker (z.B. unter der Nase, seitlich) und Kameraschwenks

<YT time={140} videoId="uNK8S19OSmA" label="Marker-Materialien und Anwendung" />

#### 2. Tracking in Blender
<YT time={310} videoId="uNK8S19OSmA" label="Schritt 2: Tracking beginnen" />

- **Footage vorbereiten**: Video in Bildsequenz konvertieren (bessere Performance)
- **Tracker-Einstellungen optimieren**:
  - Motion Model: "Affine" (für Verzerrungen)
  - Normalize aktivieren (für Lichtänderungen)
  - Correlation auf 0.9 setzen (90% Konfidenz)
- **Tracking-Prozess**: Marker einzeln oder in Gruppen tracken, bei Problemen Pattern Area aktualisieren

<YT time={380} videoId="uNK8S19OSmA" label="Tracker-Einstellungen anpassen" />

#### 3. Gesichtsmesh erstellen
<YT time={624} videoId="uNK8S19OSmA" label="Schritt 3: Gesichtsmesh Methoden" />

Drei Möglichkeiten:
- **MakeHuman** (Open Source, anpassbar mit Slidern)
- **Kostenlose Modelle** von Turbosquid (schnell, aber wenig Kontrolle)
- **FaceGen Modeler Demo** (generiert 3D-Modell aus Fotos - am genauesten)

<YT time={665} videoId="uNK8S19OSmA" label="MakeHuman vorstellen" />
<YT time={702} videoId="uNK8S19OSmA" label="FaceGen Modeler Demo" />

#### 4. Tiefe hinzufügen & Armature erstellen
<YT time={823} videoId="uNK8S19OSmA" label="Schritt 4: Tiefe hinzufügen" />

- **Mesh ausrichten**: Gesichtsmesh mit dem ersten Frame des Footages abgleichen
- **Empties projizieren**: Tracking-Daten auf das 3D-Mesh übertragen
- **Bones platzieren**: An jedem Tracking-Punkt eine Armature (Knochen) erstellen
- **Python-Script nutzen**: Automatisierung für schnellere Bearbeitung

<YT time={900} videoId="uNK8S19OSmA" label="Python-Script für Automatisierung" />

#### 5. Rigging
<YT time={1059} videoId="uNK8S19OSmA" label="Schritt 5: Rigging starten" />

- **Automatic Weights**: Mesh mit Armature verbinden
- **Weight Painting**: Einflussbereich jedes Knochens manuell anpassen
- **Optimierung**: Sicherstellen, dass Knochen nur ihre jeweiligen Bereiche beeinflussen

<YT time={1100} videoId="uNK8S19OSmA" label="Weight Painting Details" />

#### 6. Animation verknüpfen
<YT time={1273} videoId="uNK8S19OSmA" label="Schritt 6: Animation verknüpfen" />

- **Constraints hinzufügen**: Copy Location Constraint für jeden Knochen
- **Z-Achse deaktivieren**: Nur X/Y-Daten vom Tracking verwenden
- **Influence anpassen**: Bei problematischen Bones reduzieren
- **Bake Action**: Animation in Keyframes umwandeln für bessere Performance

<YT time={1320} videoId="uNK8S19OSmA" label="Animation baken und finalisieren" />

### Automatisierung
Das Tutorial stellt ein Python-Script zur Verfügung, das die Schritte 3-6 grösstenteils automatisiert und den Workflow erheblich beschleunigt.

### Tipps für beste Ergebnisse
- Zeit in die initiale Ausrichtung des Meshes investieren
- Weight Maps individuell optimieren
- Bei Tracking-Problemen: Pattern Area aktualisieren und Search Area vergrössern
- Marker nahe den Augenbrauen (nicht Augenlidern) platzieren für stabileres Tracking

### Ergebnis
Ein vollständig animiertes 3D-Gesicht, das die aufgenommenen Gesichtsbewegungen wiedergibt.