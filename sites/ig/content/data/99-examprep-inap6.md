---
title: Prüfungsvorbereitung Inap6
---

## Prüfungsumfang

Es gelten die Lernziele der behandelten Lektionen, wenn nichts anderes angegeben ist.
- Wir haben das "hexadezimale" Zahlensystem nicht besprochen, es ist nicht Teil der Prüfung.

## Thema 1: Farbmodelle und Farbmischung

### Aufgabe 1.1: Farben mischen

Behauptung: 3 Bit Farbtiefe pro Kanal bedeutet, $111_2$ also $7_{10}$ ist die höchste Zahl pro Kanal, also kann man $7^3 = 343$ Farben mischen.

Ist das wahr oder falsch? Begründen Sie Ihre Antwort!

> [!solution]- Lösung mit Erklärung
> 
> Das ist falsch. Bei 3 Bit Farbtiefe ist $111_2$ oder $7_{10}$ zwar die höchste Zahl, aber mit 0 dazugezählt hat jeder Farbkanal 8 Zustände. Das heisst, man kann $8^3 = 512$ Farben mischen.
> 
> ![[explainer-colordepth-claim.mp4]]
> 

### Aufgabe 1.2: Additiv vs. Subtraktiv

Welche Farbe entsteht beim additiven Mischen von Rot und Blau? Und welche beim subtraktiven Mischen von Cyan und Gelb?

> [!solution]- Lösung
> 
> - Additiv (RGB): Rot + Blau = Magenta
> - Subtraktiv (CMY): Cyan + Gelb = Grün

### Aufgabe 1.3: Farbtiefe und Anzahl Farben

Mit wie vielen Bit Farbtiefe pro Kanal können Sie bei einem RGB-Bild mindestens 1 Million verschiedene Farben darstellen?

> [!solution]- Lösung
> 
> Wir suchen x, sodass $(2^x)^3 \geq 1'000'000$
> - Bei 6 Bit: $(2^6)^3 = 64^3 = 262'144$ (zu wenig)
> - Bei 7 Bit: $(2^7)^3 = 128^3 = 2'097'152$ (genug!)
> 
> Antwort: Mindestens 7 Bit pro Kanal

### Aufgabe 1.4: Berechnung Farbanzahl

Mit 5 Bit Farbtiefe pro Kanal bei RGB: Wie viele verschiedene Farben sind möglich?

> [!solution]- Lösung
> 
> $(2^5)^3 = 32^3 = 32'768$ verschiedene Farben

### Aufgabe 1.5: Farbtiefe erhöhen

Wir stellen unsere Kamera von 8 auf 10 Bit Farbtiefe pro Kanal um: Wie viel Mal mehr Farben können nun gespeichert werden?

