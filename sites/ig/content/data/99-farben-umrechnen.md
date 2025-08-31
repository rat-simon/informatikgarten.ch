---
title: Farben umrechnen - RGB zu CMYK
---

> [!success] Lernziele
> 
> - Sie können die **Umrechnung von RGB zu CMYK** nachvollziehen und anwenden.
> - Sie verstehen, **warum das K (Schwarz) zuerst bestimmt** wird.
> - Sie können die mathematischen Formeln für die Umrechnung anwenden.

## Von RGB zu CMYK - Warum ist das nötig?

Wie wir bereits gelernt haben, arbeiten Bildschirme mit dem **additiven RGB-Farbmodell** (Rot, Grün, Blau), während Drucker das **subtraktive CMYK-Farbmodell** (Cyan, Magenta, Gelb, Schwarz) verwenden.

Wenn Sie ein Bild am Bildschirm erstellen und es dann ausdrucken möchten, muss eine Umrechnung stattfinden. Diese Umrechnung ist nicht trivial, da die beiden Farbmodelle grundlegend unterschiedlich funktionieren:

- **RGB**: Je mehr Licht, desto heller (Addition von Licht)
- **CMYK**: Je mehr Farbe, desto dunkler (Subtraktion von reflektiertem Licht)

## Warum ist Cyan das "Gegenteil" von Rot?

Die CMY-Farben sind die **Komplementärfarben** zu RGB. Das bedeutet: Jede CMY-Farbe absorbiert genau eine RGB-Grundfarbe und reflektiert die anderen beiden:

- **Cyan-Tinte absorbiert Rot**, reflektiert aber Grün und Blau
  - Weisses Licht (R+G+B) minus Rot = Grün + Blau = Cyan
- **Magenta-Tinte absorbiert Grün**, reflektiert aber Rot und Blau
  - Weisses Licht (R+G+B) minus Grün = Rot + Blau = Magenta
- **Gelb-Tinte absorbiert Blau**, reflektiert aber Rot und Grün
  - Weisses Licht (R+G+B) minus Blau = Rot + Grün = Gelb

![[05-farben-farbmodelle-mischfarben.excalidraw.light.svg]]
**Anschauliches Beispiel mit Cyan:**
Stellen Sie sich vor, weisses Licht (enthält alle Farben) trifft auf cyan-farbige Tinte:
1. Die Cyan-Tinte "schluckt" das rote Licht - es wird absorbiert
2. Grünes und blaues Licht werden reflektiert
3. Unser Auge sieht Grün + Blau = Cyan

Deshalb ist in der Umrechnungsformel Cyan proportional zu "wie viel Rot fehlt": 
- Viel Rot im RGB → wenig Cyan-Tinte nötig
- Wenig Rot im RGB → viel Cyan-Tinte nötig

## Die Herleitung der Umrechnungsformel

### Schritt 1: Normalisierung der RGB-Werte

RGB-Werte liegen typischerweise zwischen 0 und 255. Für die Umrechnung normalisieren wir sie auf den Bereich $[0, 1]$:

$$r = \frac{R}{255}, \quad g = \frac{G}{255}, \quad b = \frac{B}{255}$$

### Schritt 2: Warum wird K (Schwarz) zuerst bestimmt?

Die clevere Idee bei CMYK ist, dass man **Schwarz als separate Farbe** verwendet, anstatt Cyan, Magenta und Gelb zu mischen. Das hat mehrere Gründe:

1. **Ökonomisch**: Schwarze Tinte ist günstiger als die Mischung dreier Farben
2. **Qualität**: Reines Schwarz sieht besser aus als gemischtes Schwarz
3. **Effizienz**: Weniger Tinte bedeutet schnelleres Trocknen

Der **K-Wert (Key/Schwarz)** wird bestimmt, indem wir schauen, wie viel von jeder RGB-Farbe **fehlt**. Der maximale Fehlbetrag bestimmt, wie viel Schwarz wir brauchen:

$$K = 1 - \max(r, g, b)$$

**Intuition**: Wenn alle RGB-Werte niedrig sind (dunkle Farbe), ist K hoch. Wenn mindestens ein RGB-Wert hoch ist (helle Farbe), ist K niedrig.

### Schritt 3: Berechnung von C, M und Y

Nachdem wir wissen, wie viel Schwarz wir verwenden, müssen wir die restlichen Farbanteile berechnen. Die Formeln berücksichtigen, dass wir bereits Schwarz verwenden:

