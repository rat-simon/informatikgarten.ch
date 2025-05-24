---
title: while-Schleife
---
# <nobr>Solange-Schleifen:</nobr> `while`

Nun schauen wir uns die while-Schleife an. Das ist eine Schleife, die Ihren Körper wiederholt, **solange eine bestimmte Bedingung wahr ist**. Das ist sinnvoll, wenn Sie im vornherein nicht wissen, wie oft etwas getan werden soll.

Beginnen wir gleich mit dem Beispiel im letzten Teil. Wir suchten da die kleinste Zahl $i$, alle diese Bedingungen erfüllt:
- $i \mod{113} = 1$
- $i \mod{213} = 2$
- $i \mod{313} = 3$

Die Lösung haben wir gefunden, indem wir bei der `for`-Schleife manuell den Zahlenbereich schrittweise erhöht haben. Das ist natürlich sehr unpraktisch - und genau das löst die `while`-Schleife!
## Syntax

```python
while Bedingung:
    # Code, der ausgeführt wird, solange die Bedingung wahr ist
```

### Zählen mit `while`

Zur Veranschaulichung beginnen wir mit einem Beispiel, das ähnlich einer for-Schleife von 0 bis 9 zählt. 

```turtle
i = 0
while i < 10:
    print("Anfang der Iteration:", i)
    i += 1 # Das ist die verkürzte Schreibweise für i = i + 1
    print("Schluss der Iteration:", i)
    print("*************************") # Ein einfacher Trennstrich
print("Ein print-Statement am Schluss, das nicht mehr zur Schleife gehört")
```

Beachten Sie folgende Aspekte:
- Für den Codeblock gilt die typische Syntax: Ein Doppelpunkt schliesst den Kopf des Blocks ab, der Einzug links definiert, was zur Schleife gehört.
- Die Bedingung der while-Schleife wird wie bei if-Statements geschrieben.
- Die Bedingung wird nur **zu Beginn einer Iteration überprüft**. Wenn die Bedingung `True{:python}` ist, wird der **gesamte Körper der Schleife wiederholt**. Das sehen Sie beim letzten "Schluss der Iteration", das ausgeführt wird, obwohl `i` bereits den Wert `10` hat und die Bedingung nicht mehr erfüllt.
## Beispiele

### Elegante Lösung, um kleinste Zahl zu finden

Kehren wir uns damit nochmal der Aufgabe aus dem letzten Teil zu. Unsere Lösung war:

```python
for i in range(10000000):
    if i % 113 == 1 and i % 213 == 2 and i % 313 == 3:
        print(i, "restlose Zahl")
```

Jetzt mit `while`-Schleife lassen wir das einfach laufen, solange wir die Zahl **nicht** gefunden haben. Sobald wir die Zahl gefunden haben, wiederholt sich die Schleife nicht mehr - und `i` ist unsere gesuchte Zahl!

```python
i = 0
while not (i % 113 == 1 and i % 213 == 2 and i % 313 == 3):
    i += 1
print(i, "restlose Zahl")
```

Die einzelnen Teilbedingungen der while-Schleife könnten Sie auch ausklammern. 

```python
# "Solange die gesamte Bedingung nicht erfüllt ist", ist logisch dasselbe wie...
not (i % 113 == 1 and i % 213 == 2 and i % 313 == 3)
# "Solange eine der Bedingungen nicht erfüllt ist"
i % 113 != 1 or i % 213 != 2 or i % 313 != 3
```

### Endlosschleife mit `while`

Eine Endlosschleife ist eine `while`-Schleife, die nie endet. Das passiert, wenn die Bedingung immer wahr ist.

```python
while True:
    print("Das ist eine Endlosschleife!")
```
Das ist eine Endlosschleife, die immer "Das ist eine Endlosschleife!" ausgibt. Um sie zu beenden, müssen Sie das Programm entweder manuell stoppen (z.B. mit `Ctrl/Strg + C` in der Konsole) oder das Schlagwort `break` verwenden. Ein weiteres Beispiel:

```python
while True:
    eingabe = input("Eben Sie eine Zahl ein (oder 'exit' zum Beenden): ")
    if eingabe == "exit":
        break
    else:
        print(f"Sie haben die Zahl {eingabe} eingegeben.")
```

Wann ist eine Endlosschleife sinnvoll? Bei echten Computerprogrammen eher selten. Aber bei kleinen Robotern oder Microcontrollern, die immer dasselbe tun sollten, solange sie Strom haben, kann eine Endlosschleife unter Umständen sinnvoll sein. 

## Aufgabe: Ein Ratespiel entwickeln mit while

Im folgenden Beispiel entwickeln wir ein kleines Ratespiel. Der Computer denkt sich eine Zahl zwischen 1 und 100 aus, und der Spieler muss sie erraten. Der Computer gibt dem Spieler Hinweise, ob die geratene Zahl zu hoch oder zu niedrig ist.

### Pseudocode

Die Idee etwas genauer in Pseudocode gefasst:

```text
Zufallszahl zwischen 1 und 100 ziehen
Solange die Zahl nicht erraten wurde
    Eingabe abfragen
    Wenn die Zahl zu hoch ist:
        Hinweis geben: "Zu hoch!"
    Wenn die Zahl zu niedrig ist:
        Hinweis geben: "Zu niedrig!"
Hinweis geben: "Gratuliere!"
```

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


> [!solution]- Mögliche Lösung
> 
> ```python
> import random
> 
> # Generiere eine Zufallszahl zwischen 1 und 100
> geheimzahl = random.randint(1, 100)
> 
> # Variablen für das Spiel initialisieren
> versuchsrunde = 0
> geratete_zahl = -1
> 
> # Begrüssung und Spielerklärung
> print("Willkommen zum Zahlenratespiel!")
> print("Ich habe mir eine Zahl zwischen 1 und 100 ausgedacht.")
> 
> # Solange die Zahl nicht erraten wurde, weiterspielen
> while geratete_zahl != geheimzahl:
>     eingabe = input("Rate eine Zahl zwischen 1 und 100: ")
>     geratete_zahl = int(eingabe)
>     versuchsrunde += 1
>     
>     # Prüfen, ob die geratene Zahl korrekt ist
>     if geratete_zahl < geheimzahl:
>         print("Zu niedrig! Versuch es mit einer höheren Zahl.")
>     elif geratete_zahl > geheimzahl:
>         print("Zu hoch! Versuch es mit einer niedrigeren Zahl.")
> 
> # Wenn die Zahl erraten wurde, gratulieren
> # Hint: Wir nutzen hier einen sogenannten f-String, um Variablen in Strings einzufügen,
> #       Sie könnten natürlich auch den String mit '+' verketten oder mit Kommas getrennt drucken.
> #       f-Strings sind eine moderne Möglichkeit, die Ihnen viele Formatierungsprobleme lösen wird.
> print(f"Gratuliere! Du hast die Zahl {geheimzahl} in {versuchsrunde} Versuchen erraten!")
> ```
> 