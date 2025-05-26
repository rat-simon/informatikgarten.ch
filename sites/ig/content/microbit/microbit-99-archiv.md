---
display: hidden
---
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


Examprep


## 1. Unhappy Microbit 😣

Zeigen Sie zwei Sekunden lang ein unglückliches Smiley an, wenn Knopf A geschüttelt wird.

> [!solution]- Lösung
> 
> <video controls width="100%"><source src="https://v.nostr.build/5OQr.mp4" type="video/mp4" /></video>
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Endlosschleife
> while True:
> 	# Falls Microbit geschüttelt wurde,
>     if accelerometer.was_gesture("shake"):
> 		# zeige ein unglückliches Gesicht,
>         display.show(Image.SAD)
>         # warte 2 Sekunden,
>         sleep(2000)
>         # stell alle Pixel aus.
>         display.clear()
> ```
## 2. Digitaler Würfel

Starten Sie mit Ihrem Code von Augabe 1 und **erstellen Sie eine Würfelspiel**, bei dem das Schütteln des Microbits eine zufällige Zahl zwischen 0 und 9 auf dem LED-Display anzeigt.

Tipp: Suchen Sie in der Referenzspalte nach `random`.

> [!solution]- Lösung
> 
> <video controls width="100%"><source src="https://v.nostr.build/kz8l.mp4" type="video/mp4" /></video>
> 
> ```python
> # Imports go at the top
> from microbit import *
> import random
> 
> # Endlosschleife
> while True:
> 	# Falls Microbit geschüttelt wurde...
>     if accelerometer.was_gesture("shake"):
> 	    # ... generiere eine Zufallszahl...
>         nr = random.randint(0, 9)
>         # ... und zeige sie an.
>         display.show(nr)
> ```

## 3. Countdown-Timer
Der Microbit soll nichts anzeigen bis der Knopf A gedrückt wird. Dann soll er auf dem Display angezeigt von 9 herunterzählen, bis und mit 0. Danach soll das Programm beenden (wenn man also erneut den Knopf A drückt, passiert nichts).

> [!solution]- Lösung
> 
> <video controls width="100%"><source src="https://v.nostr.build/mnvQ.mp4" type="video/mp4" /></video>
> Den letzten Teil noch separat
> <video controls width="100%"><source src="https://v.nostr.build/RAKq.mp4" type="video/mp4" /></video> 
> 
> ```python
> from microbit import *
> 
> def countdown(nr):
>     for i in range(nr, -1, -1):
>         display.show(i)
>         sleep(1000)
> 
> RUNNING = True
> 
> while RUNNING:
>     if button_a.was_pressed():
>         countdown(9)
>         RUNNING = False
> ```

## 4. Anpassbarer Countdown

Starten Sie mit Ihrem Code von Aufgabe 4. Nun soll der Microbit am Anfang weiterhin nichts anzeigen, aber er zählt mit, wie oft Knopf B gedrückt wird. Dann wenn die User Knopf A drücken, startet der Countdown bei der Anzahl gezählten Knopfdrücke und zählt herunter bis und mit 0. Wenn also 4-mal B gedrückt wird und dann A, dann started der Countdown bei 4 und endet bei 0. Am Schluss beendet das Programm, wenn man also nochmals A drückt passiert nichts.

> [!solution]- Lösung
> 
> <video controls width="100%"><source src="https://v.nostr.build/X4n7.mp4" type="video/mp4" /></video>
> 
> ```python
> from microbit import *
> 
> def countdown(nr):
>     for i in range(nr, -1, -1):
>         display.show(i)
>         sleep(1000)
> 
> RUNNING = True
> b_pressed = 0
> 
> while RUNNING:
>     if button_a.was_pressed():
>         countdown(b_pressed)
>         RUNNING = False
>         
>     if button_b.was_pressed():
>         b_pressed = b_pressed + 1
> ```

## 5. Ein LED greift nach den Sternen

Auf dem Display leuchtet immer nur ein LED. Dieses kann man auf dem Display verrutschen, indem man den Microbit bewegt. Wenn man den Microbit kippt, sucht das LED immer die höchste Position.

Tipp: Die Schwerkraft ist eine Beschleunigung (Englisch: acceleration).
![[attachments/star-led.png]]

> [!solution]- Lösung
> 
> <video controls width="100%"><source src="https://v.nostr.build/GOMA.mp4" type="video/mp4" /></video>
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Das sind die Koordinaten unseres Pixels
> x = 2
> y = 2
> 
> # Das ist eine Konstante, die uns das Leben einfacher macht
> GRENZE = 500
> 
> # Code in a 'while True:' loop repeats forever
> while True:
> 
>     # Die Beschleunigung in Richtung x und y
>     x_strength = accelerometer.get_x()
>     y_strength = accelerometer.get_y()
> 
>     # Falls stärker als Grenze nach rechts oder links bewegt wird
>     if x_strength > GRENZE:
>         x = x - 1
>         if x < 0:
>             x = 0
>     
>     if x_strength < -GRENZE:
>         x = x + 1
>         if x > 4:
>             x = 4
> 
>     # Falls stärker als Grenze nach oben und unten bewegt wird
>     if y_strength > GRENZE:
>         y = y - 1
>         if y < 0:
>             y = 0
> 
>     if y_strength < -GRENZE:
>         y = y + 1
>         if y > 4:
>             y = 4
>     
>     display.clear()
>     display.set_pixel(x, y ,9)
>     sleep(100)
> ```


