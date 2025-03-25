---
title: Laser 💥
---
> [!success] Lernziele
> 
> Es wird *nicht* erwartet, dass Sie unseren Code oder die verwendeten Befehle auswendig aufschreiben können. Es geht darum, die Logik unserer Lösung und die besprochene Theorie zu verstehen. Insbesondere:
> 
> 1) Sie verstehen unseren Code, könnten Schlüsselstellen erklären, und kurze Teile davon reproduzieren, wenn Sie alle nötigen Befehle erhalten. Spezifisch:
> 	- Sie verstehen, wie wir die Laser mit `liste.remove()` wieder von den Listen löschen.
> 2) Sie verstehen theoretische Konzepte:
> 	- Sie verstehen, wieso wir die Laser wieder von den Listen entfernen müssen.

## Laser kreieren und bewegen

### Erklärvideo

Beachten Sie: Die Funktion `move_laser()` wird beim Refaktorieren noch parametrisiert.

![[coding_5_laser.mp4]]

### Code

> [!solution]- Die Änderungen in `main.py`.
> 
> ```python
> import turtle
> from window import *
> from ship import *
> import time
> import random
> 
> # Steuerung
> ship_direction = 0  # -1 = nach links, 0 = halt, +1 = nach rechts
> 
> 
> def quit():
>     global running
>     running = False
> 
> 
> def move_left():
>     global ship_direction
>     ship_direction = -1
> 
> 
> def move_right():
>     global ship_direction
>     ship_direction = 1
> 
> 
> def stop_moving():
>     global ship_direction
>     ship_direction = 0
> 
> 
> window.onkeypress(quit, "q")
> window.onkeypress(move_left, "Left")
> window.onkeypress(move_right, "Right")
> window.onkeyrelease(stop_moving, "Left")
> window.onkeyrelease(stop_moving, "Right")
> window.listen()
> 
> # Turtle invaders
> invader_liste = []
> invader_time = time.time()
> INVADER_INTERVALL = 0.5
> INVADER_SPEED = 2
> 
> def create_invader():
>     t = turtle.Turtle()
>     t.penup()
>     t.shape("turtle")
>     t.shapesize(1.5)
>     t.color("white")
>     # Zufallsposition
>     t.setposition(random.randint(int(LEFT), int(RIGHT)), TOP)
>     t.setheading(-90)
>     # Zufallsfarbe
>     t.color(random.random(), random.random(), random.random())
>     invader_liste.append(t)
> 
> # Laser-Logik # [!code ++]
> laser_liste = [] # [!code ++]
> LASER_SPEED = 10 # [!code ++]
> LASER_LENGTH = 200 # [!code ++] 
>  # [!code ++]
> def create_laser(): # [!code ++]
>     l = turtle.Turtle() # [!code ++]
>     l.penup() # [!code ++]
>     l.color(1,0,0) # [!code ++]
>     l.hideturtle() # [!code ++]
>     l.setheading(90) # [!code ++]
>     l.setposition(ship.xcor(), ship.ycor() + 20) # [!code ++]
>     l.pendown() # [!code ++]
>     l.pensize(5) # [!code ++]
>     laser_liste.append(l) # [!code ++]
>  # [!code ++]
> def move_laser(): # [!code ++]
>     laser.clear() # [!code ++]
>     laser.forward(LASER_SPEED) # [!code ++]
>     laser.forward(LASER_LENGTH) # [!code ++]
>     laser.back(LASER_LENGTH) # [!code ++]
> 
> window.onkeypress(create_laser, "space") # [!code ++]
> 
> running = True
> while running:
>     new_x = ship.xcor() + SHIP_STEP * ship_direction
>     if LEFT < new_x < RIGHT:
>         ship.setx(new_x)
>     if (time.time() - invader_time) > INVADER_INTERVALL:
>         create_invader()
>         invader_time = time.time()
>     for invader in invader_liste:
>         invader.forward(INVADER_SPEED)
>     for laser in laser_liste: # [!code ++]
>         move_laser() # [!code ++]
> 
>     window.update()
>     time.sleep(0.001)  # Temporäre Lösung, um die Animation zu verlangsamen
> ```

## Unnötige Laser und Invader wieder löschen
### Wieso wird alles so langsam?

Wir fügen aktuell ständig Invaders und Lasers den Listen hinzu. Auch wenn diese nicht mehr auf dem Bildschirm sind, verweilen sie weiterhin in den Listen und werden bei unseren Iterationen bewegt und verarbeitet - ohne dass wir das sehen!

Weil unsere Ressourcen knapp sind, müssen wir unnötige Turtle-Objekte wieder von den Listen entfernen. Sobald diese Objekte aus den Listen entfernt werden, gibt es keine Referenzen mehr auf sie, und sie werden als "unreferenziert" betrachtet. Der Garbage Collector von Python (die Müllabfuhr, quasi) erkennt diese unreferenzierten Objekte und entfernt sie automatisch aus dem Speicher, um Ressourcen freizugeben.

Neben unseren eigenen Listen `invader_liste` und `laser_liste` betreibt auch das `turtle`-Modul eine eigene Liste. Deswegen schaut unsere Funktion, um eine Turtle von einer unserer Listen zu entfernen, letztlich so aus:

```python
def destroy_turtle(sprite, liste):
    sprite.clear() # alles Gezeichnete der Turtle löschen
    sprite.hideturtle() # die Turtle verstecken
    liste.remove(sprite) # von unserer Liste löschen
    turtle.turtles().remove(sprite) # von der internen turtle-Liste löschen
```
### Laser nach Verlassen des Bildschirms löschen

![[coding_6_destroyturtle.mp4]]

#### Änderungen in `main.py`

```python filename="main.py"

# ...bisheriger Code...

def destroy_turtle(sprite, liste): # [!code ++]
    sprite.clear() # [!code ++]
    sprite.hideturtle() # [!code ++]
    liste.remove(sprite) # unsere Liste # [!code ++]
    turtle.turtles().remove(sprite) # interne turtle-Liste # [!code ++]

running = True
while running:

    # ...Bisheriger Code der while-Schleife...
    
    for laser in laser_liste:
        move_laser()
        if laser.ycor() > TOP: # [!code ++]
            destroy_turtle(laser, laser_liste) # [!code ++]

    window.update()
    time.sleep(0.001)  # Temporäre Lösung, um die Animation zu verlangsamen
```

### Bei Treffer die Laser und Invader zerstören

![[turtleinvaders_laserhit.mp4]]

## Game Over

![[turtleinvaders_gameover.mp4]]

