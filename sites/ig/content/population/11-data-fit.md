---
title: Reale Daten mit Modell vergleichen
---
# Reale Daten mit Modell vergleichen

In diesem Kapitel werden wir KORA-Daten mit unserem eigenen logistischen Datenmodell nachbilden und beide Datensätze graphisch gegenüberstellen.

## Combo-Chart erstellen

1. Dazu kopieren wir zuerst das Tabellenblatt mit dem Modell, das Sie verwenden möchten, und benennen das neue Blatt z.B. in diesem Fall "KORA mit logistischem Modell".
![[11-data-fit.png]]
2. Wir fügen zwei leere Spalten ein. Dort werden wir die KORA-Daten hineinkopieren. Bislang haben wir die Jahre von 1 an gezählt, die KORA-Daten haben Jahre seit 1994. Benennen Sie die Spalten einfach sinnvoll, damit Sie die Jahresangaben auseinanderhalten können, z.B. "Realer Wolfsbestand" und "Reales Jahr".
3. Plotten Sie nun beide Datenreihen in einem "Combo"-Diagramm aus einem Linien- und einem Balkendiagramm. Einige Tipps:
	1. Gehen Sie vom Liniendiagramm aus, dass Sie bereits haben. Mit Rechtsklick auf das Diagramm, wählen Sie "Daten auswählen...". Jetzt können Sie links eine neue Datenserie auswählen - da können Sie den realen Wolfsbestand auswählen.
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


## R² für unser Modell berechnen

![[10-data-plot-6.png]]
*By Orzetto - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=11398293*

Wir haben gesehen, dass R² misst, wie gut ein Modell zu den Daten passt. Wir können R² auch für unser eigenes Modell berechnen. Dazu müssen wir für jedes Jahr zwei Fehlerquadrate berechnen: 
- Einmal die Differenz zwischen dem realen Wolfsbestand und dem modellierten Wolfsbestand
- und einmal die Differenz zwischen dem realen Wolfsbestand und der Nullhypothese (dem Durchschnitt aller realen Wolfsbestände). Diese Summe der quadrierten Abweichungen vom Durchschnitt nennt man in der Statistik auch die **Varianz**.

1. Fügen Sie eine Konstante "Durchschnitt realer Wolfsbestand" ein, die den Durchschnitt aller realen Wolfsbestände berechnet.
2. Fügen Sie zwei Spalten ein: "Fehlerquadrat Modell" und "Fehlerquadrat Nullhypothese".
3. In der Spalte "Fehlerquadrat Modell" berechnen Sie die Differenz zwischen dem realen Wolfsbestand und dem modellierten Wolfsbestand und quadrieren diese.
4. In der Spalte "Fehlerquadrat Nullhypothese" berechnen Sie die Differenz zwischen dem realen Wolfsbestand und dem Durchschnitt aller realen Wolfsbestände und quadrieren diese.
5. Am Ende der Tabelle berechnen Sie die Summe beider Fehlerquadrate. Jetzt haben Sie die Summe der roten und blauen Flächen oben im Bild.
6. Jetzt können Sie R² berechnen mit der Formel:

$$
R^2 = 1 - \frac{\color{blue}Summe\ der\ Fehlerquadrate\ des\ Modells}{\color{red}Summe\ der\ Fehlerquadrate\ der\ Nullhypothese\ (Varianz)}
$$

In Excel:

Diese Formel nimmt an, dass die Fehlerquadrate des Modells in der Spalte E und die Fehlerquadrate der Nullhypothese in der Spalte F stehen:

```excel
=1-(SUMME(E5:E30)/SUMME(F5:F30))
```

## Interpretation von R²-Werten

Was bedeutet der berechnete R²-Wert nun konkret?

- **Je näher bei 1, desto besser**: Ein R² von 1 bedeutet, dass unser Modell die Daten perfekt erklärt
- **Je näher bei 0, desto schlechter**: Ein R² nahe 0 zeigt, dass unser Modell die Variation in den Daten kaum erklärt
- **Unter 0**: Negative R²-Werte bedeuten, dass unser Modell schlechter ist, als wenn wir einfach den Durchschnitt nehmen würden - ein klares Zeichen, dass das Modell ungeeignet ist

