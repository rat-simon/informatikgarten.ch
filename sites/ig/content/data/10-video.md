---
title: Video
---

> [!success] Lernziele
> 
> - Sie verstehen **Videos als Serie von Bildern** und können erklären, was Framerate bedeutet.
> - Sie kennen die wichtigsten **Codecs und Container** und deren Unterschiede.
> - Sie verstehen die Grundprinzipien der **Videokompression** mit zeitlicher und räumlicher Redundanz.
> - Sie können erklären, was **Keyframes** sind und warum sie wichtig sind.

## Videos sind bewegte Bilder

Ein Video ist im Grunde nichts anderes als eine schnelle Abfolge von Einzelbildern. Wenn diese Bilder schnell genug hintereinander abgespielt werden, nimmt unser Gehirn sie als flüssige Bewegung wahr. Dieses Prinzip kennen Sie vielleicht vom Daumenkino!

Die **Framerate** (Bildwiederholrate) gibt an, wie viele Bilder pro Sekunde gezeigt werden:
- **24 fps** (frames per second): Kinostandard
- **25/30 fps**: Fernsehen
- **60 fps**: Flüssige Videospiele
- **120+ fps**: Slow-Motion-Aufnahmen

### Datenmenge ohne Kompression

Rechnen wir mal aus, wie viel Speicher ein unkomprimiertes Video benötigen würde:

**Beispiel:** Full HD Video (1920×1080 Pixel), 30 fps, RGB mit 8 Bit Farbtiefe, 1 Minute lang

1. **Ein Bild:** $1920 \times 1080 \text{ Pixel} \times 3 \text{ Bytes (RGB)} = 6'220'800 \text{ Bytes} \approx 6 \text{ MB}$
2. **Eine Sekunde:** $6 \text{ MB} \times 30 \text{ fps} = 180 \text{ MB}$
3. **Eine Minute:** $180 \text{ MB} \times 60 = 10{,}8 \text{ GB}$

Das ist enorm viel! Deshalb brauchen wir Kompression.

## Videokompression - Zeit als neue Dimension

Bei der Bildkompression haben wir gelernt, dass ähnliche Flächen zusammengefasst werden können. Bei Videos kommt eine weitere Dimension dazu: die **Zeit**.

### Räumliche Kompression (wie bei Bildern)
- Ähnliche benachbarte Pixel werden zusammengefasst
- Farbverläufe und einfarbige Flächen lassen sich gut komprimieren

### Zeitliche Kompression (neu bei Videos)
Videos nutzen aus, dass sich von Bild zu Bild oft nur wenig ändert:
- Der Hintergrund bleibt meist gleich
- Nur bewegte Objekte ändern ihre Position
- Grosse Teile des Bildes bleiben unverändert

## Keyframes und Delta-Frames

Die zeitliche Kompression funktioniert mit verschiedenen Frame-Typen:

### I-Frames (Intra-Frames oder Keyframes)
- **Vollständige Bilder**, die alle Pixelinformationen enthalten
- Wie ein normales JPEG-Bild komprimiert
- Startpunkt für die folgenden Frames
- Typisch alle 1-2 Sekunden ein Keyframe

### P-Frames (Predicted Frames)
- Speichern nur die **Unterschiede** zum vorherigen Frame
- "An Position (x,y) hat sich die Farbe von Rot zu Blau geändert"
- Viel kleiner als I-Frames

### B-Frames (Bidirectional Frames)
- Nutzen Informationen vom **vorherigen und nächsten** Frame
- Noch effizienter, aber komplexer zu berechnen

#### Warum B-Frames so effizient sind - Ein Beispiel

Stellen Sie sich vor, ein Ball rollt gleichmässig von links nach rechts über den Bildschirm:

**Ohne B-Frames (nur I und P):**
```
Frame 1 (I): Ball bei Position 0
Frame 2 (P): "Ball ist 20 Pixel weiter rechts"
Frame 3 (P): "Ball ist 20 Pixel weiter rechts" 
Frame 4 (P): "Ball ist 20 Pixel weiter rechts"
Frame 5 (P): "Ball ist 20 Pixel weiter rechts"
→ Jeder P-Frame muss die Bewegung einzeln speichern
```

**Mit B-Frames:**
```
Frame 1 (I): Ball bei Position 0
Frame 5 (P): Ball bei Position 80
Frame 2-4 (B): "Interpoliere Position zwischen Frame 1 und 5"
→ B-Frames sagen nur: "Der Ball ist auf dem Weg zwischen Start und Ziel"
```

