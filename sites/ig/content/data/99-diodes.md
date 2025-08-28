---
title: Lichtsensoren
display: hidden
---
# Photodioden: Wie Computer Licht "sehen"


## Lernziele

- Sie können erklären, wie eine Photodiode funktioniert
- Sie können den photoelektrischen Effekt in einfachen Worten beschreiben
- Sie können typische Anwendungen von Photodioden nennen und ihre Rolle in digitalen Systemen verstehen
- Sie können die Unterschiede zwischen verschiedenen Photodioden-Typen erläutern

---

## Was ist eine Photodiode?

Stellen Sie sich vor, Sie wollen einem Computer beibringen, Licht zu "sehen". Wie würden Sie das machen? 🤔

Eine **Photodiode** ist genau das: Ein elektronisches Bauteil, das Licht in elektrischen Strom umwandelt. Sie ist sozusagen das "Auge" des Computers - allerdings ein sehr spezialisiertes Auge, das nur zwischen "hell" und "dunkel" unterscheiden kann.

### Kernfunktion

- **Was tut sie?** Wandelt Licht in elektrischen Strom um
- **Wo begegnet sie uns?** In Smartphones (Lichtsensor), Barcode-Scannern, Rauchmeldern, Solarzellen
- **Besonderheit:** Je mehr Licht darauf fällt, desto mehr Strom fliesst

---

## Der photoelektrische Effekt - einfach erklärt

> **Fun Fact:** Albert Einstein bekam 1921 den Nobelpreis für die Erklärung des photoelektrischen Effekts - nicht für die Relativitätstheorie!

### Was passiert in der Photodiode?

Stellen Sie sich die Photodiode wie einen Türsteher vor:

1. **Licht-"Pakete" (Photonen) kommen an:** Licht besteht aus winzigen Energiepaketen
2. **Sie "klopfen" an Elektronen:** Diese Lichtpakete treffen auf Elektronen im Material
3. **Elektronen werden "befreit":** Mit genug Energie können die Elektronen ihre Position verlassen
4. **Strom fliesst:** Diese freien Elektronen bewegen sich und erzeugen elektrischen Strom

```
Licht → Photodiode → Elektrischer Strom → Messbarer Wert
 💡        📱           ⚡              📊
```

---

## Aufbau einer Photodiode

Eine Photodiode besteht aus zwei Schichten von speziell behandeltem Silizium:

### Die p-n-Schicht

- **p-Schicht:** Hat "Löcher" (fehlen Elektronen)
- **n-Schicht:** Hat überschüssige Elektronen
- **Grenzschicht:** Hier passiert die "Magie" - Licht erzeugt hier Elektron-Loch-Paare

### Gehäuse und Anschlüsse

- **Gehäuse:** Meist mit Linse oder transparentem Fenster
- **Kathode (-) und Anode (+):** Zwei Anschlüsse für den Stromkreis
- **Spektrale Empfindlichkeit:** Je nach Material reagiert sie auf verschiedene Lichtfarben

---

## Betriebsmodi einer Photodiode

### 1. Photovoltaischer Modus (Solarzelle)

- **Ohne externe Spannung**
- Erzeugt selbst Spannung durch Licht
- **Anwendung:** Solarzellen, Lichtmesser

### 2. Photokonduktiver Modus (Lichtsensor)

- **Mit externer Spannung (Sperrspannung)**
- Strom ändert sich je nach Lichtmenge
- **Vorteil:** Sehr schnelle Reaktion
- **Anwendung:** Barcode-Scanner, Datenübertragung

---

## Kenngrössen und wichtige Parameter

### Empfindlichkeit

- **Spektrale Empfindlichkeit:** Für welche Lichtfarben ist sie empfindlich?
- **Si-Photodioden:** 400-1100 nm (sichtbar + nahes Infrarot)
- **InGaAs-Photodioden:** 900-1700 nm (Infrarot)

### Geschwindigkeit

- **Anstiegszeit:** Wie schnell reagiert sie auf Lichtänderungen?
- **Typisch:** Nanosekunden bis Mikrosekunden
- **Wichtig für:** Hochgeschwindigkeits-Datenübertragung

### Dunkelstrom

- **Strom ohne Licht:** Auch ohne Beleuchtung fliesst ein winziger Strom
- **Problem:** "Rauschen" in der Messung
- **Lösung:** Kühlung oder bessere Materialien

---

## Wo begegnen uns Photodioden im Alltag?

### 1. **Smartphone-Lichtsensor**

