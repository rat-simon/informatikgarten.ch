---
title: Einzelne LEDs und return-Statement
---
> [!success]  Lernziele
> 
> - **LEDs anstellen**: Sie können LEDs gezielt ansteuern und mit `for`-Schleifen das Display füllen.
> - **Funktionen und return**: Sie haben Funktionen mit Parametern repetiert und können mit `return` die Ausführung einer Funktion beenden.
> - **`if ... elif ... else`**: Sie können mehrere Bedingungen mit `and` und `or` verknüpfen, und haben die `if ... elif ... else`-Verkettung repetiert.
> - **Modulo-Operator `%`**: Sie können den Modulo-Operator `%` verwenden, um den Rest einer Division zu berechnen oder in einer `if`-Selektion zu überprüfen.

> [!example] Theorie
> 
> ### Design pattern: Funktion ausführen bis `return`
> 
> `return` kann nur innerhalb einer Funktion verwendet werden. Damit kann man dem Hauptprogramm einen Wert zurückgeben. Aber für dieses Design pattern viel wichtiger: Es beendet die Ausführung der Funktion.
> 
> So konnten wir in unserer Funktion `fill()` die LEDs füllen, bis die Summe der LEDs gleich gross war, wie die gewünschte Anzahl, und dann einfach die Funktion beenden.
> 
> ```python {hl_lines="2 6-8"}
> def fill(nr, wartezeit):
>     sum = 0
>     for y in range(5):
>         for x in range(5):
>             if sum == nr:
>                 return
>             display.set_pixel(x, y, 9)
>             sum = sum + 1
>             sleep(wartezeit)
> ```


## LEDs auffüllen

Der Microbit hat ein 5x5 Screen mit insgesamt 25 LEDs, die wir mit `microbit.display` ansteuern können.
### Aufgabe: Reihe auffüllen
Schreiben Sie ein Programm, bei dem man sieht, wie es die erste Reihe Pixel um Pixel auffüllt.

> [!solution]- Lösung
> 
> ```python
> 	for x in range(5):
> 			display.set_pixel(x, 0, 9)
> 			sleep(500)
> ```
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

Schreiben Sie eine Funktion `fill(nr, wartezeit)`, die die Anzahl `nr` LEDs auf dem Display auffüllt und zwischen den Pixeln immer `wartezeit` wartet. Also fill(7, 0) soll sofort das hier anzeigen:

![[hw-00-purpose-20240812074841.png]]

*Tipp: Das `return`-Statement ist dazu da, Werte aus einer Funktion zurück ans Hauptprogramm zu übergeben. Hier werden Sie `return` aber nur gebrauchen, **weil `return` die Funktion beendet**.*

> [!solution]- Lösung
> 
> ```python
> def fill(nr, wartezeit):
> 	display.clear()
>     sum = 0
>     for y in range(5):
>         for x in range(5):
>             if sum == nr:
>                 return
>             display.set_pixel(x, y, 9)
>             sum = sum + 1
>             sleep(wartezeit)
> ```


### Aufgabe: Mehrere Bedingungen überprüfen

Schreiben Sie ein Programm, dass im Sekundentakt von 1 bis 25 hoch zählt. 
- Falls die aktuelle Zahl restlos sowie durch Drei **und** durch Vier teilbar ist, zeigen Sie ein Herz auf dem Display an.
- Falls die aktuelle Zahl restlos durch Drei teilbar ist, aber nicht durch Vier, zeigen Sie das Bild CLOCK3 auf dem Display an.
- Falls die aktuelle Zahl restlos durch Vier teilbar ist, aber nicht durch Drei, zeigen Sie das Bild CLOCK4 auf dem DIsplay an.
- Ansonsten nutzen Sie Ihre `fill()`-Funktion, um die aktuelle Anzahl LEDs ohne Verzögerung anzustellen.

Diese Aufgabe ist von einem Lernvideo inspiriert. Den Rest einer Division können Sie mit dem "Modulo"-Operator `%` berechnen.

```turtle
print ("8 % 3:", 8 % 3 ) # 8 durch 3 hat einen Rest von 2
print ("8 % 4:", 8 % 4 ) # 8 durch 4 hat einen Rest von 0
print ("Ist der Rest 0?", 8 % 4 == 0) # True, weil das stimmt ja
```

### Aufgabe: Mit den Knöpfen A und B auffüllen

Erweitern Sie das Programm so, dass das Display nicht automatisch auffüllt, sondern dass man die Knöpfe A und B drücken kann, und dann jeweils ein LED mehr (Knopf B) oder weniger (Knopf A) anstellt. Achtung: Beachten Sie die "Edge-Cases" - d.h. die Randfälle, wenn Sie beispielsweise bereits keine (also 0) LEDs angestellt haben und nochmal A drücken.
### Knacknuss: LEDs wieder abstellen

Modifizieren Sie die Funktion `fill()` so, dass die LEDs auch wieder der Reihe nach abstellen (das letzte LED .

### Knacknuss: "Kitt, I need you pal!"

In den 1980ern und 1990ern waren viele aus dem Häuschen wegen einer Serie, in der ein junger Schönling mit seinem schwarzen, künstlich-intelligenten Auto für Gerechtigkeit kämpft. Die Rede ist von "Knight Rider" mit David Hasselhoff. Zu Ihrer Belustigung, hier ein Trailer:

<Youtube id="oNyXYPhnUIs" />

Jetzt wollen Sie natürlich Ihren Microbit genau so cool machen wie K.I.T.T., das intelligente Auto... Beginnen wir also ganz vorne: Machen Sie die Animation der roten Lichter in K.I.T.T.s Kühlerhaube mit Ihrem Microbit nach.

> [!solution]- Mögliche Lösung
> 
> ```python
> from microbit import *
> 
> def kitt(x):
> 
>     # Alle bestehenden LEDs um 1 dimmen
>     for i in range(5):
>         neue_helligkeit = display.get_pixel(i, 0) - 1
>         if neue_helligkeit < 0:
>             neue_helligkeit = 0
>         display.set_pixel(i, 0, neue_helligkeit)
>         
> 	# Ein aktuelles LED ganz anstellen
>     display.set_pixel(x, 0, 9)
>     sleep(200)
>     
> 
> while True:
> 	# Von links nach rechts
>     for i in range(5):
>         kitt(i)
> 	# Von rechts nach links
>     for i in range(4, -1, -1):
>         kitt(i)
> ```

