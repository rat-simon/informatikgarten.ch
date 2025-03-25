---
title: Linienfinder, mehreren Parameter, `return`
---

> [!success] Lernziele
> 
> - **Erweitern des Linientrackers zum Linienfinder**: Sie haben den Maqueen so programmiert, dass er einen Raum nach einer Linie absucht, und ihr dann folgt.
> - **Funktionen mit mehreren Parametern**: Sie verstehen, wie mehrere Argumente an Funktionen mit mehreren Parametern übergeben werden.
> - **Funktionen mit optionalen Parametern**: Sie können selbst optionale Parameter mit Standardwerten definieren.
> - **Code refaktorieren**: Sie können erklären, wieso und wie wir unser Programm in einzelne Funktionen unterteilt und in verschiedene Dateien ausgelagert haben.

## Linie finden und dann folgen

Schreiben Sie ein Programm so, dass Sie nicht von Anfang an den Roboter auf die Linie setzen müssen, sondern dass der Roboter in einem Raum umherfährt, bis er die Linie findet und ihr dann folgt. 

Dazu folgende Tipps und Annahmen:
- Sie erhalten kleine "Wände", um einen Raum auf dem Tisch zu bauen.
- Schauen Sie sich die [Staubsauger-Aufgabe](microbit-03-maqueen-intro.md) an.
- Nehmen Sie an, Sie würden sich in einem komplett weissen Raum befinden, der nur eine Linie am Boden hat.

> [!solution]- Lösung
> 
> ```python
> from microbit import *
> import maqueen
> import random
> 
> RUNNING = True
> FULL = 200
> SLOW = 0  
> 
> while RUNNING:
> 
>     # Line follow
>     
>     left = maqueen.read_patrol(0)
>     right = maqueen.read_patrol(1)
>     
>     if left == 1 and right == 1:
>         maqueen.set_motor(0,FULL)
>         maqueen.set_motor(1,FULL)
>     elif left == 0 and right == 1:
>         maqueen.set_motor(0,SLOW)
>         maqueen.set_motor(1,FULL)
>     elif left == 1 and right == 0:
>         maqueen.set_motor(0,FULL)
>         maqueen.set_motor(1,SLOW)
>     else:
>         maqueen.set_motor(0,SLOW)
>         maqueen.set_motor(1,SLOW)
> 
>     # Staubsauger
>     distanz = maqueen.read_distance()
>     if distanz < 7:
>         # Zufällig drehen
>         maqueen.set_motor(0,-255)
>         maqueen.set_motor(1,255)
>         zufallszahl = random.randint(300,1500)
>         sleep(zufallszahl)
> ```

Jetzt wird unser Code langsam aber sicher etwas **lang und unübersichtlich**. Im nächsten Teil schauen wir noch an, wie man den Code übersichtlicher macht. Dazu müssen wir allerdings Funktionen etwas besser nutzen können.
## Das `return`-Statement

![[return.mp4]]

Sie wissen, dass man einer Funktion Parameter geben kann, z.B. `def xeck(ecken)`, und so Werte aus dem Hauptprogramm in die Funktion übergeben kann, z.B. `xeck(3)`. Aber wie könnten wir **Werte von der Funktion wieder ins Hauptprogramm zurückgeben**? Dazu gibt es das `return`-Statement. 

Sobald in einer Funktion `return` ausgeführt wird, **beendet die Funktion** ihre Ausführung und **gibt den angegebenen Wert ans Hauptprogramm zurück**. Merken Sie sich also diese zwei Auswirkungen:
1. **Die Funktion wird sofort beendet**: Egal, ob noch mehr Code in der Funktion steht, oder ob eine Schleife noch nicht "fertig" ist, nach dem `return`-Statement wird nichts in der Funktion weiter ausgeführt.
2. **Ein Wert wird zurückgegeben**: Der Wert, der nach dem `return` steht, wird an den Ort im Hauptprogramm zurückgegeben, wo die Funktion aufgerufen wurde. Dort kann dieser Wert weiterverwendet werden.

```turtle
def addiere(a, b):
    return a + b  # Die Funktion gibt die Summe von a und b zurück

ergebnis = addiere(3, 4)  # Der Wert 7 wird zurückgegeben und in ergebnis gespeichert
print(ergebnis)  # Ausgabe: 7
```

**Erklärung:**
- Die Funktion `addiere()` berechnet die Summe von `a` und `b`.
- Mit `return` wird dieser Wert an das Hauptprogramm zurückgegeben.
- In der Zeile `ergebnis = addiere(3, 4)` wird das Ergebnis (7) in der Variable `ergebnis` gespeichert.
- Das Programm kann dann mit diesem Wert weiterarbeiten (z. B. ihn ausgeben).

Wenn kein `return`-Statement vorhanden ist, gibt die Funktion automatisch `None` zurück, was bedeutet, dass kein Wert zurückgegeben wurde.
## Funktionen mit mehreren Parametern und Standardwerten

![[function_multiple_parameters.mp4]]

In Python können Funktionen mit **mehreren Parametern** definiert werden, um flexibel unterschiedliche Werte zu verarbeiten. Eine Funktion kann so gestaltet werden, dass sie mehrere Argumente entgegennimmt, um damit bestimmte Aufgaben durchzuführen.

Z.B. hätten sich einige von Ihnen wohl einen Befehl gewünscht, wie man **beide Motoren gleichzeitig steuern** kann. Sie könnten sich selbst eine **Helferfunktion** schreiben:

```python
def fahre(linker_motor, rechter_motor):
    maqueen.set_motor(0, linker_motor)
    maqueen.set_motor(1, rechter_motor)
```

