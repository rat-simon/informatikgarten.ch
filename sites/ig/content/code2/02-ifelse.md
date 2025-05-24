---
title: If ... else ...
---
# Entscheidungen treffen: <nobr>`if ... else`</nobr>

Wenn wir in Python programmieren, nutzen wir oft `if`-Anweisungen, um Entscheidungen zu treffen. Das ist so, als würden wir im echten Leben sagen: "Wenn es regnet, dann nehme ich einen Regenschirm mit."

## Vergleich mit `if`

Wie setzen wir das in Python um?
### Syntax

```python
if Bedingung:
    # Auszuführende Anweisungen, wenn die Bedingung True (wahr) ist
```

### Beispiel
```python
wetter = "sonnig"

if wetter == "sonnig":
    print("Vergessen Sie nicht, Sonnencreme aufzutragen!")
if wetter == "regnerisch":
	print("Nehmen Sie einen Regenschirm mit!")
```

In diesem Beispiel wird die Nachricht nur dann ausgegeben, wenn die Variabel Wetter den String "sonnig" enthält. Die **Bedingung `wetter == "sonnig"` wird ausgewertet und ist entweder `True` (wahr) oder `False` (falsch)**. Die Befehle im `if`-Block werden ausgeführt, wenn die Bedingung `True` ist, nicht aber, wenn sie `False` ist.

Beachten Sie, dass **zwei Gleichheitszeichen** verwendet werden:
- Ein einzelnes Gleichheitszeichen `=` ist beim Programmieren **kein *Ver*gleich**, sondern eine **Wert*zuweisung*** - es ist ein Befehl.
- Zwei Gleichheitsszeichen `==` sind ein **Vergleich**. Also eine Frage, **ob** zwei Werte gleich sind.

Die boolschen Werte von Bedingungen können Sie direkt mit `print()` ausdrucken.

```turtle
wetter = "sonnig"
print( wetter == "regnerisch" ) # False
print( wetter == "sonnig" ) # True
```

Sie können auch die reservierten Wörter `True` und `False` direkt benutzen, auch wenn das in diesem Fall wenig Sinn ergibt... 🤷

```turtle
if True:
	print("Naja, True ist halt immer True.")
if False:
	print("Naja, False ist halt immer False.")
```

Neben der Gleichheit können Sie in Bedingungen Werte auch anderweitig überprüfen:
- `!=` überprüft die **Ungleichkeit** von zwei Werten. Also `"dies" != "das"` ist `True`, weil die zwei Werte tatsächlich ungleich sind.
- **Vergleichsoperatoren** `>`, `>=`, `<=`, `<` können Zahlenwerte vergleichen. Also `5 > 2` ist `True`.
## Und sonst? `if ... else`

Manchmal möchten wir nicht nur eine Aktion ausführen, wenn eine Bedingung wahr ist, sondern auch **eine alternative Aktion, falls die Bedingung nicht erfüllt wird**. Für solche Fälle verwenden wir die `if ... else`-Struktur.
### Syntax

```python
if Bedingung:
    # Auszuführende Anweisungen, wenn die Bedingung True (wahr) ist
else:
    # Auszuführende Anweisungen, wenn die Bedingung False (falsch) ist
```

### Beispiel

```python
wetter = "regnerisch"

if wetter == "sonnig":
    print("Vergessen Sie nicht, Sonnencreme aufzutragen!")
else:
    print("Besser einen Regenschirm mitnehmen!")
```

In diesem Beispiel wird die erste Nachricht ausgegeben, wenn das Wetter "sonnig" ist. Falls das Wetter jedoch nicht "sonnig" ist (also die Bedingung `wetter == "sonnig"` nicht erfüllt ist), wird die zweite Nachricht ausgegeben.

## Aufgabenteil 1
### Aufgabe for-print

Schreiben Sie ein Programm, dass alle Zahlen von 0 bis 10 durchgeht und mit `print()` ausdruckt.
- Bei 5 soll das Programm zusätzlich "Wir sind in der Hälfte!" ausdrucken.
- Bei allen Zahlen die grösser als 7 sind, soll das Programm zusätzlich "Fast geschafft!" ausdrucken.

```turtle
# Ihr Code
```


> [!solution]- Mögliche Lösung
> 
> ```python
> for i in range(11):
>     print(i)
>     if i == 5:
>         print("Wir sind in der Hälfte!")
>     if i > 7:
>         print("Fast geschafft!")
> ```

