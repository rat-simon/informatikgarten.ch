---
title: Home
---

# Grüezi und willkommen

Informatikgarten ist jetzt open-source 🥳! Sie können den kompletten Quellcode der Webseite [auf Github](https://github.com/marcchehab/informatikgarten.ch) anschauen und Verbesserungen vorschlagen.

## Aktueller Stand und Todos

- [ ] Bugs
	- [ ] StickMe CSS broken
- [ ] Turtle editor
	- [ ] Python Language Server for syntax highlighting und autocomplete
	- [ ] Handin function for persistent code versions
	- [ ] Optimize touch devices
	- [ ] Integrate in UserData model
	- [ ] Feedback by teachers using Excalidraw
	- [ ] AI feedback for code
- [ ] Gamification
	- [ ] Web-USB für Gamecontroller (und evtl Microbit?)
	- [ ] Lesson with Godot
- [ ] LMS
	- [x] Klassen- und Gruppenverwaltung
	- [x] Frage-Komponenten mit Feedback-Funktion
	- [ ] Progress-Reporting
	- [ ] Exam solution with Safe Exam Browser (Exam.net?)
- [ ] Hosting platform
	- [ ] Teacher management
	- [ ] Payment solution
	- [ ] Custom exams per teacher?
	- [ ] Custom content per teacher?
- [ ] Backend
	- [ ] Remove old code storage once UserData model is integrated
	- [x] Nextauth move to Prisma & Prisma Connector
		- [x] Remove SQL statements
		- [x] Remove JWT logics
		- [x] Testing

- [X] Nextra
	- [X] Update to nextra4
	- [X] Possible to move all nextra modifications to site and use nextra as normal package? Yes! 🥳
- [x] Muxvideo-Blurup für Aspectratio at buildtime
- [x] Muxvideo build errors? (now throttled & catching)