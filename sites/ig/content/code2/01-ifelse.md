---
title: If ... else ... in Python
---
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
- Ein einzelnes Gleichheitszeichen `=` ist beim Programmieren **kein *Ver*gleich**, sondern eine **Wert*zuweisung*** - z.B. oft für eine Variabel.
- Zwei Gleichheitsszeichen `==` sind ein **Vergleich**. Also eine Frage, **ob** zwei Werte gleich sind.
- **Vergleichsoperatoren** `>`, `>=`, `<=`, `<` können Zahlenwerte vergleichen.

Die Werte dieser Bedingungen oder Tests beim `if`-Statement können Sie direkt mit `print()` ausdrucken.

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

### Aufgabe Inputtreppe
Schreiben Sie ein Turtle-Programm, dass die User **10-mal** mit `input(...)` aus [[../code/01-turtleintro|dieser Lektion]] um eine Eingabe bittet und und Nummer des aktuellen Durchgangs anzeigt. Wenn die Nutzer "treppe" eingeben, zeichnet eva eine Treppe der Länge vier. Ansonsten soll das Programm eine nette Nachricht mit dem Input der User anzeigen.

```turtle
import turtle
eva = turtle.Turtle()

# Ihr Code
```

> [!solution]- Mögliche Lösung
> 
> ```python
> import turtle
> eva = turtle.Turtle()
>  
> for i in range(1,11):
>     eingabe = input("Wir sind bei Durchgang " + str(i) + ". Ihre Eingabe bitte:")
>     if eingabe == "treppe":
>         for i in range(4):
>             eva.left(90)
>             eva.forward(20)
>             eva.right(90)
>             eva.forward(20)
>     else:
>         print("Sie haben '" + eingabe + "' eingegeben.")
> ```

## Komplett: `if ... elif ... else`

Es gibt auch Fälle, in denen wir mehr als zwei Möglichkeiten haben und mehrere Bedingungen prüfen wollen. Wir können mit `if ... elif ... else` **mehrere Bedingungen verketten**. Sobald eine 

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

### Beispiel

```python
wetter = "bewölkt"

if wetter == "sonnig":
    print("Vergessen Sie nicht, Sonnencreme aufzutragen!")
elif wetter == "regnerisch":
    print("Besser einen Regenschirm mitnehmen!")
else:
    print("Das Wetter ist unklar. Seien Sie auf alles vorbereitet!")
```

In diesem Beispiel wird die entsprechende Nachricht ausgegeben, abhängig vom Wert der Variable `wetter`. Es werden mehrere Bedingungen nacheinander geprüft:
1. Ist das Wetter "sonnig"?
2. Wenn nicht, ist es "regnerisch"?
3. Wenn keines von beiden zutrifft, wird der Text im `else`-Block ausgegeben.

So können wir eine Reihe von Bedingungen prüfen und für jeden Fall unterschiedliche Anweisungen ausführen.

Beachten Sie, dass bei `if ... elif ... else`-Ketten jeweils **nur die erste wahre Bedingung ausgeführt** wird. Eine kleine Demonstration hierzu: 
- Führen Sie das Programm aus und schauen Sie den Output an.
- Ändern Sie das zweite `if` zu einem `elif`. Führen Sie das Programm erneut aus. Was hat sich verändert?

```turtle
for i in range(6):
	print(i)
	if i > 2:
		print("Grösser als 2")
	if i > 4: print("Grösser als 4")
```
### Aufgabe Inputfiguren

Erweitern Sie Ihr Turtle-Treppenprogramm mit weiteren Figuren.
- Die Turtle soll Drei- bis und mit Siebeneck ("dreieck", "viereck", etc.) zeichnen.
- Die Turtle soll einen "kreis" zeichnen können, wenn die User das eingeben.
### Aufgabe Input Anzahl Ecken

Erweitern Sie Ihr Turtle-Programm weiter, sodass Ihre User eine Zahl eingeben können, und ein entsprechendes Xeck gezeichnet wird - also ein Eingabe von "5" zeichnet ein Fünfeck. 

Im nächsten Block lernen Sie, was Datentypen sind. Für diese Aufgabe ist bereits folgende Info wichtig: Eine Eingabe wird immer als **Zeichenkette / String** interpretiert, **nicht als Zahl**. Hierzu zwei Tipps:

