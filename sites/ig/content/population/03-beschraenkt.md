---
title: Beschränktes Wachstum
---
# Beschränktes Wachstum

Exponentielles Wachstum trifft in der Realität nur auf befristete Wachstumsphasen zu, in der Regel zu Beginn einer Entwicklung. Keine Population kann beliebig lange exponentiell wachsen, da die Ressourcen (Nahrung, Lebensraum etc.) beschränkt sind: Es gibt weder eine Insel noch einen Planeten, der beliebig vielen Wölfen Platz und Nahrung bieten würde.

Deshalb schränken wir das Wachstum nun ein, indem wir eine maximale Anzahl Wölfe vorgeben, die auf der Insel leben können. Das Wachstum ist nun nicht mehr einfach proportional zur Anzahl Wölfe, sondern proportional zur Anzahl Wölfe, die noch Platz haben, der sog. _**Restkapazität**_.

> [!NOTE] Unser Modell
> 
> Auf einer Insel leben 100 Wölfe.
> Die Ressourcen der Insel reichen für höchstens 1000 Wölfe.  
> Jedes Jahr nimmt die Population um 10 % der Restkapazität zu.

1. Gehen Sie vom Tabellenblatt für das exponentielle Wachstum aus. Kopieren Sie das Tabellenblatt und speichern Sie es unter dem neuen Namen "03 Beschränktes Wachstum" ab, damit Sie das alte Tabellenblatt nicht aus Versehen überschreiben.
![[03-beschraenkt.png]]
2. Fügen Sie nach der Wachstumsrate nochmal eine Zeile ein für die "Kapazität der Insel". Speichern Sie den Wert wieder etwas weiter rechts, z.B. in D2.
![[03-beschraenkt-1.png]]

3. Verändern Sie nun die Formel in der Zelle C2 so, dass der Zuwachs nicht proportional zur Anzahl Wölfe ist, sondern proportional zur Restkapazität der Insel.
	$$
	\text{Zunahme} = \text{Wachstumsrate} \times (\text{Kapazität der Insel} - \text{Wölfe zu Beginn})
	$$
	Erstellen Sie die Formel bei C4 so, dass Sie sie später einfach auf den Rest der Spalte übertragen können.
> [!solution]- Lösung
> 
> ```excel
> =($D$2-B4)*$D$1
> ```

4. Übertragen Sie diese Formel wieder auf die ganze Spalte.
5. Wie verläuft die Entwicklung, wenn die Ressourcen nur für 50 Tiere reichen?