### Aufgabe Modulo

Den Rest einer Division können Sie mit dem "Modulo"-Operator `%` ausrechnen.

```turtle
print ("8 % 3:", 8 % 3 ) # 8 durch 3 hat einen Rest von 2
print ("8 % 4:", 8 % 4 ) # 8 durch 4 hat einen Rest von 0
print ("Ist der Rest 0?", 8 % 4 == 0) # True, weil das stimmt ja
```

Schreiben Sie ein Programm, dass alle Zahlen von 1 bis 10 ausdruckt, die restlos durch 3 teilbar sind.

> [!solution]- Lösung
>
> ```python
> for i in range(1, 11):
> 	if i % 3 == 0:
> 		print(i)
> ```

### Aufgabe Modulo-Summe

Addieren Sie alle Zahlen bis 100, die restlos durch 3 teilbar sind und geben Sie das Ergebnis aus!

> [!solution]- Lösung
> 
> ```python
> sum = 0
> 
> for i in range(101):
> 	if i % 3 == 0:
> 		sum = sum + i
> print(sum)
> ```

## Boolesche Algebra

Sie können **mehrere Wahrheitstests verbinden**. Dazu helfen Ihnen folgende Schlagwörter:

### `and` fragt, ob **beide** Wahrheitstests wahr sind

```turtle
x = 5
print("x < 10:", x < 10 ) # True
print("x % 2  0:", x % 2 == 0) # False
print("Beides zusammen:", x < 10 and x % 2 == 0) # False, weil nicht beides True ist.

# Noch ein Beispiel
print("x < 10 or x % 5 == 0:", x < 10 or x % 5 == 0) # True, weil x ist sowohl kleiner als 10 als auch restlos durch 5 teilbar.
```

### `or` fragt, ob einer der Wahrheitstests wahr ist

```turtle
x = 5

print ( x < 10 or x % 2 == 0 ) # True, weil x ist kleiner als 10. Das reicht für or bereits.

print ( x < 3 or x % 5 == 0 ) # True, weil x ist zwar nicht kleiner als 3, aber dafür restlos durch 5 teilbar.
```

### `not` kehrt den Wahrheitswert um
```turtle
x = 5
print ("normal:", x == 5 )
print ("mit not:", not x == 5 )
```

### Klammern

Sie können auch Klammern verwenden, um die Reihenfolge der Auswertung zu steuern. Das ist besonders wichtig, wenn Sie mehrere Bedingungen kombinieren.

```turtle
for i in range(51):
    if (i % 3 == 0 or i % 4 == 0) and i > 10:
        print(i)
```
In diesem Beispiel wird zuerst die Bedingung in den Klammern ausgewertet. Wenn diese wahr ist, wird die zweite Bedingung geprüft.

### Präzedenzregeln

Es gelten bei Bedingungen klare **Präzedenzregeln** für logische Operatoren, ähnlich wie "Punkt vor Strich" in der Mathematik:

* **Klammern** `()` haben immer die höchste Priorität (und können auch verwendet werden, um die Lesbarkeit und Logik eindeutig zu machen).
* Danach kommt **`not`** (höchste Präzedenz unter den logischen Operatoren),
* dann **`and`**,
* und zuletzt **`or`** (niedrigste Präzedenz).

**Beispiel:**

```python
if a == 1 or b == 2 and c == 3:
```

Das wird interpretiert als:

```python
if a == 1 or (b == 2 and c == 3):
```

Denn `and` wird vor `or` ausgewertet.

### Mengenlehre

Sie kennen die Logik von `or`, `and` und `not` von den Logikgates, die wir zu einem Addierer verbaut haben. In der Mathematik kennen Sie das vielleicht aus der Mengelehre unter dem Schlagwort "boolesche Algebra".

![[ifelse-bool-algebra.excalidraw]]

Entsprechend heissen die Datentypen von `True` und `False` auch "boolesche Werte" oder einfach "bool".

## Aufgabenteil 2
### Aufgabe mit zwei Modulo

Finden Sie alle Zahlen bis 50, die restlos sowie durch 3 als auch durch 4 teilbar sind.

> [!solution]- Lösung
> 
> ```python
> for i in range(1, 51):
> 	if i % 3 == 0 and i % 4 == 0:
> 		print(i)
> ```

### Modulo Bingo 1

