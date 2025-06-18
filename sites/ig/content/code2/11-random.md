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

Schreiben Sie nun eine Funktion, mit der wir alle Grössen von Würfel simulieren können. Ein normaler sechseitiger Würfel sollen wir so würfeln können: `wuerfeln(6)`.

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
