when creating a summary of a video tutorial, you should do the following:

- the main task is to give a great markdown summary and navigation for students who watch the
tutorial. we already have a component to link to specific times in a video using this syntax: <YT
time={0} videoId="4haAdmHqGOw" label="Tutorial starten" />. 
- we also have a python script to fetch the youtube chapters and transcript for you, both with timestamps. with this information, you should create a great summary. you find the python script in this folder named youtube_data.py
- if a video has official chapters, use those in the summary as the main structure and link the
timestamps using the <YT> component\
- if there are no official chapters, infer a reasonable main structure yourself and link the
timestamps using the <YT> component\
- use the transcript + timestamps for more detailed content inside the main structure + links
using the <YT> component
- use swiss german writing: avoid the german character eszett (ß) and instead use double s (ss)

here's an example for the beginning of the summary:

---
title: Donut-Tutorial 🍩
---
# Donut-Tutorial

<StickMe>
## Tutorial-Video

<Youtube id="4haAdmHqGOw" />
</StickMe>

## Zusammenfassung: Der komplette Blender-Einstieg mit dem Donut

Dieses umfassende Tutorial von Blender Guru ist DAS Standard-Tutorial für Blender-Anfänger. In knapp 5 Stunden lernen Sie alle wichtigen Grundlagen von Blender, während Sie einen fotorealistischen Donut mit Glasur und Streuseln erstellen. Das Tutorial wurde bereits millionenfach angeschaut und hat unzähligen Anfängern den Einstieg in die 3D-Welt ermöglicht.

### Schnellnavigation
<YT time={0} videoId="4haAdmHqGOw" label="Tutorial starten (0:00:00)" />
<YT time={135} videoId="4haAdmHqGOw" label="Interface & Navigation (0:02:15)" />
<YT time={916} videoId="4haAdmHqGOw" label="Donut modellieren (0:15:16)" />
<YT time={3428} videoId="4haAdmHqGOw" label="Glasur hinzufügen (0:57:08)" />
<YT time={5856} videoId="4haAdmHqGOw" label="Streusel erstellen (1:37:36)" />
<YT time={10032} videoId="4haAdmHqGOw" label="Materialien & Beleuchtung (2:47:12)" />
<YT time={14091} videoId="4haAdmHqGOw" label="Animation beginnen (3:54:51)" />
<YT time={17291} videoId="4haAdmHqGOw" label="Finales Video exportieren (4:48:11)" />

## Teil 1: Blender Grundlagen & Setup

### Erste Schritte
<YT time={0} videoId="4haAdmHqGOw" label="Intro (0:00:00)" />
Das Tutorial beginnt mit einer Einführung in Blender als kostenlose Open-Source 3D-Software für Animationen, VFX und praktisch alles in 3D.

<YT time={70} videoId="4haAdmHqGOw" label="Download und Installation (0:01:10)" />
Laden Sie Blender herunter und installieren Sie es - völlig kostenlos und für immer.

### Interface und Navigation
<YT time={135} videoId="4haAdmHqGOw" label="Interface & Navigation (0:02:15)" />
Lernen Sie die Blender-Benutzeroberfläche kennen und die grundlegenden Navigationstechniken.

<YT time={309} videoId="4haAdmHqGOw" label="Render Mode & Panning (0:05:09)" />
Verstehen Sie die verschiedenen Viewport-Modi und wie Sie durch die 3D-Szene navigieren.

<YT time={393} videoId="4haAdmHqGOw" label="Objekte bewegen und Kamera (0:06:33)" />
Erste praktische Schritte: Objekte bewegen, Kamera steuern und ersten Render erstellen.

<YT time={762} videoId="4haAdmHqGOw" label="Material ändern (0:12:42)" />
Grundlagen der Materialbearbeitung in Blender.