1) Python hängt an Zeichenketten viele Funktion an, sogenannte "Methoden". `variabelname.isdigit()` testet beispielsweise, ob eine Zeichenkette nur Zahlen enthält, und wird je nachdem als `True` oder `False` ausgewertet. Ein Beispiel:
```turtle
zahlenmittext = "123hallo" # Zahlen und Buchstaben
nurzahlen = "41232" # Nur Zahlen

print( zahlenmittext.isdigit() )
if zahlenmittext.isdigit():
	print("zahlenmittest.isdigit() wurde als wahr ausgewertet! Schauen Sie:", zahlenmittext.isdigit())

print( nurzahlen.isdigit() )
if nurzahlen.isdigit():
	print("nurzahlen.isdigit() wurde als wahr ausgewertet! Schauen Sie:" nurzahlen.isdigit())
```

2) Sie können eine Eingabe mit der Funktion `int()` in eine natürliche Zahl umwandeln.

### Aufgabe Modulo

Den Rest einer Division können Sie mit dem "Modulo"-Operator `%` ausrechnen.

```turtle
print ("8 % 3:", 8 % 3 ) # 8 durch 3 hat einen Rest von 2
print ("8 % 4:", 8 % 4 ) # 8 durch 4 hat einen Rest von 0
print ("Ist der Rest 0?", 8 % 4 == 0) # True, weil das stimmt ja
```

Schreiben Sie ein Programm, dass alle Zahlen von 1 bis 10 ausdruckkt, die restlos durch 3 teilbar sind.

> [!solution]- Lösung
>
> ```python
> for i in range(1, 11):
> 	if i % 3 == 0:
> 		print(i)
> ```

### Aufgabe Modulosum

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

## Einfache boolesche Algebra

Sie können mehrere Wahrheitstests verbinden. Dazu helfen Ihnen folgende Schlagwörter:
### `not` kehrt den Wahrheitswert um
```turtle
x = 5
print ("normal:", x == 5 )
print ("mit not:", not x == 5 )
```

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

Sie kennen die Logik von `or`, `and` und `not` von den Logikgates, die wir zu einem Addierer verbaut haben. In der Mathematik kennen Sie das vielleicht aus der Mengelehre unter dem Schlagwort "boolesche Algebra".

![[ifelse-bool-algebra.excalidraw]]

Entsprechend heissen die Datentypen von `True` und `False` auch "boolean".
### Aufgabe 5

Ändern Sie Ihre Lösung von Aufgabe 4 so ab, dass Sie alle Zahlen bis 100 aufaddieren, die zwar restlos durch 5 teilbar sind, aber **nicht** restlos durch 3 teilbar sind!

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

> [!info] Zusammenfassung
> 
> ## Theorie: `if ... elif ... else`-Selektion
> 
> Selektionen funktionieren immer mit **Bedingungen**, oft auch Wahrheitstests genannt, die als Gesamtheit entweder True (wahr) oder False (falsch) sind. Je nachdem werden andere Teile des Programms ausgeführt.
> 
> ```python
> if Bedingung1:
>     # Auszuführende Anweisungen, wenn Bedingung1 True (wahr) ist
> elif Bedingung2:
>     # Auszuführende Anweisungen, wenn Bedingung2 True (wahr) ist
> else:
>     # Auszuführende Anweisungen, wenn keine der Bedingungen True (wahr) ist
> ```
> Vergleichsoperatoren für Tests:
> - Zwei Gleichheitszeichen (`==`) sind ein **Vergleich**: 
> 	```python
> 	x = "beispiel" # Ein Gleichheitszeichen ist eine Wertzuweisung. 
> 	
> 	# Zwei Gleichheitszeichen sind ein Vergleich
> 	if x == "beispiel":
> 		print("x hat den gleichen Wert wie 'Beispiel'!")
> 	
> 	Wir können das Ergebnis dieses Vergleichs auch direkt anzeigen:
> 	print(x == "beispiel") # Das druck True aus
> 	print(x == "sonstetwas") # Das druck False aus
> 	```
> - Vergleichszeichen (`<`, `>`, `<=`, `>=`) vergleichen Zahlen
> 	```` 
> 	y = 5
> 	print(y > 3) # Das wertet zu True aus
> 	print(y <= 4) # Das wertet zu False aus 

