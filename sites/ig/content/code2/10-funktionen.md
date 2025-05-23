---
title: Funktionen
---
# Funktionen

> [!success] Lernziele
>
> - Sie verstehen, was eine Funktion ist und wie Sie diese in Python definieren.
> - Sie können eine Funktion mit Parametern definieren und verwenden.
> - Sie verstehen, wie Sie mit `return` einen Wert zurückgeben können.

Wenn man ein Problem endlich gelöst hat, wäre es doch schön, diese Lösung immer wieder verwenden zu können. Das geht mit Funktionen! 

Funktionen sind **Unterprogramme des Hauptprogramms**, die eine bestimmte Aufgabe erledigen. Sie können so **eigene Befehle kreieren und immer wieder verwenden**, wann immer Sie diese Funktion brauchen.

## Syntax

Um die Syntax einer Funktion zu verstehen, schauen wir ein Beispiel an: Sagen wir, wir müssen immer wieder den Flächeninhalt eines Quadrats berechnen. Anstatt die Rechnung immer wieder aufzuschreiben, bietet es isch an, eine Funktion zu schreiben. Das könnte so aussehen:

```turtle
# Funktion zur Berechnung des Flächeninhalts eines Quadrats
def flaeche_quadrat(seitenlaenge):
    flaeche = seitenlaenge * seitenlaenge # seitenlaenge**2 würde auch funktionieren
    return flaeche

# Hauptprogramm
print("Der Flächeninhalt eines Quadrats mit Seitenlänge 5 ist:", flaeche_quadrat(5))
print("Der Flächeninhalt eines Quadrats mit Seitenlänge 10 ist:", flaeche_quadrat(10))

# Den Wert der Funktion in einer Variablen speichern
flaeche = flaeche_quadrat(20)
print("Der Flächeninhalt eines Quadrats mit Seitenlänge 20 ist:", flaeche)
```

Hier wird eine Funktion `flaeche_quadrat` definiert, die eine Seitenlänge als Parameter erwartet und dann verarbeitet. Die Funktion nimmt diese Seitenlänge und berechnet damit den Flächeninhalt des Quadrats. Letztlich gibt sie den Wert zurück ans Hauptprogramm.

Beachten Sie:
- Eine Funktion wird mit dem Schlüsselwort `def` definiert. 
- Danach folgt der Name der Funktion, hier also `flaeche_quadrat`. 
- Dann runde Klammern `()`, um die Parameter zu definieren.
- Danach folgt ein Doppelpunkt `:`, der den Beginn des Funktionskörpers markiert.
- Der Code, der zur Funktion gehört, wird eingerückt im Körper des Codeblocks geschrieben.
- Mit `return` geben Sie den Wert zurück, den die Funktion berechnet hat. So können Sie den Wert im Hauptprogramm weiterverwenden.
- Im Hauptprogramm nutzen wir die Funktion, indem wir ihren Namen aufrufen und die Seitenlänge als Argument in den runden Klammern übergeben. Das Argument wird dann in der Funktion ins Parameter `seitenlaenge` abgefüllt.

![[10-funktionen-block.excalidraw.light.svg]]
## Beispiele

### Würfeln (eine Funktion ohne Parameter und ohne `return`-Wert)

Sagen wir, Sie wollen eine Funktion schreiben, die wie ein Würfel Ihnen eine Zufallszahl zwischen 1 und 6 ausdruckt. Das dient als Beispiel, wie Sie eine Funktion ohne Parameter und ohne `return`-Wert definieren können. Diese Funktion könnte so aussehen:

```turtle
import random

def wuerfeln():
    zahl = random.randint(1, 6)
    print("Die geworfene Zahl ist:", zahl)

print("Wir würfeln eine erste Zahl:")
wuerfeln()
print("Hier könnte ein beliebig grosser Teil des Programms stehen.")
print("Und wenn wir es gebrauchen, würfeln wir halt noch eine Zahl:")
wuerfeln()
```