Die Prüfung findet online auf exam.net statt. Sie umfasst theoretische Fragen, kurze Programmieraufgaben, sowie Fragen zu den Übungen, die wir behandelt haben, oder direkte Abwandlungen davon. Es gibt keinen praktischen Teil mit dem Roboter, Sie dürfen keine Unterlagen oder Notizen verwenden.

Befehle, die Sie gebrauchen werden:
```python
maqueen.set_motor(0,255) # Stellt den linken Motor auf maximale Kraft voraus
maqueen.motor_stop_all() # Stellt alle Motoren ab
distanz = maqueen.read_distance() # Misst die Distanz in cm
links = maqueen.read_patrol(0) # Misst linken Helligkeitssensor, speichert den Wert dunkel (0) oder hell (1) in der Variabel
zufallszahl = random.randint(8,16) # Eine Zufallszahl zwischen 8 und 16
```

Wenn Sie zuhause mit dem Editor üben möchten, können Sie [diese Datei](https://github.com/marcchehab/microbit-maqueen/blob/master/maqueen_boilerplate.hex) downloaden und öffnen, damit Sie das `maqueen` Modul haben.
## Ausgabe

Was gibt folgender Code aus?
```turtle
zahl = 5
while zahl < 10:
	zahl = zahl + 1
print("Ausgabe:",zahl)
```


## Vor der Wand stoppen

Schreiben Sie ein Programm, dass der Maqueen-Roboter vorwärtsfährt, solange er mehr als 10cm von einer Wand entfernt ist. Ansonsten stoppt er alle Motoren und bricht das Programm ab.

> [!solution]- Lösung
> 
> ```python
> import maqueen
> 
> maqueen.set_motor(0,255)
> maqueen.set_motor(1,255)
> 
> RUNNING = True
> while RUNNING:
>     distanz = maqueen.read_distance()
>     if distanz < 10:
>         maqueen.motor_stop_all()
>         RUNNING = False
> ```

## Zufallspirouette auf schwarzen Punkten

Ihr Maqueen-Roboter ist auf einem weissen Untergrund voller schwarzer Punkte unterwegs. Wir schreiben ein Programm, dass der Roboter vorwärtsfährt und eine zufällige Pirouette macht, wenn er über einen schwarzen Punkt fährt. Nach 5 Pirouetten stellt er alle Motoren ab und beendet das Programm. 

Schreiben Sie die fehlenden Linien. Der Einzug ist irrelevant.

![[microbit-06-examprep-2024-10-21-12.40.39.excalidraw]]

> [!solution]- Lösung
> 
> ```python
> from microbit import *
> import maqueen
> import random
> 
> RUNNING = True
> pirouetten = 0
> 
> while RUNNING:
>     # Vorwärts
>     maqueen.set_motor(0, 255)
>     maqueen.set_motor(1, 255)
> 
>     left = maqueen.read_patrol(0)
>     if left == 0:
> 	    # highlight-start
>         maqueen.set_motor(0,255)
>         maqueen.set_motor(1,-255)
>         zufallszahl = random.randint(1000,4000)
>         sleep(zufallszahl)
>         pirouetten = pirouetten + 1
> 	    # highlight-end
>         if pirouetten == 5:
>             RUNNING = False
>             maqueen.motor_stop_all()
> ```

## Dem Rand einer Figur folgen

Hilfe! Ich habe meinen Maqueen-Roboter so programmiert, dass er dem Rand einer Figur im Uhrzeiger folgt. Aber dann hat ein Sonnensturm meine Daten korrumpiert! Bitte reparieren Sie mein Programm!

*(Für Leute im Darkmode: Die Figur ist schwarz, die Umgebung weiss.)*

![[microbit-06-examprep-2024-10-21-12.26.52.excalidraw]]

> [!solution]- Lösung
> 
> 1. `left == 1 and right == 0`
> 2. `left == 0 and right == 0`
> 3. `left == 1 and right == 1`

## Zufällige Geschwindigkeit

Ihr Maqueen soll die Geschwindigkeit zufällig verändern, wenn er auf eine neue schwarze Stelle stösst. (Sie können annehmen, dass ein schwarzer Strich immer in 300ms überwunden ist.)

![randomspeed](scratch-06-exercises-2024-10-16-07.00.52.excalidraw.md)

> [!solution]- Lösung
> 
> ```python
> from microbit import *
> import maqueen
> import random
> 
> speed = 200
> maqueen.set_motor(0, speed)
> maqueen.set_motor(1, speed)
> 
> while True:
>     left = maqueen.read_patrol(0)
>     if left == 0:
>         speed = random.randint(0,200)
>         maqueen.set_motor(0, speed)
>         maqueen.set_motor(1, speed)
>         sleep(300)
> ```
## Refaktorieren

Ich möchte mein Programm refaktorieren und diese Logik eines Rasenmähers in eine eigene Funktion `wand_ausweichen()` mit einem optionalen Parameter MINIMAL_DISTANZ in einer separaten Datei `rasenmaeher.py` auslagern.

```python
from microbit import *
import maqueen
import random

MINIMAL_DISTANZ = 10

while True:
    distanz = maqueen.read_distance()
    if distanz < MINIMAL_DISTANZ:
        maqueen.set_motor(0,-255)
        maqueen.set_motor(1,255)
        zufallszahl = random.randint(300,1500)
        sleep(zufallszahl)
        maqueen.set_motor(0,255)
        maqueen.set_motor(1,255)
```

Wie schaut nachher `main.py` und `rasenmaeher.py` aus?

> [!solution]- Lösung
> 
> ```python filename="main.py"
> from rasenmaeher import *
> 
> while True:
> 	wand_ausweichen()
> ```
> 
> 
> ```python filename="rasemaeher.py"
> from microbit import *
> import maqueen
> import random
> 
> def wand_ausweichen(MINIMAL_DISTANZ = 10):
>     distanz = maqueen.read_distance()
>     if distanz < MINIMAL_DISTANZ:
>         maqueen.set_motor(0,-255)
>         maqueen.set_motor(1,255)
>         zufallszahl = random.randint(300,1500)
>         sleep(zufallszahl)
>         maqueen.set_motor(0,255)
>         maqueen.set_motor(1,255)
> ```


> [!success] Lernziele
> 
> - Sie wissen wie man simple Bilder (z.B. Image.HAPPY) auf dem Microbit-Display anzeigt, einzelne LEDs anstellt, oder einzelne Reihen oder Spalten mit einer for-Schleife auffüllt.
> - Sie können Programme schreiben, die auf Inputs über den Bewegungssensor oder die Knöpfe A und B reagieren.
> - Sie können das Design-Muster mit `while RUNNING` aus [[binp-b2l0506-leds#Theorie Design-Muster|L05+06]] nutzen, damit man ein Programm beenden kann.
> - Sie können eigene Funktionen wie `spalte(x)` definieren und nutzen.

Tipp: Sie können [hier den gewohnten Editor und Microbit-Simulator](https://python.microbit.org/v/3/reference) benutzen, um zu üben.
## 1. Unhappy Microbit 😣

Zeigen Sie zwei Sekunden lang ein unglückliches Smiley an, wenn der Microbit geschüttelt wird.

> [!solution]- Lösung mit Video-Erklärung
> 
> <video controls width="100%"><source src="https://v.nostr.build/5OQr.mp4" type="video/mp4" /></video>
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Endlosschleife
> while True:
> 	# Falls Microbit geschüttelt wurde,
>     if accelerometer.was_gesture("shake"):
> 		# zeige ein unglückliches Gesicht,
>         display.show(Image.SAD)
>         # warte 2 Sekunden,
>         sleep(2000)
>         # stell alle Pixel aus.
>         display.clear()
> ```

## 2. Spalte auffüllen

Schreiben Sie ein Programm mit einer Funktion `spalte(x)`, die die LEDs in einer Spalte so anstellt, dass man sieht, wie ein LED nach dem anderen anstellt.
- Wenn man Knopf A drückt, soll die Spalte 0 aufgefüllt werden. Wenn man Knopf A erneut drückt, wird alles gelöscht und Spalte 0 füllt erneut auf.
- Wenn man Knopf B drückt, soll die Spalte 3 aufgefüllt werden. Wenn man Knopf B erneut drückt, wird alles gelöscht und Spalte 3 füllt erneut auf.
- Wenn man den Microbit schüttelt, soll das Programm beenden.

> [!solution]- Lösung mit Video-Erklärung
> 
> <video controls width="100%"><source src="https://v.nostr.build/Ryaq.mp4" type="video/mp4" /></video>
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Wir definieren unsere Funktion "spalte" mit einem Parameter "x" für die X-Koordinate der Spalte.
> def spalte(x):
>     display.clear()
>     for y in range(5):
>         display.set_pixel(x, y, 9)
>         sleep(500)
> 
> # "RUNNING" is eine Variabel mit dem Wert "True".
> RUNNING = True
> while RUNNING:
>     if button_a.was_pressed():
>         spalte(0) # Jetzt führen wir unsere Funktion spalte aus mit dem Argument 0. Das heisst, die X-Koordinate "x" soll 0 sein.
>     if button_b.was_pressed():
>         spalte(3) # Jetzt führen wir unsere Funktion spalte aus mit dem Argument 3. Das heisst, die X-Koordinate "x" soll 3 sein.
>     if accelerometer.was_gesture('shake'):
>         RUNNING = False # Jetzt verändern wir den Wert der Variabel "RUNNING"
>     
> 
> ```

## 3. Spalte verschieben

Ändern Sie den Code der Lösung von Aufgabe 2 so ab, dass immer eine Spalte angestellt ist, die man aber mit den Knöpfen A und B verschieben kann. Am Anfang soll die Spalte 2 leuchten.

> [!solution]- Lösung mit Video-Erklärung
> 
> <video controls width="100%"><source src="https://v.nostr.build/xwyz.mp4" type="video/mp4" /></video>
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Wir definieren unsere Funktion "spalte"
> def spalte(x):
>     display.clear()
>     for y in range(5):
>         display.set_pixel(x, y, 9)
> 
> # "RUNNING" is eine Variabel mit dem Wert "True".
> RUNNING = True
> aktuelle_spalte = 2 # Eine Hilfsvariabel, um uns die aktuelle Spalte zu merken
> spalte(aktuelle_spalte) # Am Anfang soll die Spalte 2 leuchten
> while RUNNING:
>     if button_a.was_pressed():
> 	    # Überschreib die Variabel "aktuelle_spalte" mit ihrem eigenen Wert - 1
>         aktuelle_spalte = aktuelle_spalte - 1
>         # Hier verhindern wir, dass aktuelle_spalte kleiner als 0 werden kann.
>         if aktuelle_spalte < 0:
>             aktuelle_spalte = 0
>         spalte(aktuelle_spalte) 
>     if button_b.was_pressed():
> 	    # Überschreib die Variabel "aktuelle_spalte" mit ihrem eigenen Wert + 1
>         aktuelle_spalte = aktuelle_spalte + 1
> 	    # Hier verhindern wir, dass aktuelle_spalte grösser als 4 werden kann.
>         if aktuelle_spalte > 4:
>             aktuelle_spalte = 4
>         spalte(aktuelle_spalte) 
>     if accelerometer.was_gesture('shake'):
>         RUNNING = False
>    
> ```


## Projekt
Programmieren Sie allein, zu zweit, oder zu dritt ein Projekt mit dem Microbit. Sie sind frei, ob Sie den Microbit eher zum Spielen oder als wissenschaftliches Messgerät gebrauchen. 

### Anforderungen
- Ihr Programm beendet nicht von alleine, sondern man kann es **mit einer Taste beenden**.
- Sie brauchen mindestens zwei weitere Schnittstellen (Knöpfe, Sensoren). Wenn Sie zu zweit arbeiten, sollte eine dieser zwei zusätzlichen Schnittstellen das Radiomodul sein.

### Ablauf
- Sie geben mir das Programm am 13. Dezember ab (auf Onenote) und erklären mir, was es tun soll.
- Am 20. Dezember beantworten Sie schriftlich einige Fragen zu ihrem eigenen Programm (auf Onenote) 

### Bewertungskriterien (Total: 10 Punkte)
- 5 Punkte - Verständnis: Sie **verstehen**, was die verschiedenen Teile Ihres Programms bezwecken und **können erklären**, wieso Sie die Teile so programmiert haben.
	- Ihr Programm ist mit **Kommentaren** versehen, die zeigen, dass Sie wissen, was die verschiedenen Teile des Programms gemacht haben. Sie können am 20. Dezember Rückfragen beantworten und einzelne Teile erläutern. (3 Punkte)
	- Ihre Arbeit demonstriert Einsatz und Engagement. (2 Punkte)
- 5 Punkte - Programm: Sie haben die **Anforderungen erfüllt** und Ihr Programm erzeugt keine Fehler.
	- Ihr Code ist **sauber strukturiert** in ein Hauptprogramm mit einem Event-Loop und verschiedene Funktionen (3 Punkte)
	- Ihr Programm erzeugt keine Fehler (2)