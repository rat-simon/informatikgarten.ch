---
display: hidden
---

In diesem Experiment soll - was ziemlich realistisch ist - exponentielles und beschränktes Wachstum miteinander kombiniert werden. Wir nehmen an, dass die Zunahme proportional zum aktuellen Wolfsbestand **als auch** proportional zur Restkapazität ist. Das bedeutet mathematisch, dass sie proportional zum _Produkt_ der beiden ist.

> [!info] Unser neues Modell
> 
> Auf einer Insel leben 100 Wölfe.  
> Die Ressourcen der Insel reichen für höchstens 1000 Wölfe.  
> Die Zunahme der Wölfe pro Jahr sei proportional zum aktuellen Bestand als auch proportional zur Restkapazität.

Wenn bei einem Wachstumsvorgang die Zunahme proportional zum Bestand als auch zur Restkapazität ist, spricht man von _**logistischem Wachstum**_.

1. Gehen Sie vom Tabellenblatt für das beschränkte Wachstum aus. Kopieren Sie das Tabellenblatt und speichern Sie es unter dem neuen Namen „04 Logistisches Wachstum“ ab, damit Sie altes Tabellenblatt nicht aus Versehen überschreiben.
![[04-logistisch.png]]
2. Nun ändern wir die Formel für die **Zunahme** in Spalte C.
	$$
	\text{Zunahme} = \text{Wachstumsrate} \times \text{Wölfe zu Beginn} \times (1 - \frac{\text{Wölfe zu Beginn}}{\text{Kapazität der Insel}})
	$$
	Erstellen Sie die Formel bei C4 so, dass Sie sie später einfach auf den Rest der Spalte übertragen können.
> [!solution]- Lösung
> 
> ```excel
> =B4*$D$1*($D$2-B4)
> ```
3. Jetzt werden Sie merken, dass Sie ganz schreckliche Zahlen und ein fürchterliches Diagramm erhalten. Spielen Sie mit der Wachstumsrate und versuchen Sie sich so genau wie möglich zu verstehen, was das Problem ist. Es geht nicht darum, dass Sie bereits eine Problemlösung versuchen - oft liegt die Lösung einfach in der genauen Beschreibung eines Problems.

> [!solution]- Lösung
> 
> Das Problem unseres Modells ist: Es kann zu hohe Zunahmen für unsere Insel erzeugen - **das Modell hält sich nicht an die Kapazitätsgrenze der Insel**!
> 
> Das geschieht, weil die "Wachstumsrate" jetzt eine andere Wirkung hat. 

4. Wie sieht logistische Wachstumskurve aus? Erklären Sie, weshalb unser Modell recht realistisch ist.
5. Verändern Sie die Wolfszunahme im ersten Jahr in der Zelle D4 ein wenig (z.B. 25, 10, 35, 50). Was bewirkt diese Veränderung?