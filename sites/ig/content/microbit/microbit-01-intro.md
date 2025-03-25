---
title: Microbit
---
> [!success] Lernziele
> 
> - **Microbit-Online-Editor**: Sie wissen,
> 	- wie Sie ein Programm auf den Microbit laden können,
> 	- wie Ihnen während des Schreibens mögliche Befehle vorgeschlagen und erklärt werden,
> 	- dass Sie die Referenz auf der linken Seite im Editor kennen und gebrauchen können.
> - **`import`-Statement**: Sie kennen den Unterschied zwischen diesen beiden Arten, etwas aus einem Modul zu importieren:
> 	- `import microbit`
> 	- `from microbit import *`
> - **`while`-Schleife**: Wir haben die while-Schleife kennengelernt oder repetiert.

## Aufgabe: Ein pochendes Herz
Versuchen Sie Ihren Microbit dazu zu bringen, **ein pochendes Herz anzuzeigen**. Nutzen Sie dazu Ihr Wissen über Python und folgende Befehle (alle innerhalb der microbit-Bibliothek!):
- microbit.Image.HEART ist das Bild eines Herzens
- microbit.display.show()
- microbit.sleep()

Mit diesem Beispiel lernen wir nun einige Werkzeuge und Kniffs in Python kennen.
### Der Editor, die gute Fee

Sie profitieren hier jetzt von einer modernen Entwicklungsumgebung, die Ihnen während dem Tippen verschiedene Möglichkeiten und Erklärungen gibt. Wenn Sie also nicht wissen, was ein Befehl tut, schreiben Sie den Befehl einfach nochmal hin und **der Editor erklärt Ihnen den Befehl** automatisch!

![[microbit-01-intro.png]]

Für die Befehle des Microbits haben Sie zudem auf der linken Seite eine **Referenz mit Erklärungen, Codebeispielen und einer Suchfunktion**!
### `import microbit` und `from microbit import *`

Das Importstatement `import microbit` lädt das gesamte Modul als ein Objekt `microbit`. Sie können so die Funktionen und Variabeln im Modul gebrauchen, indem Sie den Modulnamen schreiben und dann mit `.` den Inhalt der nächsten Hierarchiestufe anzeigen - ganz ähnlich wie bei Ordnern und Dateien auf Ihrem Computer.

Das ist schön und gut, so müssen Sie aber jedes Mal den Modulnamen angeben (z. B. `microbit.display.show()`). Sie können das `import`-Statement umschreiben, um **den gesamten Inhalt des Moduls direkt in Ihr Hauptprogramm zu importieren**: `from microbit import *`.  Dieser Syntax sagt auf Deutsch übersetzt: 
- `from microbit`: aus dem Modul `microbit`
- `import *`: importiere alles

So werden alle Funktionen und Variablen direkt in die oberste Ebene Ihres Hauptprogramms importiert (das "global frame"), sodass sie ohne den Modulnamen `microbit` verwendet werden können (z. B. `display.show()`).
### "Solange"-Schleife mit `while`

Eine lange Wiederholungsschleife mit `for` ist nicht sehr elegant, weil wir ja nicht wissen, **wie lange** das Spiel dauert. Da gibt es eine schönere Lösung...

Die **`while`-Schleife** in Python ermöglicht es, einen Block von Anweisungen wiederholt auszuführen, **solange ein Wahrheitstest `True` ist**. Die Bedingung funktioniert genau gleich, wie bei der `if`-Selektion.

```python
while wetter == "raining":
    # Auszuführende Anweisungen, solange die Bedingung wahr ist
    dance()
```

Die `while`-Schleife ist nützlich, wenn man **vor der Ausführung nicht genau wissen kann, wie oft der Codeblock ausgeführt werden muss**. 

### Endlosschleife

Beim Onlineeditor von Microbit wird oft folgendes Konstrukt vorgeschlagen:

```python
while True:
	# Anweisungen des Programs
```

Das ist eine Schleife, deren **Wahrheitstest per Definition immer `True` ist**. Also ist es eine **Endlosschleife**, die nie aufhört. 

## Lösungen

> [!solution]- Nicht sehr elegante Lösung mit `for`
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Wir machen sehr lange das Gleiche, indem wir einfach die Zahl sehr gross machen
> for i in range(10000):
> 	# Wir zeigen das grosse Herz
>     display.show(Image.HEART)
>     # Warten eine halbe Sekunde
>     sleep(500)
>     # Zeigen das kleine Herz
>     display.show(Image.HEART_SMALL)
>     # Und warten nochmal eine halbe Sekunde
>     sleep(500)
> ```

> [!solution]- Endlosschleife mit `while`
> 
> ```python
> # Imports go at the top
> from microbit import *
> 
> # Wir machen endlos das Gleiche
> while True:
> 	# Wir zeigen das grosse Herz
>     display.show(Image.HEART)
>     # Warten eine halbe Sekunde
>     sleep(500)
>     # Zeigen das kleine Herz
>     display.show(Image.HEART_SMALL)
>     # Und warten nochmal eine halbe Sekunde
>     sleep(500)
> ```
