---
title: Wann macht welches Grafikformat Sinn?
---
> [!success]  Lernziele
> 
> - Sie können erklären, wieso **Bildsensoren** eine Schicht aus Farbfilter haben und was das **Bayer-Muster** ist.
> - Sie wissen, welches Grafikformat bei **Schriftarten** allermeistens verwendet wird.

Als vereinfachte Fausregel könnte man sagen: **Der Ursprung bestimmt das Grafikformat.** In der Praxis bestimmt meistens die Ursprungstechnologie, ob sich Raster- oder Vektorenformate besser eignen. 
## Bei Kameras machen Rastergrafiken Sinn

Überlegen Sie sich beispielsweise, wie eine Kamera funktioniert:

1. Erkennt eine Kamera Kurven und geometrische Formen in der Welt, und speichert diese ab?
2. Oder misst sie an ganz vielen Punkten die Farben des Lichts, das ins Objektiv fällt?

> [!solution]- Lösung
> 
> Nummer 2 beschreibt die Funktionsweise einer Kamera viel besser. 

Eine Kamera ist im Wesentlichen ein Lichtsensor mit einer Linse. 
- Die **Linse** ist dazu da, das Bild scharf auf den Sensor zu projizieren.
- Der **Sensor** besteht aus zwei Schichten:
	- Ein Farbfilter, der nur eine Farbe des Lichts durchlässt.
	- Lichtsensitive Zellen darunter (Photodioden), in denen das gefilterte Licht mehr oder weniger Spannung aufbaut, die nachher in ein digitales Signal gewandelt wird.

![[Bayer_pattern_on_sensor.svg]]

![[Bayer_pattern_on_sensor_profile.svg]]

Diese Lichtsensoren sind Pixeln ganz ähnlich. Aber man kann nicht alle Farben pro Lichtsensor messen, sondern braucht den Farbfilter. Weshalb aber das sogenannte **"Bayer"-Muster** mit dem vielen Grün?

