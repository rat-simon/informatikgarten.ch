---
title: Prüfungsvorbereitung (ohne Funktionen)
display: hidden
---

# Prüfungsvorbereitung

Die Prüfung setzt die Inhalte des ersten Semesters als Vorkenntnisse voraus. Konkret können Sie sich auf folgende Angaben stützen:
- Das Modul `turtle` wird nicht verwendet.
- Sie sollten Variabeln definieren und nutzen können.
- Sie sollten for-Schleifen mit range() und eigenen Listen kennen.
- Sie sollten die Namen der primitiven Datentypen kennen (int, float, str, bool).
- Sie können mit `input()` Benutzereingaben abfragen und mit `int()` oder `float()` in Zahlen umwandeln.
- Sie sollten die Grundoperationen der Mathematik in Python anwenden können (Addition `+`, Subtraktion `-`, Multiplikation `*`, Division `/`).

## Auswertung verstehen

Geben Sie die Ausgaben aller `print()`-Befehle in folgenden Python-Programmen mit Doppelpunkten getrennt an. Ein Beispiel:

```turtle
print(2 + 3)
for i in range(3):
    print(i)
print("Test")
```

Beispielantwort: `5:0:1:2:Test`

### Beispiel 1

```turtle
print(5 - 1)
print(2 * 3)
print(13 % 7)
print(30 % 9)
```


> [!solution]- Lösung
> 
> `4:6:6:3`

### Beispiel 2

```turtle
zahl = 5
print(zahl * 2)
print(zahl % 2)
print(zahl == 4)
print(zahl > 5)
```

> [!solution]- Lösung
>
> `10:1:False:False`

### Beispiel 3

```turtle
zahl = 3
while zahl < 7:
    print(zahl)
    zahl = zahl + 1
print(zahl)
```

> [!solution]- Lösung
>
> `3:4:5:6:7`

### Beispiel 4

```turtle
zahl = 0
summe = 0
while zahl < 5:
    summe = summe + zahl
    zahl = zahl + 1
    print(summe)
```

> [!solution]- Lösung
>
> `0:1:3:6:10`

### Beispiel 5

```turtle
for i in range(10):
    if i % 3 == 0:
        print(i + 1)
```

> [!solution]- Lösung
>
> `1:4:7:10`

### Beispiel 6

```turtle
for i in range(5,10):
    if i % 2 == 0:
        print(i)
    elif i % 3 == 0:
        print(i + 1)
    else:
        print(i - 1)
```

> [!solution]- Lösung
>
> `4:6:6:8:10`

### Beispiel 7

```turtle
for i in range(10, 15):
    if i % 2 == 0 and i > 12:
        print(i)
    elif i % 2 == 0:
        print(i + 1)
    else:
        print(i - 5)
```

> [!solution]- Lösung
>
> `11:6:13:8:14`

## Eigene Programme schreiben

### Kleinste Zahl finden

Schreiben Sie ein Programm, das die kleinste Zahl findet, die alle der folgenden Bedingungen erfüllt:
- Die Zahl ist eine gerade Zahl.
- Die Zahl ist restlos teilbar durch 13.
- Die Zahl + 5 ist restlos teilbar durch 7.

```turtle
# Ihre Lösung hier
```

> [!solution]- Mögliche Lösungen
> 
> ```turtle
> zahl = 0
> while not (zahl % 2 == 0 and zahl % 13 == 0 and (zahl + 5) % 7 == 0):
>     zahl = zahl + 1
> print(zahl)
> ```
> Alternative mit einer Endlosschleife und `break`:
> 
> ```turtle
> zahl = 0
> while True:
>     zahl = zahl + 1
>     if zahl % 2 == 0 and zahl % 13 == 0 and (zahl + 5) % 7 == 0:
>         break
> print(zahl)
> ```

### Summen spezifischer Zahlen bilden

Addieren Sie alle Zahlen bis 100 auf, die zwar restlos durch 5 teilbar sind, aber **nicht** restlos durch 3 teilbar sind.

```turtle
# Ihre Lösung hier
```
> [!solution]- Mögliche Lösungen
>
> ```turtle
> summe = 0
> for i in range(1, 101):
>     if i % 5 == 0 and not i % 3 == 0:
>         summe = summe + i
> print(summe)
> ```

### Zahlen mit User-Input finden

Schreiben Sie ein Programm, das von Ihren Benutzern eine Zahl abfragt und dann die nächst grössere Zahl ausgibt, die folgende Bedingungen erfüllt:
- Die Zahl ist eine gerade Zahl.
- Die Zahl ist restlos teilbar durch 13.
- Die Zahl ist restlos teilbar durch 7.

```turtle
# Ihre Lösung hier
```

> [!solution]- Mögliche Lösungen
>
> ```turtle
> zahl = int(input("Geben Sie eine Zahl ein: "))
> while not (zahl % 2 == 0 and zahl % 13 == 0 and zahl % 7 == 0):
>     zahl = zahl + 1
> print(zahl)
> ```
> Alternative mit einer Endlosschleife und `break`:
>
> ```turtle
> zahl = int(input("Geben Sie eine Zahl ein: "))
> while True:
>     zahl = zahl + 1
>     if zahl % 2 == 0 and zahl % 13 == 0 and zahl % 7 == 0:
>         break
> print(zahl)