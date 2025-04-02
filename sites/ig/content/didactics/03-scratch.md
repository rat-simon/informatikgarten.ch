---
title: Visuell programmieren mit Scratch
---
> [!success] Lernziele
> 
> - **Scratch anwenden**: Sie lernen die visuelle Programmiersprache Scratch kennen und verstehen, wie sie genutzt wird, um einfache Spiele zu erstellen.
> - **Vergleich zu Python ziehen**: Sie können grundlegende Programmierkonzepte in Scratch mit denen in Python vergleichen, oder umgekehrt.

Das Forschungslabor "MIT Media Lab" begann in den frühen 2000er Jahren mit der Entwicklung visueller Programmiersprachen, um Kindern das Programmieren zu erleichtern. Die Gruppe, die diese Forschung durchführte, war die Gruppe Lifelong Kindergarten (LLK). Sie erhielten einen Zuschuss, um eine **Umgebung für Kinder zu entwickeln, in der sie das Programmieren üben konnten**.

Zusammen mit anderen Teams entwickelte LLK eine grundlegende Programmiersprache, die für Kinder einfach genug war, um sie zu erlernen und anzuwenden. Der Slogan des Teams lautete "Imagine, Program, Share" (**Vorstellen, Programmieren, Teilen**) und beeinflusste die Philosophie von Scratch.

## Ein Spiel erstellen

Scratch finden Sie auf [scratch.mit.edu](https://scratch.mit.edu/). Unter "Einstellungen" können Sie links oben alles **auf Deutsch umstellen**.

Kinder können mit Scratch sehr schnell eigene Spiele erstellen - wie z.B. der Klassiker "Pong". Klicken Sie auf "Tutorials", dann auf "Pong-Spiel", und erstellen Sie als Übung selbst ein eigenes Spiel.

Erweitern Sie dann das Spiel zu einem Zweispieler-Game, bei dem ein Spieler mit den Pfeiltasten spielt und der andere mit w (nach oben) und s (nach unten).
- Es soll eine Punkteanzeige haben.
- Der Ball soll nach einem Punkt in der Mitte neu gesetzt werden und neu starten, wenn die Leertaste gedrückt wird.
- Um das Spiel spannender zu machen, soll der Ball von einem Schläger nicht immer mit exakt 180 Grad abprallen, sondern mit einem Zufallsfaktor.
- Der Ball soll schneller werden, je länger der Ballwechsel andauert.

![[scratch-01-intro-20240813221231.png]]

### Verbesserte Steuerung

Für zwei Spieler müssen Sie die Steuerung von einer Maus-Steuerung zu einer Tastatur-Steuerung umbauen. Intuitiv werden Sie das wohl so programmieren.

![[05-scratch-steuerung-simpel.png]]

Das funktioniert, aber typischerweise funktioniert die Steuerung bei Spielen so, dass sich ein Spieler bewegt, solange man die Taste drückt. Das funktioniert bei dieser Art der Steuerung nur mit bösen Rucklern. Hätten Sie eine bessere Idee für eine bessere Steuerung?


> [!solution]- Lösung
> 
> ![[03-scratch-steuerung-verbessert.png]]

## Vergleich Python und Scratch

> [!exercise] Arbeitsauftrag
> 
> Erzeugen Sie am Schluss Screenshots Ihres Codes und fügen Sie diese auf einem leeren Notizblatt in Onenote ein. Überlegen Sie sich Folgendes:
> - Welchen Programmierkonzepten in Python entsprechen diese Blöcke?
> - Gibt es Dinge, die in Python komplett anders funktionieren würden?


Ein grundsätzlicher Unterschied: 
- In Python gibt es ein Hauptprogramm, von dem aus wir Funktionen (Unterprogramme) aus aufrufen. Wir steuern den Kontrollfluss selbst.
- In Scratch hat **jede Figur eigene Blöcke, die mit einem Ereignis beginnen**. Scratch koordiniert den Kontrollfluss für uns!

Eine Übersicht der Blöcke:

![[scratch-python-vergleich.excalidraw]]


[[/didactics/pingpong.sb3]]