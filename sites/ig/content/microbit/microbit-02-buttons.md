---
title: Buttons abfragen
---
> [!success]  Lernziele
> 
> - **Design-Mustern** und **Event-Loop**: Sie können diese zwei Ideen erklären.
> - **Knöpfe abfragen**: Sie können einen Event-Loop schreiben, den man per Knopfdruck beenden kann.

## Design-Muster

Design patterns (Design-Muster) beim Programmieren sind **Muster, wie man häufig auftretende Probleme elegant lösen kann**. Genau wie Architekten nicht jedes Dach neu erfinden, tauschen sich Programmiererinnen und Programmierer über Ihre Design Patterns aus. So entwickeln sich bewährte Praktiken, die eigentlich fast immer gleich gelöst werden.
### Programm mit einem Event-Loop (oder Main-Loop)

Ein Event-Loop ist ein Design-Muster, das häufig bei Anwendungen verwendet wird, die **auf Ereignisse und Nachrichten warten und darauf reagieren müssen**. Es ist eine Art, das Programm dauernd am Laufen zu halten, auch wenn gerade nichts geschieht. Wenn dann etwas passiert, kann es auf die Ereignisse reagieren und den Loop bei Bedarf oder nach getaner Arbeit geordnet beenden.

In unserem Fall nutzen wir einen Event-Loop, dass der Roboter fortwährend auf die Sensoren und Inputs reagiert. Als programmieren wir, dass wir das Programm mit dem Knopf A beenden können.

Mit Pseudocode könnte das so aussehen:

```text
running = wahr
solange running wahr ist:
	
	# Hier fügen wir später unsere Reaktionen auf die Umwelt hinzu
	
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

### Laufmodi verstehen

Anstatt einer booleschen Variable könnten Sie auch Zahlen verwenden und damit verschiedene Zustände des Programms kodieren - zum Beispiel so:
- 1 = finde die schwarze Linie 
- 2 = folge der schwarzen Linie
- 3 = kehre zur Docking-Station zurück
- 4 = lade die Batterie auf
- 5 = beende das Programm

Je nach Zustand ("state") könnte Ihr Roboter dann einer anderen Logik folgen. Zudem könnten Sie die Übergänge von einem Zustand in den nächsten mit weiteren Funktionen regeln. Dann hätten Sie eine sogenannte "State machine" (Zustandsmaschine) gebaut.

Ein praktisches Beispiel für Zustandsmaschinen im echten Leben sind die "Runlevels" in Linux-Betriebssystemen. Linux verwendet traditionell Zahlen von 0 bis 6, um verschiedene Betriebszustände zu definieren:

- 0 = Herunterfahren
- 1 = Single-User-Modus (Wartungsmodus)
- 3 = Multi-User-Modus ohne grafische Oberfläche
- 5 = Multi-User-Modus mit grafischer Oberfläche
- 6 = Neustart

Das System wechselt zwischen diesen Zuständen basierend auf Befehlen oder Ereignissen - genau wie unser Roboter zwischen seinen Betriebszuständen wechseln würde. Jeder Zustand hat seine eigenen Regeln und Verhaltensweisen.

