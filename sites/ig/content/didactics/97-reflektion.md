---
title: "Reflektion: Wann braucht es eigene Schleifen?"
display: hidden
---
> [!success] Lernziele
> 
> - **Kontrollfluss besser verstehen**.

## Einfachheit bringt Kontrollverlust

Wir haben verschiedentlich mit Makecode immer wieder das gleiche Problem: Wir nutzen die vorgegebenen Startblöcke, aber dann kommt uns in die Quere, dass wir ihre Funktionsweise leider nicht anpassen können. Einige Beispiele dieses Problems.
### Linientracker

Intuitiv haben einige den Linientracker mit den Maqueen-Startblöcken versucht. Aber das hat Probleme verursacht, weil der Microbit diesen Ereignisblöcken die Sensoren nicht oft genug abgefragt hat. **Der Roboter reagierte zu langsam**!

![[scratch-07-reflektion-2024-10-16-21.46.58.excalidraw]]

Die Lösung? Wir haben eine **Endlosschleife mit eigenen if-Blöcken gebaut**. So wiederholte der Microbit die Befehle so schnell er nur kann.

### Fernsteuerung

Die Fernsteuerung haben wir zunächst miden Startblöcken für Knöpfe gebaut. Aber das erzeugt ein Problem: Mit den vorgefertigten, separaten Startblöcke konnten wir den Roboter nicht mehr stoppen, weil es **kein Ereignis gibt, wenn Sie den Knopf wieder loslassen**.

![[scratch-07-reflektion-2024-10-16-21.57.21.excalidraw]]

Die Lösung? Wir mussten eine **Endlosschleife mit eigenen if-Blöcken gebaut**, um mehr Kontrolle über den Programmablauf zu erlangen.
### Stopp... STOOPP!

Die Aufgabe "Gegenstand knuddeln" ist man intuitiv verlockt, mit einem "dauerhaft"-Block zu lösen. Das Problem dabei: **So hört das Programm nie auf**. Nachdem das Herz angezeigt würde, wäre die Distanz weiterhin kleiner als 6cm und die Sequenz mit dem langsam fahren würde erneut ausgeführt.

![[scratch-07-reflektion-2024-10-16-22.33.22.excalidraw]]
Die Lösung? Wir haben eine **eigene Schleife mit einer `running`-Variabel erstellt**, damit wir das Programm komplett beenden können.
## Die Moral von der Geschicht...

Wenn die vorgefertigten Blöcke etwas anderes tun, als Sie wollen, können Sie die gleiche Funktionalität meist nachbauen und so anpassen, dass es für Ihr Programm stimmt.

Ihre Gedanken könnten so ablaufen:
- Die Ereignisblöcke des Helligkeitssensors reagieren zu langsam, um der Linie zu folgen. Kann ich die Blöcke verändern? Nein! Also muss ich die Logik wohl selbst nachbauen.
- Es gibt keine Ereignisblöcke für wenn ich die Knöpfe wieder loslasse. Kann ich selbst neue Ereignisblöcke kreieren? Nein! Also muss ich die Logik wohl selbst nachbauen.
- Die dauerhaft-Schleife kann man nicht unterbrechen. Kann ich das ändern? Nein! Also muss ich die Logik wohl selbst nachbauen.