Wie [der Kino-Kamera-Hersteller Red erklärt](https://www.red.com/red-101/bayer-sensor-strategy), muss man bei der Sensor-Herstellung drei verschiedene Ziele gegeneinander abwägen:
- Wie viel Licht empfangen werden kann (Helligkeit),
- welche Farbe das Licht hat (Farbe),
- wo genau das Licht den Sensor trifft (Auflösung).

Diese Ziele widersprechen sich beim Bau eines Sensors teilweise. Das Bayer-Muster hat sich bisher einfach als die beste Lösung erwiesen. Aber, wer weiss, vielleicht entwickeln Sie ja die nächste Generation von besseren Bildsensoren?

Dass im Bayer-Muster doppelt so viel Grün wie Rot oder Blau vorkommt, hat unter anderem biologische Gründe:
- Menschen sehen Helligkeitsunterschiede besser als Farbunterschiede, weil wir mehr Stäbchen als Zapfen auf der Retina unserer Augen haben. Wenn Sie abends unter einer Strassenlaterne stehen und sich mal genau achten, merken Sie vielleicht, dass Sie gar keine Farbunterschiede mehr wahrnehmen...
- Wir sind besonders sensitiv auf Grün, das einen viel grösseren Effekt auf die wahrgenommene Helligkeit eines Bildes hat als Blau und Rot.

Der Farbe Grün mehr Fotozellen zuzuweisen, führt daher zu einem weitaus besser aussehenden Bild, als wenn alle drei Farben gleichmässig vertreten wären.

Diese Bayer-Muster sind ein Grund für die Verwendung von Greenscreens, die Sie aus Filmen kennen - oder, eben nicht.

![[Pasted-image-20231203224244.jpg]]

> [!example] Kurze Diskussion
> 
> Wieso macht(e) es technisch Sinn, einen Greenscreen zu gebrauchen?

> [!solution]- Lösung
> 
> Grün ist eine der dominierenden Farben in der Farbfilterung moderner Bildsensoren. Da die Kamera-Sensoren **mehr grüne Pixel** haben als rote oder blaue, wird das grüne Farbspektrum bei der Bildaufnahme besonders gut abgebildet, was zu einer besseren Bildqualität führt. Dies trägt dazu bei, dass Objekte vor einem grünen Hintergrund **leichter und präziser vom Rest des Bildes getrennt** werden können.
> 
> Allerdings ist die Wahl des Greenscreens nicht nur auf technische Überlegungen zurückzuführen. Grün ist eine Farbe, **die in der Kleidung oder Haut von Menschen selten vorkommt**, was es einfacher macht, diese vom Hintergrund zu unterscheiden.
> 
> In einigen Szenarien, insbesondere bei dunklen Szenen, kann jedoch auch der **Bluescreen** vorteilhaft sein, da Blau weniger reflektiert als Grün und daher weniger störende Lichtreflexionen aufweist.
> 
> Diese technische Überlegung hat heutzutage an Bedeutung verloren, da moderne Kameras und Software in der Lage sind, mit einer Vielzahl von Farben zu arbeiten. Doch der Greenscreen bleibt aufgrund seiner Effizienz und praktischen Vorteile weiterhin weit verbreitet.

Vor diesem Hintergrund der Ausgangstechnologie macht es nur Sinn, dass **Fotos und Videos als Rastergrafik** gespeichert werden anstatt als Vektorgrafiken. Schauen Sie sich die vielen Farben in diesem schönen Foto einer Bonobo-Mutter mit ihrem Baby an (von [jjjj56cp](https://www.flickr.com/photos/25171569@N02/34025263502)). Dieses Bild hat 12 Megapixel (3551px x 3380px) und 8 Bit Farbtiefe. Anstatt die unkomprimierte, theoretische Datenmenge von 36 Megabyte, macht das Grafikformat JPEG das Bild bei nur schon rudimentärer Komprimierung 3.7MB. 

![[bonobo.jpg]]

Wir könnten das schon versuchen in eine Vektorgrafik zu konvertieren, aber das ganz offenbar wenig Sinn! Auch die Dateigrösse ist enorm im Vergleich: **Das SVG ist 22.8 Megabyte**! 

![[bonobo.svg]]

## Bei Grafiken mit klaren Formen machen Vektorgrafiken Sinn

Sie haben in der letzten Lektion auf [svgviewer.dev](https://www.svgviewer.dev/) eine SVG-Grafik editiert. Sie könnten diese auch als PNG (eine Rastergrafik) speichern. Genauso wie es wenig Sinn macht, Fotos als Vektorgrafiken zu speichern, macht es oft wenig Sinn, eine Rastergrafik zu speichern, **wenn die Originaldaten als Vektoren vorliegen** - wieso sollten wir die Information der geometrischen Figuren zerstören?

Am meisten merken Sie das bei einer Grafik, die Sie sicherlich gar nicht mehr als solche wahrnehmen: Texte und **Schriftarten**. Sie könnten Ihr Dokument natürlich als Rastergrafiken verschicken, aber das macht fast nie Sinn - und Ihre Empfänger hätten garantiert keine Freude.
### TrueType und OpenType Schriftarten

Ein weiterhin populäres Format sind die sogenannten TrueType-Schriftarten, die in den späten 1980er Jahren von Apple entwickelt und später von Microsoft übernommen wurde. Microsoft entwickelte das Format später mit Adobe weiter zu OpenType-Schriftarten.

Diese Schriftarten verwenden vektorbasierte Grafiken für die Definition jedes Zeichens oder "**Glyphen**". Die Glyphen können so in jeder Grösse klar und scharf dargestellt werden kann. Jede Glyphe wird **durch Kurven definiert**, die typischerweise quadratische Bézier-Kurven sind. Diese Kurven werden durch Kontrollpunkte bestimmt, die die Schriftart-Designer festlegen. Durch die Veränderung dieser Kontrollpunkte kann das Aussehen der Glyphen angepasst werden.

Schauen Sie sich das selbst in einem Onlineeditor für Schriftarten an. Laden Sie dazu unter "Example" eine Beispielschriftart auf [glyphrstudio.com](https://www.glyphrstudio.com/online/). Sie sehen: Text ist einfach eine Serie von Vektorgrafiken - nämlich Buchstaben.

![[Pasted-image-20231204071017.png]]


> [!info] Zusammenfassung
> 
> ## Kameras
> 
> Dass eine Kamera Rastergrafiken erzeugt, ist relativ logisch, wenn man ihre Funktionsweise überlegt. Eine Kamera ist im Wesentlichen ein Lichtsensor mit einer Linse. 
> - Die **Linse** ist dazu da, das Bild scharf auf den Sensor zu projizieren.
> - Der **Sensor** besteht aus zwei Schichten:
> 	- Ein Farbfilter, der nur eine Farbe des Lichts durchlässt.
> 	- Lichtsensitive Zellen darunter (Photodioden), in denen das gefilterte Licht mehr oder weniger Spannung aufbaut, die nachher in ein digitales Signal gewandelt wird.
> 
> ![[Bayer_pattern_on_sensor.svg]]
> 
> Dieses "Bayer"-Muster hat sich bislang einfach als die beste Lösung für Digitalkameras herausgestellt, die drei verschiedene Ziele gegeneinander abwägen müssen:
> - Wie viel Licht empfangen werden kann (Helligkeit),
> - welche Farbe das Licht hat (Farbe),
> - wo genau das Licht den Sensor trifft (Auflösung).
> 
> Vor diesem Hintergrund der Ausgangstechnologie macht es nur Sinn, dass Fotos als Rastergrafik gespeichert werden anstatt als Vektorgrafiken.
> 
> ## Die ultimative Undercover-Grafik: Schriftarten
> 
> Schriftarten verwenden vektorbasierte Grafiken für die Definition jedes Zeichens oder "Glyphen". Glyphen können so in jeder Grösse klar und scharf dargestellt werden kann.
> 
> Jede Glyphe wird durch Kurven definiert. Wie bei allen Vektorgrafiken werden Pfade als **Bézier-Kurven** gespeichert. 
> 
> ![[Pasted-image-20231204071017.png]]