Jetzt können Sie die Funktion `wuerfeln()` immer wieder aufrufen, wann immer Sie eine Zufallszahl zwischen 1 und 6 ausdrucken wollen. Das ist wohl einfacher, als immer wieder den gleichen Code zu schreiben.

### Flächeninhalt eines Rechtsecks (eine Funktion mit zwei Parametern und mit `return`-Wert)

Sagen wir, Sie wollen eine Funktion schreiben, die den Flächeninhalt eines Rechtecks berechnet. Diese Funktion könnte so aussehen:

```turtle
# Funktion zur Berechnung des Flächeninhalts eines Rechtecks
def flaeche_rechteck(breite, laenge):
    flaeche = breite * laenge
    return flaeche

# Hauptprogramm
print("Der Flächeninhalt eines Rechtecks mit Breite 5 und Länge 10 ist:", flaeche_rechteck(5, 10))
print("Der Flächeninhalt eines Rechtecks mit Breite 20 und Länge 30 ist:", flaeche_rechteck(20, 30))
```

Hier wird eine Funktion `flaeche_quadrat` definiert, die eine Seitenlänge als Eingabeparameter erwartet. Die Funktion berechnet dann den Flächeninhalt des Quadrats und gibt den Wert zurück ans Hauptprogramm.

## Aufgaben

### Aufgabe: Volumen eines Würfels

Schreiben Sie eine Funktion, die das Volumen eines Würfels berechnet.

```turtle id="volumen_wuerfel"
# Ihr Code
```

> [!solution]- Mögliche Lösung
> 
> ```python
> def volumen_wuerfel(seitenlaenge):
>     volumen = seitenlaenge ** 3 # seitenlaenge * seitenlaenge * seitenlaenge
>     return volumen
>
> # Hauptprogramm
> print("Das Volumen eines Würfels mit Seitenlänge 5 ist:", volumen_wuerfel(5))
> print("Das Volumen eines Würfels mit Seitenlänge 10 ist:", volumen_wuerfel(10))
> ```

### Aufgabe: Umrechnung von Celsius in Fahrenheit

Schreiben Sie eine Funktion, die eine Temperatur in Celsius in Fahrenheit umrechnet. Die Formel zur Umrechnung lautet: `F = C * 9/5 + 32`

```turtle id="celsius_in_fahrenheit"
# Ihr Code
```

> [!solution]- Mögliche Lösung
>
> ```python
> def celsius_in_fahrenheit(celsius):
>     fahrenheit = celsius * 9/5 + 32
>     return fahrenheit
>
> # Hauptprogramm
> print("20 Grad Celsius sind", celsius_in_fahrenheit(20), "Grad Fahrenheit.")
> print("100 Grad Celsius sind", celsius_in_fahrenheit(100), "Grad Fahrenheit.")
> ```

### Aufgabe: Boolescher `return`-Wert

Eine Funktion kann auch einen Wahr/Falsch-Wert als Rückgabewert haben. So können Sie die Funktion direkt in einer `if`-Selektion gebrauchen.

Schreiben Sie eine Funktion istGerade(zahl), die überprüft, ob eine Zahl gerade ist. Die Funktion soll `True` zurückgeben, wenn die Zahl gerade ist, und `False`, wenn sie ungerade ist.

Nutzen Sie die Funktion in einem Hauptprogramm, das alle geraden Zahlen bis 10 ausgibt.

```turtle id="istGerade"
# Ihr Code
```

> [!solution]- Mögliche Lösung
>
> ```python
> def istGerade(zahl):
>     if zahl % 2 == 0:
>         return True
>     # Das else ist hier optional, weil return die Funktion abbricht
>     return False
>
> # Hauptprogramm
> for i in range(11):
>     if istGerade(i):
>         print(i, "ist eine gerade Zahl.")
> ```

