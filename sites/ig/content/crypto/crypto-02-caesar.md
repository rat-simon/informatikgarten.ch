---
title: Caesar-Verschlüsselung mit Python
---

> [!success] Lernziele
> 
> - Sie verstehen die **Rest-Funktion Modulo** mathematisch und können sie in Python anwenden.
> - Sie haben den **Caesar-Cipher in Python** umgesetzt und verstehen den Code. Insbesondere
> 	- wie wir mit einer for-Schleife Buchstabe für Buchstaben durch ein Wort iteriert sind und das Ergebnis ebenfalls Buchstabe für Buchstabe konstruiert haben,
> 	- wie wir einen Buchstaben in seine Unicode-Zahl (`ord()`) und wieder zurück verwandelt haben (`chr()`),
> 	- wie wir die Verschiebung zwischen A und Z gehalten haben,
> 	- und wie wir Funktionen mit Parametern und dem return-Statement verwendet haben.

## Erklärvideo der einfachen Caesar-Verschlüsselung

![[python_caesar_einfach.mp4]]

### ASCII und Unicode
Es wird Sie kaum überraschen, dass Texte in Computern letztlich eine Serie von Binärzahlen sind. Die Semantik ist letztlich einfach eine Tabelle, **die jeder Zahl einen Buchstaben zuordnet**. 

Heute verwenden wir dafür weiterhin die sogenannte ASCII-Tabelle, die in den 1960ern standardisiert wurde. Dieser Zeichensatz wurde für die Übertragung so klein wie möglich gehalten, nämlich 7 Bit oder 128 Zeichen. 

![[crypto-02-2024-06-10-11.09.08.excalidraw]]

Beispiel:
- `A` hat den ASCII-Code 65.
- `a` hat den ASCII-Code 97.

ASCII deckt hauptsächlich die englische Sprache ab und hat somit Einschränkungen für andere Sprachen und Symbole (z.B. `€ — © ™ ∆ Ω 你好 Привіт 😊 🎉`)

Als Reaktion auf die Beschränkungen von ASCII wurde Unicode entwickelt, um alle Schriftzeichen aller Sprachen darzustellen. Unicode kann über 1 Million Zeichen kodieren, von denen bisher über 143'000 definiert sind. 

> [!NOTE]- Zusatz: Binäre Kodierung von Unicode
> 
> Binär nutzt Unicode den Umstand, dass die ASCII-Tabelle nur 7 Bit benötigt, also dass ein "normales" ASCII-Byte mit 0 beginnen würde. Unicode sagt nun: Wir signalisieren mit **`1` am Anfang des ersten Byte**, wie viele Bytes wir nutzen, und mit `10` am Anfang der weiteren Bytes, dass sie teil des gleichen Symbols sind.
> 
> - **1 Byte** (für Zeichen von U+0000 bis U+007F):
>     - Format: `0xxxxxxx`
>     - Beispiel: `A` (U+0041) -> `01000001`
> - **2 Bytes** (für Zeichen von U+0080 bis U+07FF):
>     - Format: `110xxxxx 10xxxxxx`
>     - Beispiel: `é` (U+00E9) -> `11000011 10101001`
> - **3 Bytes** (für Zeichen von U+0800 bis U+FFFF):
>     - Format: `1110xxxx 10xxxxxx 10xxxxxx`
>     - Beispiel: `你` (U+4F60) -> `11100100 10111101 10100000`
> - **4 Bytes** (für Zeichen von U+10000 bis U+10FFFF):
>     - Format: `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`
>     - Beispiel: `𐍈` (U+10348) -> `11110000 10010000 10001101 10001000`

### Wörter sind Listen von Unicode-Symbolen in Python

Beim Erstellen einer Verschlüsselungsfunktion hilft Ihnen der Umstand, dass man in Python **Zeichenketten wie Listen behandeln** kann. 

Zudem können Sie mit der **Funktion ord()** den Unicode des Buchstabens auslesen und **chr() macht aus einem Unicode wieder den Buchstaben**.

![[crypto-02-klassischpython-ord-chr.excalidraw]]

```turtle
satz = "Hallo 😍"

for buchstabe in satz:
	print(buchstabe, " hat den Code ", ord(buchstabe))

for zahl in range(65,70):
	print(zahl, " erzeugt den Buchstaben", chr(zahl))
```


> [!example] Caesar-Verschlüsselung umsetzen
> 
> Schreiben Sie eine Funktion `caesar_encrypt` mit zwei Parametern: die Nachricht, die verschlüsselt werden soll, und wie weit verschoben werden soll. Man soll die Funktion zum Beispiel so aufrufen können, um die Nachricht um vier Stellen zu verrücken: 
> 
> `decrypt("Wir treffen uns um 17 Uhr im Cipher Cafe", 4)`
>
> Eine mögliche Ausgabe wäre: `[mv$xvijjir$yrw$yq$5;$Ylv$mq$Gmtliv$Geji`
> 


