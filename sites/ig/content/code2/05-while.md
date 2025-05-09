---
title: while-Schleife
---

# <nobr>Solange-Schleifen:</nobr> `while`

Nun schauen wir uns die while-Schleife an. Das ist eine Schleife, die Ihren Code ausführt, **solange eine bestimmte Bedingung wahr ist**. Das ist sinnvoll, wenn Sie im vornherein nicht wissen, wie oft etwas getan werden soll.

Beginnen wir gleich mit dem Beispiel im letzten Teil. Wir suchten da die kleinste Zahl $i$, bei der gilt:
- $i \mod{113} = 1$
- $i \mod{213} = 2$
- $i \mod{313} = 3$

Die Lösung haben wir gefunden, indem wir bei der `for`-Schleife manuell die Zahl erhöht haben. Das ist natürlich sehr unpraktisch - und genau das löst die `while`-Schleife!

## Syntax

```python
while Bedingung:
    # Code, der ausgeführt wird, solange die Bedingung wahr ist
```

## Beispiele

Beginnen wir mit einem einfachen Beispiel, das ähnlich einer for-Schleife von 0 bis 9 zählt. Das gilt nur zur Veranschaulichung der Logik, praktisch sinnvoll ist das kaum.

```turtle
i = 0
while i < 10:
    print(i)
    i = i + 1 # Sie könnten auch die Verkürzung i += 1 schreiben
```

Kehren wir uns damit nochmal der Aufgabe aus dem letzten Teil zu. Unsere Lösung war:

```python
for i in range(10000000):
    if i % 113 == 1 and i % 213 == 2 and i % 313 == 3:
        print(i, "restlose Zahl")
```

Jetzt mit `while`-Schleife lassen wir das einfach laufen, solange wir die Zahl **nicht** gefunden haben. Das geht auf zwei Arten:

```python
i = 0
while not (i % 113 == 1 and i % 213 == 2 and i % 313 == 3):
    i += 1
print(i, "restlose Zahl")
```

Die Bedingung der while-Schleife könnten Sie auch ausklammern.

```python
# "Solange die Bedingung als Ganzes nicht erfüllt ist"
not (i % 113 == 1 and i % 213 == 2 and i % 313 == 3)
# ist in diesem Fall dasselbe, wie: "Solange eine der Bedingungen nicht erfüllt ist"
i % 113 != 1 or i % 213 != 2 or i % 313 != 3
```

## Aufgabe: Ein Ratespiel entwickeln mit while

Im folgenden Beispiel entwickeln wir ein kleines Ratespiel. Der Computer denkt sich eine Zahl zwischen 1 und 100 aus, und der Spieler muss sie erraten. Der Computer gibt dem Spieler Hinweise, ob die geratene Zahl zu hoch oder zu niedrig ist.

### Zufallszahlen ziehen

Um eine Zufallszahl zu ziehen, verwenden wir die Funktion `randint` aus dem Modul `random`. Diese Funktion zieht eine ganze Zahl zwischen zwei Werten (inklusive der beiden Werte). Wir importieren das Modul mit dem Befehl `import random`.

```python
import random
# Zufallszahl zwischen 1 und 100
zahl = random.randint(1, 100)
print(zahl)
```

### Input abfragen

Um den Spieler nach einer Zahl zu fragen, verwenden wir die Funktion `input`. Diese Funktion gibt den eingegebenen Text als String zurück. Um ihn in eine Ganzzahl umzuwandeln, verwenden wir die Funktion `int`.

```python
# Eingabe abfragen
eingabe = input("Gib eine Zahl zwischen 1 und 100 ein: ")
# Eingabe von Zeichenkette/String in Ganzzahl/Integer umwandeln
zahl = int(eingabe)
print(zahl)
```
