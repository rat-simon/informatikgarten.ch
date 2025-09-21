---
title: Greenscreening
---

# Greenscreening in Blender

*Achtung: Bei längeren Sequenzen wird oft empfohlen, alle Bilder Ihres Videos zuerst separat als eine Bildsequenz zu speichern. Wie Sie das tun können, erklärt [dieses Kurz-Tutorial](31-imagesequence).*

<StickMe>
## Tutorial-Video

<Youtube id="mYYMTTVDI08" />
</StickMe>

## Zusammenfassung

Ein vollständiges Tutorial zum professionellen Green Screen Keying in Blender. Lernen Sie die komplette Pipeline von der grundlegenden Chroma-Key-Erstellung über Garbage Mattes bis hin zu fortgeschrittenen Despill- und Edge-Extension-Techniken - alles was Sie brauchen, um Ihre Schauspieler in jede erdenkliche Umgebung zu versetzen.

## Intro

<YT time={0} videoId="mYYMTTVDI08" label="Green Screen für professionelle VFX (0:00)" />

**Die Magie des Keying:**
- <YT time={2} videoId="mYYMTTVDI08" label="CGI-Welten wie die Profis erstellen (0:02)" />
- <YT time={6} videoId="mYYMTTVDI08" label="Behind-the-Scenes Filmtechnik verstehen (0:06)" />
- <YT time={10} videoId="mYYMTTVDI08" label="Cinematic Trickery für eigene Projekte (0:10)" />

### Keying als Kernkompetenz
<YT time={25} videoId="mYYMTTVDI08" label="Green/Blue Screen als Film-Standard (0:25)" />

**Warum Keying wichtig ist:**
- <YT time={30} videoId="mYYMTTVDI08" label="Keying-Prozess erklärt (0:30)" />
- <YT time={32} videoId="mYYMTTVDI08" label="Kernkompetenz für Compositing Artists (0:32)" />
- <YT time={35} videoId="mYYMTTVDI08" label="In jedem Film/TV-Show verwendet (0:35)" />
- <YT time={38} videoId="mYYMTTVDI08" label="Von Fenster-Ersatz bis Universum-Transport (0:38)" />

### Software und Setup
<YT time={43} videoId="mYYMTTVDI08" label="Software-Optionen für Keying (0:43)" />

**Blender als Compositing-Tool:**
- <YT time={55} videoId="mYYMTTVDI08" label="Alternative: DaVinci Resolve, Nuke, After Effects (0:55)" />
- <YT time={60} videoId="mYYMTTVDI08" label="Blenders überraschend umfangreiche Compositing-Tools (1:00)" />

### Workspace-Konfiguration
<YT time={65} videoId="mYYMTTVDI08" label="Compositing Workspace öffnen (1:05)" />

**Optimales Workspace-Setup:**
1. <YT time={69} videoId="mYYMTTVDI08" label="Compositing Tab oder VFX → Compositing (1:09)" />
2. <YT time={79} videoId="mYYMTTVDI08" label="Dope Sheet Panel unten für Frame-Navigation (1:19)" />
3. <YT time={84} videoId="mYYMTTVDI08" label="Image Editor oben für Mask-Kontrollen (1:24)" />
4. <YT time={90} videoId="mYYMTTVDI08" label="Mask Editing Controls für später (1:30)" />

### Footage-Beispiel
<YT time={94} videoId="mYYMTTVDI08" label="Tears of Steel Footage als Beispiel (1:34)" />

**Typisches Green Screen Material:**
- <YT time={104} videoId="mYYMTTVDI08" label="Film Crew und Equipment sichtbar (1:44)" />
- <YT time={108} videoId="mYYMTTVDI08" label="Tracking Markers an der Wand (1:48)" />
- <YT time={113} videoId="mYYMTTVDI08" label="Fokus: Green Screen entfernen (1:53)" />

## 1. Creating a Basic Key

<YT time={24} videoId="mYYMTTVDI08" label="Grundlegende Key-Erstellung (0:24)" />

### Footage Import
<YT time={118} videoId="mYYMTTVDI08" label="Footage Import per Drag & Drop (1:58)" />

