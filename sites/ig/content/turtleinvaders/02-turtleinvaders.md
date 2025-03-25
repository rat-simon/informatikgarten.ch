---
title: Turtle-Invader! 😱
---
> [!success] Lernziele
> 
> Es wird *nicht* erwartet, dass Sie unseren Code oder die verwendeten Befehle auswendig aufschreiben können. Es geht darum, die Logik unserer Lösung und die besprochene Theorie zu verstehen. Insbesondere:
> 
> 1) Sie verstehen unseren Code, könnten Schlüsselstellen erklären, und kurze Teile davon reproduzieren, wenn Sie alle nötigen Befehle erhalten. Spezifisch:
> 	- Sie verstehen, wie wir mit `time.time()` ein **Zeitintervall** programmiert haben.
> 	- Sie können `random.random()` und `random.randint(a,b)` charakterisieren und sinnvoll einsetzen.
> 	- Sie könnten 10 unbenannte **Turtle in eine Liste** laden, dann die Liste durchiterieren und die Turtles zufällig bewegen.
> 2) Sie verstehen theoretische Konzepte:
> 	- Sie wissen, dass Listen ein strukturierter Datentyp und mutable sind.
## Code in mehreren Dateien organisieren

### Erklärvideo

![[coding_3_refactor.mp4]]

### Code

```python filename="main.py"
import turtle
import time
from window import *  # [!code ++]
from ship import *  # [!code ++]

# Wir kontrollieren das Fenster selbst  # [!code --]
window = turtle.Screen()  # [!code --]
window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm  # [!code --]
window.bgcolor("#202020") # Hintergrund in Hex-RGB  # [!code --]
window.title("Turtle Invaders") # Titel des Fensters  # [!code --]
window.tracer(0)  # [!code --]

# Einige Konstanten für das Fenster, die uns hilfreich sein werden  # [!code --]
LEFT = -window.window_width() / 2  # [!code --]
RIGHT = window.window_width() / 2  # [!code --]
TOP = window.window_height() / 2  # [!code --]
BOTTOM = -window.window_height() / 2  # [!code --]
GROUND = 0.9 * BOTTOM  # [!code --]

# Unser Raumschiff  # [!code --]
SHIP_STEP = 1 # Schrittweite für das Raumschiff  # [!code --]
ship = turtle.Turtle()  # [!code --]
turtle.register_shape('spaceship.gif')  # [!code --]
ship.shape('spaceship.gif')  # [!code --]
ship.penup() # Das Raumschiff soll nichts zeichnen  # [!code --]
ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein  # [!code --]

ship_direction = 0 # -1 = nach links, 0 = halt, +1 = nach rechts

# Steuerung
def quit():
    global running
    running = False

def move_left():
   global ship_direction
   ship_direction = -1

def move_right():
   global ship_direction
   ship_direction = 1
  
def stop_moving():
   global ship_direction
   ship_direction = 0

window.onkeypress(quit, "q")
window.onkeypress(move_left, "Left")
window.onkeypress(move_right, "Right")
window.onkeyrelease(stop_moving, "Left")
window.onkeyrelease(stop_moving, "Right")
window.listen()

running = True
while running:
  new_x = ship.xcor() + SHIP_STEP * ship_direction
  if LEFT < new_x < RIGHT:
    ship.setx(new_x)
  window.update()
  time.sleep(.001) # Temporäre Lösung, um die Animation zu verlangsamen
```

```python filename="window.py"
import turtle  # [!code ++]

# Wir kontrollieren das Fenster selbst
window = turtle.Screen()
window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
window.bgcolor("#202020") # Hintergrund in Hex-RGB
window.title("Turtle Invaders") # Titel des Fensters
window.tracer(0)

# Einige Konstanten für das Fenster, die uns hilfreich sein werden
LEFT = -window.window_width() / 2
RIGHT = window.window_width() / 2
TOP = window.window_height() / 2
BOTTOM = -window.window_height() / 2
GROUND = 0.9 * BOTTOM
```

```python filename="ship.py"
import turtle  # [!code ++]
from window import GROUND  # [!code ++]

# Unser Raumschiff
SHIP_STEP = 1 # Schrittweite für das Raumschiff
ship = turtle.Turtle()
turtle.register_shape('spaceship.gif')
ship.shape('spaceship.gif')
ship.penup() # Das Raumschiff soll nichts zeichnen
ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein
```

## Die Turtleinvader kommen!

### Erklärvideo

![[coding_4_turtleinvader.mp4]]

### Zeitintervall

![[turtleinvaders_zeitinterval.mp4]]

Die Funktion `time()` aus dem Paket `time` gibt uns die aktuelle Zeit in Sekunden seit 00:00 am 1. Januar 1970 in der Standardzeit UTC. Das ist für Sie allerdings wenig relevant, weil Sie werden `time.time()` immer als Differenz zwischen zwei Zeitpunkten nutzen. Wichtig also: Die Differenz wird in Sekunden gemessen.

