---
title: Fenster und Raumschiff
---

> [!success] Lernziele
> 
> Es wird *nicht* erwartet, dass Sie unseren Code oder die verwendeten Befehle auswendig aufschreiben können. Es geht darum, die Logik unserer Lösung und die besprochene Theorie zu verstehen. Insbesondere:
> 
> 1) Sie verstehen unseren Code, könnten Schlüsselstellen erklären, und kurze Teile davon reproduzieren, wenn Sie alle nötigen Befehle erhalten. Spezifisch:
> 	- Sie verstehen das **Turtle-Fenster als Koordinatensystem** und die Logik unserer Helfervariabeln LEFT, RIGHT, TOP, BOTTOM, GROUND.
> 	- Sie können erklären, was das **`global` Keyword** in Funktionen bezweckt.
> 	- Sie verstehen, wie wir bei der **Steuerung** die neue X-Koordinate berechnen und wieso wir window.onkeyrelease() nutzen.
> 2) Sie verstehen theoretische Konzepte:
> 	- Das **globale Speicherframe** und dass Funktionen temporäre "lokale" Speicherframes nutzen, die wieder zerstört werden.
> 	- Sie kennen alle **primitiven Datentypen** (Bools, Integers, Floats, Strings) und wissen, dass diese in Python immutable (nicht an Ort und Stelle veränderbar) sind.

## Abhängigkeiten überlegen

> [!example] Im Plenum
> 
> Überlegen wir uns, welche Teile von welchen anderen Teilen im Spiel abhangen. Damit ist folgende Frage gemeint: Was muss existieren, damit dieses Teil existieren kann? 
> 
> ![[01-raumschiff-dependencies.excalidraw]]

> [!solution]- Lösung
> 
> 
> ![[01-raumschiff-dependencies-solution.excalidraw]]

Daraus ergibt sich eine natürliche Abfolge unserer Arbeit:
1) Fenster
2) Raumschiff oder Turtle-Invaders
3) Laser (braucht zumindest das Raumschiff)
4) Punkteanzeige braucht sicher die Laser und die Turtle-Invaders um zu zählen

## Fenster und Raumschiff erstellen

Diesen ersten Teil erkläre und programmiere ich in diesem Video vor.

![[coding_1_window_position.mp4]]

### Fenster

Sie kennen Turtle so, dass sich automatisch ein Fenster öffnet. Bei diesem Spiel brauchen wir mehr Kontrolle, deswegen kreieren wir das Fenster selbst mit `turtle.Screen()`.

```python
import turtle

# Wir kontrollieren das Fenster selbst
window = turtle.Screen()
window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
window.bgcolor("#202020") # Hintergrund in Hex-RGB
window.title("Turtle Invaders") # Titel des Fensters

# Temporär, damit es sich nicht gleich wieder schliesst
turtle.done()
```

### Raumschiff

Jetzt bauen wir unser Raumschiff. Dazu können Sie sich ein gif-Bild im Internet suchen oder dieses Beispielbild verwenden. 

![[spaceship.gif]]
Speichern Sie das Bild als `spaceship.gif` in Ihrem Projektordner ab. Wir fügen das Schiff wie folgt als Turtle ins Programm ein.

```python
import turtle

# Wir kontrollieren das Fenster selbst
window = turtle.Screen() # Das Fenster kreieren
window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
window.bgcolor("#202020") # Hintergrund in Hex-RGB
window.title("Turtle Invaders") # Titel des Fensters

# Unser Raumschiff  # [!code ++]
ship = turtle.Turtle() # [!code ++]
turtle.register_shape('spaceship.gif') # Das Bild laden und registrieren  # [!code ++]
ship.shape('spaceship.gif') # Das Bild der Turtle zuweisen  # [!code ++]
ship.penup() # Das Raumschiff soll nichts zeichnen  # [!code ++]

# Temporär, damit es sich nicht gleich wieder schliesst
turtle.done()
```


