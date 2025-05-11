---
title: "Unser Roboter: Maqueen"
---
> [!success]  Lernziele
> 
> - **Schnittstelle**: Sie können grob charakterisieren, über welchen Weg der Microbit wiedem Maqueen Roboter Befehle sendet.
> - **Grundbefehle aus dem `maqueen`-Modul anwenden**: Sie haben einen [Beispiel-Code](#beispiel-code) selbstständig getestet und können die Befehle erklären.
> - **Fahren bis Sie Schwarz sehen**: Sie haben ein Programm geschrieben und verstanden, bei dem der Maqueen geradeaus fährt, bis er auf schwarzen Untergrund stösst, und dann alle Motoren stoppt.

## Übersicht zum Maqueen Roboter

Der Roboter und unser Microbit werden von verschiedenen Firmen produziert. Es ist also nur logisch, dass Ihr Microbit **keine fertigen Befehle für den Roboter** hat. 


![[maqueen-intro-hwinterface.excalidraw]]

Der Microbit und der Roboter kommunizieren über die **Hardware-Schnittstelle** des Microbit mit **digitalen Signalen aus 1 (high) und 0 (low)**. Zwei verschiedene Firmen haben Hardware entwickelt, die nur über Nullen und Einsen kommuniziert - und das funktioniert!? Wieso?

Die Antwort ist relativ einfach: Die Macher des Microbit (BBC) haben eine genaue Auflistung veröffentlicht, wie welche Pins der Schnittstelle benutzt werden können. Diese Auflistung nennt man ein "pinout".

![[maqueen-intro-pinout.excalidraw|400]]

Die Macher bei DFrobot haben sich dann entschlossen, **einen Roboter für diese Schnittstelle zu bauen**. Sie wussten, welche Art von Signalen der Microbit über welche Pins mit welchen Befehlen abgeben oder lesen kann. Also bauten Sie den Roboter so, dass er auf die Schnittstelle passt.

Sie können selbst mit dem Microbit-Paket allein ein Befehl an den Roboter schicken, z.B. um das linke Blinker-LED anzustellen. Das tun Sie, indem Sie das digitale Signal auf Pin 8 auf "high" (also 1) setzen. Diese Angaben müssten Sie im Handbuch des Maqueen-Roboters nachschauen.

```python
from microbit import *
pin8.write_digital(1)
```

Natürlich wäre es sehr mühsam, den Maqueen so zu programmieren. Sie erhalten deswegen parallel zur Hardware-Schnittstelle auch **eine Software-Schnittstelle**: die Datei maqueen.py. Die können Sie mit `import maqueen` importieren und nutzen. Darin befinden sich **Python-Funktionen für alle Funktionen des Maqueen**, die wir nutzen.

| Funktion                    | Erklärung                                                                |
| --------------------------- | ------------------------------------------------------------------------ |
| `set_led(lednumber, value)` | Schaltet die vorderen LEDs ein oder aus. 0 = links, 1 = rechts.          |
| `read_distance()`           | Liest die Entfernung vom Distanzsensor in Zentimetern.                   |
| `read_patrol(which)`        | Liest den Zustand der Helligkeitssensoren. 0 = links, 1 = rechts.        |
| `set_motor(motor, value)`   | Steuert die zwei Motoren. 0 = links, 1 = rechts, Wert von -255 bis +255. |
| `motor_stop_all()`          | Stoppt alle Motoren.                                                     |
## Beispiel-Code

> [!example] Erste Testfahrt
> 
> Mit dieser Erklärung laden Sie bitte diesen Code auf dem Microbit. Versuchen Sie das Programm, die Funktionen sowie die Argumente nachzuvollziehen.
> 
> ```python
> from microbit import *
> import maqueen
> 
> # Testing LEDs
> maqueen.set_led(0, 1)
> sleep(1000)
> maqueen.set_led(1, 1)
> sleep(1000)
> maqueen.set_led(0, 0)
> sleep(1000)
> maqueen.set_led(1, 0)
> 
> # Reading distance
> distance = maqueen.read_distance()
> display.scroll(distance)
> 
> # Reading patrol sensors
> for i in range(0, 10):
>     l = maqueen.read_patrol(0)
>     maqueen.set_led(0, l)
>     r = maqueen.read_patrol(1)
>     maqueen.set_led(1, r)
>     sleep(1000)
> 
> # Testing motors
> maqueen.set_motor(0,-255)
> maqueen.set_motor(1, 100)
> sleep(2000)
> 
> maqueen.motor_stop_all()
> ```
> 
> (In der Schule integriere ich Ihnen das Paket maqueen bereits im Classroom auf microbit.org. Wenn Sie das alleine machen, müssen Sie sich [die Datei hier herunterladen](https://github.com/marcchehab/microbit-maqueen) und im Projekt hinzufügen.)

## Aufgaben

### Eine kleine Spritztour

Versuchen Sie, den Maqueen-Roboter zu steuern. Fahren Sie mit dem Roboter **drei Sekunden gerade vorwärts und wieder rückwärts**.
### Fahren, bis Sie Schwarz sehen

Der Maqueen-Roboter hat zwei Infrarotsensoren, die die **Helligkeit des Untergrunds erkennen** kann. Leider geben sie kein genaues Resultat, sondern nur "hell" (1) oder "dunkel" (0).

Fahren Sie vorwärts, solange der linke Helligkeitssensor "hell" misst. Wenn er "dunkel" misst, fahren Sie ganz vorsichtig (langsam) zurück und beenden das Programm.

![[maqueen-stoponblack.excalidraw.light.svg]]

> [!solution]- Mögliche Lösung
> 
> ```python
> import maqueen
> 
> running = True
> 
> # Vorwärts fahren
> maqueen.set_motor(0, 100)
> maqueen.set_motor(1, 100)
> 
> while running:
> 
>     # Linker Sensor schwarz? Stopp
>     l = maqueen.read_patrol(0)
>     if l == 0:
>         maqueen.motor_stop_all()
>         running = False
> ```

### Hürdenlauf

Der Maqueen hat einen Ultraschall-Distanz-Sensor, der die Distanz in Zentimetern misst. 

Programmieren Sie Ihren Roboter nun so, dass er über schwarze Stellen langsam fährt und über weisse Stellen schnell, und wenn er auf eine Wand stösst, kehrt er prompt 180 Grad und fährt wieder zurück.

![[maqueen-huerdenlauf.excalidraw.light.svg]]
### Knacknuss: Programmieren Sie einen Staubsauger

Versuchen Sie nun die Fahrlogik eines Staubsaugers zu programmieren: 
1. Fahren Sie geradeaus, bis Sie kurz vor einem Hindernis sind, 
2. dann stoppen Sie, drehen sich um eine zufällige Zahl und machen wieder Schritt 1.

Tipp: Eine zufällige Zahl zwischen 20 und 60 erhalten Sie so:
```python
import random

zufallszahl = random.randint(20,60)

```

> [!solution]- Mögliche Lösung
> 
> ```python
> from microbit import *
> import maqueen
> import random
> 
> while True:
>     distanz = maqueen.read_distance()
>     # Wenn Distanz kleiner als 10cm
>     if distanz < 10:
>         # Zufällig drehen
>         maqueen.set_motor(0,-255)
>         maqueen.set_motor(1,255)
>         zufallszahl = random.randint(300,1500)
>         sleep(zufallszahl)
>         # Vorwärts fahren
>         maqueen.set_motor(0,255)
>         maqueen.set_motor(1,255)
> 
> 
> ```

