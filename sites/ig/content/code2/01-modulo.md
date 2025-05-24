---
title: Rest mit Modulo
---
# Was übrig bleibt: Modulo

<<<<<<< HEAD
Heutzutage würden Sie wohl sagen $6 \div 5$ gibt $\frac{6}{5}$, $1\ \frac{1}{5}$, oder 1.2. Aber in der Primarschule haben Sie dividieren zuerst anders gelernt: Wenn Sie 6 Äpfel auf 5 Personen aufteilen müssten, hätten Sie gesagt, dass jede Person einen Apfel erhält und ein Apfel übrig bleibt. Kurz: $6 \div 5 = 1 \text{ Rest } 1$ .
=======

> [!success] Lernziele
> 
> - Sie verstehen den Modulo und können den Modulo-Operator in Python verwenden.


Heutzutage würden Sie wohl sagen $6 \div 5$ gibt $1.2$, $1\ \frac{1}{5}$, oder $\frac{6}{5}$. Aber in der Primarschule haben Sie dividieren zuerst anders gelernt: Wenn Sie 6 Äpfel auf 5 Personen aufteilen müssten, hätten Sie gesagt, dass jede Person einen Apfel erhält und **ein Apfel übrig bleibt**. Kurz: $6 \div 5 = 1 \text{ Rest } 1$ .
>>>>>>> a95ac13392137bde1eb617567d7f15ca06c31132

In der Mathematik gibt es eine Operation, die diesen Rest einer Divison produziert: den **Modulo**. Einige Beispiele:

- $6 \mod(5) = 1$
- $7 \mod(5) = 2$
- $14 \mod(5) = 4$
- $8 \mod(4) = 0$
- $9 \mod(2) = 1$
- $89 \mod(10) = 9$
- $100 \mod(10) = 0$

In der Mathematik sehen Sie das vielleicht auch ohne Klammern geschrieben. Wichtig für die Informatik: In Python ist der "Modulo"-Operator `%`.

```turtle
print("6 % 5 =", 6 % 5) # 1
print("7 % 5 =", 7 % 5) # 2
print("14 % 5 =", 14 % 5) # 4
print("8 % 4 =", 8 % 4) # 0
print("9 % 2 =", 9 % 2) # 1
print("89 % 10 =", 89 % 10) # 9
print("100 % 10 =", 100 % 10) # 0
```

Überlegen wir uns, wie sich der Modulo verhält. Stellen wir uns hierzu eine Funktion $f(x) = x \mod(5)$ vor, also eine Funktion, die für alle $x$ den Rest der Division durch $5$ berechnet. Was für Zahlen kommen da raus?

```turtle
print("x % 5 =  y")
print("----------")
for x in range(30):
	print(x, "% 5 =", + x%5)
```

Sie sehen, der Modulo wiederholt periodisch immer wieder die gleichen Werte. Wenn Sie $f(x) = x \mod(5)$ als Graphen zeichnen würde, sähe das so aus:

![[01-modulo-plot.excalidraw]]

Im Alltag treffen Sie den Modulo immer an, wenn Sie eine analoge Uhr anschauen. Denn eine analoge Uhr ist eigentlich nichts anderes als eine Visualisierung des Modulo 12. Wenn es 9 Uhr ist und Sie 4 Stunden später schauen, ist es 1 Uhr. Mathematisch gesprochen: $(9 + 4) \mod(12) = 1$. 


![[modulo_clock.svg]]

Die Rechenoperationen mit Modulo werden in der Mathematik in der "**modularen Arithmetik**" untersucht. Dieses Feld ist in der Informatik speziell im Bereich der Kryptographie von Bedeutung.

Der normale Modulo ist beim Programmieren oft hilfreich, um z.B. eine Liste von Elementen zyklisch zu durchlaufen. Wenn Sie z.B. das Alphabet durchlaufen wollen, möchten Sie nach "Z" wahrscheinlich wieder bei "A" anfangen. Das würden Sie mit der ASCII-Tabelle und dem Modulo erreichen. Genauere Informationen dazu finden Sie im Kapitel zur [[../crypto/crypto-02-caesar|Caesar-Verschlüsselung]].

