---
title: Funktionen
---
# Funktionen

Wenn man ein Problem endlich gelöst hat, wäre es doch schön, diese Lösung immer wieder verwenden zu können. Das geht mit Funktionen! 

Funktionen sind **Unterprogramme des Hauptprogramms**, die eine bestimmte Aufgabe erledigen. Sie können so **eigene Befehle kreieren und immer wieder verwenden**, wann immer Sie diese Funktion brauchen.

## Syntax

Um die Syntax einer Funktion zu verstehen, schauen wir ein Beispiel an: Sagen wir, wir müssen immer wieder den Flächeninhalt eines Quadrats berechnen. Anstatt die Rechnung immer wieder aufzuschreiben, bietet es isch an, eine Funktion zu schreiben. Das könnte so aussehen:

```turtle
# Funktion zur Berechnung des Flächeninhalts eines Quadrats
def flaeche_quadrat(seitenlaenge):
    flaeche = seitenlaenge * seitenlaenge # seitenlaenge**2 würde auch funktionieren
    return flaeche

# Hauptprogramm
print("Der Flächeninhalt eines Quadrats mit Seitenlänge 5 ist:", flaeche_quadrat(5))
print("Der Flächeninhalt eines Quadrats mit Seitenlänge 10 ist:", flaeche_quadrat(10))

# Den Wert der Funktion in einer Variablen speichern
flaeche = flaeche_quadrat(20)
print("Der Flächeninhalt eines Quadrats mit Seitenlänge 20 ist:", flaeche)
```

Hier wird eine Funktion `flaeche_quadrat` definiert, die eine Seitenlänge als Parameter erwartet und dann verarbeitet. Die Funktion nimmt diese Seitenlänge und berechnet damit den Flächeninhalt des Quadrats. Letztlich gibt sie den Wert zurück ans Hauptprogramm.

Beachten Sie:
- Eine Funktion wird mit dem Schlüsselwort `def` definiert. 
- Danach folgt der Name der Funktion, hier also `flaeche_quadrat`. 
- Dann runde Klammern `()`, um die Parameter zu definieren.
- Danach folgt ein Doppelpunkt `:`, der den Beginn des Funktionskörpers markiert.
- Der Code, der zur Funktion gehört, wird eingerückt im Körper des Codeblocks geschrieben.
- Mit `return` geben Sie den Wert zurück, den die Funktion berechnet hat. So können Sie den Wert im Hauptprogramm weiterverwenden.
- Im Hauptprogramm nutzen wir die Funktion, indem wir ihren Namen aufrufen und die Seitenlänge als Argument in den runden Klammern übergeben. Das Argument wird dann in der Funktion ins Parameter `seitenlaenge` abgefüllt.

![[10-funktionen-block.excalidraw.light.svg]]
## Beispiele

### Würfeln (eine Funktion ohne Parameter und ohne `return`-Wert)

Sagen wir, Sie wollen eine Funktion schreiben, die wie ein Würfel Ihnen eine Zufallszahl zwischen 1 und 6 ausdruckt. Das dient als Beispiel, wie Sie eine Funktion ohne Parameter und ohne `return`-Wert definieren können. Diese Funktion könnte so aussehen:

```turtle
import random

def wuerfeln():
    zahl = random.randint(1, 6)
    print("Die geworfene Zahl ist:", zahl)

print("Wir würfeln eine erste Zahl:")
wuerfeln()
print("Hier könnte ein beliebig grosser Teil des Programms stehen.")
print("Und wenn wir es gebrauchen, würfeln wir halt noch eine Zahl:")
wuerfeln()
```

Jetzt können Sie die Funktion `wuerfeln()` immer wieder aufrufen, wann immer Sie eine Zufallszahl zwischen 1 und 6 ausdrucken wollen. Das ist wohl einfacher, als immer wieder den gleichen Code zu schreiben.

### Flächeninhalt eines Rechtsecks (eine Funktion mit zwei Parametern und mit `return`-Wert)

Sagen wir, Sie wollen eine Funktion schreiben, die den Flächeninhalt eines Rechtecks berechnet. Diese Funktion könnte so aussehen:

```turtle
# Funktion zur Berechnung des Flächeninhalts eines Rechtecks
def flaeche_rechteck(breite, laenge):
    flaeche = breite * laenge
    return flaeche

# Hauptprogramm
print("Der Flächeninhalt eines Rechtecks mit Breite 5 und Länge 10 ist:", flaeche_rechteck(5, 10))
print("Der Flächeninhalt eines Rechtecks mit Breite 20 und Länge 30 ist:", flaeche_rechteck(20, 30))
```