> [!solution]- Lösung
> 
> 8 Bit: $(2^8)^3 = 16'777'216$ Farben
> 10 Bit: $(2^{10})^3 = 1'073'741'824$ Farben
> 
> Faktor berechnen:
> $$\frac{(2^{10})^3}{(2^8)^3} = \left(\frac{2^{10}}{2^8}\right)^3 = (2^{10-8})^3 = (2^2)^3 = 2^6 = 64$$
> 
> Weniger elegant mit absoluten Zahlen:
> $$\frac{1'073'741'824}{16'777'216} = 64$$
> 
> $64 \times$ mehr Farben bei 10 Bit

### Aufgabe 1.6: Farbmischung RGB

Welche RGB-Werte ergeben reines Gelb bei maximaler Helligkeit (8 Bit pro Kanal)?

> [!solution]- Lösung
> 
> $\text{RGB}(255, 255, 0)$ - Rot und Grün voll, Blau aus

### Aufgabe 1.7: Farbkanäle zählen

Wie viele Farbkanäle haben folgende Formate: RGB, CMYK, Graustufen, RGBA?

> [!solution]- Lösung
> 
> - RGB: 3 Kanäle (Rot, Grün, Blau)
> - CMYK: 4 Kanäle (Cyan, Magenta, Gelb, Schwarz)
> - Graustufen: 1 Kanal
> - RGBA: 4 Kanäle (RGB + Alpha)

## Thema 2: Farbumrechnung

### Aufgabe 2.1: RGB zu CMY

Rechnen Sie die RGB-Farbe $(200, 50, 100)$ in CMY um. Geben Sie die Werte normalisiert im Bereich $[0, 1]$ an.

> [!solution]- Lösung
> 
> Normalisiert: $R = 200/255 \approx 0.784$, $G = 50/255 \approx 0.196$, $B = 100/255 \approx 0.392$
> 
> CMY-Umrechnung:
> - C = 1 - R = 1 - 0.784 = 0.216
> - M = 1 - G = 1 - 0.196 = 0.804
> - Y = 1 - B = 1 - 0.392 = 0.608

### Aufgabe 2.2: CMYK-Berechnung

Berechnen Sie die CMYK-Werte für $\text{RGB}(128, 192, 64)$. Geben Sie die Werte in Prozent an.

> [!solution]- Lösung
> 
> Normalisiert: $r = 128/255 \approx 0.502$, $g = 192/255 \approx 0.753$, $b = 64/255 \approx 0.251$
> 
> $K = 1 - \max(0.502, 0.753, 0.251) = 1 - 0.753 = 0.247$
> 
> $C = (1 - 0.502 - 0.247) / (1 - 0.247) = 0.251 / 0.753 \approx 0.333$
> $M = (1 - 0.753 - 0.247) / (1 - 0.247) = 0 / 0.753 = 0$
> $Y = (1 - 0.251 - 0.247) / (1 - 0.247) = 0.502 / 0.753 \approx 0.667$
> 
> $\text{CMYK}(33.3\%, 0\%, 66.7\%, 24.7\%)$

### Aufgabe 2.3: Schwarzwert in CMYK

Warum wird bei CMYK Schwarz (K) als separate Farbe verwendet, anstatt C, M und Y zu mischen?

> [!solution]- Lösung
> 
> 1. Ökonomisch: Schwarze Tinte ist günstiger
> 2. Qualität: Reines Schwarz sieht besser aus als gemischtes
> 3. Effizienz: Weniger Tinte, schnelleres Trocknen

### Aufgabe 2.4: CMYK Spezialfall

Bei welchem RGB-Wert wird K in CMYK gleich 1 (100%)?

> [!solution]- Lösung
> 
> Bei $\text{RGB}(0, 0, 0)$ - reines Schwarz
> $K = 1 - \max(0, 0, 0) = 1$

### Aufgabe 2.5: Komplementärfarbe

Was ist die Komplementärfarbe zu Blau?

> [!solution]- Lösung
> 
> Gelb ist die Komplementärfarbe zu Blau.
> 
> Blau absorbiert Gelb, Gelb absorbiert Blau.

### Aufgabe 2.6: CMYK Fangfrage

Macht folgende CMYK Farbmischung Sinn? Begründen Sie Ihre Antwort, indem Sie sich überlegen, wie viel Cyan für die Mischung nötig wäre. $\text{CMYK}(100\%, 100\%, 100\%, 100\%)$

> [!solution]- Lösung
> 
> Diese Mischung macht keinen Sinn. Wenn K = 100%, dann ist die Farbe Schwarz, und die Werte für C, M und Y sind irrelevant, da Schwarz alle Farben absorbiert. Man bräuchte also gar kein Cyan, Magenta oder Gelb.

## Thema 3: Bildformate und Datenmenge

### Aufgabe 3.1: Unkomprimierte Datenmenge

Wie viele Megabyte Speicherplatz bräuchten Sie für ein RGB-Bild von 1800px Breite und 1200px Höhe mit 8 Bit Farbtiefe pro Kanal, wenn Sie es nicht komprimieren würden?

> [!solution]- Lösung mit Erklärung
> 
> $$ 1800 \times 1200 \times 8\text{" Bit Farbtiefe pro Kanal"}$$
> $$ 1800 \times 1200 \times 1\text{" Byte Farbtiefe pro Kanal"}$$
> $$ 1800 \times 1200 \times 3\text{" Byte Farbtiefe"}$$
> $$ 6'480'000\text{" Byte"}$$
> $$ \approx6,48 \text{" Megabyte"}$$
> 
> ![[explainer-datenmenge-bild.mp4]]

### Aufgabe 3.2: Speicherplatz Graustufen

Ein Graustufenbild mit 2048 x 1536 Pixeln und 8 Bit Farbtiefe belegt unkomprimiert wie viel Speicherplatz?

> [!solution]- Lösung
> 
> Graustufenbild = nur 1 Kanal
> $2048 \times 1536 \times 1 \text{Byte} = 3'145'728 \text{Byte} \approx 3.15 \text{MB}$

### Aufgabe 3.3: Pixelanzahl berechnen

Ein 4K-Video hat 3840 x 2160 Pixel. Wie viele Megapixel sind das ungefähr?

> [!solution]- Lösung
> 
> 4K $= 3840 \times 2160$ Pixel
> Insgesamt: $3840 \times 2160 = 8'294'400 \text{Pixel} \approx 8.3 \text{Megapixel}$

### Aufgabe 3.4: Datenvolumen Video

Ein unkomprimiertes RGB-Video mit $1920 \times 1080$ Pixeln, 8 Bit Farbtiefe pro Kanal und 30 Bilder pro Sekunde: Wie viel Daten fallen pro Sekunde an?

> [!solution]- Lösung
> 
> Pro RGB-Pixel bei 8 Bit Farbtiefe pro Kanal: $3 \times 8 \text{ Bit} = 3 \times 1 \text{ Byte} = 3 \text{ Byte}$
> Pro Bild: $1920 \times 1080 \times 3 \text{ Byte} = 6'220'800 \text{ Byte}$
> Pro Sekunde: $6'220'800 \times 30 = 186'624'000 \text{ Byte} \approx 186.6 \text{ MB/s}$

### Aufgabe 3.5: Megapixel berechnen

Eine Kamera nimmt Bilder mit $6000 \times 4000$ Pixeln auf. Wie viele Megapixel hat sie?

> [!solution]- Lösung
> 
> $6000 \times 4000 = 24'000'000 \text{ Pixel} = 24 \text{ Megapixel}$

### Aufgabe 3.6: Speicherplatz HD vs 4K

Um wie viel Mal mehr Speicher braucht ein 4K-Bild im Vergleich zu Full HD bei gleicher Farbtiefe? ($4K: 3840 \times 2160$ vs. $\text{Full HD}: 1920 \times 1080$)

> [!solution]- Lösung
> 
> 4K: $3840 \times 2160 = 8'294'400$ Pixel
> Full HD: $1920 \times 1080 = 2'073'600$ Pixel
> Verhältnis: $8'294'400 / 2'073'600 = 4$
> 
> Ein 4K-Bild braucht $4 \times$ mehr Speicher.

### Aufgabe 3.7: Datenmenge Panorama

Ein Panoramabild hat $10'000 \times 3'000$ Pixel, RGB mit 8 Bit pro Kanal. Unkomprimierte Grösse?

> [!solution]- Lösung
> 
> $10'000 \times 3'000 \times 3 \text{ Byte} = 90'000'000 \text{ Byte} = 90 \text{ MB}$

### Aufgabe 3.8: Auflösung erhöhen

Was passiert mit der Datenmenge, wenn Sie die Auflösung eines Bildes in beide Richtungen verdoppeln?

> [!solution]- Lösung
> 
> Die Datenmenge vervierfacht sich $(2 \times \text{Breite} \times 2 \times \text{Höhe} = 4 \times \text{Pixel})$

### Aufgabe 3.9: Alpha-Kanal

Was ist ein Alpha-Kanal und wie verändert er die Datenmenge eines RGB-Bildes?

> [!solution]- Lösung
> 
> Der Alpha-Kanal speichert Transparenzinformationen. Ein RGBA-Bild hat 4 Kanäle statt 3, die Datenmenge erhöht sich daher um 33% (von 3 auf 4 Byte pro Pixel bei 8 Bit Farbtiefe).

### Aufgabe 3.10: Vergrösserung von Bildern

Ein Vektorbild wird aktuell auf Ihrem Handy mit einer Bildschirmauflösung von $2532 \times 1170 \text{ px}$ angezeigt. Nun möchten Sie das gleiche Bild auf ein $25 \times 10 \text{ Meter}$ Poster an die Fassade eines Kinos drucken. Bei einer typischen Druckauflösung von $150\text{dpi}$ gibt das ein Bild von ungefähr $147638 \times 59055 \text{ Pixel}$ ! Was passiert ungefähr mit der Datenmenge? Begründen Sie Ihre Antwort.

> [!solution]- Lösung
> 
> Die Datenmenge bleibt gleich, weil sich Vektorgrafiken stufenlos ohne Qualitätsverlust skalieren lassen.

### Aufgabe 3.11: Bit zu Byte

Ein RGB-Bild mit 12 Bit Farbtiefe pro Kanal: Wie viele Byte braucht ein einzelner Pixel?

> [!solution]- Lösung
> 
> $12 \text{ Bit} \times 3 \text{ Kanäle} = 36 \text{ Bit}$
> $36 \text{ Bit} / 8 = 4.5 \text{ Byte pro Pixel}$

## Thema 4: Raster- vs. Vektorgrafiken

### Aufgabe 4.1: Beschriften Sie Raster- und Vektorgrafiken

In diesem Bildausschnitt eines PDFs, beschriften und begründen Sie, welche Elemente auf Rastergrafiken basieren und welche auf Vektorgrafiken.

![[Pasted-image-20231210130329.png]]

> [!solution]- Lösung
> 
> - Die Buchstaben des Texts sind Vektorgrafiken.
> - Das Smiley ist gestochen scharf. Es könnte zwar eine Rastergrafik mit sehr hoher Auflösung sein, aber wahrscheinlich ist es eine Vektorgrafik.
> - Das verpixelte Bild links unten ist ganz offensichtlich eine Rastergrafik.

### Aufgabe 4.2: Vektorgrafik erkennen

Nennen Sie drei typische Anwendungsfälle, wo Vektorgrafiken sinnvoller sind als Rastergrafiken.

> [!solution]- Lösung
> 
> 1. Logos (müssen in verschiedenen Grössen verwendet werden)
> 2. Schriftarten (müssen scharf skalierbar sein)
> 3. Technische Zeichnungen (bestehen aus geometrischen Formen)

### Aufgabe 4.3: SVG oder PNG?

Für welches Format entscheiden Sie sich für ein Icon mit klaren Farben und Formen, das auf einer Webseite in Grössen von $16 \times 16$ bis $512 \times 512 \text{ Pixel}$ verwendet wird? SVG oder PNG? Begründen Sie Ihre Antwort.

> [!solution]- Lösung
> 
> SVG - es skaliert verlustfrei und die Dateigrösse bleibt gleich, unabhängig von der Anzeigegrösse.

### Aufgabe 4.4: Benennen Sie

1. Wie heissen die zwei markierten Arme?
2. Der Pfad als Ganzes ist eine Kurve mit einem bestimmten Namen, wie heisst sie?

![[Pasted-image-20231210131111.png]]


> [!solution]- Lösung
> 
> Der Pfad ist eine **Bézier-Kurve**, benannt nach dem französischen Renault-Autoingenieur Pierre Bézier. Die Kontrollpunkte von Bézierkurven werden in Vektorgrafikprogrammen als Pfadpunkte (z.B. Nr. 4) mit **Handles** ("Griffen") (die markierten Punkte) angezeigt.

### Aufgabe 4.5: Bézier-Kurve Ordnung

Eine kubische Bézier-Kurve hat wie viele Kontrollpunkte?

> [!solution]- Lösung
> 
> 4 Kontrollpunkte (2 Endpunkte und 2 Kontrollpunkte für die Krümmung)

## Thema 5: Kameratechnik und Schriftarten

### Aufgabe 5.1: Bayer-Muster

Warum hat das Bayer-Muster bei Kamerasensoren doppelt so viele grüne wie rote oder blaue Filter?

> [!solution]- Lösung
> 
> Das menschliche Auge ist für Grün besonders empfindlich. Grün trägt mehr zur wahrgenommenen Helligkeit bei als Rot oder Blau. Mehr grüne Sensoren verbessern daher die Bildqualität und entsprechen besser der menschlichen Wahrnehmung.

### Aufgabe 5.2: Greenscreen

Warum wird oft ein grüner Hintergrund (Greenscreen) für Filmaufnahmen verwendet? Nennen Sie zwei gute Gründe.

> [!solution]- Lösung
> 
> 1. Kamerasensoren haben mehr grüne Sensorzellen (Bayer-Muster), also eine bessere Auflösung für Grün
> 2. Grün kommt selten in Hautfarbe oder Kleidung vor, was die Trennung erleichtert