> [!info]- Zusatz: gif-Bilder rotieren nicht, so kreieren Sie Vektorgrafiken
> 
> Eigene Bilder werden nicht rotiert, wenn sich die Turtle dreht. Wenn Sie - anders als in diesem Spiel - Ihr Raumschiff auch rotieren wollen, müssen Sie entweder die Bilder jeweils austauschen oder eine eigene Figur mit Vektoren machen. Ich habe hier versucht, einen X-Wing aus Star Wars zu machen... 🫤
> 
> ```python
> shape = (
>   (-10,8),
>   (-8,8),
>   (-8,3),
>   (-3,5),
>   (-1,20),
>   (1,20),
>   (3,5),
>   (8,3),
>   (8,8),
>   (10,8),
>   (10,1),
>   (5,0),
>   (4,-3),
>   (-4,-3),
>   (-5,0),
>   (-10,1),
> )
> turtle.register_shape("xwing", shape)
> ship.shape("xwing")
> ```

### Raumschiff positionieren

Jetzt möchten wir das Raumschiff am unteren Rand positionieren, 5% der Fensterhöhe vom Rand entfernt. Versuchen Sie dazu eine gute Lösung zu finden, die auf allen Bildschirmen funktionieren würde. Hierzu diese Tipps.
- Experimentieren Sie drauf los. Man muss oft mit einem System etwas herumspielen, bis man versteht, wie es funktioniert.
- `ship.setposition(50, -200)` setzt das Raumschiff auf die Position x = 50 und y = -200. (Es gibt auch `ship.setx()` und `ship.sety()`.)
- `window.window_width()` gibt Ihnen die Pixelbreite des Fensters
- `window.window_height()` gibt Ihnen die Pixelhöhe des Fensters

> [!solution]- Lösung Raumschiff-Position
> 
> Mit `ship.setx()` und `ship.sety()` könnten Sie herausgefunden haben, dass das Fenster ein Koordinatensystem ist.
> 
 >![[01-raumschiff-coordinates.excalidraw]]
 > 
 > Das hilft uns, die Ränder und den unteren Rand zu definieren.
 > 
> ```python
> import turtle
> 
> # Wir kontrollieren das Fenster selbst
> window = turtle.Screen()
> window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
> window.bgcolor("#202020") # Hintergrund in Hex-RGB
> window.title("Turtle Invaders") # Titel des Fensters
> 
> # Einige Konstanten für das Fenster, die uns hilfreich sein werden  # [!code ++]
> LEFT = -window.window_width() / 2  # [!code ++]
> RIGHT = window.window_width() / 2  # [!code ++]
> TOP = window.window_height() / 2  # [!code ++]
> BOTTOM = -window.window_height() / 2  # [!code ++]
> GROUND = 0.9 * BOTTOM  # [!code ++]
> 
> # Unser Raumschiff
> ship = turtle.Turtle()
> turtle.register_shape('spaceship.gif')
> ship.shape('spaceship.gif')
> ship.penup() # Das Raumschiff soll nichts zeichnen
> ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein  # [!code ++]
> 
> # Temporär, damit es sich nicht gleich wieder schliesst
> turtle.done()
> ```

### Animationen kontrollieren

Sie werden merken, dass Ihr Schiff zu Beginn eine Weile braucht, bis es den unteren Rand erreicht hat. Das passiert, weil **die Turtle animiert ist**. Wie müssen das unterbinden.

Wir lösen das, indem wir die automatischen Animationen mit `window.tracer(0)` komplett abstellen und manuell `window.update()` auslösen, wenn wir ein neues Bild berechnet haben wollen.

