---
title: Fernsteuerung - aber wie?
display: hidden
---
> [!success] Lernziele
> 
> - **Eine Fernsteuerung mit Knöpfen**: Sie wissen, wie Sie eine **Funkgruppe** mit zwei Microbit nutzen, um eine Fernsteuerung für einen Roboter zu programmieren.
> - **Eine Fernsteuerung wie ein Segway**: Der Microbit hat ein **Beschleunigungsmesser**. Versuchen Sie die Fernsteuerung so zu ändern, dass Sie Ihren Roboter mit der Neigung der Fernsteuerung kontrollieren.

## Fernsteuern und dann der Linie folgen

Schreiben Sie ein Programm, dass Sie mit einem am USB-Kabel angeschlossenen Microbit einen zweiten Microbit in einem Maqueen-Roboter fernsteuern können.
- Der Knopf "A" soll den linken Motor aktivieren.
- Der Knopf "B" soll den rechten Motor aktivieren.
- Beide Knöpfe sollen auch beide Motoren aktivieren.
- *Optionale Weiterführung: Wenn man die Fernsteuerung schüttelt, soll der Maqueen-Roboter beginnen, der Linie zu folgen. Wenn man ihn erneut schüttelt, soll die Fernsteuerung wieder aktiv sein.*

Sie werden vielleicht gemerkt haben, dass Sie ein Programm für die Fernbedienung und den Roboter schreiben können, weil sich die Programm nicht widersprechen. Die Knöpfe werden auf dem Roboter nie gedrückt, und die Fernbedienung wird nie eigene Motoren besitzen...

![[scratch-05-fernsteuerung-2024-09-17-23.09.33.excalidraw]]

Nun stellt sich aber ein Problem: Wenn Sie wie hier im Beispiel **mit Ereignissen eigene, separate Blöcke kreieren, wird der Roboter nie stoppen, weil es kein Ereignis gibt, wenn Sie den Knopf loslassen**. Wie könnten Sie das lösen?

> [!solution]- Lösung
> 
> Wie schon zuvor müssen Sie eine eigene Schleife kreieren, um mehr Kontrolle über den Programmablauf zu erlangen.
> 
> ![[scratch-05-fernsteuerung%201.png]]

## Segway-Fernsteuerung 

Der Microbit hat ein Beschleunigungsmesser. Versuchen Sie die Fernsteuerung so zu ändern, dass Sie Ihren Roboter mit der Neigung der Fernsteuerung kontrollieren.
- Die Beschleunigung wird in **Tausendstel der Erdbeschleunigung** gemessen, die Maxima sind  -2000 und 2000.
- Es gibt **drei Achsen**: X, Y und Z.
- Wenn die Beschleunigung **in die Richtung der Pfeile geht, ist sie positiv**. Wenn Sie in die entgegengesetzte Richtung der Pfeile wirkt, ist sie negativ.

![[scratch-05-fernsteuerung-2024-09-18-06.47.25.excalidraw]]

Tipps:
- Überlegen Sie sich die Aufgabe jeweils in **Pseudocode**.
- Bauen Sie vorzu **Einzelschritte**, die Sie sich erst am Schluss zusammensetzen. Wenn es zu schwierig ist, verkleinern Sie einfach den Schritt.
- Sie könnten zum Beispiel einfach damit beginnen: **Zeigen Sie die gemessene Beschleunigung auf dem Display an**.

> [!question]- Mögliche Lösung
> 
> ![[scratch-05-fernsteuerung-2024-10-16-05.56.32.excalidraw]]