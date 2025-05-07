---
title: Rest mit Modulo
---
# Was übrig bleibt: Modulo

Heutzutage würden Sie wohl sagen $6 \div 5$ gibt $\frac{6}{5}$, $1\ \frac{1}{5}$, oder 1.2. Aber in der Primarschule haben Sie dividieren zuerst anders gelernt: Wenn Sie 6 Äpfel auf 5 Personen aufteilen müssten, hätten Sie gesagt, dass jede Person einen Apfel erhält und ein Apfel übrig bleibt. Kurz: $6 \div 5 = 1 \text{ Rest } 1$ .

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

Überlegen wir uns, wie sich der Modulo verhält. Stellen uns hierzu eine Funktion $f(x) = x \mod(5)$. Was für Zahlen kommen da raus?

```turtle
print("x % 5 =  y")
print("----------")
for x in range(30):
	print(x, "% 5 =", + x%5)
```

Sie sehen, der Modulo wiederholt periodisch immer wieder die gleichen Werte. Wenn Sie $f(x) = x \mod(5)$ als Graphen zeichnen würde, sähe das so aus:

![[01-modulo-plot.excalidraw]]

