---
title: Prüfungsvorbereitung für F1e
display: hidden
---
> [!lernziele] Hinweise zur Prüfung
> 
> Diese Prüfungsvorbereitung ist dazu da, dass Sie die Art der Fragestellungen abschätzen können.
> - Stoffumfang: bis und mit "5 for-Schleifen verschachteln" im Kapitel "B Programmieren" auf Informatikgarten. Dort finden Sie auch die Lernziele.
> - Einige Teile dieser Kapitel haben wir nicht besprochen, die sind **NICHT Teil der Prüfung**:
> 	- In "Erste Schritte mit Python": Alles ab "Python lokal installieren"
> 	- In "for-Schleife verstehen": "range() genauer steuern" und die Plotter-Übung
> 	- In "for-Schleifen verschachteln": Alle Übungen ab "n-Eck advanced"
> - Sie finden [hier](https://exam.net/student?code=yhzGpg) eine technische Vorschau auf Exam.net, um den Programmiereditor zu versuchen.

## Theorie

Benennen Sie die folgenden Teile im Code.

![[examprep-code-benennen.excalidraw]]

> [!solution]- Lösung
> 
> 1. Modul, Paket, Bibliothek (alle richtig)
> 2. Variable
> 3. Funktion

## Python-Programme verstehen

Schreiben Sie alle Ausgaben der print()-Befehle mit ":" getrennt ins Antwortfeld. Ein Beispiel:

```python
test = "X"
print("Anfang")
print(test)
print("Ende")
```

Die korrekte Antwort wäre `Anfang:X:Ende`

Hier die Programme:

### 1

```python
print("A")
for i in range(2):
    print("test")
print("X")
```

> [!solution]- Lösung mit Videoerklärung 📺
> 
> `A:test:test:X`
> 
> ![[code-examprep-print1.mp4]]

### 2

```python
print("A")
for i in range(3):
    print(i)
print("X")
```

> [!solution]- Lösung mit Videoerklärung 📺
> 
> `A:0:1:2:X`
> 
> ![[code-examprep-print2.mp4]]

### 3

```python
print("A")
for element in ["A","B","C"]:
    print("B")
print("X")
```

> [!solution]- Lösung mit Videoerklärung 📺
> 
> `A:B:B:B:X`
> 
> ![[code-examprep-print3.mp4]]

### 4

```python
A = "hallo"
B = "velo"
C = "test"
print("A")
for element in [A,"B","C"]:
    print(element)
print("X")
```

> [!solution]- Lösung mit Videoerklärung 📺
> 
> `A:hallo:B:C:X`
> 
> ![[code-examprep-print4.mp4]]

### 5

```python
farbliste = ["red","blue"]
for farbe in farbliste:
    print(farbliste)
print("X")
```

> [!solution]- Lösung mit Videoerklärung 📺
> 
> `["red","blue"]:["red","blue"]:X`
> 
> ![[code-examprep-print5.mp4]]

### 6

```python
farbliste = ["red","blue"]
for farbe in farbliste:
    print(farbliste)
    for i in range(2):
	    print(farbe)
print("X")
```

> [!solution]- Lösung mit Videoerklärung 📺
> 
> `["red","blue"]:red:red:["red","blue"]:blue:blue:X`
> 
> ![[code-examprep-print6.mp4]]
## for-Schleife mit Turtle

Zeichnen Sie mit der Turtle ein Rechteck mit Breite 100 und Höhe 50.

![[examprep-rechteck.png]]

> [!solution]- Lösung
> 
> ```python
> import turtle
> eva = turtle.Turtle()
> 
> for i in range(2):
> 	eva.forward(100)
> 	eva.right(90)
> 	eva.forward(50)
> 	eva.right(90)
> ```

Zeichnen Sie mit der Turtle eine flache Treppe mit drei Stufen. Der Winkel ist angegeben. Alle Seiten sind 50 lang.

![[99-examprep-flachetreppe.excalidraw]]

> [!solution]- Lösung
> 
> ```python
> import turtle
> eva = turtle.Turtle()
> 
> for i in range(3):
> 	eva.forward(50)
> 	eva.right(60)
> 	eva.forward(50)
> 	eva.left(60)
> ```

Es ist kalt draussen! Bauen Sie mit Eva ein Iglu. Alle Seiten sind 50 Schritte lang, die Wände sind perfekt senkrecht.

![[99-examprep-iglu.excalidraw]]
> [!solution]- Lösung mit Videoerklärung 📺
> 
> ```python
> import turtle
> eva = turtle.Turtle()
> 
> eva.forward(50)
> eva.left(90)
> eva.forward(50)
> for i in range(9):
> 	eva.right(20)
> 	eva.forward(50)
> eva.left(90)
> eva.forward(50)
> ```
> 
> ![[iglu.mp4]]

Schreiben Sie ein Turtle-Programm, das mit einer for-Schleife folgendes Fünfeck zeichnen würde. Die Seiten sind 50 lang und das Programm sollte sich anpassen, wenn wir später noch eine sechste Farbe hinzufügen würden.

![[99-examprep-farbiges-5eck.png]]

> [!solution]- Lösung
> 
> ```python
> import turtle
> eva = turtle.Turtle()
> 
> farbliste = ["green", "red", "blue", "orange", "violet"]
> 
> for farbe in farbliste:
> 	eva.color(farbe)
> 	eva.forward(50)
> 	eva.right(360/len(farbliste))
> ```

Zeichnen Sie eine Treppe aus fünf Rechtecken mit for-Schleifen. Die Rechtecke sind doppelt so breit wie sie hoch sind.

![[99-examprep-rechtecktreppe.png]]

> [!solution]- Lösung
> 
> ```python
> import turtle
> eva = turtle.Turtle()
> 
> quadratfarben = ["violet", "orange", "red"]
> 
> for quadratfarbe in range(5):
> 	for seite in range(3):
> 		eva.forward(60)
> 		eva.right(90)
> 		eva.forward(30)
> 		eva.right(90)
> 	eva.right(180)
> ```

Zeichnen Sie mit der Turtle folgende Figur mit for-Schleifen.

 ![[99-examprep-farbquadrattreppe.png]]

> [!solution]- Lösung
> 
> ```python
> import turtle
> eva = turtle.Turtle()
> 
> quadratfarben = ["violet", "orange", "red"]
> 
> for quadratfarbe in quadratfarben:
> 	eva.color(quadratfarbe)
> 	for seite in range(6):
> 		eva.forward(50)
> 		eva.right(90)
> 	eva.right(180)
> ```