Hier ein simplifizierter Auszug.

```python
import time

INVADER_INTERVALL = 1 # in Sekunden
invader_time = time.time()

running = True
while running:
	# ...
	# Wenn die Zeitdifferenz das Interval überschreitet
	if (time.time() - invader_time) > INVADER_INTERVALL:
		# Neuen Turtleinvader kreieren
		# ...
		
		# Setze den Zeitstempfel neu für das nächste Intervall
		invader_time = time.time()
	# ...
```

### Anonyme Turtle in Listen

![[invaderliste.mp4]]

Wir fügen unserer Liste jeweils eine Turtle hinzu.

```python

import turtle

turtleliste = []

def create_invader():
	t = turtle.Turtle()
	# Turlte konfigurieren und stylen
	turtleliste.append(t)

# Funktion ausführen
create_invader()
create_invader()
# Zum Verständnis drucken wir die Liste aus
print(turtleliste)
```

Im Speicher passiert dabei Folgendes:
- Die Liste speichert Verweise auf die verschiedenen Turtle-Objekte im Speicher, die von turtle.Turtle() kreiert werden.
- Wenn wir durch `turtleliste` iterieren, können wir mit der Laufvariable die verschiedenen Turtle-Objekte bewegen.

<iframe width="100%" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=class%20Turtle%3A%0A%20%20%20%20pass%0A%0Aturtleliste%20%3D%20%5B%5D%0A%0Afor%20i%20in%20range%2810%29%3A%0A%20%20%20%20turtleliste.append%28Turtle%28%29%29%0A%0A%23%20Printing%20memory%20addresses%0Afor%20invader%20in%20turtleliste%3A%0A%20%20%20%20print%28invader.__repr__%28%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

### Zufallszahlen

Das Paket `random` bietet einige Möglichkeiten, Zufallszahlen zu generieren. Wir verwenden zwei Funktionen davon:
- `random.random()` generiert eine Fliesskomma-Zufallszahl zwischen 0 und 1.
- `random.randint(a,b)` generiert eine Ganzzahl zwischen a und b (inklusiv a und b).

```python
import random

zufallszahlen = []

for i in range(10):
	# Ersetzen Sie random.random() zum Vergleich mit random.randint(-300,300)
    zufallszahlen.append(random.random())

for zahl in zufallszahlen:
    print(zahl)

```

### Turtle zufällig bewegen

![[randomturtle.mp4]]

Jetzt verbinden wir die gelernten Muster, um eine Liste mit Turtle zu füllen, und sie zufällig zu bewegen.

```turtle
import turtle
import random

invaderliste = []

for i in range(10):
    invaderliste.append(turtle.Turtle())

for invader in invaderliste:
    invader.right(random.randint(0,360))
    invader.forward(200)

turtle.done()
```
### Code
Was wir in `main.py` hinzugefügt haben.

```python
import turtle
from window import *
from ship import *
import time
import random  # [!code ++]

# Steuerung
ship_direction = 0  # -1 = nach links, 0 = halt, +1 = nach rechts


def quit():
    global running
    running = False

def move_left():
    global ship_direction
    ship_direction = -1

def move_right():
    global ship_direction
    ship_direction = 1

def stop_moving():
    global ship_direction
    ship_direction = 0

window.onkeypress(quit, "q")
window.onkeypress(move_left, "Left")
window.onkeypress(move_right, "Right")
window.onkeyrelease(stop_moving, "Left")
window.onkeyrelease(stop_moving, "Right")
window.listen()

	# Turtle invaders  #  [!code ++]
invader_liste = []  # [!code ++]
invader_time = time.time()  # [!code ++]
INVADER_INTERVALL = 0.5  # [!code ++]
INVADER_SPEED = 2  # [!code ++]
  # [!code ++]
def create_invader():  # [!code ++]
    t = turtle.Turtle()  # [!code ++]
    t.penup()  # [!code ++]
    t.shape("turtle")  # [!code ++]
    t.shapesize(1.5)  # [!code ++]
    t.color("white")  # [!code ++]
    # Zufallsposition  # [!code ++]
    t.setposition(random.randint(int(LEFT), int(RIGHT)), TOP)  # [!code ++]
    t.setheading(-90)  # [!code ++]
    # Zufallsfarbe  # [!code ++]
    t.color(random.random(), random.random(), random.random())  # [!code ++]
    invader_liste.append(t)  # [!code ++]

running = True
while running:
    new_x = ship.xcor() + SHIP_STEP * ship_direction
    if LEFT < new_x < RIGHT:
        ship.setx(new_x)
    if (time.time() - invader_time) > INVADER_INTERVALL:  # [!code ++]
        create_invader()  # [!code ++]
        invader_time = time.time()  # [!code ++]
    for invader in invader_liste:  # [!code ++]
        invader.forward(INVADER_SPEED)  # [!code ++]

    window.update()
    time.sleep(0.001)  # Temporäre Lösung, um die Animation zu verlangsamen
```
