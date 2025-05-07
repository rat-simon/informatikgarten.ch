---
title: Der Rest mit dem Modulo
---
Den Rest einer Division können Sie mit dem "Modulo"-Operator `%` ausrechnen.

```turtle
print ("8 % 3:", 8 % 3 ) # 8 durch 3 hat einen Rest von 2
print ("8 % 4:", 8 % 4 ) # 8 durch 4 hat einen Rest von 0
```

Überlegen wir uns, wie sich der Modulo verhält. Stellen uns hierzu eine Funktion $f(x) = x \mod(5)$. Was für Zahlen kommen da raus?

```turtle
for x in range(30):
	print("x/y = " + str(x) + "/" + str(x%5))
```

Sie sehen, der Modulo wiederholt periodisch immer wieder die gleichen Werte. Wenn Sie das als Graphen zeichnen würde, sähe er so aus:

![[01-modulo-plot.excalidraw]]