**Der Trick:** B-Frames können **interpolieren**! Bei gleichmässigen Bewegungen oder Überblendungen müssen sie nicht die exakte Änderung speichern, sondern nur: "Ich bin x% zwischen Frame A und Frame B". Das spart enorm Speicherplatz bei vorhersagbaren Bewegungen.

**Beispiel einer Sequenz:**
```
I → P → P → B → B → P → P → I → P → P → B → B → P → P → I
```

Der Decoder baut das vollständige Bild auf, indem er vom letzten Keyframe ausgeht und alle Änderungen anwendet.

## Codecs und Container

### Codec (Coder-Decoder)
Ein **Codec** ist der Algorithmus, der bestimmt, **wie** die Video- und Audiodaten komprimiert werden:

**Wichtige Video-Codecs:**
- **H.264/AVC**: Weit verbreitet, gute Balance zwischen Qualität und Dateigrösse
- **H.265/HEVC**: Nachfolger von H.264, ca. 50% bessere Kompression
- **VP9**: Von Google, open-source, YouTube-Standard
- **AV1**: Modernster open-source Codec, sehr effizient

### Container
Ein **Container** ist das Dateiformat, das Video, Audio und Metadaten **zusammenpackt**:

**Wichtige Container:**
- **.mp4**: Universell unterstützt, verwendet meist H.264
- **.mkv**: Sehr flexibel, kann viele verschiedene Codecs enthalten
- **.webm**: Für Web optimiert, meist mit VP9
- **.mov**: Apple-Format, oft mit ProRes für Videobearbeitung

**Analogie:** Der Container ist wie eine Schachtel, der Codec bestimmt, wie die Dinge in der Schachtel verpackt sind.

## Kompressionseffizienz bei H.264

H.264 ist der meistverwendete Videocodec. Er nutzt verschiedene Tricks:

1. **Bewegungsvorhersage (Motion Prediction)**
   - Der Encoder sucht nach Bildblöcken, die sich nur verschoben haben
   - Statt den ganzen Block neu zu speichern: "Block X hat sich 10 Pixel nach rechts bewegt"

2. **Makroblöcke**
   - Das Bild wird in $16 \times 16$ Pixel grosse Blöcke unterteilt
   - Jeder Block wird einzeln analysiert und optimal komprimiert

3. **Variable Bitrate**
   - Actionszenen mit viel Bewegung: mehr Bits
   - Ruhige Szenen: weniger Bits
   - Gesamtqualität bleibt konstant

### Warum sind Keyframes wichtig?

**Für Videobearbeitung:**
- Schnitte sollten an Keyframes erfolgen
- Sonst muss der Editor alle Frames seit dem letzten Keyframe neu berechnen

**Für Streaming:**
- Beim Vorspulen springt der Player zum nächsten Keyframe
- Mehr Keyframes = präziseres Springen, aber grössere Datei

**Bei Übertragungsfehlern:**
- Fehler in P/B-Frames pflanzen sich fort bis zum nächsten Keyframe
- Keyframes "resetten" das Bild und stoppen Fehlerfortpflanzung

## Praktisches Beispiel

Ein 10-Sekunden Full-HD-Clip:
- **Unkomprimiert:** ~1,8 GB
- **Mit H.264 komprimiert:** ~15-30 MB (je nach Qualität)
- **Kompressionsfaktor:** $60-120\times$

Die Kompression erreicht das durch:
- Keyframes alle 30-60 Frames
- P/B-Frames speichern nur Änderungen
- Räumliche Kompression innerhalb jedes Frames
- Wegwerfen von Details, die das Auge kaum wahrnimmt

> [!info] Zusammenfassung
> 
> ## Videos kompakt erklärt
> 
> **Videos = Bilderserie mit hoher Framerate**
> - 24-60 Bilder pro Sekunde für flüssige Bewegung
> - Unkomprimiert würde 1 Minute Full-HD über 10 GB benötigen
> 
> **Kompression nutzt zwei Dimensionen:**
> - **Räumlich:** Ähnliche Pixel zusammenfassen (wie bei JPEG)
> - **Zeitlich:** Nur Änderungen zwischen Frames speichern
> 
> **Frame-Typen:**
> - **I-Frames (Keyframes):** Vollständige Bilder als Referenz
> - **P-Frames:** Änderungen zum vorherigen Frame
> - **B-Frames:** Nutzen vorherige und nachfolgende Frames
> 
> **Codec vs. Container:**
> - **Codec** (H.264, H.265): Wie wird komprimiert?
> - **Container** (.mp4, .mkv): Wie werden Video/Audio/Metadaten verpackt?
> 
> Mit moderner Kompression schrumpft ein Video auf etwa 1-2% seiner ursprünglichen Grösse - ohne merkbaren Qualitätsverlust!