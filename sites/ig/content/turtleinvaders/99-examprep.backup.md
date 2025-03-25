---
title: Prüfungsvorbereitung
---

> [!lernziele] Hinweise zur Prüfung
> 
> Diese Prüfungsvorbereitung ist dazu da, dass Sie die Art der Fragestellungen abschätzen können.
> - **Stoffumfang**: bis und mit "3 Turtleinvaders" im Kapitel "B Turtle-Invaders" auf Informatikgarten. Dort finden Sie auch die Lernziele.
> - Ihre generellen **Pythonkenntnisse** werden ebenfalls vorausgesetzt.
> - Sie werden [diese **Befehlsliste**](/pubfiles/befehlsliste_turtleinvader.pdf) erhalten. (Python-Strukturen werden darauf nicht erklärt!)
> - Sie finden [hier](https://exam.net/student?code=5Zrb45) eine **technische Vorschau** auf Exam.net, um den Programmiereditor zu versuchen.

## Das Turtle-Fenster verstehen

Ein Turtlefenster sei 600px hoch und 800px breit. Das Turtle-Raumschiff wird anders als bei unserem Spiel mit folgendem Code positioniert:

```python
window = turtle.Screen()

### ...weiterer Code...

LEFT = -window.window_width() / 2
RIGHT = window.window_width() / 2
TOP = window.window_height() / 2
BOTTOM = -window.window_height() / 2
GROUND = LEFT + 50

ship = turtle.Turtle()
ship.setposition(GROUND, 0)

### ...weiterer Code...
```

Beantworten Sie folgende Fragen zu GROUND.
1. Was für einen **Wert** hat GROUND?
2. Ist der **Datentyp** von GROUND in Python veränderbar (mutable)?
3. **Wo** wird das Raumschiff ungefähr **platziert**? Zeichnen Sie die ungefähre Position ein.

![[99-examprep-coordinates-question.excalidraw]]

> [!solution]- Lösung
> 
> 1. -350
> 2. Nein, es ist ein Integer, also ein unveränderbarer Datentyp.
> 3. 👇
> 
> ![[99-examprep-coordinates-answer.excalidraw]]


Was wird nach diesem Programm in diesem Fenster gezeichnet worden sein?

```python
import turtle

zahlen = [-150,0,290]
invaderliste = []

for i in zahlen:
    t = turtle.Turtle()
    t.penup()
    t.setposition(-400,i)
    t.pendown()
    invaderliste.append(t)

for i in range(40):
    for invader in invaderliste:
        invader.forward(10)

turtle.done()
```


![[99-examprep-coordinates-question.excalidraw]]

> [!solution]- Lösung
> 
> ![[99-examprep-coordinates-answer2.excalidraw]]

## Unsere Steuerung verstehen

Hilfe! Ich wollte meine Steuerung gemäss einem Tutorial so verbessern, damit wenn ich Links oder Rechts drücke, am Anfang kein Ruckler entsteht, während dessen das Raumschiff stehen bleibt. Aber irgendwie funktioniert jetzt gar nichts mehr. 

Helfen Sie mir bitte bei folgenden Problemen: 
- Ein Fehler im Dateisystem hat mein Programm teilweise korrumpiert. Ich habe Ihnen **drei Linien markiert, können Sie diese bitte wieder herstellen**?
- Aber auch vor dem Dateifehler lief das Programm ganz und gar nicht. Mein Editor hat **eine Linie** markiert, das etwas nicht sein könne. Aber ich weiss nicht mehr welche Linie das war. Können Sie die Linie finden und korrigieren?

```python showLineNumbers
SHIP_STEP = 2
ship_direction = 0

def move_left(): 
   global ship_direction 
   ship_direction = -1 
 
def move_right(): 
   global ship_direction 
   ship_direction = 1 
   
def stop_moving(): 
   global ship_direction 
   ship_direction = 0 

window.onkeypress(move_left, "Left") 
window.onkeypress(move_right, "Right") 
S%V7qrubhhZeXx7fthyqxZC*@swsy7rHnB3Faf6 # 1
2G6%Lv4ym6%ezeH698TYnedloKRAhG%bB9*nz   # 2
window.listen()

running = True
while running:
  new_x = F^h!Wu9lyK2u&ulgpN%Jj$4*v$*65nLiPddQMim # 3
  if LEFT > new_x > RIGHT: 
    ship.setx(new_x) 
```

> [!solution]- Lösung
> 
> Linie 1: `window.onkeyrelease(stop_moving, "Left")`
> Linie 2: `window.onkeyrelease(stop_moving, "Right")`
> Linie 3: `ship.xcor() + SHIP_STEP * ship_direction`
> 
> Fehler auf Linie 25: `LEFT > new_x > RIGHT` ist ein unmöglicher Wahrheitstest. `LEFT < new_x < RIGHT` wäre korrekt.

## Gelernte Konzepte in Programmen verstehen

Schreiben Sie alle Ausgaben der print()-Befehle mit ":" getrennt ins Antwortfeld. Ein Beispiel:

```python
test = "X"
print("Anfang")
print(test)
print("Ende")
```

Die korrekte Antwort wäre `Anfang:X:Ende`

```python
test = "Hallo"
print(test)

def aendern():
	test = "Velo"

aendern()

print(test)
```

> [!solution]- Lösung
> 
> `Hallo:Hallo`

```python
test1 = 42
test2 = 12

def aendern():
	global test1
	test1 = 12
	test2 = 35
	print(test2)

aendern()

print(test1+test2)
```

> [!solution]- Lösung
> 
> `35:24`

```python
test = [2,5,7]

def aendern():
	test.append(3)

test.append(1)
aendern()

for i in test:
	print(i)
```

> [!solution]- Lösung
> 
> `2:5:7:1:3`

```python
print("Anfang")
for element in ["A","B","C"]:
    print("X")
print("Ende")
```

> [!solution]- Lösung
> 
> `Anfang:X:X:X:Ende`

```python
A = "hallo"
B = "velo"
C = "test"
print("A")
for element in [A,"B","C"]:
    print(element)
print("X")
```

> [!solution]- Lösung
> 
> `A:hallo:B:C:X`

## Programme schreiben (auf Exam.net, wo Sie Programme ausführen können (ohne Turtle))

Schreiben Sie ein Programm, das eine Liste mit 100 Zufallszahlen zwischen 1 und 50 erstellt. Dann druckt es alle Zahlen der Liste aus, die grösser als 5 aber kleiner als 15 sind.

> [!solution]- Lösung
> 
> ```python
> import random
> 
> liste = []
> for i in range(100):
>     liste.append(random.randint(1,50))
> 
> for zahl in liste:
>     if 5 < zahl < 15:
>         print(zahl)
> ```

Nehmen Sie folgendes Programm als Ausgangslage. Erweitern Sie es so, dass alle 0.5 Sekunden die Funktion create_invader() ausgeführt wird.

*Bitte beachten Sie: Auf Exam.net gibt es eine Zeitbegrenzung, wie lange Programme ausgeführt werden dürfen. Bitte belassen Sie alle Linien der Ausgangslage (insbesondere die Linien mit PROGRAMM_START) so, wie Sie sind.*

```python
import time

# Lassen Sie diese Konstante so, wie sie ist
CHEHABS_START = time.time()

# Rufen Sie diese Funktion alle 0.5 Sekunden auf
def create_invader():
    print("Invader kommt!")

while True:
	# Fügen Sie hier extra Code hinzu
	# ...
	
	# Lassen Sie diese Zeitbegrenzung so, wie sie ist, damit Exam.net das Programm akzeptiert
    if time.time() - CHEHABS_START > 4.5:
        break
```

> [!solution]- Lösung
> 
> ```python
> import time
> 
> # Lassen Sie diese Konstante so, wie sie ist
> PROGRAMM_START = time.time()
> 
> # Rufen Sie diese Funktion alle 0.5 Sekunden auf
> def create_invader():
>     print("Invader kommt!")
> 
> start = time.time() # [!code ++]
> 
> while True:    
>     if time.time() - start > 0.5: # [!code ++]
>         create_invader() # [!code ++]
>         start = time.time() # [!code ++]
> 
> 	# Lassen Sie diese Zeitbegrenzung so, wie sie ist, damit Exam.net das Programm akzeptiert
>     if time.time() - PROGRAMM_START > 4.5:
>         break
> ```

Schreiben Sie ein Turtle-Programm, das 10 Invader-Turtle am oberen Bildrand auf einer zufälligen X-Koordinate platziert und sie gleichzeitig über den Bildschirm nach unten fahren lässt.

> [!solution]- Lösung
> 
> ```python
> import turtle
> import random
> 
> window = turtle.Screen()
> window.tracer(0) # unnötiges Candy
> 
> TOP = window.window_height() / 2
> XMAX = window.window_width() / 2 
> 
> invaderlist = []
> for i in range(10):
>     t = turtle.Turtle()
>     t.penup() # unnötiges Candy
>     t.setposition(random.randint(int(-XMAX), int(XMAX)), TOP) # ohne int() gäbe keinen Abzug
>     t.right(90)
>     t.pendown() # unnötiges Candy
>     invaderlist.append(t)
> 
> while True:
>     for invader in invaderlist:
>         invader.forward(1)
>     window.update() # unnötiges Candy
> ```
> 