Hier wird eine Funktion `flaeche_quadrat` definiert, die eine Seitenlänge als Eingabeparameter erwartet. Die Funktion berechnet dann den Flächeninhalt des Quadrats und gibt den Wert zurück ans Hauptprogramm.

## Aufgaben

### Aufgabe: Volumen eines Würfels

Schreiben Sie eine Funktion, die das Volumen eines Würfels berechnet.

```turtle id="volumen_wuerfel"
# Ihr Code
```

> [!solution]- Mögliche Lösung
> 
> ```python
> def volumen_wuerfel(seitenlaenge):
>     volumen = seitenlaenge ** 3 # seitenlaenge * seitenlaenge * seitenlaenge
>     return volumen
>
> # Hauptprogramm
> print("Das Volumen eines Würfels mit Seitenlänge 5 ist:", volumen_wuerfel(5))
> print("Das Volumen eines Würfels mit Seitenlänge 10 ist:", volumen_wuerfel(10))
> ```

### Aufgabe: Volumen eines Quaders
Schreiben Sie eine Funktion, die das Volumen eines Quaders berechnet. Die Funktion soll drei Parameter für die Länge, Breite und Höhe des Quaders haben.

```turtle id="volumen_quader"
# Ihr Code
```
> [!solution]- Mögliche Lösung
>
> ```python
> def volumen_quader(lange, breite, hoehe):
>     volumen = lange * breite * hoehe
>     return volumen
> # Hauptprogramm
> print("Das Volumen eines Quaders mit Länge 5, Breite 10 und Höhe 2 ist:", volumen_quader(5, 10, 2))
> print("Das Volumen eines Quaders mit Länge 3, Breite 4 und Höhe 5 ist:", volumen_quader(3, 4, 5))
> ```

### Aufgabe: Volumen eines Kegels
Schreiben Sie eine Funktion, die das Volumen eines Kegels berechnet. Die Funktion soll zwei Parameter für den Radius der Basis und die Höhe des Kegels haben. Die Formel für das Volumen eines Kegels lautet: $V = \frac{1}{3} \pi r^2 h$, wobei Sie für $\pi$ die Konstante `math.pi` aus dem Modul `math` verwenden können.

