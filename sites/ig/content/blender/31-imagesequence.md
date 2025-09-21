---
title: Video als Bildsequenz exportieren
display: hidden
---

# Video als Bildsequenz exportieren in Blender

<StickMe>
## Tutorial-Video

<Youtube id="Hqs4QwQ1Mb4" />
</StickMe>

## Zusammenfassung

Ein kompaktes Tutorial zum Konvertieren von Video-Dateien in Bildsequenzen mit Blender. Lernen Sie, warum Bildsequenzen oft besser für die Bearbeitung geeignet sind und wie Sie den kompletten Konvertierungsprozess in wenigen Schritten durchführen - schnell, effizient und zuverlässig.

## Warum Bildsequenzen verwenden?

<YT time={0} videoId="Hqs4QwQ1Mb4" label="Video-Dateien vs. Bildsequenzen (0:00)" />

**Vorteile von Bildsequenzen:**
- <YT time={4} videoId="Hqs4QwQ1Mb4" label="Einfacher zu verarbeiten (0:04)" />
- <YT time={6} videoId="Hqs4QwQ1Mb4" label="Verursachen weniger technische Probleme (0:06)" />
- Bessere Performance in Blender
- Robustere Workflow-Integration
- Einzelne Frames können separat bearbeitet werden

## 1. Workspace Setup

<YT time={16} videoId="Hqs4QwQ1Mb4" label="Fresh Blender Scene starten (0:16)" />

### Video Editing Workspace
<YT time={18} videoId="Hqs4QwQ1Mb4" label="Video Editing Workspace öffnen (0:18)" />

**Workspace-Auswahl:**
- Direkt aus den oberen Tabs auswählen
- Alternative: Plus Tab → Video Editing

### Video Import
<YT time={23} videoId="Hqs4QwQ1Mb4" label="Video-Datei per Drag & Drop importieren (0:23)" />

**Import-Workflow:**
1. <YT time={26} videoId="Hqs4QwQ1Mb4" label="Video-Datei in Timeline ziehen (0:26)" />
2. <YT time={30} videoId="Hqs4QwQ1Mb4" label="Auf Frame 1 positionieren (0:30)" />

## 2. Timeline-Konfiguration

### Frame Range Setup
<YT time={35} videoId="Hqs4QwQ1Mb4" label="Video hat 385 Frames (0:35)" />

<YT time={38} videoId="Hqs4QwQ1Mb4" label="End Frame auf 385 setzen (0:38)" />

**Timeline-Anpassung:**
- Video-Länge in Timeline-Einstellungen übernehmen
- End Frame exakt auf Video-Länge setzen
- Ensures komplette Video-Konvertierung

## 3. Resolution Matching

### Source Resolution identifizieren
<YT time={45} videoId="Hqs4QwQ1Mb4" label="Resolution abgleichen (0:45)" />

<YT time={48} videoId="Hqs4QwQ1Mb4" label="Source: 3840 x 2160 (4K) (0:48)" />

### Scene Settings anpassen
<YT time={54} videoId="Hqs4QwQ1Mb4" label="Scene Settings → Resolution anpassen (0:54)" />

**Resolution Setup:**
- <YT time={57} videoId="Hqs4QwQ1Mb4" label="3840 x 2160 in Scene Settings (0:57)" />
- Verhindert Qualitätsverlust durch Scaling
- Maintains Original-Auflösung

### Transform Correction
<YT time={61} videoId="Hqs4QwQ1Mb4" label="Video zu klein nach Resolution-Change (1:01)" />

<YT time={63} videoId="Hqs4QwQ1Mb4" label="Transform Options → Scale auf 1.0 (1:03)" />

## 4. Render-Vorbereitung

### Workspace Switch
<YT time={68} videoId="Hqs4QwQ1Mb4" label="Rendering vorbereitet (1:08)" />

<YT time={70} videoId="Hqs4QwQ1Mb4" label="Rendering Workspace wechseln (1:10)" />

### Test Render
<YT time={73} videoId="Hqs4QwQ1Mb4" label="Test-Frame rendern mit F12 (1:13)" />

<YT time={76} videoId="Hqs4QwQ1Mb4" label="Test erfolgreich (1:16)" />

### Color Management
<YT time={78} videoId="Hqs4QwQ1Mb4" label="Color Management überprüfen (1:18)" />

<YT time={80} videoId="Hqs4QwQ1Mb4" label="View Transform: Standard setzen (1:20)" />

**Wichtiger Color Management Schritt:**
- Ensures korrekte Farbwiedergabe
- Standard Transform für normale Videos
- Verhindert Farbverschiebungen