Schreiben Sie ein Programm, dass alle Zahlen bis 20 überprüft.
- Wenn die Zahl nur durch 3 teilbar ist, drucken Sie "Drei" aus
- Wenn die Zahl nur durch 4 teilbar ist, drucken Sie "Vier" aus
- Wenn die Zahl sowie durch 3 als auch durch 4 teilbar ist, drucken Sie "BINGO!" aus
- Ansonsten drucken Sie die Zahl selbst aus

*Beachten Sie: Es gibt grundsätzlich zwei mögliche Lösungen.*

> [!solution]- Lösung
> 
> Eine Lösung wäre, unabhängige `if`-Selektionen zu machen.
> 
> ```python
> for i in range(1, 21):
> 	if i % 3 == 0 and not i % 4 == 0:
> 		print("Drei")
> 	if i % 4 == 0 and not i % 3 == 0:
> 		print("Vier")
> 	if i % 3 == 0 and i % 4 == 0:
> 		print("BINGO!")
> 	if not i % 3 == 0 and not i % 4 == 0:
> 		print(i)
> ```
> 
> Das ist nicht sehr elegant und ineffizient: Der Computer überprüft immer alle Bedingungen! In der nächsten Lektion finden Sie eine elegantere Lösung.

### Aufgabe kompliziertere Modulo-Summe

Addieren Sie alle Zahlen bis 100 auf, die zwar restlos durch 5 teilbar sind, aber **nicht** restlos durch 3 teilbar sind!

> [!solution]- Lösung
> 
> ```python
> sum = 0
> 
> for i in range(101):
> 	if i % 5 == 0 and not i % 3 == 0:
> 		sum = sum + i
> print(sum)
> ```

### Aufgabe mit grossen Zahlen

Was ist die kleinste Zahl $i$, bei der gilt:
- $i \mod{113} = 1$
- $i \mod{213} = 2$
- $i \mod{313} = 3$

> [!solution]- Lösung
> 
> $i = 2184743$
> 
> ```python
> for i in range(10000000):
>     if i % 113 == 1 and i % 213 == 2 and i % 313 == 3:
>         print(i, "restlose Zahl")
> ```

## Zusammenfassung

> [!info] Zusammenfassung
> 
> ### `if ... else`-Selektion
> 
> Selektionen funktionieren immer mit **Bedingungen**, oft auch Wahrheitstests genannt, die entweder True (wahr) oder False (falsch) sind. Je nachdem werden andere Teile des Programms ausgeführt.
> 
> ```python
> if Bedingung:
>     # Auszuführende Anweisungen, wenn die Bedingung True ist
> else:
>     # Auszuführende Anweisungen, wenn die Bedingung False ist
> ```
> 
> ### Bedingungen
> 
> Einzelne Bedingungen können mit logischen `AND` und  `OR` zu einer Bedingung verknüpft werden. Mit `NOT` können Sie eine Bedingung ins Gegenteil umkehren.
> 
> Vergleichsoperatoren für Tests:
> - Zwei Gleichheitszeichen (`==`) sind ein **Vergleich**: 
> 	```python
> 	x = "beispielwert" # Ein Gleichheitszeichen ist eine Wertzuweisung. 
> 	
> 	# Zwei Gleichheitszeichen sind ein Vergleich
> 	if x == "beispielwert":
> 		print("x hat den gleichen Wert wie 'Beispiel'!")
> 	
> 	Wir können das Ergebnis dieses Vergleichs auch direkt anzeigen:
> 	print(x == "beispielwert") # Das druck True aus
> 	print(x == "sonstetwas") # Das druck False aus
> 	```
> - Vergleichszeichen (`<`, `>`, `<=`, `>=`) vergleichen Zahlen
> 	```` 
> 	y = 5
> 	print(y > 3) # Das wertet zu True aus
> 	print(y <= 4) # Das wertet zu False aus 
> 	
> ### Modulo
> 
> Den Rest einer Division können Sie mit dem "Modulo"-Operator `%` ausrechnen.
> 
> ```python
> # 10 / 3 gibt 2 Rest 1 
> print ( 10 % 3 ) # printet 1
> # 8 / 4 gibt 2 Rest 0
> print ( 8 % 4 ) # printet 0
> # Ist der Rest 0?
> print (10 % 3 == 0) # False, weil 10%3 gibt 1
> print (8 % 4 == 0) # True, weil 8%4 gibt tatsächlich 0
> ```