**Image Sequence Setup:**
1. <YT time={120} videoId="mYYMTTVDI08" label="Ersten Frame in Node Editor ziehen (2:00)" />
2. <YT time={124} videoId="mYYMTTVDI08" label="Image Node Mode: Image Sequence (2:04)" />
3. <YT time={126} videoId="mYYMTTVDI08" label="Frame-Anzahl setzen (z.B. 100) (2:06)" />

### Keying Node Setup
<YT time={131} videoId="mYYMTTVDI08" label="Green Screen tatsächlich entfernen (2:11)" />

**Basic Keying Workflow:**
1. <YT time={134} videoId="mYYMTTVDI08" label="Shift + A → Keying → Keying Node (2:14)" />
2. <YT time={138} videoId="mYYMTTVDI08" label="An Image Node Output anschliessen (2:18)" />
3. <YT time={142} videoId="mYYMTTVDI08" label="Key Color auf Green Screen Farbe setzen (2:22)" />

### Color Picker Workflow
<YT time={146} videoId="mYYMTTVDI08" label="Korrekte Farbauswahl wichtig (2:26)" />

**Wichtiger Color-Picking-Prozess:**
- <YT time={148} videoId="mYYMTTVDI08" label="Image Node Output betrachten, nicht Keying Node (2:28)" />
- <YT time={153} videoId="mYYMTTVDI08" label="Unverarbeitete Green Screen Farbe auswählen (2:33)" />
- <YT time={156} videoId="mYYMTTVDI08" label="Viewer Node mit Ctrl+Shift+Click (2:36)" />
- <YT time={162} videoId="mYYMTTVDI08" label="Node Wrangler Add-on verwenden (2:42)" />

### Color Selection
<YT time={167} videoId="mYYMTTVDI08" label="Key Color Auswahl-Prozess (2:47)" />

**Eyedropper-Technik:**
1. <YT time={169} videoId="mYYMTTVDI08" label="Key Color Rectangle klicken (2:49)" />
2. <YT time={171} videoId="mYYMTTVDI08" label="Eyedropper Button auswählen (2:51)" />
3. <YT time={173} videoId="mYYMTTVDI08" label="Farbe direkt aus Footage sampeln (2:53)" />
4. <YT time={175} videoId="mYYMTTVDI08" label="Keying Node Output überprüfen (2:55)" />
5. <YT time={178} videoId="mYYMTTVDI08" label="Ergebnis: Green Sections verschwunden (2:58)" />

## 2. Garbage Mattes

<YT time={180} videoId="mYYMTTVDI08" label="Unwanted Content entfernen (3:00)" />

### Problem und Lösung
<YT time={182} videoId="mYYMTTVDI08" label="Extra Rubbish im Shot identifizieren (3:02)" />

<YT time={188} videoId="mYYMTTVDI08" label="Garbage Matte als Lösung (3:08)" />

**Garbage Matte Konzept:**
- <YT time={190} videoId="mYYMTTVDI08" label="Mask für unwanted Bereiche erstellen (3:10)" />
- <YT time={194} videoId="mYYMTTVDI08" label="Blender entfernt Maske + Green Screen (3:14)" />

### Mask Creation Workflow
<YT time={195} videoId="mYYMTTVDI08" label="Neue Mask erstellen (3:15)" />

**Image Editor Mask Mode:**
1. <YT time={197} videoId="mYYMTTVDI08" label="Image Editor → Mask Mode (3:17)" />
2. <YT time={203} videoId="mYYMTTVDI08" label="New Mask → 'Garbage Matte' benennen (3:23)" />

### Masking Strategy
<YT time={207} videoId="mYYMTTVDI08" label="Masking-Strategie: Invert-Methode (3:27)" />

**Effiziente Vorgehensweise:**
- <YT time={208} videoId="mYYMTTVDI08" label="Kleinen gewünschten Bereich maskieren (3:28)" />
- <YT time={212} videoId="mYYMTTVDI08" label="Mask um Actor (Seil-Person) erstellen (3:32)" />
- <YT time={214} videoId="mYYMTTVDI08" label="Später invertieren für Entfernung (3:34)" />

### Manual Mask Drawing
<YT time={216} videoId="mYYMTTVDI08" label="Mask manuell zeichnen (3:36)" />

