---
title: Home
---
# Grüezi und willkommen

Nachdem ich Hunderte Stunden an dieser Webseite gearbeitet habe, hat mich das durchwegs positive Feedback zu Informatikgarten in den Unterrichtsbefragungen sehr gefreut - herzlichen Dank! 🥲

- *"Informatikgarten ist eine SUPER Webseite und mega hilfreich."*
- *"Informatikgarten ist sehr gut und machte mir das Lernen einfach."*
- *"Informatikgarten ist perfekt für mich zum Lernen, denn Sie erklären es sehr verständlich und haben auch gute Videos dazu hochgeladen."*
- *"Die Lernvideos sind super."*
- *"Ich finde die Webseite Informatikgarten sehr toll und dass man dort schwierige Sachen nachlesen kann, oder auch dass die Erklärungen sehr ausführlich sind."*
- *"Ich finde es sehr gut, dass auf Informatikgarten alles erklärt ist."*

Informatikgarten ist open-source 🥳! Sie können den kompletten Quellcode der Webseite [auf Github](https://github.com/marcchehab/informatikgarten.ch) anschauen und zu jeder Lektion direkt Verbesserungen vorschlagen. 
## Variowoche: Special Effects mit Blender

In einem früheren Leben war ich selbstständig und habe Dokumentarfilme und Videos produziert. Zudem bin ich seit 24 Jahren beim Open-Source-3D-Programm Blender mit dabei. Dieses Jahr mache ich deswegen eine Variowoche zu Blender und Special Effects! (22. September - 26. September 2025)

![[vario.webp]]

## Aktueller Stand und Todos

- [ ] LMS
	- [ ] Connect SQL questions with UserData model
	- [ ] Progress reporting per student / class
	- [ ] Exam solution with Safe Exam Browser (Exam.net?)
	- [ ] Klassen- und Gruppenverwaltung
	- [x] Frage-Komponenten mit Feedback-Funktion
- [ ] Turtle editor / coding experience
	- [ ] Integrate in UserData model
	- [ ] Pyodide + Turtle module? ([candidate by raspberrypi foundation](https://github.com/RaspberryPiFoundation/turtle))
	- [ ] Python Language Server for syntax highlighting und autocomplete
	- [ ] Handin, Feedback
		- [ ] Hand-in function for persistent code versions
		- [ ] Feedback by teachers using Excalidraw
		- [ ] AI feedback for code?
	- [ ] Optimize touch devices
	- [ ] Web-USB für Gamecontroller (und evtl Microbit?)
	- [ ] Remove old code storage once UserData model is integrated
- [ ] Hosting platform 
	- [ ] Teacher management
	- [ ] Payment solution
	- [ ] Custom exams per teacher?
	- [ ] Custom content per teacher?
- [ ] Content
	- [ ] Split Coding in two chapters?
	- [ ] Update Network
	- [ ] Security / Hacking
	- [ ] Blender vfx
	- [ ] AI
	- [ ] Godot games

- [x] Backend
	- [x] Nextauth move to Prisma & Prisma Connector
		- [x] Remove SQL statements
		- [x] Remove JWT logics
		- [x] Testing
- [X] Bugs
	- [X] StickMe CSS broken
- [X] Nextra
	- [X] Update to nextra4
	- [X] Possible to move all nextra modifications to site and use nextra as normal package? Yes! 🥳
- [x] Muxvideo-Blurup für Aspectratio at buildtime
- [x] Muxvideo build errors? (now throttled & catching)