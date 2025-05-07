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

## Altes Beispiel mit Turtle

```turtle
import turtle
import random

# Initialisieren der Turtle und des Fensters
eva = turtle.Turtle("turtle")
eva.speed(5)
screen = turtle.Screen()

# Begrenzungen des Fensters
x_limit = screen.window_width() / 2 - 100
y_limit = screen.window_height() / 2 - 100

# Unsichtbare Turtle um Text anzuzeigen
textturtle = turtle.Turtle()
textturtle.hideturtle()
textturtle.penup()
textturtle.setposition(0,y_limit/2)

# Rahmen zeichnen
eva.penup()
eva.setposition(x_limit, y_limit)
eva.color("red")
eva.pensize(3)
eva.pendown()
eva.setposition(-x_limit, y_limit)
eva.setposition(-x_limit, -y_limit)
eva.setposition(x_limit, -y_limit)
eva.setposition(x_limit, y_limit)
eva.penup()
eva.setposition(0,0)
eva.color("black")
eva.pensize(1)
eva.pendown()

# Solange die Koordinaten kleiner als die Limiten sind
while abs(eva.xcor()) < x_limit and abs(eva.ycor()) < y_limit:

    eva.setheading(random.randint(0, 360))  # Zufallssrichtung
    eva.forward(50) 

textturtle.write("Lauf Eva, lauf! 😍", align="center", font=("Arial", 60, "bold"))
turtle.done()

```