Hier nimmt die Funktion `fahre` zwei Parameter, `linker_motor` und `rechter_motor`, die festlegen, wie schnell jeder Motor laufen soll. Dies erlaubt es, die Motoren des Roboters durch nur einen Funktionsaufruf zu steuern, z. B.:

```python
fahre(200, 100)
```

Sie merken: Wenn nichts angegeben ist, werden die **Argumente der Reihe nach den Parametern zugewiesen**. Die Position bestimmt das Parameter des Arguments, deshalb nennt man es "positional argument".

Sie könnten die Argumente beim Aufruf der Funktion auch manuell zuweisen, indem Sie **das Parameter explizit benennen**. Das nennt man ein "keyword argument".

```python
fahre(rechter_motor=200, linker_motor=0)
```
### Benannte Parameter mit Standardwerten

Manchmal ist es hilfreich, in einer Funktion **optionale Parameter** zu definieren, die nur dann als Argumente übergeben werden, wenn ein Standardwert geändert wird. Dazu definiert man einen **Standardwert** in der Funktionsdefinition.

```python
def fahre(linker_motor=200, rechter_motor=200):
    maqueen.set_motor(0, linker_motor)
    maqueen.set_motor(1, rechter_motor)
```

In diesem Fall können Sie die Funktion einfach aufrufen, ohne Werte übergeben zu müssen, und die Motoren laufen mit den Standardgeschwindigkeiten:
```python
fahre()  # Linker und rechter Motor laufen mit 200
```
Wenn Sie jedoch unterschiedliche Geschwindigkeiten festlegen wollen, können Sie die Standardwerte überschreiben:
```python
fahre(100, 150)  # Linker Motor mit 100, rechter mit 150
```

Sie können ein Argument auch explizit einem Parameter zuordnen:
```python
fahre(rechter_motor=0)  # Linker Motor mit 200, rechter mit 0
```

## Code refaktorieren

![[refactoring_code.mp4]]

Mit diesem Wissen über Funktionen können wir unseren Code um einiges lesbarer und robuster machen. Zunächst einige Punkte, die Sie stören sollten:
- Der Code ist **lang und unübersichtlich**, die müssen ständig scrollen.
- Wir haben bereits **mehrere globale Variabeln**. Wenn wir so weitermachen, wächst die Anzahl globaler Variablen stetig.
- Sie könnten den Code unmöglich **für andere Projekte direkt wiederverwenden**.

Wir können den Code übersichtlicher und wiederverwendbarer gestalten, indem wir **die Logiken für den Linefollower und den Staubsauger in eigene Funktionen packen**.

```python
from microbit import *
import maqueen
import random

def folge_linie(FULL=200, SLOW=0):
    left = maqueen.read_patrol(0)
    right = maqueen.read_patrol(1)
    
    if left == 1 and right == 1:
        maqueen.set_motor(0,FULL)
        maqueen.set_motor(1,FULL)
    elif left == 0 and right == 1:
        maqueen.set_motor(0,SLOW)
        maqueen.set_motor(1,FULL)
    elif left == 1 and right == 0:
        maqueen.set_motor(0,FULL)
        maqueen.set_motor(1,SLOW)
    else:
        maqueen.set_motor(0,SLOW)
        maqueen.set_motor(1,SLOW)

def wand_ausweichen(MINDEST_DISTANZ=7):
    distanz = maqueen.read_distance()
    if distanz < MINDEST_DISTANZ:
        # Zufällig drehen
        maqueen.set_motor(0,-255)
        maqueen.set_motor(1,255)
        zufallszahl = random.randint(300,1500)
        sleep(zufallszahl)


# Main-Eventloop
RUNNING = True
while RUNNING:
    folge_linie()
    wand_ausweichen()
```

Das ist schön, aber so richtig schön wird es, wenn Sie merken, dass Sie nun diese Funktionen in eigene Dateien auslagern können.

```python filename="linefollower.py"
import maqueen

def folge_linie(FULL=200, SLOW=0):
    left = maqueen.read_patrol(0)
    right = maqueen.read_patrol(1)
    
    if left == 1 and right == 1:
        maqueen.set_motor(0,FULL)
        maqueen.set_motor(1,FULL)
    elif left == 0 and right == 1:
        maqueen.set_motor(0,SLOW)
        maqueen.set_motor(1,FULL)
    elif left == 1 and right == 0:
        maqueen.set_motor(0,FULL)
        maqueen.set_motor(1,SLOW)
    else:
        maqueen.set_motor(0,SLOW)
        maqueen.set_motor(1,SLOW)
```

```python filename="staubsauger.py"
import maqueen
import random
from microbit import *

def wand_ausweichen(MINDEST_DISTANZ=7):
    distanz = maqueen.read_distance()
    if distanz < MINDEST_DISTANZ:
        # Zufällig drehen
        maqueen.set_motor(0,-255)
        maqueen.set_motor(1,255)
        zufallszahl = random.randint(300,1500)
        sleep(zufallszahl)
```

Im Hauptprogramm müssen Sie dann diese Dateien und Funktionen importieren, z.B. so:

```python filename="main.py"
from microbit import *  # [!code --]
import maqueen  # [!code --]
from linefollower import *
from staubsauger import *

# Event-Loop
RUNNING = True
while RUNNING:
    folge_linie()
    wand_ausweichen()
```

Der Hauptvorteil dieser Herangehensweise ist: Sie können Ihre Funktionen völlig unverändert an anderer Stelle oder in Ihrem nächsten Projekt einfach wieder importieren und verwenden!