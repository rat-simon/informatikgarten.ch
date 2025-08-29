Die Annahme eines linearen Wachstums ist für unsere Wolfspopulation nicht realistisch. Wir berücksichtigen z.B. nicht, dass bei einem grösseren Wolfbestand auch mehr Junge geboren werden, d.h. dass die Zunahme in der Regel von der Grösse der aktuellen Populationsgruppe abhängt.

Das wollen wir nun im zweiten Modell verbessern. Wir ändern das Modell so ab, dass die Zunahme **proportional zum aktuellen Wolfsbestand** ist. Ein Wachstum, bei dem die Zunahme proportional zum Bestand ist, heisst _**exponentielles Wachstum**_. Die proportionale Zunahme (z.B. 10%) nennt man die **Wachstumsrate**.

> [!NOTE] Unser Modell
> 
> Auf einer Insel leben 100 Wölfe. 
> 
> Jedes Jahr kommen 10% der Wölfe vom Jahresbeginn dazu.

1. Erstellen Sie eine Kopie des Tabellenblatts „01 Lineares Wachstum“. Benennen Sie das Blatt um in „02 Exponentielles Wachstum“ ab, damit Sie das alte Tabellenblatt nicht aus Versehen überschreiben.
![[02-exponentiell.png]]
2. Fügen Sie ganz oben eine neue Zeile ein. Dort speichern wir nun die **Wachstumsrate**. Bei A1 können Sie "Wachstumsrate" beschriften, den Wert können Sie weiter rechts in der Zeile speichern, z.B. D1.
![[02-exponentiell-1.png]]
3. Nun ändern wir die **Zunahme** in Spalte C. Dort stehen jetzt nämlich keine statischen Zahlen mehr, sondern eine Formel:
	$$
	\text{Zunahme} = \text{Wölfe zu Beginn} \times \text{Wachstumsrate}
	$$
	Erstellen Sie die Formel bei C3 so, dass Sie sie später einfach auf den Rest der Spalte übertragen können.
> [!solution]- Lösung
> 
> ```excel
> =B3*$D$1
> ```

1. Übertragen Sie diese Formel auf die ganze Spalte C.
2. Da auf der Insel keine halben Wölfe leben, wählen Sie das Zahlenformat so, dass keine Dezimalstellen angezeigt werden.
3. Beschreiben Sie, wie im Diagramm die Kurve des exponentiellen Wachstums aussieht.
4. Experimentieren Sie mit anderen Wachstumsraten. Was ändert sich an der Kurve bei den Werten 20 %, 30 %, 5 %, −10 %?
5. Passen Sie das Tabellenblatt so an, dass Sie den Zunahmefaktor (Wachstumsrate) nur einmal eingeben müssen, ohne dabei die ganze Spalte C kopieren zu müssen (absolute Zellbezüge).