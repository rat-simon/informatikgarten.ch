---
title: 🏗️ Was erschaffen wir?
---
> [!success] Lernziele
> 
> - Sie können den Unterschied zwischen **Abstraktion** und **Implementierung** eines Moduls beschreiben.

In diesem Modul bauen wir zusammen **einen rudimentären Rechner, der zwei Zahlen addieren kann**. Dazu erhalten Sie ein kleines Logikboard mit Batterie und Kabel. 

![[logicboard-perspective.jpg]]

## Divide and conquer mit Modulen! 

> [!idea] Wie baut man einen Computer von Grund auf?
> 
> "Sie fragen sich vielleicht, wie es möglich ist, ein komplettes Computersystem von Grund auf zu konstruieren, das mit nichts anderem als elementarsten Schaltkreisen beginnt. Das muss ein gigantisches Unterfangen sein! Wir gehen mit dieser Komplexität um, indem wir **das System in Module aufteilen**. Jedes Modul wird ... separat in einem eigenständigen Projekt aufgebaut. Sie werden sich vielleicht fragen, wie es möglich ist, diese Module isoliert zu beschreiben und zu bauen? Sie sind doch sicher miteinander verbunden! Wie wir ... zeigen werden, impliziert ein gutes modulares Design genau das: **Sie können an den einzelnen Modulen unabhängig voneinander arbeiten, während Sie den Rest des Systems völlig ignorieren**. Wenn das System gut konzipiert ist, können Sie diese Module in beliebiger Reihenfolge und sogar parallel zueinander aufbauen, wenn Sie im Team arbeiten.
> 
> Die kognitive Fähigkeit des "Divide & Conquer", also ein komplexes System in überschaubare Module aufzuteilen, wird durch einen weiteren kognitiven Kniff gestärkt: unsere **Fähigkeit, zwischen der Abstraktion und der Implementierung der einzelnen Module zu unterscheiden**. In der Informatik nehmen wir diese Worte konkret: Die **Abstraktion** beschreibt, **was** das Modul tut, und die **Implementierung** beschreibt, **wie** es dies tut. Mit dieser Unterscheidung im Hinterkopf lautet die wichtigste Regel in der Systemtechnik: Wenn Sie ein Modul als Baustein verwenden - egal welches Modul -, sollten Sie sich ausschliesslich auf die Abstraktion des Moduls konzentrieren und die Implementierungsdetails völlig ignorieren."
> 
> *Nisan, N. & Schocken, S. (2005) The Elements of Computing Systems: Building a Modern Computer from First Principles*

Zusammengefasst:
- Das grosse Ganze wird in einzelne **Module** aufgeteilt.
- Bei Modulen unterscheiden wir ihre **Abstraktion** (inkl. der Schnittstelle) von ihrer **Implementierung** unterscheiden.

![[module-single-interface-abstraction.excalidraw]]
Ein einfaches Beispiel: Betrachten wir Microsoft **Word** als Modul.
- Sie nutzen eine **Abstraktion** von Word, nämlich die grafische Oberfläche. Mit dieser Schnittstelle können Sie das Programm bedienen. Aber wissen Sie, wie Word funktioniert? Nein! Sie haben keine Ahnung - und ich auch nicht.
- Die **Implementierung** ist der Programmier-Quellcode von Word. Doch dieser wird von Microsoft nicht publiziert und als geistiges Eigentum beschützt. Das heisst: Wir können gar nicht wissen, wie Word genau funktioniert.

In der Welt der Informatik werden Schnittstellen oft standardisiert und vorgeschrieben - z.B. Stecker, Kommunikationsprotokolle, APIs (Programmier-Schnittstellen), die Parameter einer Funktion, etc. Aber **wie diese Schnittstellen implementiert werden, ist freigestellt**, weil es letztlich unüberprüfbar ist.

## One analogy to rule them all: Landkarten

Sie nutzen Abstraktionen im Alltag ständig! Das wohl einleuchtendste Beispiel: Landkarten! 
- Der Nutzen einer Landkarte ist, dass **nur das Wesentliche** abbildet. Als Informatiker könnten wir sagen: Die Abstraktion (also die Karte) präsentiert diejenigen Informationen, die ihre User brauchen, um das Terrain zu verstehen. Wir sehen: "Es gibt einen Fluss, und er verläuft ungefähr hier."
- Wie das Terrain im Detail tatsächlich beschaffen ist, zeigt die Karte nicht. Wir sehen nicht, wie tief der Fluss ist, ob es dort Steine gibt, ob es dort gefährliche Tiere gibt, etc. Das wäre in dieser Analogie die **Implementierung** des Terrains, wenn Sie so wollen. Sie müssen die Implementierung erst verstehen, wenn Sie das Terrain vertieft nutzen wollen, z.B. um schwimmen oder campen zu gehen. Aber für die meisten User reicht die Abstraktion der Karte aus, um sich im Terrain zu orientieren.

![[wettingen_abstraktion.png]]


> [!hint] Tipp
> 
> Mit diesen Konzepten können Sie die Komplexität im Kopf reduzieren. Fragen Sie sich: 
> - Welches Modul schaue ich gerade an? Ignorieren Sie den Rest des Systems für den Moment einfach!
> - Muss ich die Implementierung des Moduls verstehen? Falls nicht, konzentrieren Sie sich einfach auf die Abstraktion!