**Mask-Erstellung Technik:**
1. <YT time={217} videoId="mYYMTTVDI08" label="Ctrl + Click + Drag für Mask Handle (3:37)" />
2. <YT time={221} videoId="mYYMTTVDI08" label="Weitere Handles für Shape (3:41)" />
3. <YT time={223} videoId="mYYMTTVDI08" label="Ctrl + Click ersten Handle für Completion (3:43)" />
4. <YT time={227} videoId="mYYMTTVDI08" label="Handles adjustieren für perfekte Form (3:47)" />

### Mask Integration
<YT time={233} videoId="mYYMTTVDI08" label="Image Editor zurück zu View Mode (3:53)" />

**Compositor Integration:**
1. <YT time={237} videoId="mYYMTTVDI08" label="Add Menu → Input → Mask Node (3:57)" />
2. <YT time={244} videoId="mYYMTTVDI08" label="Garbage Matte Mask aus Dropdown auswählen (4:04)" />
3. <YT time={248} videoId="mYYMTTVDI08" label="Output zu Keying Node Garbage Matte Input (4:08)" />

### Mask Inversion
<YT time={255} videoId="mYYMTTVDI08" label="Actor ausgeschnitten, aber falsch herum (4:15)" />

<YT time={258} videoId="mYYMTTVDI08" label="Mask noch nicht invertiert (4:18)" />

**Invert Node hinzufügen:**
1. <YT time={260} videoId="mYYMTTVDI08" label="Add Menu → Color → Invert Node (4:20)" />
2. <YT time={264} videoId="mYYMTTVDI08" label="Nach Mask Node platzieren (4:24)" />
3. <YT time={269} videoId="mYYMTTVDI08" label="Unwanted Rubbish erfolgreich entfernt (4:29)" />
4. <YT time={273} videoId="mYYMTTVDI08" label="Actor allein in transparenten Pixeln (4:33)" />

### Advanced Mask Layers
<YT time={275} videoId="mYYMTTVDI08" label="Tracking Markers im Mask-Bereich (4:35)" />

<YT time={279} videoId="mYYMTTVDI08" label="Extra Mask Layer für Markers (4:39)" />

**Multi-Layer Masking:**
1. <YT time={281} videoId="mYYMTTVDI08" label="Zurück zu Mask Mode (4:41)" />
2. <YT time={286} videoId="mYYMTTVDI08" label="Side Panel → Mask Tab → Mask Layers (4:46)" />
3. <YT time={292} videoId="mYYMTTVDI08" label="Existing Layer zu 'Main Mask' umbenennen (4:52)" />
4. <YT time={294} videoId="mYYMTTVDI08" label="Plus Button für neue Layer (4:54)" />
5. <YT time={296} videoId="mYYMTTVDI08" label="'Tracking Marker One' benennen (4:56)" />

### Layer Management
<YT time={301} videoId="mYYMTTVDI08" label="Arrow Symbol auf Main Mask deaktivieren (5:01)" />

**Sicheres Layer-Editing:**
- <YT time={303} videoId="mYYMTTVDI08" label="Verhindert versehentliche Original-Mask Edits (5:03)" />
- <YT time={306} videoId="mYYMTTVDI08" label="Tracking Marker Layer highlighten (5:06)" />
- <YT time={308} videoId="mYYMTTVDI08" label="Kleine Mask um Tracking Marker (5:08)" />

### Subtraction Blending
<YT time={312} videoId="mYYMTTVDI08" label="Shape aus Main Mask herausschneiden (5:12)" />

**Merge Subtract Technik:**
- <YT time={314} videoId="mYYMTTVDI08" label="Blend Mode: Merge Subtract (5:14)" />
- <YT time={317} videoId="mYYMTTVDI08" label="Tracking Marker erfolgreich entfernt (5:17)" />
- <YT time={319} videoId="mYYMTTVDI08" label="Wiederholbar für alle Markers/Elements (5:19)" />

## 3. Despill

<YT time={376} videoId="mYYMTTVDI08" label="Green Bounce Light Problem (6:16)" />

### Problem-Identifikation
<YT time={378} videoId="mYYMTTVDI08" label="Key selbst zufriedenstellend (6:18)" />

<YT time={380} videoId="mYYMTTVDI08" label="Keying Node Green Bounce Light zu aggressiv (6:20)" />

