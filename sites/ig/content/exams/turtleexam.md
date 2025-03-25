## Welcome to the exam

```turtle
import turtle
import random
window = turtle.Screen()

turtlelist = []

TOP = window.window_height() / 2
BOTTOM = -TOP
RIGHT = window.window_width() / 2
LEFT = -RIGHT

for i in range(3):
    t = turtle.Turtle()
    t.penup()
    t.goto(random.randint(LEFT, RIGHT), BOTTOM )
    t.left(90)
    t.pendown()
    turtlelist.append(t)

for i in range(200):
    for t in turtlelist:
        t.forward(2)
        t.right(random.randint(-3,3))

turtle.done()
```

![[turtleexam-2024-12.excalidraw]]