$$C = \frac{1 - r - K}{1 - K}$$

$$M = \frac{1 - g - K}{1 - K}$$

$$Y = \frac{1 - b - K}{1 - K}$$

**Spezialfall**: Wenn $K = 1$ (reines Schwarz), dann setzen wir $C = M = Y = 0$, da wir nur schwarze Tinte brauchen.

## Ein konkretes Beispiel

Nehmen wir das schöne Orange aus der Farben-Lektion: **RGB(255, 64, 16)**

**Schritt 1: Normalisierung**

$r = \frac{255}{255} = 1.0$

$g = \frac{64}{255} \approx 0.251$

$b = \frac{16}{255} \approx 0.063$

**Schritt 2: K berechnen**

$$K = 1 - \max(1.0, 0.251, 0.063) = 1 - 1.0 = 0$$

**Schritt 3: C, M, Y berechnen**

$$C = \frac{1 - 1.0 - 0}{1 - 0} = 0$$

$$M = \frac{1 - 0.251 - 0}{1 - 0} = 0.749$$

$$Y = \frac{1 - 0.063 - 0}{1 - 0} = 0.937$$

**Ergebnis**: CMYK(0%, 74.9%, 93.7%, 0%)

Das ergibt Sinn: Orange braucht kein Cyan (Gegenfarbe), viel Magenta und Gelb, und kein Schwarz.

![[99-farben-umrechnen-diagramm.excalidraw.light.svg]]

## Wichtige Hinweise

1. **Farbverlust**: Die Umrechnung von RGB zu CMYK kann zu Farbverlusten führen, da CMYK einen kleineren Farbraum hat als RGB. Besonders leuchtende Farben können im Druck matter erscheinen.

2. **Professioneller Druck**: In der Praxis verwenden professionelle Druckereien oft ICC-Profile für genauere Farbumrechnungen, die gerätespezifische Eigenschaften berücksichtigen.

3. **Der Name "K"**: Das K in CMYK steht für "Key" (Schlüsselfarbe), nicht für "blacK". Historisch wurde die schwarze Druckplatte als Schlüsselplatte bezeichnet, da sie die wichtigsten Details und Konturen enthielt.

## Python-Beispiel

Hier ist eine einfache Python-Funktion, die RGB in CMYK umrechnet:

```turtle
def rgb_zu_cmyk(r, g, b):
    """
    Rechnet RGB-Werte (0-255) in CMYK-Werte (0-100%) um.
    
    Parameter:
    r, g, b: RGB-Werte zwischen 0 und 255
    
    Rückgabe:
    c, m, y, k: CMYK-Werte als Prozent (0-100)
    """
    # Schritt 1: Normalisierung auf [0, 1]
    r_norm = r / 255
    g_norm = g / 255
    b_norm = b / 255
    
    # Schritt 2: K (Schwarz) bestimmen
    k = 1 - max(r_norm, g_norm, b_norm)
    
    # Schritt 3: C, M, Y berechnen
    # Spezialfall: Wenn k = 1 (reines Schwarz)
    if k == 1:
        c = m = y = 0
    else:
        c = (1 - r_norm - k) / (1 - k)
        m = (1 - g_norm - k) / (1 - k)
        y = (1 - b_norm - k) / (1 - k)
    
    # In Prozent umrechnen und runden
    c_prozent = round(c * 100, 1)
    m_prozent = round(m * 100, 1)
    y_prozent = round(y * 100, 1)
    k_prozent = round(k * 100, 1)
    
    return c_prozent, m_prozent, y_prozent, k_prozent

# Beispiel testen
r = 50
g = 0
b = 200
c, m, y, k = rgb_zu_cmyk(r, g, b)
print(f"RGB({r}, {g}, {b}) = CMYK({c}%, {m}%, {y}%, {k}%)")

```

> [!info] Zusammenfassung
> 
> Die Umrechnung von RGB zu CMYK erfolgt in drei Schritten:
> 1. **Normalisierung** der RGB-Werte auf [0, 1]
> 2. **K-Wert bestimmen**: $K = 1 - \max(r, g, b)$
> 3. **CMY-Werte berechnen** unter Berücksichtigung des K-Werts
> 
> Die Formel berücksichtigt, dass Schwarz effizienter als separate Farbe gedruckt wird, anstatt drei Farben zu mischen.
