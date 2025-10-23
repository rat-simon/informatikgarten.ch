---
title: Prüfungsvorbereitung FMS
display: hidden
---
## Lernziele

Es gelten die Lernziele der Lektionen, die wir behandelt haben, mit folgenden Ausnahmen:
- Sie müssen die Symbole der Logikgates nicht auswendig können.
- Die "Springe"-Befehle [bei der Von-Neumann-Architektur](/aufbau/10-vonneumann) haben wir nicht angeschaut. Lernen Sie die Lektion nur bis zur 2. Aufgabe des LMC-Simulators - der ganze Rest der Aufgaben und der Teil über Binär kommt nicht.

Wir haben alle Lektionen des Themas "**A Bau eines Addierers**" sowie die Lektion "[Von Neumann Architektur](/aufbau/10-vonneumann)" behandelt.
## Übungsaufgaben

### Einführung

Füllen Sie die Lücken ein: In der Informatik teilen wir Dinge gern in Module auf, um Ordnung zu schaffen. Wenn wir ein Modul verwenden, können wir uns ausschliesslich auf die **???** des Moduls konzentrieren und die Details der **???** komplett ignorieren.

> [!solution]- Lösung
> 
> Wenn wir ein Modul verwenden, können wir uns nämlich ausschliesslich auf die **Abstraktion** oder **Schnittstelle** des Moduls konzentrieren und die Details der **Implementierung** oder **Funktionsweise** komplett  ignorieren.

### EVA & digital

Für was stehen E, V und A beim EVA-Prinzip?

> [!solution]- Lösung
> 
> Eingabe, Verarbeitung, Ausgabe

---

Was unterscheidet ein digitales von einem analogen Signal?


> [!solution]- Lösung
> 
> Ein **digitales** Signal arbeitet mit **klar definierten Zuständen**, oft in Form von “ON” (1) und “OFF” (0). Man kann die Zustände nicht mischen, “Halb-ON” (0.5) gibt es schlicht nicht.

### Binärsystem

Formen Sie $1001101011_2$ ins Dezimalsystem um.

> [!solution]- Lösung
> 
> $619_{10}$

---

Formen Sie $286_{10}$ ins Binärsystem um.

> [!solution]- Lösung
> 
> $100011110_2$

### Logikgates & Addierer

Ein OR-Gate habe zwei Inputs "A" und "B" sowie einen Output "out". Schreiben Sie die Wahrheitstabelle auf.

> [!solution]- Lösung
> 
> | A | B | out |
> | ----- | ----- | ------ |
> | 0     | 0     | 0      |
> | 0     | 1     | 1      |
> | 1     | 0     | 1      |
> | 1     | 1     | 1      |
> 

---

Schreiben Sie Wahrheitstabellen für diese Schaltungen.

![[examprep-schaltung1.excalidraw]]

> [!solution]- Lösung mit Videoerklärung
> 
> Die Wahrheitstabelle und die Herleitung mit Farben:
> 
> | A | B | out |
> | ----- | ----- | ------ |
> | 0     | 0     | 0      |
> | 0     | 1     | 0      |
> | 1     | 0     | 1      |
> | 1     | 1     | 0      |
> 
> ![[examprep-schaltung1-solution.excalidraw]]
> 
> Und hier ein Erklärvideo der Aufgabe:
> ![[aufbau-examprep-schaltung1.mp4]]

---

![[examprep-schaltung2.excalidraw]]

> [!solution]- Lösung mit Videoerklärung
> 
> Die Wahrheitstabelle und die Herleitung mit Farben:
> 
> | A | B | out |
> | ----- | ----- | ------ |
> | 0     | 0     | 0      |
> | 0     | 1     | 1      |
> | 1     | 0     | 0      |
> | 1     | 1     | 0      |
> 
> ![[examprep-schaltung2-solution.excalidraw]]
> 
> Hier ein Erklärvideo dazu:
> ![[aufbau-examprep-schaltung2.mp4]]

---

