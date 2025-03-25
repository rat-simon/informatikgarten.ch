---
title: Aufgaben für die Prüfungsvorbereitung ohne Hex und ohne Farben
display: hidden
---
## Prüfungsumfang

Es gelten die Lernziele der behandelten Lektionen, wenn nichts anderes angegeben ist.

[[01-datainfo|Theorieteil über Daten, Kodierung und Information]]
- Achtung: Simple Datentypen & Semantikfehler haben wir kurz behandelt, unbedingt nochmal anschauen! Von den simplen Datentypen müssen Sie einfach die Namen kennen.

[[02-barcode|Kapitel über Barcodes]]
- Berechnung der Prüfziffer kommt nicht, weil ich bei der Erklärung einen Fehler gemacht habe. (Ich habe die falsche Summe mit 3 multipliziert.)

[[04-qrcode|Kapitel über QR-Codes und Buchstaben]]
- Die zwei letzten Lernziele zu den Error-Correction-Codes gelten nicht, weil wir das nicht angeschaut haben.
- ACHTUNG: Die Vorlage des QR-Codes, die Sie erhalten werden, enthält keine Hilfsmuster!

## Syntax und Semantik

### Beispiel für Theoriefrage

Behauptung: "Kodierung" definiert, wie bestehende Informationen dargestellt werden (z.B. kursiv, fett, unterstrichen)

Ist das wahr oder falsch? Begründen Sie Ihre Antwort!

> [!solution]- Lösung
> 
> Falsch. Die Kodierung definiert die **Interpretationsregeln**, die man auf Rohdaten anwenden muss, um ihre Informationen überhaupt zu verstehen. Wir haben uns gemerkt: Rohdaten + Kodierung = Information

### Fehler finden

Im folgenden Programm ist je ein Syntax- und ein Semantikfehler versteckt. Markieren Sie beide und erklären Sie:

```python
print("Hallo, schön bereiten Sie sich auf die Prüfung vor. In diesem Programm bilden wir die Summe von zwei Zahlen.)

a = "5"
b = "7"
ergebnis = a + b

print("Das Ergebnis ist", ergebnis)
```


> [!solution]- Lösung
> 
> - **Syntaxfehler**: Auf Linie 1 fehlt das Anführungszeichen am Ende.
> - **Semantikfehler**: Das Programm würde keine Summe bilden, weil "5" und "7" Strings sind. Es würde einfach die Symbole aneinanderhängen, also "57".

## Barcodes

### Ein Rätsel aus dem Alltag

Unglücklicher Mann: "Ich war gestern beim Self-Checkout im Coop und als ich meine Zweifel-Chips scannen wollte, wurde einfach ein Glas Gurken von Chirat verrechnet. Wahrscheinlich hat sich der Scanner verlesen - blöde Technik! Und meine Frau fand das Ganze auch noch lustig und hat ständig gekichert!"

Wie wahrscheinlich ist die Erklärung des Mannes? Haben Sie eine Idee für eine alternative Erklärung?

> [!solution]- Lösung
> 
> Die Erklärung ist sehr unwahrscheinlich. Zwei Gründe: 
> - Wegen der **Prüfziffer** kann man recht sicher sein, dass ein Barcode korrekt gelesen wurde. 
> - Auch hat **jedes Produkt weltweit einen eigenen Barcode**: Dass per Zufall ein Produkt im gleichen Laden von einem anderen Hersteller getroffen würde, ist ebenfalls sehr unwahrscheinlich.
> 
> Eine sehr viel wahrscheinlichere Erklärung ist, dass irgendjemand den Barcode überklebt hat und sich einen Scherz erlaubt.

### Barcode formen

Schreiben Sie einen kompletten EAN-13 Barcode in 0 (weiss) und 1 (schwarz). Trennen Sie dabei die Kodierung der einzelnen Ziffern mit Bindestrichen ("-"), z.B. `0001101-0011001-1100110`

```text
8 517935 713780
```

![[10-vorbereitung-nohex-2025-03-21-06.56.20.excalidraw]]

> [!solution]- Lösung
> 
> ```text
> 517935 713780
> LGLGGL RRRRRR
> 
> 0110001-0110011-0111011-0010111-0100001-0110001-
> 1000100-1100110-1000010-1000100-1001000-1110010
> ```

## QR-Codes


![[ascii-table.excalidraw]]
### QR-Code bilden

Füllen Sie in folgenden Barcode die Nachricht ein: "F1e rules!"

Geben Sie zunächst an, welche Dezimalzahlen Sie in die *vollen* Bytes schreiben wollen.

Dann füllen Sie den Barcode aus.

(Keine Sorge: Eine so lange Nachricht müssen Sie an der Prüfung nicht abfüllen, aber zum Üben ist es hoffentlich hilfreich.)

![[qr-template-plain.excalidraw.light.svg]]

> [!solution]- Lösung
> ```text
> Länge -> 10
> F -> 70
> 1 -> 49
> e -> 101
> [space] -> 32
> r -> 114
> u -> 117
> l -> 108
> e -> 101
> s -> 115
> ! -> 33
> ```
> ![[qrcode-f1e-solution.excalidraw.light.svg]]

