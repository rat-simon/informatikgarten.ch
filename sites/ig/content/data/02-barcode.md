---
title: Barcodes
---

> [!success] Lernziele
> 
> - Sie können einen **EAN-13-Barcode selbst kreieren**, wenn Sie die Zahlen sowie die Vorlage und die Kodierungstabellen auf dieser Seite erhalten. Im Detail:
> 	- Sie wissen, wie der Barcode grafisch aufgebaut ist
> 	- Sie können die Zahlen mit der korrekten Kodierung in den Barcode einfügen
> 	- Sie können die Prüfziffer selbst berechnen und ebenfalls einfügen

In der letzten Lektion haben Sie die Logik kennengelernt, wie aus Rohdaten Informationen entstehen.
- Die **Rohdaten** müssen physisch irgendwo gespeichert sein.
- Menschen müssen die **Kodierung** kennen, um die Muster zu interpretieren.
- Nur wenn wir beide haben, ergibt sich daraus die **Information**. 

![[rohdaten-kodierung-informationen.excalidraw]]

In diesem Teil schauen wir uns dazu ein System aus dem Alltag an, das eine komplett andere physische Basis für die Rohdaten verwendet: Barcodes.

Wir verwenden dazu ein Video von einem Wissenschafts-Youtuber, den ich Ihnen wärmstens empfehle: Derek Muller und sein Kanal "Veritasium - an element of truth".

<Youtube id="w5ebcowAJD8">QR-Code Video</Youtube>

> [!exercise] Jetzt sind Sie dran
> 
> Versuchen Sie nach dem Video selbst, einen Barcode zu zeichnen. Sie erhalten hierzu [[barcode_template.pdf|als Vorlage eine leere Tabelle mit 95 Spalten]]. 
> 
> Der Sinn und Zweck ist, dass Sie selbst versuchen, herauszufinden, wie das funktioniert. Schauen Sie sich als Hilfsmittel zum Beispiel [die Spezifikation auf Wikipedia](https://en.wikipedia.org/wiki/International_Article_Number#Binary_encoding_of_data_digits_into_EAN-13_barcode) an. 

## Erklärvideo

Wie man einen Barcode von A bis Z kreiert, ist in diesem Video erklärt.

![[barcode-drawing2.mp4]]

## Aufbau eines Barcodes

Der meistverbreitete Barcode, den Sie in Läden finden, heisst **EAN-13**. Das steht für "European Article Number", ist aber als "internationale Artikelnummer" bekannt. EAN-13 hat 13 Zahlen und ist eine Weiterentwicklung des "Universal Product Codes" UPC, der nur 12 Zahlen hatte.

Beide Barcodes sind grafisch einfach 95 Spalten gleicher Breite, die entweder schwarz oder weiss sind. Diese 95 Spalten haben von links nach rechts folgende Abfolge:
- Bei EAN-13 gibt es **keine** separaten Spalten für die erste Ziffer (unten die grün markierte 0)
- 3 Spalten für das Start- / Stop-Muster
- 42 Spalten für die nächsten sechs Ziffern (7 Spalten pro Ziffer)
- 5 Spalten für das Mitte-Muster
- 42 Spalten für die letzten sechs Ziffern (7 Spalten pro Ziffer)
- 3 Spalten für das Start- / Stop-Muster

![[ean-explainer.excalidraw]]
Beim 12-stelligen UPC-Barcode gab es zwei Arten, die Zahlen zu kodieren. Auf der linken Seite mit L und auf der rechten Seite mit den exakt invertierten Mustern von L, die wir R nennen.

> [!question]- Wieso wurden verschiedene Muster für die linke und rechte Seite gewählt? Überlegen Sie sich das kurz, bevor Sie aufklappen!
> 
> Man weiss vorab nicht, wie die Leute die Produkte scannen - also ob der Leser den Barcode von links nach rechts oder von rechts nach links lesen wird. Wenn sich die Muster links und rechts unterscheiden, kann der Leser mit Sicherheit bestimmen, was links und was rechts ist.

### Erste Ziffer bei EAN-13

Die erste Ziffer (oben die grün markierte 0) gibt es nur bei EAN-13. Sie ist neu dazugekommen, als EAN-13 entwickelt wurde. Hier zeigt sich sehr schön das Konzept der **Pfadabhängigkeit**: Die 12-stelligen UPC-Barcodes waren natürlich bereits im Umlauf, als EAN-13 entwickelt wurde. Also wurde eine Lösung gesucht, wie man UPC erweitern könnte, die aber **rückwärtskompatibel mit UPC bleibt**.

Grundsätzlich ist es mathematisch klar, dass man den UPC-Barcode gut weiterentwickeln kann. Jede Ziffer hat ja sieben Spalten Platz, die entweder schwarz oder weiss sein können. Das heisst: Sie haben **$2^7 = 128$ Kombinationsmöglichkeiten**. Bei UPC werden aber nur 10 Muster für die Zahlen links und nochmal 10 Muster für die Zahlen rechts verwendet. Es gibt also noch reichlich Kombinationsmöglichkeiten!

Wie wurde UPC nun zu EAN-13 erweitert? Es wurde ein drittes, komplett neues Set von Mustern für Zahlen eingeführt, das wir G nennen. Auf der linken Seite darf man neu nicht nur L-Muster verwenden, sondern auch G-Muster - und die Abfolge der Kodierungsmuster L und G kodiert eine neue 13. Ziffer, die vorn an den Barcode hinzugefügt wurde.

UPC Barcodes mit nur L-Mustern auf der linken Seite bleiben kompatibel und kodieren implizit eine 0 an erster Stelle. Aber zusätzlich gibt es nun 9 weitere Varianten - die Anzahl möglicher Barcodes hat sich also verzehnfacht!

### Die Prüfziffer

Die letzte (orange markierte) Ziffer ist eine sogenannte **Prüfziffer**. Sie ist nicht unabhängig gewählt, sondern wird aus den ersten 12 Ziffern berechnet. Ihre Aufgabe ist die **Fehlererkennung**: Mit ihr kann man überprüfen, ob der Barcode korrekt gelesen wurde.

Man berechnet die Prüfziffer wie folgt:
- Man bildet zwei Summen: die der Ziffern an geraden Positionen (unten grün) und die der Ziffern an ungeraden Positionen (unten rot). 
- Die Summe, zu der die letzte Ziffer addiert wurde, wird mit Drei multipliziert (unten grün).
- Dann werden beide Resultate addiert (unten $108 + 36 = 144$).
- Dann wird die tiefste Stelle (die Einer) von 10 subtrahiert.

Das Tolle daran? Auch das bleibt mit UPC kompatibel!

![[02-barcode-checkdigit.excalidraw]]
_(Ein Beispiel aus dem Unterricht.)_

