---
title: while-Schleife
---

In dieser Lektion schauen wir uns die while-Schleife an. Das ist eine Schleife, die Ihren Code ausführt, **solange eine bestimmte Bedingung wahr ist**.

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