**Despill-Problematik:**
- <YT time={383} videoId="mYYMTTVDI08" label="Dunkle Linien um Kanten (6:23)" />
- <YT time={387} videoId="mYYMTTVDI08" label="Bounce Light Removal = Despill (6:27)" />
- <YT time={391} videoId="mYYMTTVDI08" label="Keying Node Controls nicht umfassend genug (6:31)" />

### Color Spill Node
<YT time={394} videoId="mYYMTTVDI08" label="Flexiblere Alternative: Color Spill Node (6:34)" />

<YT time={401} videoId="mYYMTTVDI08" label="Add Menu → Keying → Color Spill Node (6:41)" />

**Basic Setup:**
- <YT time={403} videoId="mYYMTTVDI08" label="Zu Original Footage anschliessen (6:43)" />
- <YT time={410} videoId="mYYMTTVDI08" label="Alles Grün verschwindet aus Szene (6:50)" />
- <YT time={414} videoId="mYYMTTVDI08" label="Aber: Dark Lines Problem bleibt (6:54)" />

### Basic Settings
<YT time={416} videoId="mYYMTTVDI08" label="Settings anpassen für bessere Ergebnisse (6:56)" />

**Spill Color Selection:**
- <YT time={418} videoId="mYYMTTVDI08" label="G für Green Screen (default) (6:58)" />
- <YT time={422} videoId="mYYMTTVDI08" label="B für Blue Screen Alternative (7:02)" />
- <YT time={426} videoId="mYYMTTVDI08" label="R für Red Screen (bizarre Fälle) (7:06)" />

**Algorithm Type:**
- <YT time={430} videoId="mYYMTTVDI08" label="Simple vs. Average Algorithm (7:10)" />
- <YT time={432} videoId="mYYMTTVDI08" label="Average liefert bessere Ergebnisse (7:12)" />

**Standard Controls:**
- <YT time={438} videoId="mYYMTTVDI08" label="Factor: Original Footage Mix-back (7:18)" />
- <YT time={441} videoId="mYYMTTVDI08" label="Limit Strength: Removal Threshold (7:21)" />
- <YT time={448} videoId="mYYMTTVDI08" label="Diese Controls werden NICHT verwendet (7:28)" />

### Advanced Spill Strength
<YT time={450} videoId="mYYMTTVDI08" label="Spill Strength Option aktivieren (7:30)" />

<YT time={455} videoId="mYYMTTVDI08" label="Color Input 'Strength' freischalten (7:35)" />

**RGB-Channel Kontrolle:**
- <YT time={460} videoId="mYYMTTVDI08" label="Color Rectangle → RGB Mode (7:40)" />
- <YT time={464} videoId="mYYMTTVDI08" label="Impact pro Color Channel sichtbar (7:44)" />
- <YT time={468} videoId="mYYMTTVDI08" label="Green Channel stark betroffen, andere nicht (7:48)" />

### Das Kernproblem verstehen
<YT time={472} videoId="mYYMTTVDI08" label="Problem: Grün ohne Ersatz entfernt (7:52)" />

**Warum Dark Lines entstehen:**
- <YT time={474} videoId="mYYMTTVDI08" label="Grün entfernt ohne Replacement (7:54)" />
- <YT time={478} videoId="mYYMTTVDI08" label="Grüne Bereiche werden schwarz/dunkler (7:58)" />
- <YT time={484} videoId="mYYMTTVDI08" label="Resultat: Dunkle Linien um Kanten (8:04)" />

### Die richtige Lösung
<YT time={486} videoId="mYYMTTVDI08" label="Korrekte Methode: Green neutralisieren (8:06)" />

**Neutralization Approach:**
- <YT time={489} videoId="mYYMTTVDI08" label="Nice Gray mit gleicher Brightness (8:09)" />
- <YT time={492} videoId="mYYMTTVDI08" label="Grün entfernen ohne Light Intensity Reduktion (8:12)" />

### Praktische Umsetzung
<YT time={496} videoId="mYYMTTVDI08" label="Beste Startmethode: Alle Channel gleich (8:16)" />

**RGB-Balance Technik:**
1. <YT time={498} videoId="mYYMTTVDI08" label="Alle drei Channels auf 0.5 setzen (8:18)" />
2. <YT time={502} videoId="mYYMTTVDI08" label="Click & Drag alle drei Values (8:22)" />
3. <YT time={506} videoId="mYYMTTVDI08" label="Left/Right Drag für gemeinsame Bewegung (8:26)" />

