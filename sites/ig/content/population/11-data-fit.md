---
title: Reale Daten mit Modell vergleichen
---
# Reale Daten mit Modell vergleichen

In diesem Kapitel werden wir KORA-Daten mit unserem eigenen exponentiellen Datenmodell nachbilden und beide Datensätze graphisch gegenüberstellen.

## Combo-Chart erstellen

1. Dazu kopieren wir zuerst das Tabellenblatt "Logistisches Wachstum" und benennen diese Blatt in ein neues Tabellenblatt: "KORA mit Modell" um.
![[11-data-fit.png]]
2. Wir fügen zwei leere Spalten ein. Dort werden wir die KORA-Daten hineinkopieren. Bislang haben wir die Jahre von 1 an gezählt, die KORA-Daten haben Jahre seit 1994. Benennen Sie die Spalten einfach sinnvoll, damit Sie die Jahresangaben auseinanderhalten können, z.B. "Realer Wolfsbestand" und "Reales Jahr".
3. Plotten Sie nun beide Datenreihen in einem "Combo"-Diagramm aus einem Linien- und einem Balkendiagramm. Einige Tipps:
	1. Gehen Sie vom Liniendiagramm aus, dass Sie bereits haben. Mit Recktsklick auf das Diagramm, wählen Sie "Daten auswählen...". Jetzt können Sie links eine neue Datenserie auswählen - da können Sie den realen Wolfsbestand auswählen.
	2. Sie können aus dem realen Wolfsbestand ein Balkendiagramm machen, indem Sie auf "Diagrammtyp ändern..." klicken und links auf "Combo". Dort können Sie pro Datenserie einen eigenen Diagrammtyp auswählen.
	3. Hier ein Beispiel, wie Ihr Diagramm am Schluss aussehen könnte
![[combodiagramm.png]]

## Unser Modell in der Zeit verschieben

Sie werden schnell merken, dass es sehr angenehm wäre, wenn Sie den Zeitpunkt nach hinten verschieben können, ab wann Ihr Modell die Populationsdynamik übernimmt und die Zunahme berechnet. Wir lösen das, indem wir ein "Startjahr" fürs Modell bestimmen und die Zunahme erst ab diesem Zeitpunkt überhaupt berechnen. Tönt kompliziert, ist aber recht einfach:

1. Fügen Sie neben Zunahmefaktor und Kapazität  eine Konstante "Startjahr" hinzu.
2. Jetzt machen wir die Formel in der Spalte "Zunahme" konditionell mit der =WENN()-Funktion. 


> [!question] Frage
> 
> Versuchen die Logik selbst in einer Formel umzusetzen: `Wenn das aktuelle Jahr kleiner ist als das Startjahr, ist die Zunahme 0. Ansonsten ist die Zunahme unsere Formel, die wir bisher verwendet haben.`

> [!solution]- Lösung
> 
> Wenn mein Startjahr in der Zelle D3 steht und ich mich auf der Zeile 5 befinde:
> 
> ```excel
> =WENN(A5<$D$3;0;B5*$D$1*C5)
> ```

