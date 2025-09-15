---
title: Logik-Gates
---

> [!success] Lernziele
> 
> - Sie wissen, was die **Logikgates** in der Tabelle tun und kennen ihre **Wahrheitstabellen und Symbole**. (Die mathematische Notation müssen Sie *nicht* auswendig lernen.)
> - Sie können aus einfachen logischen Schaltungen eine **Wahrheitstabelle ableiten**.

Ihr Computer ist eine Rechenmaschine, die auf purer Logik aufgebaut ist. Es gibt keine Magie, kein "Geist" in der Maschine - alles ist von Grund auf nachvollziehbar. 

Um Ihnen das zu zeigen, bauen wir in den nächsten Lektionen einen **Addierer**, der zwei Zahlen zusammenzählen kann. Dazu brauchen wir sogenannte **Logikgates** - das sind elektrotechnische Schaltkreise, die eine grundsätzliche Logikfunktion implementieren, sodass Sie zum Beispiel fragen können: " Ist A oder B gleich 1 ? "

Konzentrieren Sie sich auf die relevanten Inhalte:
- Sie müssen **Logikgates nur nutzen** können, die **Schnittstelle genügt**. Sie müssen sich die Funktionsweise nicht merken, also wie die Logikgates im Innern elektrotechnisch aufgebaut werden.
- Sie müssen den Addierer mit Logikgates implementieren können (also die Funktionsweise wirklich verstehen).

![[module-overview-logicgates.excalidraw]]

## Logikgates: Die grundsätzlichen Logikbausteine eines Computers

> [!NOTE]- Wie baut man Logikgates?
> 
> Im [Nand-Game](https://nandgame.com/) können Sie die Logikgates von Grund auf aus "Relais" bauen, die man sich gut vorstellen kann. Heutzutage werden diese **Gates aus Transistoren** mit Halbleitern gebaut, was den entscheidenden Vorteil hat, dass sie keine beweglichen Teile haben und deswegen viel schneller, kleiner und energieeffizienter sind. 
> 
> Falls Sie das interessiert, versuchen Sie doch das Nand-Game. Zu diesem ersten Teil hier ein Video:
> 
> ![[aufbau-nandgame-01.mp4]]

Sie haben auf dem Logikboard die Logikgates untersucht und gemerkt: Diese Logikgates implementieren jeweils eine Logikfunktion, wie z.B. "und", "nicht", oder "oder". Wir haben dazu **Wahrheitstabellen** geschrieben, um zu erfassen, was diese Logikgates tun.
![[logikgates-overview.excalidraw]]

Schaltungen kann man auch aus mehreren Logikgates bauen und dazu dann eine Wahrheitstabelle schreiben. 

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

