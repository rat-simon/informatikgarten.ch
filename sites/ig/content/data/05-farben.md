---
title: Farben
---
## Farben in RGB

Gratulation! Jetzt haben Sie das Rüstzeugs, ein grundlegendes Konzept zu verstehen, das Sie täglich umgibt: **Farben und Farbmodelle**!

Wenn Sie Ihren Bildschirm aus der Nähe anschauen, merken Sie, dass sie aus kleinen, farbig leuchtenden Stellen bestehen. Hier eine Nahaufnahme von Wikipedia:

![[pixel-rgb.excalidraw]]

Wie LCDs genau farbiges Licht erzeugen ist sehr interessant! Falls Sie das interessiert, hier [ein Youtube-Video dazu](https://youtu.be/gA2mG6MieV8?si=lFMIjN2Eh-RKs_lO&t=155). Aber Sie können die Informatik problemlos verstehen, ohne die Physik davon überhaupt anzuschauen.

Diese "Lämpchen" sind **rot**, dann **grün**, dann **blau**, und dann wieder rot, grün, blau, und so weiter. Ein Dreierpack aus einem roten, grünen und blauen "Lämpchen" ist ein RGB-Pixel. 

RGB-Pixel haben also mindestens folgende Charakteristiken:
- Werte für Rot, Grün, Blau
- Koordinaten

### Farbtiefe

Stellen Sie sich mal vor, wir könnten diese RGB-Lämpchen einfach nur ganz ein- oder ausschalten. Wie viele Mischfarben könnten wir erzeugen?
> [!solution]- Lösung
> 
> Um es sich einfach zu machen, können Sie sich in diesem Beispiel einen RGB-Pixel als eine einzelne Binärzahl vorstellen.
> 
> - <span style={{color:"red"}}>0</span><span style={{color:"green"}}>0</span><span style={{color:"blue"}}>0</span><sub>2</sub> wäre schwarz.
> - 001<sub>2</sub> wäre blau.
> - 010<sub>2</sub> wäre grün.
> - 011<sub>2</sub> wäre die Mischung aus grün und blau, also hellblau.<br />
> 	⋮
> - 111<sub>2</sub> wäre die Mischung aller Farben, also weiss.
> 
> Wie viele Kombinationen gibt es also? 111<sub>2</sub> sind 7<sub>10</sub>, aber da wird 000<sub>2</sub> (Schwarz) nicht mitgezählt. Zusammen mit Schwarz gibt es **8 Farbkombinationen, also 2<sup>3</sup>**. 
> 
> Ohne Weiss und Schwarz sähe der Regenbogen dann so aus:
> 
> ![Pasted image 20231119131705](./attachments/Pasted-image-20231119131705.png)

Typischerweise reicht die Werte für Rot, Grün und Blau von 0 bis **255**... Diese Zahl sollte Ihnen bekannt vorkommen. 
- Was sagt Ihnen das über die **Datenstruktur** aus? 
- Wie viele **Mischfarben** können Sie daraus erzeugen?

> [!solution]- Lösung
> 
> 255 ist die höchste Zahl, die Sie in einem Byte (also 8 Bit) speichern können. Das heisst: Jeder Farbkanal hat pro Pixel 8 Bit zu Verfügung, um eine Zahl zu speichern.
> 
> Als wir noch 1 Bit pro Kanal hatten, hatten wir pro Kanal 2 Zustände (2<sup>1</sup>) und deswegen 2<sup>3</sup> Farbkombinationen. Daraus erschliesst sich: 
> 
> Farbkombinationen = Zustände pro Kanal<sup>Anzahl Kanäle</sup>
> 
> Jetzt haben wir pro Kanal 2<sup>8</sup> = 256 Zustände pro Kanal (inkl. Null!). Bei drei Kanälen haben wir also 256<sup>3</sup> Kombinationen. Das gibt: 16'777'216 Farben!

Sie sehen also: Je nachdem wie viel Informationen Sie pro Farbkanal haben, desto mehr Mischfarben können Sie erzeugen. Das nennt man die Farbtiefe, die typischerweise in Bit angegeben wird ("8 bits/channel" = eine Farbtiefe von 8 Bit).

![Pasted image 20231119130057](./attachments/Pasted-image-20231119130057.png)

Wieso Farb*tiefe*? Weil Sie sich ein Bild nun als Quader vorstellen können.
- Die Anzahl Pixel in der Breite ist die Breite.
- Die Anzahl Pixel in der Höhe ist die Höhe.
- Die Farbtiefe × Anzahl Kanäle ist die Tiefe.

Die Datenmenge, die Sie benötigen, um das Bild zu speichern, ist dann einfach das Volumen des Quaders.

Wenn Sie wenig Farbtiefe haben, haben Sie wenig Mischfarben, aber auch weniger Daten. Ich habe Ihnen das hier zu visualisieren versucht. 
- Links haben Sie 1 Bit Farbtiefe - und deswegen nur wenige Farben. 
- Rechts haben Sie 4 Bit Farbtiefe - und deswegen sehen Sie mehr Farbschattierungen, aber haben auch einen grösseren Block von Daten.

![ginf-b02-colordepth-comparison](./attachments/ginf-b02-colordepth-comparison.png)

Im Webdesign werden eben diese Ideen verwendet, um Farben zu mischen. Verändern Sie mal die Hintergrundfarbe des Informatikgartens und versuchen Sie, die Farbnotation mit Hashtag "#" zu verstehen!

<ColorSliders />

### Aufgabe zu Farbtiefe & Datenmenge

Wie viele Bytes an Daten brauchen Sie, wenn Sie ein unkomprimiertes RGB-Bild von 1000 Pixel Breite, 1000 Pixel Höhe und mit 8 Bit Farbtiefe speichern wollen?

> [!info] Zusammenfassung
> 
> ## Theorie: Pixel & Farbtiefe
> 
> Bei Bildern ist die kleinste Einheit ein Pixel. Ein Pixel besteht typischerweise aus:
> - Einer Zahl pro Farbkanal (drei bei RGB, eine bei Graustufe)
> - Zwei Koordinaten für x und y
> 
> Ein RGB-Bild mit 8 Bit Farbtiefe pro Farbkanal kann rund 16,8 Millionen Farben mischen, weil:
> - 8-Bit pro Kanal ⇒
> - 256 verschiedene Zustände pro Kanal ⇒ 
> - 256<sup>3</sup> Kombinationen insgesamt ⇒
> - 16,8 Millionen Kombinationen
> 
> ![[05-farben-formel.excalidraw]]
> 
> 8-Bit-RGB wird typischerweise dezimal oder hexadezimal notiert. Ein schönes Orange wäre z.B.: 
> - `rgb(255, 64, 16)`
> - `#ff4010`
> 
> Das ist zweimal die gleiche Farbe, weil:
> - Rot: 255<sub>10</sub> = ff<sub>16</sub>
> - Grün: 64<sub>10</sub> = 40<sub>16</sub>
> - Blau: 16<sub>10</sub> = 10<sub>16</sub>