### Sweet Spot finden
<YT time={507} videoId="mYYMTTVDI08" label="Sweet Spot zwischen Green und Purple (8:27)" />

**Optimale Values:**
- <YT time={511} videoId="mYYMTTVDI08" label="Für dieses Footage: 0.45 für alle (8:31)" />
- <YT time={516} videoId="mYYMTTVDI08" label="Ergebnis: Dark Lines verschwunden (8:36)" />

### Creative Color Grading
<YT time={518} videoId="mYYMTTVDI08" label="Bounce Light Color an CGI Environment anpassen (8:38)" />

**Environment-basierte Anpassungen:**
- <YT time={524} videoId="mYYMTTVDI08" label="Desert/Volcano: Red↑, Blue↓ für Wärme (8:44)" />
- <YT time={531} videoId="mYYMTTVDI08" label="Sci-Fi Lab/Underwater: Red↓, Blue↑ (8:51)" />
- <YT time={540} videoId="mYYMTTVDI08" label="Jede Bounce Light Farbe möglich (9:00)" />
- <YT time={545} videoId="mYYMTTVDI08" label="Neutral bei 0.45 für Demo (9:05)" />

## 4. Edge Extension

<YT time={549} videoId="mYYMTTVDI08" label="Despill auf Key anwenden (9:09)" />

### Set Alpha Integration
<YT time={551} videoId="mYYMTTVDI08" label="Despill Output mit Key kombinieren (9:11)" />

**Set Alpha Node Setup:**
1. <YT time={554} videoId="mYYMTTVDI08" label="Set Alpha Node erstellen (9:14)" />
2. <YT time={556} videoId="mYYMTTVDI08" label="Despill Output → Image Input (9:16)" />
3. <YT time={559} videoId="mYYMTTVDI08" label="Keying Node Mat Output → Alpha Input (9:19)" />

**Mat Output erklärt:**
- <YT time={563} videoId="mYYMTTVDI08" label="Mat Output = Mask der keyed Elements (9:23)" />
- <YT time={566} videoId="mYYMTTVDI08" label="Sehr praktisch für diese Anwendungen (9:26)" />

### Ergebnis-Evaluation
<YT time={569} videoId="mYYMTTVDI08" label="Despill Colors mit Key Mask (9:29)" />

<YT time={573} videoId="mYYMTTVDI08" label="Viel besser als Keying Node Image Output (9:33)" />

**Verbleibende Probleme:**
- <YT time={578} videoId="mYYMTTVDI08" label="Problem 1: Noise vom Key (9:38)" />
- <YT time={614} videoId="mYYMTTVDI08" label="Problem 2: Bright Edges (10:14)" />

### Noise-Problem lösen
<YT time={580} videoId="mYYMTTVDI08" label="Noise schwer im Image Output sichtbar (9:40)" />

<YT time={585} videoId="mYYMTTVDI08" label="Mat Output macht Noise deutlich sichtbar (9:45)" />

**Ursache und Lösung:**
- <YT time={589} videoId="mYYMTTVDI08" label="Color Values nicht nah genug an Key Color (9:49)" />
- <YT time={595} videoId="mYYMTTVDI08" label="Blender kann sie nicht komplett entfernen (9:55)" />

**Tweak Controls:**
1. <YT time={597} videoId="mYYMTTVDI08" label="Tweak Controls öffnen (9:57)" />
2. <YT time={599} videoId="mYYMTTVDI08" label="Black Level anpassen bis Noise weg (9:59)" />
3. <YT time={603} videoId="mYYMTTVDI08" label="White Point senken für solide Weiss-Bereiche (10:03)" />
4. <YT time={608} videoId="mYYMTTVDI08" label="NICHT zu extrem → scharfe Kanten vermeiden (10:08)" />

### Bright Edge Problem
<YT time={614} videoId="mYYMTTVDI08" label="Bright Edges statt Dark Edges (10:14)" />

<YT time={620} videoId="mYYMTTVDI08" label="Edge Extension als Lösung (10:20)" />

**Edge Extension Konzept:**
- <YT time={621} videoId="mYYMTTVDI08" label="Bright Edges in Cut-Away Bereiche schieben (10:21)" />

