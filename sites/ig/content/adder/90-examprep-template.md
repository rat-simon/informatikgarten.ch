---
title: Prüfungsvorbereitung
display: hidden
---
## Lernziele

Es gelten die Lernziele der Lektionen, die wir behandelt haben.
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

### Testaufgaben zur Von-Neumann-Architektur

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

Im Speicherzähler des Prozessors befindet sich:
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
> [!solution]- Lösung
> 
> **505**. 
> 
> Falls Sie **-191** gesagt hätten: Dieser Wert wird ausgegeben. Aber das Programm lädt bei Speicherzelle 05 den Wert der Speicherzelle 00 in den Akkumulator.

---

Was müssten Sie bei folgendem Programm tun, damit die Zahlenreihe in der Ausgabe nicht bei 0 sondern bei 7 beginnt?

![[hw-04-prüfungsvorbereitung-20240520125635.png]]
> [!solution]- Lösung
> 
> Den Inhalt der Speicherzellen 00 und 01 vertauschen.

---

Was müssen Sie vor dem Ausführen dieses Programms tun, damit es 99 ausgibt?

![[hw-90-examprep-2024-10-24-09.45.34.excalidraw]]

> [!solution]- Lösung
> 
> Die Zahl 5 in die Eingabe schreiben.

---

Was gibt dieses Programm aus? Wie würden Sie die Rechnung zusammenfassen?

![examprep2](hw-90-examprep-2024-10-24-12.28.58.excalidraw)

> [!solution]- Lösung
> 
> Ausgabe: $24$. Es wird $3 \times 8$ gerechnet

## ⛔ Betriebssystem (nicht Prüfungsstoff)

Sie schreiben ein Programm, das Sie auf vielen Computern installieren möchten. Beantworten Sie mit wahr oder falsch: **Welche Information über die Computer brauchen Sie?**
- Was für einen Prozessor sie benutzen
- Der vorhandene Speicherplatz
- Das Betriebssystem

> [!solution]- Lösung
> 
> Sie müssen nur das Betriebssystem kennen, weil das Betriebssystem die Details der Hardware "weg-abstrahiert".

Sortieren Sie Anwendungsprogramme, Anwender, Hardware und Betriebssystem nach Abstraktheit.

> [!solution]- Lösung
> 
> - Anwender (am abstraktesten)
> - Anwendungsprogramme
> - Betriebssystem
> - Hardware (am wenigsten abstrakt)

## ⛔ Hardwarekomponenten (nicht Prüfungsstoff)

Sie haben einen Arbeitsspeicher in der Hand. Wo würden Sie ihn auf diesem Mainboard einstecken?

![[Excalidraw/aufbau-04-prüfungsvorbereitung-mb.excalidraw]]

> [!solution]- Lösung
> 
> ![solution](./attachments/Excalidraw/aufbau-04-prüfungsvorbereitung-mb-solution.excalidraw)

Die wichtigsten Komponenten (z.B. Arbeitsspeicher, Grafikkarte) können über den Systembus direkt mit der CPU kommunizieren. Über welchen Verteiler auf dem Mainboard läuft der Datenverkehr für andere, weniger wichtige Komponenten?

> [!solution]- Lösung
> 
> Das Chipset.

In welchem Szenario könnte es sein, dass ein Prozessor trotz niedrigerer Taktfrequenz schneller ist, als einer mit einer höheren Taktfrequenz?

> [!solution]- Lösung
> 
> Wenn ein Prozessor mehre Prozessor**kerne** hat, kann er Operationen parallel durchführen. Der gesamte Prozessor kann so trotz niedrigerer Taktfrequenz insgesamt schneller sein.
> 
> Details zum Verständnis: Solche Prozessorkerne funktionieren, als hätten Sie mehrere Prozessoren in einem Computer, die parallel rechnen können (wenn die Programme dafür gemacht sind).

Wie heisst die Komponente, die alle anderen Komponenten mit Strom versorgt?

> [!solution]- Lösung
> 
> Das Netzteil


