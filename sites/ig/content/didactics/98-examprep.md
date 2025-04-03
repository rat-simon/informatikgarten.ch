---
title: Prüfungsvorbereitung
display: hidden
---
Die Prüfung findet online auf exam.net statt. Sie umfasst theoretische Fragen, die Umwandlung von Scratch/Makecode zu Python, sowie Fragen zu den Übungen, die wir behandelt haben, oder direkte Abwandlungen davon. Es gibt keinen praktischen Teil mit dem Roboter, Sie dürfen keine Unterlagen oder Notizen verwenden.
## Formen der Blöcke

Wieso haben diese beiden Blöcke unterschiedliche Formen?

![[scratch-08-examprep-2024-10-22-17.34.51.excalidraw]]
> [!solution]- Lösung
> 
> Es sind unterschiedliche Datentypen: Der Ausdruck `nachricht == "Hallo"` ist entweder **wahr oder falsch**, das ist ein Boolescher Wert. 
> 
> `nachricht` hingegen ist eine Zeichenkette und die Zufallszahl eine Zahl.

## Scratch / Makecode zu Python

Übersetzen Sie folgende Scratch-Programme in Python.

![[scratch-08-examprep-2024-10-22-16.57.03.excalidraw]]
> [!solution]- Lösung
> 
> ```python
> nachricht = "Hallo"
> if nachricht == "Hello":
>     basic.show_icon(IconNames.HEART)
> elif nachricht == "Hallo":
>     basic.show_icon(IconNames.SMALL_HEART)
> else:
>     basic.clear_screen()
> ```

![[scratch-08-examprep-2024-10-22-17.13.46.excalidraw]]
> [!solution]- Lösung
> 
> ```python
> zahl = 0
> for i in range(5):
>     zahl = zahl + 1
> ```

## Python-Programm vervollständigen

### Figur folgen

Vervollständigen Sie das Programm so, dass der Roboter im Uhrzeigersinn dem Rand einer Figur folgt.

*(Für Leute im Darkmode: Die Figur ist schwarz, die Umgebung weiss.)*

![[scratch-06-exercises-2024-10-16-05.06.27.excalidraw]]

![[scratch-08-examprep-2024-10-22-21.15.44.excalidraw]]
> [!solution]- Lösung
> 
> ![[scratch-06-exercises-edgefollow.png]]

### Fernsteuerung

Vervollständigen Sie das Programm so, dass man dieses Programm auf zwei Microbit laden kann. Einer dient als Fernsteuerung um den zweiten in einem Roboter fernzusteuern.
![[scratch-08-examprep-2024-10-22-21.22.56.excalidraw]]

> [!solution]- Lösung
 >
> ![[scratch-05-fernsteuerung-solution.png]]
