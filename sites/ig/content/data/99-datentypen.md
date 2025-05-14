---
title: Datentypen
display: hidden
---
## Zusammenfassung von Datentypen in Python

In Python gibt es zwei Hauptkategorien von Datentypen: **primitive Datentypen** und **strukturierte Datentypen**. Diese dienen dazu, verschiedene Arten von Daten zu speichern und zu verarbeiten.
## **1. Primitive Datentypen**

Primitive Datentypen sind die grundlegenden Bausteine, die zur Speicherung einzelner Werte verwendet werden.

- **`int` (Ganzzahlen)**  
    Repräsentieren ganze Zahlen, z. B. `42`, `-7`, oder `0`.
    
    ```python
    zahl = 42
    ```
    
- **`float` (Fliesskommazahlen)**  
    Repräsentieren Dezimalzahlen, z. B. `3.14` oder `-0.001`.
    
    ```python
    pi = 3.14
    ```
    
- **`str` (Zeichenketten)**  
    Repräsentieren Text, eingeschlossen in einfache (`'`) oder doppelte (`"`) Anführungszeichen, z. B. `"Hallo"` oder `'Python'`.
    
    ```python
    text = "Hallo"
    ```
    
- **`bool` (Booleans)**  
    Repräsentieren Wahrheitswerte: `True` oder `False`.
    
    ```python
    ist_wahr = True
    ```

## **2. Strukturierte Datentypen**

Strukturierte Datentypen ermöglichen die Speicherung und Organisation von mehreren Werten oder komplexen Strukturen.

- **`list` (Listen)**  
    Eine geordnete Sammlung von Elementen, die verschiedene Datentypen enthalten kann. Listen sind veränderbar.
    
    ```python
    zahlen_liste = [1, 2, 3, 4.5, "Text"]
    ```
    
- **`tuple` (Tupel)**  
    Eine geordnete, aber unveränderbare Sammlung von Elementen.
    
    ```python
    koordinaten = (10, 20)
    ```
    
- **`dict` (Dictionaries)**  
    Eine Sammlung von Schlüssel-Wert-Paaren, ähnlich wie ein Wörterbuch.
    
    ```python
    person = {"name": "Anna", "alter": 30}
    ```
    
- **`set` (Mengen)**  
    Eine ungeordnete Sammlung von eindeutigen Elementen.
    
    ```python
    unique_nums = {1, 2, 3, 3}
    ```
    

## **Vergleich zwischen Primitiven und Strukturierten Datentypen**

|**Merkmal**|**Primitive Datentypen**|**Strukturierte Datentypen**|
|---|---|---|
|**Komplexität**|Einfach (einzelne Werte)|Komplex (Sammlungen von Werten)|
|**Beispiele**|`int`, `float`, `str`, `bool`|`list`, `dict`, `tuple`, `set`|
|**Veränderbarkeit**|Manche sind unveränderbar (z. B. `str`)|Manche sind veränderbar (z. B. `list`)|

## Flexibilität von Python

Python ist flexibel, was den Umgang mit Datentypen betrifft. Sie können mit diesen Typen einfach arbeiten und sie auch ineinander umwandeln, wenn nötig, z. B.:

```python
zahl = 5
zahl_als_text = str(zahl)  # Konvertiert zu "5"
```