```turtle id="volumen_kegel"
# Ihr Code
```
> [!solution]- Mögliche Lösung
>
> ```turtle
> import math
> def volumen_kegel(radius, hoehe):
>     volumen = (1/3) * math.pi * (radius ** 2) * hoehe
>     return volumen
> # Hauptprogramm
> print("Das Volumen eines Kegels mit Radius 3 und Höhe 5 ist:", volumen_kegel(3, 5))
> print("Das Volumen eines Kegels mit Radius 2 und Höhe 10 ist:", volumen_kegel(2, 10))

### Berechnung des Volumens eines komischen Hauses

Nutzen Sie Ihre zuvor erstellten Funktionen, um das Volumen dieses Hauses zu berechnen.

![[10-funktionen-hausvolumen.excalidraw]]

### Aufgabe: Umrechnung von Celsius in Fahrenheit

Schreiben Sie eine Funktion, die eine Temperatur in Celsius in Fahrenheit umrechnet. Die Formel zur Umrechnung lautet: `F = C * 9/5 + 32`

```turtle id="celsius_in_fahrenheit"
# Ihr Code
```

> [!solution]- Mögliche Lösung
>
> ```python
> def celsius_in_fahrenheit(celsius):
>     fahrenheit = celsius * 9/5 + 32
>     return fahrenheit
>
> # Hauptprogramm
> print("20 Grad Celsius sind", celsius_in_fahrenheit(20), "Grad Fahrenheit.")
> print("100 Grad Celsius sind", celsius_in_fahrenheit(100), "Grad Fahrenheit.")
> ```

### Aufgabe: Umrechnung von Fahrenheit in Celsius
Schreiben Sie nun die Umkehrfunktion, die eine Temperatur in Fahrenheit in Celsius umrechnet.

Danach versuchen Sie im Hauptprogramm, die beiden Funktionen aneinander zu koppeln, sodass Sie eine Temperatur in Celsius eingeben, in Fahrenheit umgerechnet und ausgegeben wird. Und dann soll der Wert auch gleich wieder zurück in Celsius umwandelt und ausgegeben werden.

```turtle id="fahrenheit_in_celsius"
# Ihr Code
```
> [!solution]- Mögliche Lösung
>
> ```python
> def celsius_in_fahrenheit(celsius): # Von der Aufgabe zuvor
>     fahrenheit = celsius * 9/5 + 32
>     return fahrenheit
> def fahrenheit_in_celsius(fahrenheit):
>     celsius = (fahrenheit - 32) * 5/9
>     return celsius
> # Hauptprogramm
> celsius = 20
> fahrenheit = celsius_in_fahrenheit(celsius)
> print(celsius, "Grad Celsius sind", fahrenheit, "Grad Fahrenheit.")
> wieder_celsius = fahrenheit_in_celsius(fahrenheit)
> print(fahrenheit, "Grad Fahrenheit sind wieder", wieder_celsius, "Grad Celsius.")
> ```

### Aufgabe: `istGerade(zahl)` mit booleschem `return`-Wert

Eine Funktion kann auch einen Wahr/Falsch-Wert als Rückgabewert haben. So können Sie die Funktion direkt in einer `if`-Selektion gebrauchen.

Schreiben Sie eine Funktion istGerade(zahl), die überprüft, ob eine Zahl gerade ist. Die Funktion soll `True` zurückgeben, wenn die Zahl gerade ist, und `False`, wenn sie ungerade ist.

Nutzen Sie die Funktion in einem Hauptprogramm, das alle geraden Zahlen bis 10 ausgibt.

```turtle id="istGerade"
# Ihr Code
```

> [!solution]- Mögliche Lösung
> 
> Diese Lösung ist wohl gut nachvollziehbar...
> 
> ```python
> def istGerade(zahl):
>     if zahl % 2 == 0:
>         return True
>     # Das else ist hier optional, weil return die Funktion abbricht
>     return False
>
> # Hauptprogramm
> for i in range(11):
>     if istGerade(i):
>         print(i, "ist eine gerade Zahl.")
> ```
> 
> ...aber Sie könnten die Funktion enorm vereinfachen.
> ```python
> def istGerade(zahl):
>     return zahl % 2 == 0
> ```

### Aufgabe: `istPrimzahl(zahl)` mit booleschem `return`-Wert
Schreiben Sie eine Funktion `istPrimzahl(zahl)`, die überprüft, ob eine Zahl eine Primzahl ist. Die Funktion soll `True` zurückgeben, wenn die Zahl eine Primzahl ist, und `False`, wenn sie keine Primzahl ist.

Nutzen Sie die Funktion in einem Hauptprogramm, das alle Primzahlen bis 100 ausgibt.

```turtle id="istPrimzahl"
# Ihr Code
```
> [!solution]- Mögliche Lösung
>
> ```turtle id="istPrimzahl_solution"
> def istPrimzahl(zahl):
>    if zahl < 2:
>        return False
>    # Einfacher wäre: range(2, zahl), aber das ist ineffizient
>    for divisor in range(2, int(zahl**0.5) + 1):
>        if zahl % divisor == 0:
>            return False
>    return True
> 
> # Hauptprogramm
> for i in range(101):
>     if istPrimzahl(i):
>         print(i, "ist eine Primzahl.")

## Funktionen aus anderen Dateien importieren

In Python können Sie Funktionen aus anderen Dateien importieren, um Ihren Code zu organisieren und wiederverwendbar zu machen. Dazu speichern Sie Ihre Funktionen in einer separaten Datei, z.B. `useful.py`, und importieren diese in Ihrem Hauptprogramm.

Hier ist ein Beispiel, wie Sie das machen können:
```python filename="useful.py"
def flaeche_quadrat(seitenlaenge):
    flaeche = seitenlaenge * seitenlaenge
    return flaeche
def flaeche_rechteck(breite, laenge):
    flaeche = breite * laenge
    return flaeche
```

Eine Art, diese Funktionen in Ihrem Hauptprogramm zu verwenden, kennen Sie bereits: `import useful`, genau wie Sie `import turtle` oder `import random` verwenden. Dann können Sie die Funktionen unter dem Namen `useful` aufrufen, z.B. `useful.flaeche_quadrat(5)`.

```python filename="main.py"
import useful

print("Der Flächeninhalt eines Quadrats mit Seitenlänge 5 ist:", useful.flaeche_quadrat(5))
print("Der Flächeninhalt eines Rechtecks mit Breite 5 und Länge 10 ist:", useful.flaeche_rechteck(5, 10))
```

Es gibt aber auch eine Art, die Funktionen direkt in Ihr Hauptprogramm zu importieren, sodass Sie sie ohne den Präfix `useful.` verwenden können. Dazu verwenden Sie das Schlüsselwort `from`:

```python filename="main.py"
from useful import flaeche_quadrat, flaeche_rechteck

print("Der Flächeninhalt eines Quadrats mit Seitenlänge 5 ist:", flaeche_quadrat(5))
print("Der Flächeninhalt eines Rechtecks mit Breite 5 und Länge 10 ist:", flaeche_rechteck(5, 10))
```