## 5. Output Configuration

### File Format Selection
<YT time={83} videoId="Hqs4QwQ1Mb4" label="Output Properties konfigurieren (1:23)" />

<YT time={85} videoId="Hqs4QwQ1Mb4" label="File Format: JPEG bevorzugt (1:25)" />

**Format-Optionen:**
- <YT time={88} videoId="Hqs4QwQ1Mb4" label="JPEG funktioniert in den meisten Fällen (1:28)" />
- <YT time={91} videoId="Hqs4QwQ1Mb4" label="Beliebiges Image Format möglich (1:31)" />
- PNG für verlustfreie Qualität
- EXR für High Dynamic Range

### Output Directory Setup
<YT time={93} videoId="Hqs4QwQ1Mb4" label="Output Folder definieren (1:33)" />

<YT time={96} videoId="Hqs4QwQ1Mb4" label="Neuen Folder neben Original-Video (1:36)" />

**Directory-Organisation:**
1. <YT time={97} videoId="Hqs4QwQ1Mb4" label="Folder: 'Image Sequence' erstellen (1:37)" />
2. <YT time={103} videoId="Hqs4QwQ1Mb4" label="Folder öffnen (1:43)" />

### File Naming Convention
<YT time={106} videoId="Hqs4QwQ1Mb4" label="File Name setzen (1:46)" />

<YT time={109} videoId="Hqs4QwQ1Mb4" label="'Image Sequence' als Base Name (1:49)" />

**Naming Best Practice:**
- <YT time={111} videoId="Hqs4QwQ1Mb4" label="Underscore am Ende hinzufügen (1:51)" />
- <YT time={113} videoId="Hqs4QwQ1Mb4" label="Frame-Nummern werden automatisch angehängt (1:53)" />
- Resultat: image_sequence_0001.jpg, image_sequence_0002.jpg, etc.

## 6. Batch Rendering

### Final Render Execution
<YT time={116} videoId="Hqs4QwQ1Mb4" label="Accept Settings (1:56)" />

<YT time={118} videoId="Hqs4QwQ1Mb4" label="Render → Render Animation (1:58)" />

### Render Performance
<YT time={121} videoId="Hqs4QwQ1Mb4" label="Sehr schneller Prozess (2:01)" />

**Warum so schnell:**
- <YT time={124} videoId="Hqs4QwQ1Mb4" label="Kein 3D-Rendering involved (2:04)" />
- Pure Frame-Extraktion
- Minimal processing overhead
- GPU-accelerated wenn verfügbar

## 7. Result Verification

### Output Inspection
<YT time={126} videoId="Hqs4QwQ1Mb4" label="Render abgeschlossen (2:06)" />

<YT time={128} videoId="Hqs4QwQ1Mb4" label="File Browser → Output Folder (2:08)" />

### Success Verification
<YT time={131} videoId="Hqs4QwQ1Mb4" label="Jeder Frame als einzelnes Bild (2:11)" />

<YT time={134} videoId="Hqs4QwQ1Mb4" label="Perfekte Image Sequence erstellt (2:14)" />

**Quality Check:**
- <YT time={137} videoId="Hqs4QwQ1Mb4" label="Ready für Blender-Workflow (2:17)" />
- Alle Frames sequential benannt
- Korrekte Auflösung beibehalten
- Konsistente Bildqualität

## Wichtige Erkenntnisse

**Workflow-Effizienz:**
- Schnelle Konvertierung ohne 3D-Rendering
- Automatische Frame-Nummerierung
- Batch-Processing für komplette Videos

**Best Practices:**
- Resolution-Matching zwischen Source und Scene
- Organisierte Folder-Struktur verwenden
- Konsistente Naming Conventions
- Color Management beachten

**Technische Vorteile:**
- Robustere Performance als Video-Files
- Einzelne Frame-Manipulation möglich
- Weniger Memory-Overhead
- Bessere Timeline-Scrubbing Performance

**Format-Empfehlungen:**
- JPEG für Standard-Workflows
- PNG für verlustfreie Qualität
- EXR für HDR-Content
- TGA für Alpha-Channels

**Anwendungsfälle:**
- VFX-Compositing Vorbereitung
- Frame-by-Frame Analysis
- Motion Graphics Base Material
- Rotoscoping-Workflows
- Color Grading Preparation

Dieses Tutorial bietet den effizienten Standard-Workflow für Video-zu-Bildsequenz-Konvertierung in Blender - essentiell für professionelle Post-Production-Pipelines!