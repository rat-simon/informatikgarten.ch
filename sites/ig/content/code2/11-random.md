# Zufall

In dieser Lektion simulieren wir Wahrscheinlichkeiten und Zufall. 

Wir verwenden die `random`-Bibliothek, um Zufallszahlen zu generieren und Wahrscheinlichkeiten zu simulieren.

## Wichtige Funktionen der random-Bibliothek

Die `random`-Bibliothek stellt verschiedene Funktionen bereit:

```python
import random

# Zufällige Ganzzahl zwischen 1 und 6 (inklusive), wie ein Würfelwurf
zahl = random.randint(1, 6)
print(f"Zufällige Zahl: {zahl}")

# Zufällige Gleitkommazahl zwischen 0.0 und 1.0
zahl = random.random()
print(f"Zufällige Gleitkommazahl: {zahl}")

karten = ['Herz', 'Ecken', 'Schaufel', 'Kreuz']

# Mischen einer Liste
random.shuffle(karten)
print(f"Gemischte Karten: {karten}")

# Zufällige Auswahl eines Elements aus einer Liste
karte = random.choice(karten)
print(f"Zufällige Karte: {karte}")
```

## Aufgabe 1: wuerfeln()-Funktion für einen 6-seitigen Würfel

Schreiben Sie nun eine Funktion `wuerfeln()`, mit der wir einen sechseitigen Würfel simulieren.

```turtle id="aufgabe1"
# Ihre Lösung hier
```

> [!solution]- Mögliche Lösung
> 
> ```python
> def wuerfeln():
>     return random.randint(1, 6)
>     
> # Einige Testaufrufe
> for i in range(1,21):
>   print(f"Würfelwurf {i}: {wuerfeln()}")
> ```

## Aufgabe 2: Was ist die Wahrscheinlichkeit einen 6er zu würfeln?

Mathematisch könnten Sie leicht ausrechnen, was die Wahrscheinlichkeit ist, einen 6er zu würfeln.

$$
P(6) = \frac{1}{6} \approx 0.1667
$$

Versuchen Sie nun, eine Million Würfelwürfe zu simulieren und rechnen Sie aus, ob sich das tatsächlich der mathematischen Wahrscheinlichkeit annähert.

```turtle id="aufgabe2"
# Ihre Lösung hier
```

## Aufgabe 3: Mehrere 6er hintereinander würfeln

Schreiben Sie nun ein Programm, das eine Million Mal versucht, drei 6er hintereinander zu würfeln. In wie vielen Fällen hat es geklappt?

```turtle id="aufgabe3"
# Ihre Lösung hier
```

## Aufgabe 4: Ein Spiel mit Würfeln simulieren (einfache Variante)

Mit meinen Freunden haben wir das Brettspiel Siedler mit Soldaten erweitert, damit man sich gegenseitig die Dörfer und Städte zerstören kann. Dabei haben wir das Kampfsystem des Brettspiels "Risiko" übernommen. Im Folgenden versuchen wir heruaszufinden, wie gross die Wahrscheinlichkeit ist, dass der Angreifer gewinnt und ein Dorf zerstören kann.

Nehmen wir zuerst einen einfachen Fall an: Der Angreifer hat einen Soldaten und der Verteidiger hat nur das Dorf mit einem Leben. Das heisst, beide erhalten einen Würfel. 
- Der Angreifer gewinnt, wenn er eine höhere Zahl würfelt als der Verteidiger. Dann wird das Dorf zerstört und der Angreifer gewinnt.
- Der Verteidiger gewinnt, wenn er mindestens gleich hoch würfelt wie der Angreifer. Dann bleibt das Dorf stehen und der Angreifer verliert seinen Soldaten.

Versuchen Sie nun, die Wahrscheinlichkeit herauszufinden, dass der Angreifer gewinnt. Simulieren Sie dazu eine Million Würfe und zählen Sie, wie oft der Angreifer gewonnen hat.

```turtle id="aufgabe4"
# Ihre Lösung hier
```

## Aufgabe 5: Ein Spiel mit Würfeln simulieren (erweiterte Variante)

Nehmen wir nun an, dass der Angreifer zwei Soldaten hat und desegen zwei Würfel werfen kann. Der Verteidiger hat aber immer noch nur ein Dorf mit einem Leben. Das heisst, der Angreifer würfelt zwei Würfel und der Verteidiger einen Würfel. Es wird jeweils der höchste Würfel des Angreifers mit dem Würfel des Verteidigers verglichen.

Wenn der Verteidiger einmal gewinnt, bleibt das Dorf stehen und der Angreifer verliert einen Soldaten. Der Angreifer kann die Angriffswelle aber mit nur einem Soldaten und nur noch einem Würfel weiterführen.

Versuchen Sie nun, die Wahrscheinlichkeit herauszufinden, dass der Angreifer gewinnt. Simulieren Sie dazu eine Million Angriffswellen und zählen Sie, wie oft der Angreifer gewonnen hat.

```turtle id="aufgabe5"
# Ihre Lösung hier
```