```python
import turtle

# Wir kontrollieren das Fenster selbst
window = turtle.Screen()
window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
window.bgcolor("#202020") # Hintergrund in Hex-RGB
window.title("Turtle Invaders") # Titel des Fensters
window.tracer(0)  # [!code ++]

# Einige Konstanten für das Fenster, die uns hilfreich sein werden
LEFT = -window.window_width() / 2
RIGHT = window.window_width() / 2
TOP = window.window_height() / 2
BOTTOM = -window.window_height() / 2
GROUND = 0.9 * BOTTOM

# Unser Raumschiff
ship = turtle.Turtle()
turtle.register_shape('spaceship.gif')
ship.shape('spaceship.gif')
ship.penup() # Das Raumschiff soll nichts zeichnen
ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein

# Temporär, damit es sich nicht gleich wieder schliesst  # [!code --]
turtle.done()  # [!code --]
running = True  # [!code ++]
while running:  # [!code ++]
  window.update()  # [!code ++]
```

## Steuerung des Raumschiffs

Diesen zweiten Teil erkläre und programmiere ich in diesem Video vor.

![[coding_2_steuerung.mp4]]

Unsere Art, das Fenster zu kreieren, wirft weiter Dividenden ab. Weil jetzt können wir Tastenanschläge und Klicks in diesem Fenster abfangen und bestimmen, welche Funktionen ausgeführt werden sollen. Ein Beispiel:

```python
# Führe die Funktion move_left() aus, wenn die linke Pfeiltaste gedrückt wird.
window.onkeypress(move_left, "Left")
# Führe die Funktion stop_moving() aus, wenn die linke Pfeiltaste losgelassen wird.
window.onkeyrelease(stop_moving, "Left")
```

Dabei wird sich uns bei fast jeder Steuerungsart immer dasselbe Problem stellen, auf das wir jetzt kurz eingehen.
### Das Spiel mit der Taste q beenden

Als Beispiel versuchen wir zu implementieren, dass das Spiel abbricht, wenn `q` gedrückt wird.

```python
def quit():
    print("quit() wird ausgeführt!")
    running = False
    print("'running' in quit() ist", running)

# Führt die Funktion quit() aus, wenn q gedrückt wird.
window.onkeypress(quit, "q")
window.listen()
```

> [!danger] Wieso klappt das nicht? Diskutieren Sie
> 
> Das wird nicht funktionieren. Die Funktion wird zwar ausgeführt und `running` ist `False`, aber die `while`-Schleife bricht trotzdem nicht ab. Was läuft schief?
> 
> Zur Veranschaulichung habe ich Ihnen das Szenario auf Python Tutor visualisiert.
> 
> <iframe width="100%" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20quit%28%29%3A%0A%20%20%20%20running%20%3D%20False%0A%20%20%20%20print%28%22running%20in%20quit%28%29%20ist%3A%22,%20running%29%0A%0Aiteration%20%3D%200%0A%0Arunning%20%3D%20True%0Awhile%20running%3A%0A%20%20%20%20print%28%22running%20in%20while%20ist%3A%22,%20running%29%0A%20%20%20%20quit%28%29%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20iteration%20%3D%20iteration%20%2B%201%0A%20%20%20%20if%20iteration%20%3D%3D%2010%3A%0A%20%20%20%20%20%20%20%20running%20%3D%20False&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>

> [!solution]- Lösung
> 
> Das `running = False` kreiert im lokalen Speicherbereich ("Frame") der Funktion temporär kurz eine Variable `running`, die zusammen mit dem ganzen Frame wieder gelöscht wird, wenn die Funktion ausgeführt wurde.

