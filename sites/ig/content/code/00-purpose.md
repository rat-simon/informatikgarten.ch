---
title: 🏗️ Was erschaffen wir?
---
In diesem Teil bauen Sie Ihr erstes Programm in Python: eine Schildkröte, die ein Bild zeichnet. Sie lernen dabei neben der Programmiersprache Python auch, wie aus Binärzahlen Grafiken und Bilder werden.

![[listenbild_teaser.mp4]]

## Wieso programmieren lernen?

Wenn Sie programmieren können, haben Sie **Zugang zu schier unendlicher Rechenleistung**. Mit dem Grundwissen, das Sie hier lernen werden, können Sie diese Rechenleistung für was auch immer Sie interessiert einsetzen - seien es Spiele, Musik, eigene Roboter, interaktive Grafiken, die Weltherrschaft...

Beginnen wir mit einer Demonstration: Suchen Sie im Kopf **alle Primzahlen bis 100** und schätzen Sie, wie lange Sie gebraucht haben. Ich habe Ihnen hier ein Programm geschrieben, dass genau dieselbe Aufgabe löst, indem es einfach **alle ungeraden Zahlen bis 51 durchtestet**. Was denken Sie, wie lange hat der Computer? Drücken Sie einfach mal auf **"Start"**. (Natürlich müssen Sie das Programm (noch) nicht verstehen.)

```turtle
import time

kandidat = 1
maximum = 100

def isprime(kandidat):
	for divisor in range(2,int(kandidat/2+1)):
		if kandidat%divisor == 0:
			return 0
	return 1
  
def findprimes(maximum):
	start = time.time()
	list = [2]
	for kandidat in range(3,maximum,2):
		if isprime(kandidat):
			list.append(kandidat)
	end = time.time()
	return (list, end-start)

result = findprimes(maximum)
print("Unsere Liste:", result[0])
print("Zeit in Millisekunden:", result[1]*1000)
```

Wow! Das ging schnell! Man merkt eigentlich gar nicht, dass überhaupt Zeit verstrichen ist - *so* schnell ging das. Zum Glück hat Ihr Computer zusätzlich auch noch die Zeit für uns (ungefähr) gemessen: Es ging **einige Millisekunden** - also Tausendstelsekunden, oder 10<sup>-3</sup> Sekunden, oder 10e-3 Sekunden - um für jede ungerade Zahl zwischen 2 und 100 alle möglichen Divisoren durchzutesten und so die Primzahlen herauszusuchen. 

Und: Das geht noch viel schneller! Erstens ist diese Web-Umgebung sehr ineffizient. Ein Programm auf Ihrem Computer könnte das **einige 100-mal schneller** ausrechnen. Mein Laptop braucht z.B. für den gleichen Algorithmus nur gerade **2.5 Mikrosekunden** - also Millionstelsekunden, oder 10<sup>-6</sup> Sekunden, oder 10e-6 Sekunden. Das ist rund 400-mal schneller!

Auch da ist die Limite der Optimierung immer noch nicht erreicht: 
1. Der Prozess nutzt nur einen von vier Kernen in meinem Prozessor. Man könnte die verschiedenen Kerne **parallel rechnen** lassen. Auf einer Grafikkarte wäre das noch extremer: Die haben Tausende Kerne, die parallel rechnen!
2. Der **Algorithmus** selbst könnte noch stark optimiert werden. Wir testen hier stumpfsinnig einfach alle möglichen Divisoren einer Zahl bis zur Hälfte durch. Aber eigentlich müssten wir nur die Zahlen **kleiner als $\sqrt{100}$** testen.

Aber so optimierungsfähig das Programm auch ist, es zeigt einen zweiten beeindruckenden Aspekt: Sie wollen alle Primzahlen bis 1000 anstatt nur bis 100? Na dann: Ändern Sie auf Linie 4 einfach die Zahl bei "maximum" zu 1000 und drücken Sie erneut auf "Start".

Zack! Und schon sind sie da: Alle Primzahlen bis 1000 ausgerechnet in nur **wenigen Hunderstelsekunden** (zum Vergleich: bei mir lokal ging es 65 Mikrosekunden).

Bei diesen Geschwindigkeiten kommt man plötzlich auf völlig neue Fragen: Nimmt die Dichte der Primzahlen eigentlich ab, je höher die Zahlen sind? Ok, finden und plotten wir doch einfach mal alle Primzahlen bis zu einer Million. (Die Primzahlen zu finden ging bei mir lokal übrigens 40 Sekunden.)

![[prime-distribution.excalidraw]]
Vielleicht denken Sie sich: "So interessant sind Primzahlen nun auch wieder nicht..." Aber: **Um Primzahlen geht es mir nicht!** Vielmehr möchte ich Ihnen zeigen, wie enorm schnell moderne Computer sind. Und diese Rechenleistung können Sie anzapfen für was auch immer Ihnen Spass macht! 

Aber eben nur, wenn Sie programmieren lernen.