```
Aufgabe: Display-Helligkeit automatisch anpassen
Funktion: Misst Umgebungslicht → steuert Display-Helligkeit
```

### 2. **Barcode-Scanner im Supermarkt**

```
Aufgabe: Schwarze und weisse Streifen unterscheiden
Funktion: LED beleuchtet → Photodiode misst reflektiertes Licht
```

### 3. **Rauchmelder**

```
Aufgabe: Rauchpartikel erkennen
Funktion: LED sendet Licht → bei Rauch wird Licht gestreut → Photodiode erkennt das
```

### 4. **Glasfaser-Internet**

```
Aufgabe: Lichtsignale in Daten umwandeln
Funktion: Laser → Glasfaser → Photodiode → Digitale Signale
```

### 5. **Autoschlüssel mit Infrarot**

```
Aufgabe: Funksignale empfangen
Funktion: Infrarot-LED am Schlüssel → Photodiode im Auto
```

---

## Photodioden vs. andere Lichtsensoren

|Sensor-Typ|Geschwindigkeit|Empfindlichkeit|Anwendung|
|---|---|---|---|
|**Photodiode**|Sehr schnell (ns)|Mittel|Scanner, Datenübertragung|
|**Phototransistor**|Schnell (μs)|Hoch|Lichtschranken, Dämmerungsschalter|
|**Photowiderstand (LDR)**|Langsam (ms)|Sehr hoch|Dämmerungsschalter, Kameras|
|**CCD/CMOS**|Mittel|Sehr hoch|Digitalkameras, Scanner|

---

## Praktisches Beispiel: Pulsoximeter

Das **Pulsoximeter** am Finger verwendet Photodioden, um Ihren Puls und die Sauerstoffsättigung zu messen:

### Funktionsprinzip:

1. **Rote und infrarote LEDs** leuchten durch den Finger
2. **Photodiode** auf der anderen Seite misst das durchkommende Licht
3. **Sauerstoffreiche vs. sauerstoffarme Blutzellen** absorbieren Licht unterschiedlich
4. **Puls:** Lichtmenge schwankt mit dem Herzschlag
5. **Computer** berechnet aus den Schwankungen Puls und Sauerstoffwerte

```
LED (rot) → Finger → Photodiode → Verstärker → Mikrocontroller → Display
LED (IR)  → Finger → Photodiode → Verstärker → Mikrocontroller → Display
```

---

## Zukunft: Photodioden in der Quantentechnologie

Moderne Forschung arbeitet an **Einzelphoton-Detektoren** - Photodioden, die einzelne Lichtpartikel erkennen können. Diese werden verwendet für:

- **Quantenkryptographie:** Absolut sichere Datenübertragung
- **LIDAR:** 3D-Vermessung für selbstfahrende Autos
- **Medizinische Bildgebung:** Bessere Auflösung in der Diagnostik

---

## Hands-on: Photodiode mit Arduino

```python
# Vereinfachtes Arduino-Programm
def setup():
    # Photodiode an Analogeingang A0
    serial_begin(9600)

def loop():
    # Lichtwert lesen (0-1023)
    light_value = analog_read(A0)
    
    # Ausgabe
    print(f"Lichtstärke: {light_value}")
    
    # LED steuern basierend auf Licht
    if light_value < 512:  # dunkel
        digital_write(LED_PIN, HIGH)  # LED an
    else:  # hell
        digital_write(LED_PIN, LOW)   # LED aus
    
    delay(100)  # 100ms warten
```

---

## Zusammenfassung

Photodioden sind die "Augen" der digitalen Welt:

- **Wandeln Licht in Strom um** durch den photoelektrischen Effekt
- **Reagieren sehr schnell** - perfekt für Datenübertragung
- **Sind überall** - vom Smartphone bis zum Internet
- **Ermöglichen** Barcode-Scanner, Glasfaser-Internet, medizinische Geräte
- **Zukunftstechnologie** für Quantencomputer und autonome Fahrzeuge

Die nächste Mal, wenn Sie einen Barcode scannen oder Ihr Handy die Helligkeit automatisch anpasst - denken Sie daran: Da arbeitet eine kleine Photodiode! 💡

---

## Weiterführende Fragen

1. Warum können Photodioden nicht alle Lichtfarben gleich gut "sehen"?
2. Wie könnte man mit mehreren Photodioden die Farbe von Licht bestimmen?
3. Was sind die Vor- und Nachteile von Photodioden gegenüber anderen Lichtsensoren?
4. Wie funktioniert die Datenübertragung durch Glasfaserkabel mit Photodioden?