---
title: Hexadezimale Zahlen
---

> [!success]  Lernziele
> 
> *Hinweis: Wir behandeln keine Umwandlungen, die grösser als zwei Byte oder 65'535<sub>10</sub> sind.*
> 
> - Sie können **Hexadezimalzahlen und Dezimalzahlen** ineinander umwandeln.
> - Sie können **Binärzahlen und Hexadezimalzahlen** in 4-Bit-Paketen ineinander umwandeln.

## Hexadezimal: Zahlen mit Buchstaben?

Stellen Sie sich nun einmal einen Computerspeicher mit mehreren Bytes vor: Natürlich können wir Menschen nichts damit anfangen.
![[03-zahlen-hex-farben-2024-04-08-10.38.37.excalidraw]]

Gäbe es nicht ein Zahlensystem, dass so einfach zu lesen wäre wie das Dezimalsystem, aber die Binärzahlen besser repräsentiert?

Führen Sie sich vor Augen, dass ein Byte zweimal 4 Bit hat. Wie viele verschiedene Zahlen können Sie mit 4 Bit darstellen? Die grösste Zahl ist 1111<sub>2</sub> = 15<sub>10</sub>, und dazu noch 0. Das sind, wenig erstaunlich, **2<sup>4</sup> = 16 verschiedene Zahlen**. Hätten wir doch ein Zahlensytem, das 16 als Basis hätte...

![[03-zahlen-hex-farben-2024-04-08-10.43.51.excalidraw]]

Schaffen wir uns unser Glück doch selbst und kreieren ein Zahlensystem, dass 16 als Basis hat! Natürlich haben wir zu wenig Symbole dafür, weil wir im Dezimalsystem leben. Aber nehmen wir einfach Buchstaben. Jetzt achten Sie darauf, wie elegant dieses "hexadezimale" 16er-Zahlensystem aufs binäre Zahlensystem passt:

|**Hexadezimal**|**Binär**|**Dez**|
|---:|---|---|
|0|0000'0000|0|
|1|0000'0001|1|
|2|0000'0010|2|
|3|0000'0011|3|
|4|0000'0100|4|
|5|0000'0101|5|
|6|0000'0110|6|
|7|0000'0111|7|
|8|0000'1000|8|
|9|0000'1001|9|
|A|0000'1010|10|
|B|0000'1011|11|
|C|0000'1100|12|
|D|0000'1101|13|
|E|0000'1110|14|
|F|0000'1111|15|
|10|0001'0000|16|
|11|0001'0001|17|
|12|0001'0010|18|
|13|0001'0011|19|
|14|0001'0100|20|
|15|0001'0101|21|
|16|0001'0110|22|
|17|0001'0111|23|
|18|0001'1000|24|
|19|0001'1001|25|
|1A|0001'1010|26|
|1B|0001'1011|27|
|1C|0001'1100|28|
|1D|0001'1101|29|
|1E|0001'1110|30|

Wunderbar! Eine Ziffer aus dem Hexadezimalsystem ist genau vier Bit lang! Das heisst: 
- Sie können ein Byte immer in genau zwei Hex-Ziffern ausdrucken. 
- Anders als beim Dezimalsystem können Sie beide Hex-Ziffern getrennt umwandeln.

### Erklärvideo

In diesem Video wird diese Grundlage des Hexadezimalsystems erklärt.

![[hex1.mp4]]

## Umwandeln

### Erklärvideo

Hier noch ein Erklärvideo, das die Umwandlung zwischen den Zahlensystemen zeigt.

![[hex2_corr.mp4]]


> [!info] Zusammenfassung Binär, Dezimal, Hexadezimal
> 
> Den Theorieeintrag erstellen wir zusammen in Onenote. Wir lernen:
> - Umrechnen hexadezimal zu dezimalen mit der **Summenschreibweise**.
> - Umrechnen dezimal zu hexadezimal mit:
> 	- Divisionsmethode
> 	- Zerlegen in Potenzen
> - Umrechnen binär zu hexadezimal in 4-Bit-Paketen
> - Umrechnen hex zu binär in 4-Bit-Paketen

