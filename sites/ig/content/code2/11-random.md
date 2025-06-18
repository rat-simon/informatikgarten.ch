# Zufall

In dieser Lektion simulieren wir Wahrscheinlichkeiten und Zufall. 

Wir verwenden die `random`-Bibliothek, um Zufallszahlen zu generieren und Wahrscheinlichkeiten zu simulieren.

```turtle
import random
# Simuliere einen Würfelwurf
wurf = random.randint(1, 6)
print(f"Der Würfel zeigt: {wurf}")
```

## Wichtige Funktionen der random-Bibliothek

Die `random`-Bibliothek stellt verschiedene Funktionen bereit:

```python
import random

# Zufällige Ganzzahl zwischen a und b (inklusive)
random.randint(a, b)

# Zufällige Gleitkommazahl zwischen 0.0 und 1.0
random.random()

# Zufällige Gleitkommazahl zwischen a und b
random.uniform(a, b)

# Zufällige Auswahl aus einer Liste
random.choice(['Kopf', 'Zahl'])
```

## Aufgabe 1: wuerfeln()-Funktion

Schreiben Sie nun eine Funktion, mit der wir alle Grössen von Würfel simulieren können. Ein normaler sechseitiger Würfel sollen wir so würfeln können: `wuerfeln(6)`.

```turtle id="aufgabe1"
# Ihre Lösung hier
```

> [!solution]- Mögliche Lösung
> 
> ```python
> def wuerfeln(wuerfelgroesse):
>     return random.randint(1, wuerfelgroesse)
>     
> # Testaufruf
> print(f"Würfelwurf (6-seitig): {wuerfeln(6)}")
> print(f"Würfelwurf (20-seitig): {wuerfeln(20)}")
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

> [!solution]- Mögliche Lösung
> 
> ```python
> import random
> 
> anzahl_wuerfe = 1000000
> sechser_zaehler = 0
> 
> for _ in range(anzahl_wuerfe):
>     wurf = random.randint(1, 6)
>     if wurf == 6:
>         sechser_zaehler += 1
>         
> wahrscheinlichkeit = sechser_zaehler / anzahl_wuerfe
> print(f"Theoretische Wahrscheinlichkeit: 1/6 ≈ {1/6:.4f}")
> print(f"Experimentelle Wahrscheinlichkeit: {wahrscheinlichkeit:.4f}")
> ```
