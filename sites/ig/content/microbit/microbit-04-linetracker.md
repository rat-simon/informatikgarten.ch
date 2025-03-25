---
title: Linientracker
---

> [!success] Lernziele
> 
> - **Verständnis von `and` und `or` in Wahrheitstests:** Sie verstehen, wie man mit den Operatoren `and` und `or` mehrere Bedingungen logisch verknüpfen kann.
> - **Programmierung eines Linientrackers:** Sie können ein Programm schreiben, das einen Maqueen-Roboter einer Linie folgen lässt.
> - **Parametrisierung der Geschwindigkeit:** Sie wissen, wie Sie eine Variabel für die Geschwindigkeit nutzen und dynamisch anpassen können.

## 1. Logische Verknüpfungen mit `and` und `or`

Um komplexe Bedingungen in Ihrem Programm zu prüfen, können Sie die logischen Operatoren `and` und `or` verwenden. Diese ermöglichen es, mehrere Bedingungen gleichzeitig zu überprüfen.
### Beispiel:
```python
wetter = "sonnig"
hose = "Badehose"

if wetter == "sonnig" and hose == "Badehose":
    gehInDieBadi()
```

Hier werden die beiden Bedingungen mit `and` verknüpft. Das bedeutet, dass der Codeblock nur ausgeführt wird, wenn **beide Bedingungen wahr** sind.

Mit dem `or`-Operator können Sie alternative Bedingungen prüfen:
```python
wetter = "sonnig"
jacke = "Regenjacke"

if wetter == "sonnig" or jacke == "Regenjacke":
    machSpaziergang()
```

In diesem Fall wird der Code ausgeführt, wenn **mindestens eine** der beiden Bedingungen wahr ist.
## 2. Programmierung eines Linientrackers

Nun werden wir das Konzept der logischen Verknüpfungen anwenden, um einen Linientracker zu programmieren.

```python
from microbit import *
import maqueen

RUNNING = True

while RUNNING:

	# Liest den linken und den rechten Helligkeitssensor. 1 = hell, 0 = dunkel.
    left = maqueen.read_patrol(0)
    right = maqueen.read_patrol(1)
    
    # Hier müssen Sie auf den Zustand der Sensoren reagieren
```
- `maqueen.read_patrol(0)` liest den Wert des linken Sensors (`left`), und `maqueen.read_patrol(1)` liest den Wert des rechten Sensors (`right`).
- Der `while RUNNING:`-Block sorgt dafür, dass der Roboter kontinuierlich die Sensoren ausliest und die entsprechenden Aktionen ausführt.


> [!example] Diskussion
> 
> Überlegen Sie, welche Kombinationen von `and` und `or` mit unseren zwei Helligkeitssensoren sinnvoll sein könnten und welche Aktionen der Roboter in den verschiedenen Situationen ausführen sollte. Schreiben Sie eine Struktur direkt in Python und/oder Pseudocode.
> 
> ![[microbit/attachments/microbit-04-linetracker-2024-09-03-11.02.03.excalidraw]]

> [!question]- So könnte das aussehen
> 
> ```python
>     if left == 1 and right == 1:
>         maqueen.set_motor(0, ???)
>         maqueen.set_motor(1, ???)
>     elif left == 0 and right == 1:
>         maqueen.set_motor(0, ???)
>         maqueen.set_motor(1, ???)
>     elif left == 1 and right == 0:
>         maqueen.set_motor(0, ???)
>         maqueen.set_motor(1, ???)
>     else:
>         maqueen.set_motor(0, ???)
>         maqueen.set_motor(1, ???)
> ```
> 
> Die Geschwindigkeiten wissen wir noch nicht, aber grundsätzlich ist die Logik:
> - Wenn beide Sensoren (`left` und `right`) hell messen (`left == 1 and right == 1`), fährt der Roboter **geradeaus**.
> - Wenn der linke Sensor dunkel misst und der rechte hell (`left == 0 and right == 1`), dreht sich der Roboter nach **links**.
> - Wenn nur der linke Sensor hell misst und der rechte dunkel (`left == 1 and right == 0`), dreht sich der Roboter nach **rechts**.
> - Wenn beide Sensoren dunkel messen, gibt es sicher ein gröberes Problem. Stoppen wir dann doch am besten einfach beide Motoren.
> 

## 3. Finden einer möglichen Geschwindigkeit

Wie so oft muss man sich bei diesem Problem zu Beginn eingestehen: Wir haben nur eine sehr vage Ahnung, welche Geschwindigkeiten optimal sind. Aber kein Grund zur Verzweiflung! 

Es ist in der Informatik - und speziell der Robotik - oft so, dass Sie **mit einem System spielen müssen, um es zu verstehen**. Das ist kein Fehler Ihrerseits, sondern ein ganz normaler Prozess! Hacken Sie einfach mal drauf los.


> [!example] Elegantes Anpassen
> 
> Was Ihnen nach einigen Versuchen aufgefallen sein sollte: Es ist umständlich, die Geschwindigkeiten bei jedem Versuch überall anzupassen. Was könnten Sie tun, um sich das Testen zu erleichtern und die Übersicht zu verbessern?


> [!solution]- Lösung
> 
> Sie könnten die verschiedenen Geschwindigkeiten am Anfang des Programms in eine **Variabel** speichern. So müssen Sie dann nur noch die Variabel anpassen.

## 4. Dynamische Geschwindigkeitsanpassung

Sie können sich das Testen weiter erleichtern, indem Sie eine Möglichkeit programmieren, **die Geschwindigkeit während des Betriebs anzupassen**. z.B. indem Sie die Knöpfe nutzen:

```python
    if button_a.was_pressed():
        FULLSPEED -= 10
    if button_b.was_pressed():
        FULLSPEED += 10
```

 *\*Räusper\* ... das könnten Sie mit einem zweiten Microbit per Funk machen ...* 

Dazu wäre es sicher hilfreich, wenn Ihre aktuelle Geschwindigkeit irgendwie auf dem Display angezeigt wird. Wenn Sie eine gute Geschwindigkeit gefunden haben, können Sie sie so wenigstens ablesen.

