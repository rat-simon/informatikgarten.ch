---
title: EVA, digital/analog
---
> [!success] Lernziele
> 
> - Sie wissen, was die Buchstaben des **"EVA"-Prinzip** bedeuten, und welche Teile auf dem Logik-Board diese Aufgaben übernehmen
> - Sie kennen den Hauptunterschied zwischen **analogen und digitalen** Signalen

## EVA = Eingabe-Verarbeitung-Ausgabe

Beginnen wir weit vorne: Ein Computer ist im Grunde eine **Datenverarbeitungsmaschine**. **Inputs** aus Maus, Tastatur, Datenbanken, Game-Controllern, *et cetera* werden **verarbeitet** und die Resultate als **Outputs** ausgegeben an Bildschirmen, Lautsprechern, Motoren, und so weiter... Und vielleicht wird zwischendurch ein **Speicher** gelesen oder beschrieben.

![[eva-prinzip.excalidraw.md]]

> [!discuss] Jetzt sind sie dran
> 
> Schauen Sie sich zu zweit oder zu dritt das Logikboard an. 
> ![[logicboard-top.jpg]]
> 1. Was für Möglichkeiten sehen Sie für Eingabe, Verarbeitung, Ausgabe?
> 2. Verbinden Sie mit einem Kabel einen Schalter und ein Lämpchen. Was passiert? Was ist jetzt Eingabe, was Verarbeitung, was Ausgabe?

> [!solution]- Lösung
> 
> ![[logicboard-top-eva.excalidraw.md]]

## Wie wollen wir Zahlen repräsentieren?

> [!discuss] Diskutieren Sie
> 
> Wir wollen ja einen Rechner bauen. Aber wie wollen wir Zahlen repräsentieren? Überlegen Sie sich im Speziellen die **Ausgabe**: Wie könnten wir mit Lämpchen Zahlen repräsentieren?
## Analoge und digitale Signale

Ein **analoges** Signal ist ein Signal, das **unendlich viele Werte innerhalb eines Bereichs** annehmen kann und **keine klaren Abgrenzungen**. Das Signal kann immer ein bisschen mehr oder ein bisschen weniger stark sein und man kann zwei Zustände ohne Probleme **mischen**.

Ein Beispiel wäre ein **Lichtdimmer** bei dem die Helligkeit jede beliebige Stufe zwischen komplett aus und maximal hell einnehmen kann. Viele Dinge in der Natur sind analog: z.B. **die Lautstärke oder die Höhe von Tönen**. Eher schwierig für analoge Signale sind Dinge mit klaren Grenzen: z.B. **exakte Zahlen** (1,2.5,132...) und **Buchstaben**. Der Nachteil eines analogen Signals ist, dass es beim Kopieren oder Weiterleiten sehr **anfällig auf Störungen** ist.

Für die Repräsentationen der Zahlen würde ein **analoges Signal** bedeuten, dass z.B. die **Stärke des Signals** die Zahl repräsentiert. Wenn wir einem ganz angestelltem LED den Wert 1000 gäben und einem ganz abgestelltem LED 0, wäre 371 ungefähr ein Drittel hell... Aber eben: Es wäre **unmöglich abzulesen**!

![[analog-digital.excalidraw]]
Im Gegensatz dazu arbeitet ein **digitales** Signal mit **klar definierten Zuständen**, oft in Form von "ON" (1) und "OFF" (0). Man kann die Zustände nicht mischen, "Halb-ON" (0.5) gibt es schlicht nicht. Ein solches Signal ist viel weniger anfällig auf Störungen, dafür hat man **Mühe, Dinge mit weichen Übergängen zu repräsentieren** - eben genau wie Töne und Farben. Klar abgetrennte Dinge wie Ganzzahlen und Buchstaben sind dafür sehr gut darstellbar.

Wir werden also ein **digitales Signal** verwenden - die Lämpchen sind **entweder an (ON) oder aus (OFF)**. Wir sagen: **OFF = 0 und ON = 1**.

> [!note]- Strom ist naturgemäss analog. Aber gibt es digitale Grössen in der Natur?
> 
> Digitale Signale sind Unterschiede in der **Stromspannung** (Volt). Aber Spannung ist in der Natur eine analoge Grösse. Wenn Sie also die Spannung eines digitalen Signals in einem Kabel messen würden, würde das ungefähr so aussehen.
> 
> ![[strom-oszilloskop.png]]
> 
> Es gibt aber durchaus auch natürliche digitale Grössen. Ein Beispiel wären die vier Basen der DNA.
> 
> ![[dna.png]]
> 
> Aus der Perspektive der Teilchenphysik könnte man auch argumentieren, dass viele Grössen, die wir analog erleben, tatsächlich digital sind, wenn sie quantifiziert vorliegen.

## Binär: Zahlen aus nur 0 und 1?

Wie wollen wir also mit drei solchen LEDs Zahlen repräsentieren? Wenn man nur **LEDs zählt**, die ON sind, hat man vier Zahlen: 0, 1, 2, 3. 

Aber wir können viel mehr Zahlen verwenden, wenn wir alle **möglichen Kombinationen verwenden**. Wie viele Kombinationen gibt es?

![[binary-kombinatorik.excalidraw]]