![[examprep-schaltung3.excalidraw]]
> [!solution]- Lösung mit Videoerklärung
> 
> Die Wahrheitstabelle und die Herleitung mit Farben:
> 
> | A   | B   | C   | out |
> | --- | --- | --- | --- |
> | 0   | 0   | 0   | 0   |
> | 0   | 0   | 1   | 1   |
> | 0   | 1   | 0   | 1   |
> | 0   | 1   | 1   | 1   |
> | 1   | 0   | 0   | 1   |
> | 1   | 0   | 1   | 1   |
> | 1   | 1   | 0   | 0   |
> | 1   | 1   | 1   | 1   |
> 
> ![[examprep-schaltung3-solution.excalidraw]]
> 
> Hier das Erklärvideo zur Aufgabe:
> ![[aufbau-examprep-schaltung3.mp4]]

---

![[examprep-schaltung4.excalidraw]]

> [!solution]- Lösung
> 
> Die Wahrheitstabelle und die Herleitung mit Farben:
> 
> ![[examprep-schaltung4-solution.excalidraw]]

---

Vervollständigen Sie: Ein Halbaddierer besteht aus (Anzahl) **???** Logikgates, nämlich einem **???** und einem **???**.

> [!solution]- Lösung
> 
> Ein Halbaddierer besteht aus **zwei** Gates, nämlich ein **AND** und ein **XOR**.

---

Na toll... Meine Katze hat wieder mit meinem Addierer gespielt und alle Verbindungen rausgerissen 😭 Helfen Sie mir bitte und zeichnen Sie die richtigen Verbindungen ein!

![[aufbau-04-prüfungsvorbereitung-adder.excalidraw]]

> [!solution]- Lösung
> 
> Zum Üben habe ich die Logikgates wieder schön arrangiert. 
> 
> ![[adder-full-step4.excalidraw]]


## Von-Neumann-Architektur

Benennen Sie folgende sechs Teile der Von-Neumann-Architektur.
![[aufbau-04-prüfungsvorbereitung-vonneumann.excalidraw]]

> [!solution]- Lösung
> 
> 1. Control Unit (CU) oder Steuerwerk
> 2. Arithmetic Logic Unit (ALU)
> 3. Register
> 4. Program Counter (PC) oder Speicherzähler (auch Instructionpointer (IP) / Speicherzeiger wären ok)
> 5. Systembus
> 6. Arbeitsspeicher (RAM)

---

Die Zahl im Speicherzeiger des Prozessors repräsentiert:
- ein Befehl
- eine Adresse
- ein Zwischenergebnis

> [!solution]- Lösung
> 
> Eine **Adresse** ist richtig

---

Im Fetch-Schritt des FDE-Zyklus wird was von wo nach wo transferiert?

> [!solution]- Lösung
> 
> Die aktuelle Adresse im Speicherzähler (PC) Register bestimmt, welche Speicherzelle im Arbeitsspeicher (RAM) gelesen wird. Der Inhalt dieser Speicherzelle wird in ein Register im Prozessor kopiert.

---

Wenn Sie dieses Programm ausführen: Welcher Wert steht am Schluss im **Akkumulator**?

![[Pasted-image-20240515163823.png]]
> [!solution]- Lösung mit Videoerklärung
> 
> **505**. 
> 
> Falls Sie **-191** gesagt hätten: Dieser Wert wird ausgegeben. Aber das Programm lädt bei Speicherzelle 05 den Wert der Speicherzelle 00 in den Akkumulator.
> 
> ![[aufbau-lmc_exercise1.mp4]]

---

Wenn Sie dieses Programm ausführen: Welcher Wert wird **ausgegeben**?

![[90-examprep-lmc-code.excalidraw]]

> [!solution]- Lösung
> 
> **505**. 
> 
> Falls Sie **-191** gesagt hätten: Dieser Wert wird ausgegeben. Aber das Programm lädt bei Speicherzelle 05 den Wert der Speicherzelle 00 in den Akkumulator.

