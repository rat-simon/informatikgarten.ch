---
title: Intro mit Blöcken und dem Maqueen-Roboter
display: hidden
---
> [!success] Lernziele
> 
> - **Grundlagen der Robotik anwenden**: Sie können in der MakeCode-Entwicklungsumgebung einfache Programme zusammensetzen, um den Maqueen-Roboter zu steuern.
> - **Umgang mit Sensoren des Maqueen-Roboters**: Sie können den Helligkeitssensor und den Distanzmesser des Maqueen verwenden, um auf die Umwelt zu reagieren. 
> - **Programme die wir erstellen**: Fahren bis wir Schwarz sehen und einen automatischen Staubsauger, der Wänden ausweicht.

Nun brauchen wir die Blöcke von Scratch, um einen Roboter zu programmieren. Zur Erinnerung: Sie müssen **Google Chrome** verwenden, damit alles ohne Probleme läuft. In Google Chrome klicken Sie bitte [diesen Link hier](https://makecode.microbit.org/), um zur Entwicklungsumgebung zu gelangen.

Die Umgebung ist für den Microbit selbst gemacht! Das heisst: Für unseren Maqueen-Roboter müssen wir noch eine Erweiterung hinzufügen.

> [!example] Erweiterung für Maqueen hinzufügen
> 
> Klicken Sie auf "Erweiterungen" und suchen Sie nach "maqueen". Klicken Sie auf die Kachel, die einfach "Maqueen" heisst, ohne jeglichen Zusatz.
> 
> ![[scratch-01-intro-makecode-20240813230440.png]]
> 
> Danach sollten Sie neu eine Gruppe von Blöcken namens Maqueen haben.
> 
> ![[scratch-01-intro-makecode-20240813230133.png]]

## Aufgaben

### Zwei Tests mit einer kleinen Spritztour 

Schliessen Sie den Microbit an Ihrem Computer an und erstellen Sie ein Testprogramm, um zu wissen, ob der Microbit funktioniert - z.B. **zeigen Sie ein Herz an**.

Wenn das funktioniert, können Sie nun versuchen den Maqueen-Roboter zu steuern. Fahren Sie zum Test mit dem Roboter mal ein Stück **vorwärts und wieder rückwärts**.
### Fahren, bis Sie Schwarz sehen

Der Maqueen-Roboter hat zwei Infrarotsensoren, die die **Helligkeit des Untergrunds erkennen** kann. Leider geben sie kein genaues Resultat, sondern nur hell (high) oder dunkel (low).

- Fahren Sie vorwärts, solange der linke Helligkeitssensor "high" misst. Wenn er "low" misst, fahren Sie ganz vorsichtig (langsam). 
- Zusatz: Beenden Sie das Programm, wenn der Roboter 300ms langsam gefahren ist.

> [!question]- Mögliche Lösungen
> 
> Eine Lösung ohne das Programm zu beenden.
> 
> ![[scratch-02-intro-makecode-bisschwarz1.png]]
> 
> Eine Lösung mit dem Zusatz, das Programm zu beenden. Sie sehen: Wir müssen eine eigene Schleife mit einer Variable `running` bauen, weil wir die "dauerhaft"-Schleife nicht abbrechen können.
> 
> ![[scratch-02-intro-makecode-bisschwarz2.png]]
### Programmieren Sie einen Staubsauger

Der Maqueen hat einen Ultraschall-Distanz-Sensor. Versuchen Sie nun einen Staubsaugers zu programmieren: 
1. Fahren Sie geradeaus, bis Sie kurz vor einem Hindernis sind, 
2. dann stoppen Sie, drehen sich um eine zufällige Zahl und machen wieder Schritt 1.

> [!question]- Mögliche Lösung
> 
> ![[staubsauger-solution.png]]