Um innerhalb einer Funktion auf eine globale Variable im Hauptprogramm zuzugreifen und sie zu verändern, muss man das Schlagwort `global` verwenden. (Hier das [geänderte Beispiel auf Python Tutor](https://pythontutor.com/render.html#code=def%20quit%28%29%3A%0A%20%20%20%20global%20running%0A%20%20%20%20print%28%22quit%28%29%20wird%20ausgef%C3%BChrt!%22%29%0A%20%20%20%20running%20%3D%20False%0A%20%20%20%20print%28%22running%20in%20quit%28%29%20ist%22,%20running%29%0A%0Arunning%20%3D%20True%0Aiteration%20%3D%200%0Awhile%20running%20and%20iteration%20%3C%2010%3A%0A%20%20%20%20iteration%20%2B%3D%201%0A%20%20%20%20print%28%22Das%20Programm%20l%C3%A4uft%20und%20running%20ist%22,%20running%29%0A%20%20%20%20quit%28%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false).)

```python
import turtle

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

# Unser Raumschiff
ship = turtle.Turtle()
turtle.register_shape('spaceship.gif')
ship.shape('spaceship.gif')
ship.penup() # Das Raumschiff soll nichts zeichnen
ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein

# Steuerung  # [!code ++]
def quit():  # [!code ++]
    global running  # [!code ++]
    running = False  # [!code ++]
  # [!code ++]
window.onkeypress(quit, "q")  # [!code ++]
window.listen()  # [!code ++]

running = True
while running:
  window.update()
```

### Links und rechts steuern

> [!NOTE] Sie sind dran
> 
> Versuchen Sie nun eine Steuerung zu bauen, um das Raumschiff links und rechts zu bewegen. Sie können das lösen, wie Sie wollen. Im Plenum werden wir dazu folgende Funktionen gebrauchen.
> - `window.onkeypress(move_left, "Left")` führt eine Funktion aus, wenn eine Taste gedrückt wird.
> - `window.onkeyrelease(stop_moving, "Left")` führt eine Funktion aus, wenn eine Taste losgelassen wird.
> - `ship.xcor()` gibt Ihnen die aktuelle X-Koordinate des Schiffes.
> - `ship.setx(x)` verschiebt das Schiff zur X-Koordinate `x`.

> [!success]- Mögliche erste Lösung
> 
> ```python
> import turtle
> 
> # Wir kontrollieren das Fenster selbst
> window = turtle.Screen()
> window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
> window.bgcolor("#202020") # Hintergrund in Hex-RGB
> window.title("Turtle Invaders") # Titel des Fensters
> window.tracer(0)
> 
> # Einige Konstanten für das Fenster, die uns hilfreich sein werden
> LEFT = -window.window_width() / 2
> RIGHT = window.window_width() / 2
> TOP = window.window_height() / 2
> BOTTOM = -window.window_height() / 2
> GROUND = 0.9 * BOTTOM
> 
> # Unser Raumschiff
> SHIP_STEP = 10 # Schrittweite für das Raumschiff  # [!code ++]
> ship = turtle.Turtle()
> turtle.register_shape('spaceship.gif')
> ship.shape('spaceship.gif')
> ship.penup() # Das Raumschiff soll nichts zeichnen
> ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein
> 
> # Steuerung
> def quit():
>     global running
>     running = False
> 
> def move_left():  # [!code ++]
>    new_x = ship.xcor() - SHIP_STEP  # [!code ++]
>    ship.setx(new_x)  # [!code ++]
>   # [!code ++]
> def move_right():  # [!code ++]
>    new_x = ship.xcor() + SHIP_STEP  # [!code ++]
>    ship.setx(new_x)  # [!code ++]
> 
> window.onkeypress(quit, "q")
> window.onkeypress(move_left, "Left")  # [!code ++]
> window.onkeypress(move_right, "Right")  # [!code ++]
> window.listen()
> 
> running = True
> while running:
>   window.update()
> ```

Probleme, die Sie sehr wahrscheinlich überwinden möchten, sind folgende:
- Wenn man nur `onkeypress`-Ereignisse nutzt und eine Taste gedrückt hält, wird das Schiff zunächst einmal bewegt und erst nach einer Verzögerung weiterbewegt. Das ist, weil eine automatische Repetitionslogik des Betriebsystems nach einer gewissen Verzögerung (z.B. 300ms) so tut, als würde die Taste immer wieder gedrückt.
- Die Steuerung kann die X-Koordinate unendlich erhöhen, was dazu führt, dass ihr Schiff das Fenster verlässt.
- Die `while`-Schleife läuft sehr schnell ab. Wie bei microbit gibt es auch hier eine Schlaffunktion. Sie finden sie im Paket `time`, das sie importieren müssen, als `time.sleep(400)`.

> [!success]- Eine Lösung ohne diese Probleme
> 
> ```python
> import turtle
> import time  # [!code ++]
> 
> # Wir kontrollieren das Fenster selbst
> window = turtle.Screen()
> window.setup(0.5, 0.75) # Breite und Höhe relativ zum Bildschirm
> window.bgcolor("#202020") # Hintergrund in Hex-RGB
> window.title("Turtle Invaders") # Titel des Fensters
> window.tracer(0)
> 
> # Einige Konstanten für das Fenster, die uns hilfreich sein werden
> LEFT = -window.window_width() / 2
> RIGHT = window.window_width() / 2
> TOP = window.window_height() / 2
> BOTTOM = -window.window_height() / 2
> GROUND = 0.9 * BOTTOM
> 
> # Unser Raumschiff
> SHIP_STEP = 1 # Schrittweite für das Raumschiff  # [!code ++]
> ship_direction = 0 # -1 = nach links, 0 = halt, +1 = nach rechts  # [!code ++]
> ship = turtle.Turtle()
> turtle.register_shape('spaceship.gif')
> ship.shape('spaceship.gif')
> ship.penup() # Das Raumschiff soll nichts zeichnen
> ship.setposition(0, GROUND) # Das Raumschiff soll unten im Bild sein
> 
> # Steuerung
> def quit():
>     global running
>     running = False
> 
> def move_left():  # [!code ++]
>    global ship_direction  # [!code ++]
>    ship_direction = -1  # [!code ++]
>   # [!code ++]
> def move_right():  # [!code ++]
>    global ship_direction  # [!code ++]
>    ship_direction = 1  # [!code ++]
>     # [!code ++]
> def stop_moving():  # [!code ++]
>    global ship_direction  # [!code ++]
>    ship_direction = 0  # [!code ++]
> 
> window.onkeypress(quit, "q")
> window.onkeypress(move_left, "Left")  # [!code ++]
> window.onkeypress(move_right, "Right")  # [!code ++]
> window.onkeyrelease(stop_moving, "Left")  # [!code ++]
> window.onkeyrelease(stop_moving, "Right")  # [!code ++]
> window.listen()
> 
> running = True
> while running:
>   new_x = ship.xcor() + SHIP_STEP * ship_direction  # [!code ++]
>   if LEFT < new_x < RIGHT:  # [!code ++]
>     ship.setx(new_x)  # [!code ++]
>   window.update()
>   time.sleep(.001) # Temporäre Lösung, um die Animation zu verlangsamen  # [!code ++]
> ```

### Challenge: Mögliche Erweiterungen
1. Bauen Sie einen Rand ein, dass das Schiff auch auf den Extrempositionen sichtbar bleibt.
2. Verfeinern Sie die Steuerung weiter: Wenn man ganz schnell zwischen links und rechts abwechselt, gibt es wieder eine Verzögerung! Können Sie das beheben?
3. Wie würden Sie eine Steuerung bauen, dass Sie ihr Raumschiff auch vorwärts bewegen könnten? (Achtung dazu: [Wie weiter oben erwähnt](#erstellen), rotiert das gif-Bild nicht, wenn Sie die Turtle drehen. Es wäre also sinnvoller, z.B. einfach `ship.shape('turtle')` zu verwenden, oder ein eigenes Raumschiff mit Vektoren zu bauen.)
4. Später werden wir den Code in verschiedene Dateien refaktorieren, aktuell `main.py`, `window.py` und `ship.py`. Machen Sie eine Sicherheitskopie und versuchen Sie das mal.

## Exkursion zu Datentypen

In Python sind alle **primitiven Datentypen** wie Boolesche Werte (`bool`), Ganzzahlen (`int`), Gleitkommazahlen (`float`) und Zeichenketten (`str`) **immutable** (unveränderlich). Das bedeutet, dass ihre Werte nach der Erstellung nicht mehr an Ort und Stelle verändert werden können. Wenn Sie den Wert einer dieser Datentypen ändern, wird im Speicher ein neues Objekt erstellt, und die Variable wird auf dieses neue Objekt verweisen. Deswegen mussten wir bei der Steuerung das `global` Keyword verwenden: Weil wir *de facto* die Speicherposition des Variabel ändern.

Listen sind der einzige **strukturierte Datentyp**, den Sie bislang kennen. Strukturiert bedeutet, dass Listen mehrere andere Datentypen in sich tragen können. Als Analogie können Sie sich ein **Bücherregal** vorstellen, dass allerlei Objekte enthalten kann.

```python
liste = ["hallo", 4, 3.14, True]
            ^     ^    ^     ^
           str   int float  bool
```

Anders als die primitiven Datentypen sind **Listen mutable** (veränderbar). Das heisst: Sie können die Elemente einer Liste verändern, ohne dass die Liste im Speicher verschoben werden muss. Die Speicheradresse der Liste verändert sich nicht, sie kann an Ort und Stelle verändert werden. Für die Laser und die Turtle-Invaders wird uns das hilfreich sein.

Es gibt auch **immutable strukturierte Datentypen**! Die zwei Kategorien sind nicht vollends deckungsgleich. Falls Sie die 

![[01-raumschiff-2024-11-25-10.39.59.excalidraw]]

Zum Schluss noch eine kurze Demonstration. Aktivieren Sie die Linie `global mein_int, mein_float, mein_string, mein_bool`, um den Unterschied zu sehen.

```turtle
mein_int = 42  # Integer
mein_float = 3.14  # Fliesskommazahlen
mein_string = "hallo"  # Zeichenkette
mein_bool = True  # Boolesche Variable
meine_liste = ["hallo", 13]

print("Anfang immutable:", mein_int, mein_float, mein_string, mein_bool)
print("Anfang mutable:", meine_liste)
print() # Neue Linie

def aendern():
    # global mein_int, mein_float, mein_string, mein_bool
    mein_int = 99
    mein_float = 2.72
    mein_string = "velo"
    mein_bool = False
    meine_liste.append("velo")

aendern()

print("Ende immutable:", mein_int, mein_float, mein_string, mein_bool)
print("Ende mutable:", meine_liste)
```

Unter der Kühlerhaube ist der Grund für dieses Verhalten, dass unveränderbare Datentypen jeweils an einem anderen Ort im Speicher neu geschrieben werden, wenn ihr Wert verändert wird. Das können Sie in dieser Demonstration direkt beobachten.

```python
# Wir definieren ein Integer, ein String und eine Liste
integer = 2
string = "hallo"
liste = [integer, string]

# Wir speichern die Speicheradressen
int_addr1 = hex(id(integer))
str_addr1 = hex(id(string))
list_addr1 = hex(id(liste))

# Wir verändern alle
integer = 3
string = "halo"
liste.append("velo")

# Wir speichern die Speicheradressen erneut
int_addr2 = hex(id(integer))
str_addr2 = hex(id(string))
list_addr2 = hex(id(liste))

print()
print("Speicheradresse des Integers:")
print(int_addr1)
print(int_addr2)
print("Sind Sie gleich?", int_addr1 == int_addr2)
print()

print("Speicheradresse des Strings:")
print(str_addr1)
print(str_addr2)
print("Sind Sie gleich?", str_addr1 == str_addr2)
print()

print("Speicheradresse der Liste:")
print(list_addr1)
print(list_addr2)
print("Sind Sie gleich?", list_addr1 == list_addr2)
print()
```