### Komplexer Node-Setup
<YT time={627} videoId="mYYMTTVDI08" label="Benötigte Nodes: Dilate/Erode, Set Alpha, Inpaint (10:27)" />

**Node-Konfiguration:**
1. <YT time={635} videoId="mYYMTTVDI08" label="Zuerst verkabeln, dann erklären (10:35)" />
2. <YT time={639} videoId="mYYMTTVDI08" label="Inpaint Node vor existing Set Alpha (10:39)" />
3. <YT time={642} videoId="mYYMTTVDI08" label="New Set Alpha Node davor (10:42)" />
4. <YT time={647} videoId="mYYMTTVDI08" label="Set Alpha Mode: Replace Alpha (10:47)" />
5. <YT time={649} videoId="mYYMTTVDI08" label="Keying Mat Output → Alpha Input (10:49)" />
6. <YT time={654} videoId="mYYMTTVDI08" label="Dilate/Erode Node auf Alpha Input Line (10:54)" />

### Inpaint Node Funktion
<YT time={659} videoId="mYYMTTVDI08" label="Inpaint Node Output betrachten (10:59)" />

<YT time={663} videoId="mYYMTTVDI08" label="Size Value erhöhen zeigt Edge Extension (11:03)" />

**Wie Inpaint funktioniert:**
- <YT time={668} videoId="mYYMTTVDI08" label="Alpha Channel als Mask für affected Areas (11:08)" />
- <YT time={672} videoId="mYYMTTVDI08" label="Replace Alpha Node liefert Alpha Channel (11:12)" />
- <YT time={676} videoId="mYYMTTVDI08" label="Mat Output als Mask verwendet (11:16)" />
- <YT time={680} videoId="mYYMTTVDI08" label="Background bis Size-Distance abdecken (11:20)" />

### Dilate/Erode Funktion
<YT time={684} videoId="mYYMTTVDI08" label="Final Piece: Dilate/Erode Node (11:24)" />

<YT time={686} videoId="mYYMTTVDI08" label="Sichtbare Linie zwischen Actor und Extension (11:26)" />

**Das Sampling-Problem:**
- <YT time={689} videoId="mYYMTTVDI08" label="Inpaint sampelt Color am Mask-Edge (11:29)" />
- <YT time={693} videoId="mYYMTTVDI08" label="Wir wollen Colors INNER vom Edge (11:33)" />
- <YT time={697} videoId="mYYMTTVDI08" label="Dilate/Erode zieht Mask-Edges nach innen (11:37)" />

**Praktische Anwendung:**
- <YT time={704} videoId="mYYMTTVDI08" label="Size Value -2 → Linie verschwindet (11:44)" />
- <YT time={709} videoId="mYYMTTVDI08" label="Inpaint Size muss Bright Edges abdecken (11:49)" />
- <YT time={714} videoId="mYYMTTVDI08" label="Second Set Alpha Output: Bright Edges weg (11:54)" />

### Finaler Composite
<YT time={719} videoId="mYYMTTVDI08" label="Key komplett → Actor in jede Umgebung (11:59)" />

<YT time={723} videoId="mYYMTTVDI08" label="Alpha Over Node für Background (12:03)" />

<YT time={727} videoId="mYYMTTVDI08" label="Professionelles Keying-Ergebnis erreicht (12:07)" />

## Wichtige Erkenntnisse

**Keying-Pipeline Zusammenfassung:**
1. **Basic Key**: Keying Node mit präziser Color Selection
2. **Garbage Matte**: Multi-Layer Masking für Content Removal
3. **Despill**: Color Spill Node mit RGB Channel Balance
4. **Edge Extension**: Inpaint + Dilate/Erode für saubere Kanten

**Professionelle Techniken:**
- Image Node Output für Color Picking verwenden
- Mask-Layer mit Subtract Blending für Details
- RGB-Balance statt reines Green-Removal
- Environment-spezifische Bounce Light Anpassung
- Iterative Tweak Controls für Noise Elimination

**Häufige Fallstricke vermeiden:**
- Nicht zu extreme Black/White Point Adjustments
- Color Sampling am unverarbeiteten Material
- Edge Extension Size muss Bright Edges abdecken
- Dilate/Erode für korrektes Color Sampling

Dieses Tutorial bietet die komplette Professional Keying Pipeline für Blender - von Basis-Setup bis zu Hollywood-Standard-Techniken!