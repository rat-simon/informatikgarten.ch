---
title: Linientracker mit Makecode
display: hidden
---

> [!success] Lernziele
> 
> - **Verständnis von `and` und `or` in Wahrheitstests:** Sie verstehen, wie man mit den Operatoren `and` und `or` mehrere Bedingungen logisch verknüpfen kann.
> - **Programmierung eines Linientrackers:** Sie können ein Blockprogramm in Makecode schreiben, das einen Maqueen-Roboter einer Linie folgen lässt.
> - **Parametrisierung der Geschwindigkeit:** Sie wissen, wie Sie die Geschwindigkeit des Roboters dynamisch anpassen können.

## 1. Logische Verknüpfungen mit `and` und `or`

Um mehr als eine Bedingung zu prüfen, können Sie in Python die logischen Operatoren `and` und `or` verwenden. Diese ermöglichen es, mehrere Bedingungen gleichzeitig zu überprüfen.
### Beispiel:
```python
wetter = "sonnig"
hose = "Badehose"

if wetter == "sonnig" and hose == "Badehose":
    gehInDieBadi()
```

In Scratch und Makecode gibt es diese Verbindung ebenfalls:

![[if-logicblocks-scratch.excalidraw]]

Hier werden die beiden Bedingungen mit `and` verknüpft. Das bedeutet, dass der Codeblock nur ausgeführt wird, wenn **beide Bedingungen wahr** sind.

Mit dem `or`-Operator können Sie alternative Bedingungen prüfen:
```python
wetter = "sonnig"
jacke = "Regenjacke"

if wetter == "sonnig" or jacke == "Regenjacke":
    machSpaziergang()
```

In diesem Fall wird der Code ausgeführt, wenn **mindestens eine** der beiden Bedingungen wahr ist. Auch das `oder` gibt es in Scratch und Makecode:

![[if-or-scratch.png]]

## 2. Programmierung eines Linientrackers

Nun werden wir das Konzept der logischen Verknüpfungen anwenden, um einen Linientracker zu programmieren. 

> [!example] Diskussion
> 
> Überlegen Sie, welche Kombinationen von `and` und `or` mit unseren zwei Helligkeitssensoren sinnvoll sein könnten und welche Aktionen der Roboter in den verschiedenen Situationen ausführen sollte. Schreiben Sie eine Struktur in Pseudocode. ![[microbit-linetracker-steeringlogic.excalidraw]]

> [!question]- So könnte das aussehen
> 
> Die Geschwindigkeiten wissen wir noch nicht, aber grundsätzlich ist die Logik:
> - Wenn beide Sensoren (`left` und `right`) hell messen (`left == 1 and right == 1`), fährt der Roboter **geradeaus**.
> - Wenn der linke Sensor dunkel misst und der rechte hell (`left == 0 and right == 1`), dreht sich der Roboter nach **links**.
> - Wenn nur der linke Sensor hell misst und der rechte dunkel (`left == 1 and right == 0`), dreht sich der Roboter nach **rechts**.
> - Wenn beide Sensoren dunkel messen, gibt es sicher ein gröberes Problem. Stoppen wir dann doch am besten einfach beide Motoren.
> 

Intuitiv würden Sie das in Makecode vielleicht so umsetzen, aber Sie werden merken, dass das Probleme verursacht.
![[linetracker-eventblocks-trouble.png]]

> [!example] Diskussion
> 
> Versuchen Sie den Grund dafür zu charakterisieren.

> [!solution]- Lösung
> 
> Es scheint, mit diesen Ereignisblöcken fragt der Microbit die Sensoren nicht oft genug ab. **Der Roboter reagiert zu langsam**!
> 
> Sie müssen das Programm mit einer eigenen Endlosschleife und if-Blöcken bauen. So wiederholt der Microbit die Befehle so schnell er nur kann.
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
> 
> ![[linetracker-speed.png]]

## 4. Dynamische Geschwindigkeitsanpassung:

Sie können sich das Testen weiter erleichtern, indem Sie eine Möglichkeit programmieren, **die Geschwindigkeit während des Betriebs anzupassen**. z.B. indem Sie die Knöpfe nutzen.  *\*Räusper\* ... das könnten Sie mit einem zweiten Microbit per Funk machen ...* 

Dazu wäre es sicher hilfreich, wenn Ihre aktuelle Geschwindigkeit irgendwie auf dem Display angezeigt wird. Wenn Sie eine gute Geschwindigkeit gefunden haben, können Sie sie so wenigstens ablesen.

 *\*Räusper\* ... auch das könnten Sie mit einem zweiten Microbit per Funk machen ...* 

