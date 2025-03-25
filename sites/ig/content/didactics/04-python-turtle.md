---
title: Python & Turtle
---
Nach dem visuellen Programmieren mit einer Plattform wie Scratch, gilt es auf den Sekundarstufen I und II, den **Übergang zu textbasierten Programmiersprachen** zu meistern. 

## Syntax

Die grösste Hürde dabei ist zweifelsfrei die **Syntax**, also wie man eine Programmiersprache schreiben muss, dass der Computer die Instruktionen versteht. Die Lernenden müssen defakto eine neue Sprache lernen und die sie grammatikalisch komplett korrekt schreiben. Ein einziges vergessenes Symbol - eine Klammer, ein Doppelpunkt, ein Punkt - führt oft dazu, dass ein Programm gar nicht mehr läuft.

Als Programmiersprache wird heutzutage oft Python verwendet, weil die Syntax von Python im Vergleich zu anderen Programmiersprachen sehr viel schlichter ist und Python in der Wissenschaft oft gebraucht wird. 

> [!NOTE]- Ein Vergleich von Python mit C
> 
> Ein kurzer Vergleich desselben Programms in Python und C, um den grössten gemeinsamen Teiler mit dem Euklidischen Algorithmus zu finden:
> 
> ```python filename="ggt.py"
> def ggt(a, b):
>     while b:
>         a, b = b, a % b
>     return a
> 
> # Beispiel
> zahl1 = 48
> zahl2 = 18
> ergebnis = ggt(zahl1, zahl2)
> print(f"Der grösste gemeinsame Teiler von {zahl1} und {zahl2} ist {ergebnis}")
> ```
> 
> ```c filename="ggt.c"
> #include <stdio.h>
> 
> int ggt(int a, int b) {
>     while (b) {
>         int temp = b;
>         b = a % b;
>         a = temp;
>     }
>     return a;
> }
> 
> int main() {
>     int zahl1 = 48;
>     int zahl2 = 18;
>     int ergebnis = ggt(zahl1, zahl2);
>     printf("Der grösste gemeinsame Teiler von %d und %d ist %d\n", 
>            zahl1, zahl2, ergebnis);
>     return 0;
> }
> ```

Der Einstieg erfolgt dann oft mit dem Turtle-Modul, das es erlaubt, mit einfachen Befehlen geometrische Figuren zu zeichnen. Die Turtle-Grafik ist ein Teil der Python-Standardbibliothek und erlaubt es, mit einer Schildkröte auf einem Bildschirm zu zeichnen. Die Schildkröte kann sich vorwärts und rückwärts bewegen, sich drehen und den Stift heben und senken. Die Turtle-Grafik ist ein einfacher Einstieg in die Programmierung, weil die Lernenden sofort sehen, was sie programmiert haben - und ob sie es sich richtig vorgestellt haben.

## Webbasierter Einstieg

Als Lehrpersonen werden Sie es schätzen lernen, wenn Ihre Schülerinnen und Schüler keine Programme installieren müssen. In der Sekundarstufe I haben Schulen oft Computerzimmer, auf denen die nötigen Programme bereits vorinstalliert sind.

Ist das nicht der fall, empfielt es sich, als Einstieg eine Web-Plattform zu verwenden. Die ETH Zürich unterhält dazu eine [Web-Instanz von TigerJython](https://webtigerpython.ethz.ch/).

![[04-python-eth-tigerpython.png]]

## Für Fortgeschrittene

Für komplexere Projekte werden Sie letztlich nicht darum herumkommen, Python auf den Rechnern Ihrer Schülerinnen und Schüler zu installieren. Dazu empfiehlt sich, eine populäre Entwicklungsumgebung zu nutzen. 

- [Visual Studio Code](https://code.visualstudio.com/) ist die aktuell populärste Entwicklungsumgebung mit Tausenden Erweiterungen und vielen Tutorials.
- [PyCharm](https://www.jetbrains.com/pycharm/) ist eine spezialisierte Entwicklungsumgebung für Python, die im Vergleich zu Visual Studio Code etwas einfacher zu bedienen ist.

