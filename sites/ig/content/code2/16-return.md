---
title: return-Statement
---
## Das return-Statement für Funktionen

Sie haben gesehen, wie man Funktionen definiert und Werte als Argumente in die Parameter einer Funktion abfüllt. Aber wie könnten wir **Werte von der Funktion wieder ins Hauptprogramm zurückgeben**?

In den meisten Programmiersprachen dient dazu das `return`-Statement. Sobald in einer Funktion `return` aufgerufen wird, gibt die Funktion sofort angegebenen Wert zurück. `return` **beendet die Funktion** sofort und alle Anweisungen oder Schleifenwiederholungen, die danach kämen, werde nicht mehr ausgeführt.

Ein einfaches erstes Beispiel:
```turtle
def addieren(a, b):
	ergebnis = a + b
	return ergebnis

resultat = addieren(3, 5)
print("Das Resultat ist", resultat)
```

Hier wird der Variabel `resultat` also **der Wert von `addieren(3, 5)` zugewiesen**. Das geht, weil die Funktion auch tatsächlich mit `return` einen Wert zurückgibt. Man sagt: **`addieren(3, 5)` wertet zu `8` aus**. In der Variabel wird also nur noch der retournierte **Wert** `8` gespeichert, nicht die Funktion `addieren(3, 5)` selbst.


> [!example] Grösser als 5?
> 
> Schreiben Sie eine Funktion `biggerthanfive(zahl)`, die `True` zurückgibt, wenn `zahl` grösser ist als 5, und ansonsten `False`. 


> [!example] Gerade?
> 
> Schreiben Sie eine Funktion `gerade(zahl)`, die `True` zurückgibt, wenn `zahl` gerade ist, und ansonsten `False`. 
> 
> Tipp: Mit `%` (Modulo) erhalten Sie den **Rest einer Division**. `17 % 3` gibt 2.

