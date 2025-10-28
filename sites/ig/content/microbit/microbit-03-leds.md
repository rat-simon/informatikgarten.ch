---
title: LEDs einzeln auffüllen
---
> [!success]  Lernziele
> 
> - **LEDs anstellen**: Sie können LEDs gezielt ansteuern und mit `for`-Schleifen das Display füllen.
> - **Funktionen**: Sie haben Funktionen mit mehreren Parametern repetiert.

## LEDs auffüllen

Der Microbit hat ein 5x5 Screen mit insgesamt 25 LEDs, die wir mit `microbit.display` ansteuern können.
### Aufgabe: Reihe auffüllen
Schreiben Sie ein Programm, bei dem man sieht, wie es die **erste Reihe Pixel um Pixel auffüllt**.

> [!solution]- Lösung
> 
> ```python
> for x in range(5):
> 		display.set_pixel(x, 0, 9)
> 		sleep(500)
> ```
### Aufgabe: Muster in Code nachmachen

Schreiben Sie das kürzest mögliche Programm, dass folgendes Muster zeichnet.

![[microbit-ledpattern-1.png]]

> [!solution]- Lösung
> 
> ```python
> from microbit import *
> for x in range(1,4):
>     display.set_pixel(x,0, 9)
> for y in range(2,4):
>     display.set_pixel(3,y, 9)
> ```

### Aufgabe: Muster selbst zeichnen

Was für ein Muster generiert folgenden Code? Sagen Sie voraus, welche LEDs nach diesem Programm angestellt sein werden.

```python
from microbit import *

for x in range(1,4):
    display.set_pixel(x, 1, 9)

for x in range(0,3):
    display.set_pixel(x, 2, 9)

for y in range(0,3):
    display.set_pixel(2, y, 0)
```

> [!solution]- Lösung
> 
> ![[microbit-ledpattern-2.png]]

### Aufgabe: Gesamten Screen auffüllen
Erweitern Sie das Programm so, dass nicht nur die erste Reihe, sondern der gesamte Screen aufgefüllt wird.
> [!solution]- Lösung
> 
> ```python
> for y in range(5):
>     for x in range(5):
> 		display.set_pixel(x, y, 9)
>         sleep(500)
> ```
> 
> ![[microbit-03-leds-iterationen.excalidraw]]

#### Erweiterung: Diagonale
Erweitern Sie das Programm so, dass die Pixel der Diagonale **nicht** angestellt werden - alle andern aber schon! 😊
> [!solution]- Lösung
> 
> ```python
> for y in range(5):
>     for x in range(5):
>         if not x == y:
>             display.set_pixel(x, y, 9)
>         sleep(500)
> ```

### Aufgabe: Funktion fill
Jetzt lagern wir diese Funktionalität in eine Funktion aus. Das nennt man **Refaktorierung**: Ein bisschen wie bei Multiplikationen extrahieren wir einen Teil unsere Programms als "Faktor" in eine Funktion.

Schreiben Sie eine Funktion `fill(helligkeit, wartezeit)`, die die LEDs mit einer gewissen Helligkeit auffüllt und zwischen den Pixeln immer `wartezeit` wartet.

> [!solution]- Lösung
> 
> ```python
> from microbit import *
> 
> def fill(helligkeit, wartezeit):
>     for y in range(5):
>         for x in range(5):
>             display.set_pixel(x, y, helligkeit)
>             sleep(wartezeit)
> 
> fill(4, 500)
> ```

