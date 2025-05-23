---
title: Entscheidungsketten mit `if ... elif ... else`
---
# Entscheidungsketten: <nobr>`if ... elif ... else`</nobr>

> [!success] Lernziele
> 
> - Sie verstehen, wie Sie mit `if ... elif ... else` eine Kette von Bedingungen bilden können.
> - Sie verstehen die Logik, wie die Bedingungen in diesen Ketten nacheinander geprüft werden.

Es gibt Fälle, in denen wir mehr als zwei Möglichkeiten haben und mehrere Bedingungen prüfen wollen. Eine elegante Struktur: Mit `if ... elif ... else` können Sie eine **Kette aus mehrere Bedingungen** bilden. Dann wird die **die erste wahre Bedingung ausgeführt**.
### Syntax

```python
if Bedingung1:
    # Auszuführende Anweisungen, wenn Bedingung1 True ist
elif Bedingung2:
    # Auszuführende Anweisungen, wenn Bedingung2 True ist (und alle vorherigen Bedingungen False)
elif Bedingung3:
    # Auszuführende Anweisungen, wenn Bedingung3 True ist (und alle vorherigen Bedingungen False)
else:
    # Auszuführende Anweisungen, wenn keine der Bedingungen True ist
```

Bei `if ... elif ... else`-Ketten jeweils **nur die erste wahre Bedingung ausgeführt** wird. Eine kleine Demonstration: 
- Führen Sie das Programm aus und schauen Sie den Output an.
- Ändern Sie das zweite `if` zu einem `elif`. Führen Sie das Programm erneut aus. 

```turtle
for i in range(10):
	print(i)
	if i > 4:
		print("Grösser als 4")
	if i > 2:
		print("Grösser als 2")
```

Was Ihnen auffallen sollte: 
- Wenn es zwei `if`-Bedingungen sind, werden sie unabhängig voneinander ausgewertet und ausgeführt.
- Mit einer `elif`-Bedingung **verketten** Sie die Bedingungen. Wenn die erste Bedingung wahr ist, wird die zweite nicht mehr geprüft - geschweige denn ausgeführt.

### Modulo Bingo 2

Damit können wir eine Aufgabe der letzten Lektion erheblich eleganter Lösung. Die Aufgabe war: Schreiben Sie ein Programm, dass alle Zahlen bis 20 überprüft.
- Wenn die Zahl nur durch 3 teilbar ist, drucken Sie "Drei" aus
- Wenn die Zahl nur durch 4 teilbar ist, drucken Sie "Vier" aus
- Wenn die Zahl sowie durch 3 als auch durch 4 teilbar ist, drucken Sie "BINGO!" aus
- Ansonsten drucken Sie die Zahl selbst aus

Die Lösung der letzten Lektion war:

```python
for i in range(1, 21):
	if i % 3 == 0 and not i % 4 == 0:
		print("Drei")
	if i % 4 == 0 and not i % 3 == 0:
		print("Vier")
	if i % 3 == 0 and i % 4 == 0:
		print("BINGO!")
	if not i % 3 == 0 and not i % 4 == 0:
		print(i)
```

Eine elegantere Lösung nutzt dem Umstand, dass `if ... elif ... else`-Ketten immer nur die erste Bedingung selektieren, die zutrifft.

> [!solution]- Lösung
> 
> ```python
> for i in range(1, 21):
> 	if i % 3 == 0 and i % 4 == 0:
> 		print("BINGO!")
> 	elif i % 3 == 0:
> 		print("Drei")
> 	elif i % 4 == 0:
> 		print("Vier")
> 	else:
> 		print(i)
> ```

#### Erklärvideo

![[elif-bingo.mp4]]