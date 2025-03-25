---
title: Buttons abfragen
---
> [!success]  Lernziele
> 
> - **Design-Mustern** und **Event-Loop**: Sie können diese zwei Ideen erklären.
> - **Knöpfe abfragen**: Sie können einen Event-Loop schreiben, den man per Knopfdruck beenden kann.

## Design-Muster

Design patterns (Design-Muster) beim Programmieren sind **Muster, wie man häufig auftretende Probleme elegant lösen kann**. Genau wie Architekten nicht jedes Dach neu erfinden, tauschen sich Programmiererinnen und Programmierer über Ihre Design Patterns aus. So entwickeln sich bewährte Praktiken, die eigentlich fast immer gleich gelöst werden.
## Event-Loop (oder Main-Loop)

Ein Event-Loop ist ein Design-Muster, das häufig in der Programmierung verwendet wird, insbesondere bei Anwendungen, die auf Ereignisse und Nachrichten warten und darauf reagieren müssen. Es ist eine Art, **die Schleife am Laufen zu halten, auch wenn gerade nichts geschieht, auf die Ereignisse richtig zu reagieren, und den Loop bei Bedarf oder nach getaner Arbeit geordnet zu beenden.**

Wir nutzen einen Event-Loop, dass der Roboter fortwährend auf die Sensoren und Inputs reagiert. Als erste Reaktion, die wir jetzt programmieren, ist, dass die Schleife beendet wird, wenn der Knopf A gedrückt wird.

Mit Pseudocode könnte das so aussehen:
```text
running = wahr
solange running wahr ist:
	
	Hier fügen wir später unsere Reaktionen auf die Umwelt hinzu
	
	falls Knopf A gedrückt wurde:
		running = falsch
```

Es gibt einige kompaktere Lösungen, aber wir haben die Grundidee mit einer **booleschen Variabel** (wahr/falsch) namens "running" implementiert.

```python 
running = True

while running:
	# Ihr Code hier, der auf Ereignisse reagiert
	
	if button_a.was_pressed():
		running = False

```

### Zusatz: Laufmodi verwenden

Anstatt einer booleschen Variable könnten Sie auch Zahlen verwenden und damit verschiedene Laufmodi oder Zustände des Programms kodieren - zum Beispiel so:
- 1 = finde die schwarze Linie 
- 2 = folge der schwarzen Linie
- 3 = kehre zur Docking-Station zurück
- 4 = lade die Batterie auf
- 5 = beende das Programm

Je nach Zustand ("state") könnte Ihr Roboter dann einer anderen Logik folgen. Zudem könnten Sie die Übergänge von einem Zustand in den nächsten mit einer Funktion regeln. Dann hätten Sie eine sogenannte "State machine" (Zustandsmaschine) gebaut. Typischerweise werden diese Konzepte zusammen mit "Objekten" gebraucht im Designmuster "state pattern".

