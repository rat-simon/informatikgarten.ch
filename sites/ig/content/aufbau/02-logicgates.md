
> [!success] Lernziele
> 
> - Sie wissen, was die **Logikgates** in der Tabelle tun und kennen ihre **Wahrheitstabellen und Symbole**. (Die mathematische Notation müssen Sie *nicht* auswendig lernen.)
> - Sie können aus einfachen logischen Schaltungen eine **Wahrheitstabelle ableiten**.

Ihr Computer ist eine Rechenmaschine, die auf purer Logik aufgebaut ist. Es gibt keine Magie, kein "Geist" in der Maschine - alles ist von Grund auf nachvollziehbar. In dieser Lektion bauen wir einen Rechner, der zwei binäre Zahlen addieren kann.

In den nächsten Lektionen machen wir uns daran, einen **Addierer** zu bauen. In der Sprache von Modulen gesprochen:
- Sie müssen Logikgates nur nutzen können (die Schnittstelle genügt, die Funktionsweise müssen Sie sich nicht merken), Sie müssen nicht verstehen, wie Sie elektrotechnisch aufgebaut werden.
- Sie müssen den Addierer mit Logikgates implementieren können (also die Funktionsweise wirklich verstehen).

![[module-overview-logicgates.excalidraw]]

## Aus Transistoren werden Logikbausteine

> [!NOTE]- Wie baut man Logikgates?
> 
> Im [Nand-Game](https://nandgame.com/) können Sie die Logikgates von Grund auf aus "Relais" bauen, die man sich gut vorstellen kann. Heutzutage werden diese **Gates aus Transistoren** mit Halbleitern gebaut, was den entscheidenden Vorteil hat, dass sie keine beweglichen Teile haben und deswegen viel schneller, kleiner und energieeffizienter sind. 
> 
> Falls Sie das interessiert, versuchen Sie doch das Nand-Game. Zu diesem ersten Teil hier ein Video:
> 
> ![[aufbau-nandgame-01.mp4]]

Sie haben auf dem Logikboard die Logikgates untersucht und gemerkt: Diese Logikgates implementieren jeweils eine Logikfunktion, wie z.B. "und", "nicht", oder "oder".

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
## Zahlen aus nur 0 und 1?

Nun stellt sich die Frage: Wie wollen wir mit nur drei LEDs Zahlen repräsentieren? 

Wenn man einfach **LEDs zählen** würde, die ON sind, hätte man vier Zahlen: 0, 1, 2, 3. Aber wir können viel mehr Zahlen verwenden, wenn wir alle **möglichen Kombinationen verwenden**. 

Wie viele Kombinationen gibt es?

![[binary-kombinatorik.excalidraw]]

Aus dieser Überlegung können wir **ein Zahlensystem bauen** - wie Sie in der nächsten Lektion sehen werden.