> [!solution]- Einfache Caesar-Verschlüsselung mit Python
> 
> ```python filename="caesar_einfach.py"
> def caesar_encrypt(klartext, verschiebung):
>     # Initialisiere den verschlüsselten Text als leere Zeichenkette
>     ciphertext = ""
>     
>     # Gehe jeden Buchstaben im Eingabetext durch
>     for buchstabe in klartext:
>         # Berechne die neue Position und sorge dafür, dass sie im Bereich von A-Z bleibt
>         neue_position = ord(buchstabe) + verschiebung
>         # Füge den verschlüsselten Buchstaben zum verschlüsselten Text hinzu
>         ciphertext = ciphertext + chr(neue_position)
>         # Gebe den verschlüsselten Text zurück
>     return ciphertext
> 
> def caesar_decrypt(ciphertext, verschiebung):
>     return caesar_encrypt(ciphertext, -verschiebung)
> 
> ciphertext = caesar_encrypt("Wir treffen uns um 17 Uhr im Cipher Cafe", 4)
> print("Unser Ciphertext ist:", ciphertext)
> 
> entschluesselt = caesar_decrypt(ciphertext, 4)
> print("Entschlüsselte Nachricht:", entschluesselt)
> ```

## Die komplette Caesar-Verschlüsselung

![[python_caesar_komplett.mp4]]

### Das Problem mit der einfachen Caesar-Verschlüsselung

Das Problem mit unserer Verschlüsselung bislang ist, dass die Verschlüsselung unsere Buchstaben teils so weit verschiebt, dass wir bei **unsichtbaren Zeichen in der ASCII-Tabelle** landen. Für unsere Zwecke ist das nicht geeignet. Wir müssen unseren Code also so erweitern, dass er die Buchstaben nur **innerhalb des Alphabets** verschiebt.
### Rest-Funktion Modulo

Eine Funktion, die Sie in der Kryptologie immer wieder antreffen, ist Modulo. Das ist nichts anderes als die Rest-Funktion einer Division. 

In der Mathematik wird dafür oft "mod" geschrieben, in Python können Sie das mit einem Prozentzeichen schreiben.

| Mathematik  | Python | Resultat |
| ----------- | ------ | -------- |
| $10 \mod 3$ | 10 % 3 | 1        |
| $15 \mod 4$ | 15 % 4 | 3        |
| $5 \mod 2$  | 5 % 2  | 1        |

Eine Modulo-Operation nutzen Sie tagtäglich: die Uhrzeit. Sie denken ja kaum je an das Total aller Stunden, die verstrichen sind, sondern entweder nur an den aktuellen Tag, oder auf einer analogen Uhr sogar nur an 12-Stunden-Blöcke.

```turtle
for i in range(100):
	print(i % 24, "Uhr")
```

Modulo kann man nun für die Position der Buchstaben verwenden, wie im Video ersichtlich.

> [!NOTE]- Komplette Caesar-Verschlüsselung mit Python
> 
> ```python filename="caesar_komplett.py"
> def caesar_encrypt(klartext, verschiebung):
>     # Initialisiere den verschlüsselten Text als leere Zeichenkette
>     verschluesselter_text = ""
> 
>     # Gehe jeden Buchstaben im Eingabetext durch
>     for buchstabe in klartext:
>         if buchstabe.isupper():
>             # Grossbuchstaben, A = 65
>             neue_position = (ord(buchstabe) - 65 + verschiebung) % 26 + 65
>         elif buchstabe.islower():
>             # Kleinbuchstaben, a = 97
>             neue_position = (ord(buchstabe) - 97 + verschiebung) % 26 + 97
>         else:
>             # Alle anderen Zeichen
>             neue_position = ord(buchstabe)
>         verschluesselter_text = verschluesselter_text + chr(neue_position)
> 
>     # Gebe den verschlüsselten Text zurück
>     return verschluesselter_text
> 
> def caesar_decrypt(ciphertext, verschiebung):
>     # Die Entschlüsselung ist einfach die Verschlüsselung mit negativer Verschiebung
>     return caesar_encrypt(ciphertext, -verschiebung)
> 
> # Beispiel: Verschlüsseln und Entschlüsseln
> ciphertext = caesar_encrypt("Wir treffen uns am Bahnhof", 5)
> print("Unser Ciphertext ist:", ciphertext)
> 
> entschluesselt = caesar_decrypt(ciphertext, 5)
> print("Entschlüsselte Nachricht:", entschluesselt)
> 
> ```

