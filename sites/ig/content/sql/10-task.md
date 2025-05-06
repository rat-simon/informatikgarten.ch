---
title: Weltbank-Indikatoren Projekt
---
# Weltbank-Indikatoren Projekt: Daten mit SQL in Python

## Einführung
Mit Python und SQLite könnten Sie komplexe Datenanalysen durchführen, ohne einen separaten Datenbankserver einrichten zu müssen - alles in einer einzigen Anwendung und mit normalem SQL.
## Auftrag
Für diesen Auftrag erhalten Sie die ultimative Trivia-Datenbank in SQLite: **Über 200 Entwicklungsindikatoren der Weltbank für alle Länder der Welt seit 1960**. Diese Datenbank enthält Informationen zu zahlreichen Aspekten der globalen Entwicklung wie Wirtschaftswachstum, Bildung, Gesundheit, Umwelt und vieles mehr.

Die Datenbank enthält bloss **eine Tabelle namens *indicators***. Ein kleiner Auszug dieser Tabelle, damit Sie sich das vorstellen können: Hier habe ich die Daten der Schweiz im Jahr 2020 selektiert. Jedes Land hat für jedes Jahr seit 1960 eine solche Reihe, die ganz viele Spalten für jeden Entwicklungsindikator - das sind über 200 Spalten! Sie finden am Ende dieser Seite eine Erklärung aller Spalten in der Tabelle "indicators".

![[10-task-dataview.png]]

Zum Verständnis: Sie könnten diese Reihe über die Schweiz also mit folgendem SQL-Query selektieren:

```sql
SELECT *
FROM indicators
WHERE year = 2020
AND country = "che"
```

Entwickeln Sie innerhalb von 6 EIBE-Lektionen ein eigenes Python-Projekt, das diese Datenbank nutzt, um interessante Erkenntnisse zu gewinnen oder eine interaktive Anwendung zu erstellen. Ihr Projekt sollte mindestens fünf SQL-Abfragen beinhalten und die Daten in einer sinnvollen Weise rudimentär verarbeiten.

**Nützliche Hinweise:** 
- Die Daten sind nicht immer vollständig, speziell wenn Sie in der Zeit vor 1990 zurückgehen.
- Nutzen Sie künstliche Intelligenz, um den Beispielcode nachzuvollziehen. z.B. "Wir machen in den Schule ein Projekt mit SQLite in Python und ich verstehe diese Zeilen im Beispielcode nicht: 
	```
	conn = sqlite3.connect('world_bank_indicators.db')
	cursor = conn.cursor()
	```
- Wenn Sie von KI generierten Code abgeben, müssen Sie die Verwendung transparent mitteilen.
- Bei Fragen oder Wünschen nach Erklärvideos können Sie mich jederzeit erreichen.

## Arbeitsschritte
1. **Analyse der Datenbank (1. Lektion):** Erkunden Sie die Struktur der Datenbank und die verfügbaren Indikatoren, schauen Sie den Beispielcode an
2. **Konzeptentwicklung (1. Lektion):** Entscheiden Sie, welche Art von Projekt Sie umsetzen möchten
3. **Planung (1. Lektion):** Skizzieren Sie Ihr Projekt und definieren Sie die benötigten SQL-Abfragen
4. **Implementierung (2-3 Lektionen):** Programmieren Sie Ihr Projekt
5. **Test und Optimierung (1 Lektion):** Testen Sie Ihr Projekt und nehmen Sie Verbesserungen vor
## Setup

### Erklärvideo

![[wb_setup.mp4]]

1. **Projektordner erstellen:** Erstellen Sie einen neuen, leeren Ordner für Ihr Projekt, z.B. `worldbank_project`
2. **SQLite-Datenbank:** Laden Sie [die SQLite-Datenbank herunter](/sql/world_bank_indicators.db) und speichern Sie die Datei im Projektordner als `world_bank_indicators.db`
3. **Öffnen Sie den Ordner in Visual Studio Code:** Über Datei (File) > Ordner öffnen (Open Folder)
4. **Python-Beispielcode ausführen:** Erstellen Sie eine Python-Datei namens `example.py` und fügen Sie den Beispielcode ein, um sicherzustellen, dass alles funktioniert.
5. **Python-Datei erstellen:** Erstellen Sie eine neue Python-Datei, z.B. `main.py`, in Ihrem Projektordner

> [!code]- Beispiel-Code mit Erklärungen für `example.py`
> 
> Im Beispiel werden für Strings oft sogenannte f-Strings verwendet, die vorne an den Anführungszeichen noch ein f haben, also z.B. f"ein Beispiel". F-Strings sind eine einfache Art, den Wert von Variabeln im String schön zu formatieren. Falls Sie das interessiert, schauen Sie sich die [f-Strings-Dokumentation](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals) an. (Generell ist die Python-Dokumentation Spitze!)
> 
> ```python
> import sqlite3
> 
> # Ich nutze print anstatt Kommentare, damit Sie in der Ausgabe sehen können, was passiert
> 
> print("Wir öffnen die Datenbank, das gibt uns ein Cursor-Objekt, mit dem wir SQL-Abfragen durchführen können")
> conn = sqlite3.connect('world_bank_indicators.db')
> cursor = conn.cursor()
> 
> print("\n---------- EINFACHE ABFRAGE ------------")
> print("Jetzt führen wir eine SQL-Abfrage aus, wie Sie es gelernt haben. (\"\"\" ist übrigens ein mehrzeiliger String)")
> cursor.execute("""
>     SELECT country, year, gdp_per_capita 
>     FROM indicators 
>     WHERE year = 2015 AND gdp_per_capita IS NOT NULL
>     ORDER BY gdp_per_capita DESC 
>     LIMIT 3
> """)
> 
> print("Ergebnisse abrufen und in 'results' speichern")
> print()
> print("---------- DAS 'ROHE' ERGEBNIS ------------")
> results = cursor.fetchall()
> print("Wenn wir die rohen Ergebnisse anzeigen, sehen Sie, dass die Reihen des Ergebnisses in einer Liste von unveränderbaren Unterlisten (sogenannten 'Tupeln') geliefert werden:")
> print(results)
> print()
> 
> print("---------- DAS 'FORMATIERTE' ERGEBNIS ------------")
> print("Wir können mit einer for-Schleife durch die äussere Liste iterieren und die Inhalte der inneren Tupel mit einem Index adressieren wie bei Listen")
> for reihe in results:
>     print("----> Aktuelle Reihe:", reihe)
>     print("Das Land:", reihe[0])
>     print("Das Jahr:", reihe[1])
>     print("Das BIP pro Kopf:", reihe[2])
> print()
> 
> print("Wir können mit der for-Schleife das Tupel jeder Reihe auch direkt auf drei Variabeln verteilen (das nennt man 'destrukturieren' und es ist doch einfach wunderschön)")
> for country, year, gdp in results:
>     print(f"{country}: ${gdp:,.2f}")
> 
> print("\n---------- FEHLERBEHANDLUNG ------------")
> print("Oft sind Daten nicht vollständig. Wir sollten prüfen, ob Werte fehlen (NULL in SQL, None in Python):")
> 
> def sicherer_zugriff(wert, formatierung=None):
>     """Gibt 'Keine Daten' zurück, wenn der Wert None ist, sonst den formatierten Wert"""
>     if wert is None:
>         return "Keine Daten"
>     elif formatierung == "währung":
>         return f"${wert:,.2f}"
>     elif formatierung == "prozent":
>         return f"{wert:.1f}%"
>     else:
>         return wert
> 
> # Beispiel mit potenziell fehlenden Daten
> cursor.execute("""
>     SELECT country, gdp_per_capita, literacy_total
>     FROM indicators
>     WHERE year = 2010
>     LIMIT 5
> """)
> 
> print("\nBeispiel für den Umgang mit fehlenden Daten:")
> for land, gdp, literacy in cursor.fetchall():
>     print(f"Land: {land}, BIP pro Kopf: {sicherer_zugriff(gdp, 'währung')}, Alphabetisierungsrate: {sicherer_zugriff(literacy, 'prozent')}")
> 
> print("\n---------- KOMPLEXERE SQL-ABFRAGEN ------------")
> 
> print("\nBeispiel 1: Mehrere Bedingungen kombinieren")
> cursor.execute("""
>     SELECT country, birth_rate, death_rate, birth_rate - death_rate AS natural_growth
>     FROM indicators
>     WHERE year = 2015 
>     AND birth_rate IS NOT NULL 
>     AND death_rate IS NOT NULL
>     ORDER BY natural_growth DESC
>     LIMIT 5
> """)
> 
> print("\nLänder mit dem höchsten natürlichen Bevölkerungswachstum (2015):")
> for land, geburtenrate, sterberate, wachstum in cursor.fetchall():
>     print(f"{land}: Geburtenrate {geburtenrate:.1f}, Sterberate {sterberate:.1f}, Natürliches Wachstum {wachstum:.1f}")
> 
> print("\nBeispiel 2: Aggregation und Gruppierung")
> print("Aggregatfunktionen wie COUNT, AVG, MAX, MIN oder SUM helfen uns, Daten zusammenzufassen")
> print("Hier ein Beispiel für die durchschnittliche BIP-Wachstumsrate der letzten 10 Jahre für verschiedene Länder:")
> 
> cursor.execute("""
>     SELECT 
>         country,
>         AVG(gdp_growth) AS durchschnitt_wachstum,
>         COUNT(gdp_growth) AS anzahl_datenpunkte
>     FROM indicators
>     WHERE year BETWEEN 2012 AND 2021
>       AND gdp_growth IS NOT NULL
>     GROUP BY country
>     HAVING COUNT(gdp_growth) >= 5  -- Nur Länder mit mindestens 5 Datenpunkten
>     ORDER BY durchschnitt_wachstum DESC
>     LIMIT 10
> """)
> 
> print("\nTop 10 Länder nach durchschnittlichem BIP-Wachstum (2012-2021):")
> print("| Land | Durchschnittliches Wachstum (%) | Anzahl Datenpunkte |")
> print("|------|--------------------------------|-------------------|")
> for land, wachstum, anzahl in cursor.fetchall():
>     print(f"| {land:<4} | {wachstum:^30} | {anzahl:^19} |")
> 
> print("\nWir können auch die Länder mit dem niedrigsten Wachstum anzeigen:")
> cursor.execute("""
>     SELECT 
>         country,
>         AVG(gdp_growth) AS durchschnitt_wachstum,
>         COUNT(gdp_growth) AS anzahl_datenpunkte
>     FROM indicators
>     WHERE year BETWEEN 2012    AND 2021
>       AND gdp_growth IS NOT NULL
>     GROUP BY country
>     HAVING COUNT(gdp_growth) >= 5
>     ORDER BY durchschnitt_wachstum ASC
>     LIMIT 5
> """)
> 
> print("\nLänder mit dem niedrigsten durchschnittlichen BIP-Wachstum (2012-2021):")
> for land, wachstum, anzahl in cursor.fetchall():
>     print(f"{land}: {wachstum}% (basierend auf {anzahl} Jahren mit Daten)")
> 
> print("\n---------- BENUTZERINTERAKTION ------------")
> print("Wir können das Programm interaktiv gestalten, indem wir den Benutzer nach Eingaben fragen")
> print("Beispiel: Ein Benutzer gibt ein Jahr ein und sieht die Top 3 Länder mit der höchsten Alphabetisierungsrate")
> 
> def interaktives_beispiel():
>     jahr = input("\nGeben Sie ein Jahr zwischen 1960 und 2022 ein: ")
>     if not jahr.isdigit() or int(jahr) < 1960 or int(jahr) > 2022:
>         print("Ungültige Eingabe! Bitte geben Sie ein Jahr zwischen 1960 und 2022 ein.")
>         return
>     
>     # Parametrisierte Abfrage
>     cursor.execute("""
>         SELECT country, literacy_total
>         FROM indicators
>         WHERE year = ? AND literacy_total IS NOT NULL
>         ORDER BY literacy_total DESC
>         LIMIT 3
>     """, [jahr])  # Parameter als Liste (oder Tupel) übergeben
>     
>     results = cursor.fetchall()
>     
>     if not results:
>         print(f"Keine Daten für das Jahr {jahr} gefunden!")
>         return
>         
>     print(f"\nTop 3 Länder mit der höchsten Alphabetisierungsrate im Jahr {jahr}:")
>     for i, (land, rate) in enumerate(results, 1):
>         print(f"{i}. {land}: {rate:.1f}%")
>     
> # Kommentieren Sie die nächste Zeile aus, wenn Sie die interaktive Funktion ausprobieren möchten
> interaktives_beispiel()
> 
> # Verbindung schliessen
> conn.close()
> 
> print("\nViel Erfolg bei Ihrem Projekt!")
> ```

## Projektideen
Hier sind einige Vorschläge als Inspiration:
### Interaktive Daten-Präsentation
Erstellen Sie eine textbasierte Präsentation, die den Benutzer durch eine Datenanalyse zu einem bestimmten Thema führt.
- Beispiel: "Ich habe mich für die Geburtenrate im Nahen Osten interessiert und wollte das genauer untersuchen. Willkommen zu meiner interaktiven Präsentation - drücken Sie Enter, wenn Sie bereit sind."
- Präsentieren Sie schrittweise Daten, Vergleiche und Schlussfolgerungen.
- Tipp: Sie können die Funktion `input()` gebrauchen, um Benutzereingaben zu speichern - oder auch einfach, um Ihr Programm anzuhalten, bis die Benutzer Enter drücken.
### Interaktives Trivia-Spiel
Entwickeln Sie eine Konsolenanwendung, die zufällige oder thematisch gruppierte Fragen stellt und die Antworten des Benutzers überprüft.
- Beispielfragen: "Welches Land hatte im Jahr 2000 am meisten Einwohner?", "In welchem Land hatte der kleinste Teil der Bevölkerung Zugang zu Elektrizität im Jahr 2015?"
- Fügen Sie eine Funktion hinzu, die dem Benutzer nach der Beantwortung zusätzliche Informationen anzeigt.
- Sie könnten auch verschiedene Schwierigkeitsgrade und einen Punktestand implementieren.
### Erste Schritte und Beispiele im Erklärvideo

![[wb_firststeps.mp4]]

> [!success]- Ideen für ambitionierte Programmierer
> 
> Sie können dieses Projekt gern nutzen, um sich neue Kenntnisse im Programmieren beizubringen. Diese Ideen werden Ihr Zeitbudget sprengen. Tun Sie das nur, wenn Sie Spass daran haben.
> 
> ### Datenvisualisierung
> Erstellen Sie eine Anwendung, die ausgewählte Daten aus der Datenbank visualisiert.
> - Nutzen Sie Turtle für einfache Grafiken oder recherchieren Sie fortgeschrittenere Bibliotheken wie Matplotlib oder Plotly
> - Visualisieren Sie Trends über Zeit, geografische Verteilungen oder Korrelationen zwischen verschiedenen Indikatoren
> - Ermöglichen Sie dem Benutzer, verschiedene Visualisierungsoptionen auszuwählen
> 
> ### Grafische Benutzeroberfläche (GUI)
> Für fortgeschrittene Lernende: Entwickeln Sie mit TkInter eine grafische Oberfläche für die Datenbank.
> - Erstellen Sie Suchfunktionen, Filter und Sortieroptionen
> - Zeigen Sie Ergebnisse in Tabellen an
> - Bieten Sie die Möglichkeit, ausgewählte Daten zu exportieren oder zu visualisieren
> 
> ### Webbasierte Anwendung
> Entwickeln Sie mit Flask eine Webanwendung.
> - Stellen Sie eine Suchoberfläche bereit
> - Visualisieren Sie Daten im Browser
> - Bieten Sie interaktive Elemente wie Karten oder Diagramme an

## Erwartete Projektelemente
Unabhängig von Ihrer gewählten Projektart sollten folgende Elemente enthalten sein:

1. **SQL-Abfragen:** Mindestens 5 verschiedene SQL-Abfragen unterschiedlicher Komplexität, 2 davon mit Aggregatsfunktionen
2. **Datenverarbeitung:** Verarbeitung der abgefragten Daten mit print, if ... else oder Ähnlichem.
3. **Benutzerinteraktion:** Eine Methode, mit der Benutzer mit Ihrem Programm interagieren können, z.B. mit `input()`
4. **Dokumentation:** Kommentare im Code und eine README-Datei, die das Projekt erklärt
5. **Fehlerbehandlung:** Denken Sie daran, dass Daten fehlen können, oder Ihre Nutzer auf eine Frage ungültiges Kauderwelsch eingeben könnten.

## Bewertungskriterien
Ihr Projekt wird nach folgenden Kriterien bewertet:

### 1. Präsentation, Design, Konzept (40%)
- Eine Readme-Datei erklärt mindestens, was das Programm ist und wie man es ausführt. Die Datei kann als readme.txt, readme.md, oder readme.pdf vorliegen. Sie können jedwede Informationen hinzufügen, die Sie als relevant erachten.
- Benutzerfreundlichkeit und Gestaltung der Anwendung
- Originalität der Projektidee
### 2. Programm: SQL-Abfragen (30%)
- Korrektheit und Funktionalität der SQL-Abfragen
- Sinnvolle Verwendung von Aggregatfunktionen
- Komplexität und Vielfalt der verwendeten SQL-Queries
### 3. Programm: Python-Code Qualität (30%)
- Korrekte Syntax und Funktionalität
- Lesbarkeit, Strukturierung, Organisation des Codes
- Nivea der Programmierkonzepte
- Fehlerbehandlung und Programmrobustheit
## Abgabe
Sie geben mir über ein Team-Assignment am Schluss *eine* ZIP-Datei mit all Ihren Projektdateien ab namens `Nachname_Vorname.zip`. Im ZIP-Archiv sollten sich befinden:
- Eine README-Datei mit Erläuterungen zu Ihrem Projekt (Textdatei, Markdown oder PDF)
- Ihre Python-Datei(en) (z.B. `main.py`, `functions.py`, etc.)
- NICHT die SQLite-Datenbank (ausser Sie verändern sie, z.B. durch das Erstellen einer neuen Tabelle)
- Alle anderen Dateien, die Sie für Ihr Projekt benötigen

Viel Erfolg und Spass bei Ihrem Projekt!

## Spalten in der Tabelle "indicators"

Die Datenbank enthält nur eine Tabelle namens *indicators*. Es folgt eine Tabelle der Spalten mit einer Erklärung, was diese Daten sind.

*Ich habe Ihnen als Inspiration einige Indikatoren markiert, die ich interessant finde.*

| Spalte in der Datenbank      | Erklärung                                                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **year**                     | Jahr                                                                                                                              |
| **country**                  | Ländercode mit drei Buchstaben nach [dieser Kodierliste (ISO 3166 ALPHA-3)](https://de.wikipedia.org/wiki/ISO-3166-1-Kodierliste) |
| updated_at                   | Aktualisierungsdatum                                                                                                              |
| **electricity_access**       | Zugang zu Elektrizität (% der Bevölkerung)                                                                                        |
| adjusted_savings             | Bereinigte Nettoersparnisse, einschliesslich Schäden durch Partikelemissionen (% des BNE)                                         |
| **adolescent_fertility**     | Jugendliche Fruchtbarkeitsrate (Geburten pro 1'000 Frauen im Alter von 15-19 Jahren)                                              |
| **age_dependency**           | Altersabhängigkeitsquotient (% der erwerbsfähigen Bevölkerung)                                                                    |
| irrigated_land               | Landwirtschaftlich bewässertes Land (% der gesamten landwirtschaftlichen Fläche)                                                  |
| agricultural_land            | Landwirtschaftliche Fläche (% der Landfläche)                                                                                     |
| **agriculture_value**        | Wertschöpfung Landwirtschaft, Forstwirtschaft und Fischerei (% des BIP)                                                           |
| air_transport                | Luftverkehr, registrierte Abflüge von Fluggesellschaften weltweit                                                                 |
| **alternative_energy**       | Alternative und Atomenergie (% des gesamten Energieverbrauchs)                                                                    |
| freshwater_withdrawal_pct    | Jährliche Süsswasserentnahme, gesamt (% der internen Ressourcen)                                                                  |
| freshwater_withdrawal_vol    | Jährliche Süsswasserentnahme, gesamt (Milliarden Kubikmeter)                                                                      |
| income_growth_bottom40       | Jährliche durchschnittliche Wachstumsrate des Pro-Kopf-Realeinkommens, untere 40% der Bevölkerung (%)                             |
| **income_growth_total**      | Jährliche durchschnittliche Wachstumsrate des Pro-Kopf-Realeinkommens, Gesamtbevölkerung (%)                                      |
| arable_land_pct              | Ackerfläche (% der Landfläche)                                                                                                    |
| arable_land_pp               | Ackerfläche (Hektar pro Person)                                                                                                   |
| bank_capital_ratio           | Bankkapital zu Vermögensverhältnis (%)                                                                                            |
| nonperforming_loans          | Notleidende Kredite der Banken zu Gesamtkrediten (%)                                                                              |
| **birth_rate**               | Geburtenrate, roh (pro 1'000 Einwohner)                                                                                           |
| skilled_birth_attendance     | Geburten mit qualifiziertem Gesundheitspersonal (% der Gesamtzahl)                                                                |
| broad_money                  | Geldmenge im weiteren Sinne (% des BIP)                                                                                           |
| business_disclosure          | Umfang der Offenlegung von Unternehmensinformationen (0=weniger bis 10=mehr)                                                      |
| death_communicable           | Todesursache durch übertragbare Krankheiten (% der Gesamtzahl)                                                                    |
| **death_injury**             | Todesursache durch Verletzungen (% der Gesamtzahl)                                                                                |
| death_noncommunicable        | Todesursache durch nicht übertragbare Krankheiten (% der Gesamtzahl)                                                              |
| **govt_debt**                | Staatsverschuldung, gesamt (% des BIP)                                                                                            |
| cereal_yield                 | Getreideertrag (kg pro Hektar)                                                                                                    |
| ip_payments                  | Gebühren für die Nutzung von geistigem Eigentum, Zahlungen (US$)                                                                  |
| ip_receipts                  | Gebühren für die Nutzung von geistigem Eigentum, Einnahmen (US$)                                                                  |
| primary_outofschool_female   | Kinder ausserhalb der Schule, Grundschule, weiblich                                                                               |
| primary_outofschool_male     | Kinder ausserhalb der Schule, Grundschule, männlich                                                                               |
| bank_branches                | Filialen von Geschäftsbanken (pro 100'000 Erwachsene)                                                                             |
| birth_registration           | Vollständigkeit der Geburtenregistrierung (%)                                                                                     |
| death_registration           | Vollständigkeit der Todesregistrierung mit Todesursache (%)                                                                       |
| port_traffic                 | Containerhafen-Verkehr (TEU: 20-Fuss-Container-Äquivalent)                                                                        |
| contraceptive_use            | Verhütungsmittelverbreitung (% der verheirateten Frauen 15-49 Jahre)                                                              |
| crop_production              | Pflanzenproduktionsindex (2014-2016 = 100)                                                                                        |
| current_account              | Leistungsbilanzsaldo (US$)                                                                                                        |
| death_rate                   | Sterberate, roh (pro 1'000 Einwohner)                                                                                             |
| deposit_rate                 | Einlagenzinssatz (%)                                                                                                              |
| credit_info_depth            | Index der Tiefe der Kreditinformationen (0=niedrig bis 8=hoch)                                                                    |
| diabetes_prevalence          | Diabetes-Prävalenz (% der Bevölkerung im Alter von 20-79 Jahren)                                                                  |
| domestic_credit_financial    | Inlandskredite des Finanzsektors (% des BIP)                                                                                      |
| domestic_credit_private      | Inlandskredite an den Privatsektor (% des BIP)                                                                                    |
| **ease_business_rank**       | Rang der Geschäftsfreundlichkeit (1=beste Regulierung)                                                                            |
| **power_consumption**        | Stromverbrauch (kWh pro Kopf)                                                                                                     |
| female_agri_employment       | Beschäftigung in der Landwirtschaft, weiblich (% der weiblichen Beschäftigung)                                                    |
| male_agri_employment         | Beschäftigung in der Landwirtschaft, männlich (% der männlichen Beschäftigung)                                                    |
| energy_imports               | Energieimporte, netto (% des Energieverbrauchs)                                                                                   |
| **energy_intensity**         | Energieintensität der Primärenergie (MJ/BIP in 2017 PPP $)                                                                        |
| energy_use                   | Energieverbrauch (kg Öläquivalent pro Kopf)                                                                                       |
| expense_gdp                  | Ausgaben (% des BIP)                                                                                                              |
| exports                      | Exporte von Waren und Dienstleistungen (% des BIP)                                                                                |
| external_debt_pct            | Auslandsverschuldung (% des BNE)                                                                                                  |
| external_debt_total          | Auslandsverschuldung, gesamt (US$)                                                                                                |
| **fertility_rate**           | Fruchtbarkeitsrate, gesamt (Geburten pro Frau)                                                                                    |
| fertilizer_use               | Düngemittelverbrauch (kg pro Hektar Ackerland)                                                                                    |
| firms_rd                     | Unternehmen, die in F&E investieren (% der Unternehmen)                                                                           |
| food_production              | Nahrungsmittelproduktionsindex (2014-2016 = 100)                                                                                  |
| fdi_inflows                  | Ausländische Direktinvestitionen, Nettozuflüsse (US$)                                                                             |
| forest_area_pct              | Waldfläche (% der Landfläche)                                                                                                     |
| forest_area_total            | Waldfläche (km²)                                                                                                                  |
| fossil_fuel_consumption      | Verbrauch fossiler Brennstoffe (% des Gesamtverbrauchs)                                                                           |
| fuel_exports                 | Kraftstoffexporte (% der Warenexporte)                                                                                            |
| **gdp**                      | BIP (US$)                                                                                                                         |
| **gdp_growth**               | BIP-Wachstum (jährlich %)                                                                                                         |
| **gdp_per_capita**           | BIP pro Kopf (US$)                                                                                                                |
| gdp_per_capita_growth        | BIP-Wachstum pro Kopf (jährlich %)                                                                                                |
| **gdp_per_capita_ppp**       | BIP pro Kopf, KKP (internationale $)                                                                                              |
| gdp_per_employed             | BIP pro Beschäftigten (konstant 2021 KKP $)                                                                                       |
| gdp_per_energy               | BIP pro Energieeinheit (konstant 2021 KKP $ pro kg Öläquivalent)                                                                  |
| gni_per_capita               | BNE pro Kopf, Atlas-Methode (US$)                                                                                                 |
| gni_per_capita_ppp           | BNE pro Kopf, KKP (internationale $)                                                                                              |
| gni_total                    | BNE, Atlas-Methode (US$)                                                                                                          |
| gni_ppp_total                | BNE, KKP (internationale $)                                                                                                       |
| gini_index                   | Gini-Index                                                                                                                        |
| **edu_expenditure_gdp**      | Bildungsausgaben, gesamt (% des BIP)                                                                                              |
| **edu_expenditure_govt**     | Bildungsausgaben, gesamt (% der Staatsausgaben)                                                                                   |
| edu_primary_spending         | Bildungsausgaben pro Schüler, Grundschule (% des BIP pro Kopf)                                                                    |
| edu_secondary_spending       | Bildungsausgaben pro Schüler, Sekundarschule (% des BIP pro Kopf)                                                                 |
| edu_tertiary_spending        | Bildungsausgaben pro Student, Hochschule (% des BIP pro Kopf)                                                                     |
| grants                       | Zuschüsse ohne technische Zusammenarbeit (US$)                                                                                    |
| capital_formation            | Bruttokapitalbildung (% des BIP)                                                                                                  |
| primary_intake_female        | Bruttoaufnahmequote in Grundschule, weiblich (%)                                                                                  |
| primary_intake_male          | Bruttoaufnahmequote in Grundschule, männlich (%)                                                                                  |
| gross_savings                | Bruttoersparnisse (% des BIP)                                                                                                     |
| **hightech_exports_pct**     | Hochtechnologie-Exporte (% der Fertigungsexporte)                                                                                 |
| hightech_exports_val         | Hochtechnologie-Exporte (US$)                                                                                                     |
| hospital_beds                | Krankenhausbetten (pro 1'000 Einwohner)                                                                                           |
| immunization_dpt             | Impfung gegen DPT (% der Kinder 12-23 Monate)                                                                                     |
| imports                      | Importe von Waren und Dienstleistungen (% des BIP)                                                                                |
| tuberculosis_rate            | Tuberkulose-Inzidenz (pro 100'000 Einwohner)                                                                                      |
| income_highest10             | Einkommensanteil der obersten 10%                                                                                                 |
| income_lowest10              | Einkommensanteil der untersten 10%                                                                                                |
| income_lowest20              | Einkommensanteil der untersten 20%                                                                                                |
| industry_value               | Wertschöpfung Industrie (% des BIP)                                                                                               |
| inflation_gdp                | Inflation, BIP-Deflator (jährlich %)                                                                                              |
| **inflation_consumer**       | Inflation, Verbraucherpreise (jährlich %)                                                                                         |
| interest_spread              | Zinsspanne (Kredit- minus Einlagenzinssatz)                                                                                       |
| energy_investment            | Investitionen in Energie mit privater Beteiligung (US$)                                                                           |
| transport_investment         | Investitionen in Transport mit privater Beteiligung (US$)                                                                         |
| **female_labor_force**       | Arbeitskräfte, weiblich (% der Gesamtarbeitskräfte)                                                                               |
| labor_force_total            | Arbeitskräfte, gesamt                                                                                                             |
| land_area                    | Landfläche (km²)                                                                                                                  |
| low_elevation_land           | Landfläche unter 5 Meter Höhe (% der gesamten Landfläche)                                                                         |
| cereal_land                  | Landfläche unter Getreideproduktion (Hektar)                                                                                      |
| lending_rate                 | Kreditzinssatz (%)                                                                                                                |
| life_expectancy_female       | Lebenserwartung bei Geburt, weiblich (Jahre)                                                                                      |
| life_expectancy_male         | Lebenserwartung bei Geburt, männlich (Jahre)                                                                                      |
| **life_expectancy**          | Lebenserwartung bei Geburt, gesamt (Jahre)                                                                                        |
| listed_companies             | Börsennotierte inländische Unternehmen, gesamt                                                                                    |
| literacy_female              | Alphabetisierungsrate, erwachsene Frauen (%)                                                                                      |
| literacy_male                | Alphabetisierungsrate, erwachsene Männer (%)                                                                                      |
| **literacy_total**           | Alphabetisierungsrate, Erwachsene gesamt (%)                                                                                      |
| literacy_youth_female        | Alphabetisierungsrate, junge Frauen (15-24 Jahre) (%)                                                                             |
| literacy_youth_male          | Alphabetisierungsrate, junge Männer (15-24 Jahre) (%)                                                                             |
| **literacy_youth**           | Alphabetisierungsrate, Jugend gesamt (15-24 Jahre) (%)                                                                            |
| logistics_index              | Logistikleistungsindex (1=niedrig bis 5=hoch)                                                                                     |
| market_cap                   | Marktkapitalisierung börsennotierter Unternehmen (% des BIP)                                                                      |
| maternal_mortality           | Müttersterblichkeitsrate (pro 100'000 Lebendgeburten)                                                                             |
| hightech_manufacturing       | Mittlere und hochtechnologische Fertigungswertschöpfung (%)                                                                       |
| mobile_subscriptions         | Mobilfunkabonnements (pro 100 Personen)                                                                                           |
| traffic_mortality            | Sterblichkeit durch Verkehrsunfälle (pro 100'000 Einwohner)                                                                       |
| infant_mortality             | Säuglingssterblichkeitsrate (pro 1'000 Lebendgeburten)                                                                            |
| neonatal_mortality           | Neugeborenensterblichkeitsrate (pro 1'000 Lebendgeburten)                                                                         |
| **under5_mortality**         | Sterblichkeitsrate unter 5 Jahren (pro 1'000 Lebendgeburten)                                                                      |
| oda_received_pct             | Erhaltene Entwicklungshilfe, netto (% des BNE)                                                                                    |
| oda_received_exp             | Erhaltene Entwicklungshilfe, netto (% der Staatsausgaben)                                                                         |
| oda_per_capita               | Erhaltene Entwicklungshilfe pro Kopf (US$)                                                                                        |
| **net_migration**            | Nettomigration                                                                                                                    |
| **oda_total**                | Erhaltene offizielle Entwicklungshilfe, gesamt (US$)                                                                              |
| new_businesses               | Neu registrierte Unternehmen (Anzahl)                                                                                             |
| surgical_procedures          | Anzahl chirurgischer Eingriffe (pro 100'000 Einwohner)                                                                            |
| exchange_rate                | Offizieller Wechselkurs (LCU pro US$)                                                                                             |
| metals_exports               | Erz- und Metallexporte (% der Warenexporte)                                                                                       |
| ppp_conversion               | KKP-Umrechnungsfaktor, BIP (LCU pro internationale $)                                                                             |
| patent_applications          | Patentanmeldungen, Inländer                                                                                                       |
| permanent_cropland           | Dauerkulturen (% der Landfläche)                                                                                                  |
| primary_persistence_female   | Verbleib bis zur letzten Klasse der Grundschule, weiblich (%)                                                                     |
| primary_persistence_male     | Verbleib bis zur letzten Klasse der Grundschule, männlich (%)                                                                     |
| remittances                  | Erhaltene persönliche Überweisungen (US$)                                                                                         |
| pop_0_14                     | Bevölkerung 0-14 Jahre (% der Gesamtbevölkerung)                                                                                  |
| pop_15_64                    | Bevölkerung 15-64 Jahre (% der Gesamtbevölkerung)                                                                                 |
| **pop_65plus**               | Bevölkerung 65 Jahre und älter (% der Gesamtbevölkerung)                                                                          |
| **pop_growth**               | Bevölkerungswachstum (jährlich %)                                                                                                 |
| urban_pop_large              | Bevölkerung in Ballungsräumen mit mehr als 1 Million (%)                                                                          |
| **slum_population**          | Bevölkerung in Slums (% der städtischen Bevölkerung)                                                                              |
| female_population            | Bevölkerung, weiblich (% der Gesamtbevölkerung)                                                                                   |
| population                   | Bevölkerung, gesamt                                                                                                               |
| poverty_gap                  | Armutslücke bei 2,15 $ pro Tag (2017 KKP) (%)                                                                                     |
| **poverty_ratio**            | Armutsquote bei 2,15 $ pro Tag (2017 KKP) (% der Bevölkerung)                                                                     |
| **national_poverty**         | Armutsquote nach nationalen Armutsgrenzen (% der Bevölkerung)                                                                     |
| prenatal_care                | Schwangere mit Schwangerschaftsvorsorge (%)                                                                                       |
| **hiv_prevalence**           | HIV-Prävalenz, gesamt (% der Bevölkerung 15-49 Jahre)                                                                             |
| stunting_prevalence          | Prävalenz von Wachstumsverzögerungen (% der Kinder unter 5)                                                                       |
| **underweight_prevalence**   | Prävalenz von Untergewicht (% der Kinder unter 5)                                                                                 |
| price_level                  | Preisniveauverhältnis (KKP-Umrechnungsfaktor zu Marktwechselkurs)                                                                 |
| primary_completion_female    | Grundschulabschlussrate, weiblich (%)                                                                                             |
| primary_completion_male      | Grundschulabschlussrate, männlich (%)                                                                                             |
| primary_completion           | Grundschulabschlussrate, gesamt (%)                                                                                               |
| secondary_progression_female | Übergang zu weiterführenden Schulen, weiblich (%)                                                                                 |
| secondary_progression_male   | Übergang zu weiterführenden Schulen, männlich (%)                                                                                 |
| ict_investment               | Investitionen in IKT durch öffentlich-private Partnerschaften (US$)                                                               |
| pupil_teacher_ratio          | Schüler-Lehrer-Verhältnis, Grundschule                                                                                            |
| rail_lines                   | Schienennetz (Gesamtstrecke in km)                                                                                                |
| real_interest                | Realzinssatz (%)                                                                                                                  |
| refugees                     | Flüchtlingsbevölkerung nach Herkunftsland                                                                                         |
| renewable_electricity        | Erneuerbare Stromerzeugung (% der Gesamtstromerzeugung)                                                                           |
| renewable_energy             | Verbrauch erneuerbarer Energie (% des Gesamtenergieverbrauchs)                                                                    |
| freshwater_per_capita        | Erneuerbare Süsswasserressourcen pro Kopf (Kubikmeter)                                                                            |
| freshwater_total             | Erneuerbare Süsswasserressourcen, gesamt (Milliarden Kubikmeter)                                                                  |
| primary_repeaters_female     | Wiederholer, Grundschule, weiblich (% der weiblichen Einschreibungen)                                                             |
| primary_repeaters_male       | Wiederholer, Grundschule, männlich (% der männlichen Einschreibungen)                                                             |
| researchers                  | Forscher in F&E (pro Million Einwohner)                                                                                           |
| revenue_excl_grants          | Einnahmen ohne Zuschüsse (% des BIP)                                                                                              |
| surgical_catastrophic_risk   | Risiko katastrophaler Ausgaben für chirurgische Versorgung (%)                                                                    |
| surgical_impoverishing_risk  | Verarmungsrisiko durch chirurgische Versorgung (%)                                                                                |
| risk_premium                 | Risikoprämie bei Kreditvergabe (%)                                                                                                |
| rural_population             | Ländliche Bevölkerung                                                                                                             |
| rural_pop_pct                | Ländliche Bevölkerung (% der Gesamtbevölkerung)                                                                                   |
| sp_equity_change             | S&P Global Equity Indices (jährliche Veränderung %)                                                                               |
| preprimary_enrollment        | Schulbesuch, Vorschule (% brutto)                                                                                                 |
| primary_enrollment_gross     | Schulbesuch, Grundschule (% brutto)                                                                                               |
| primary_enrollment_net       | Schulbesuch, Grundschule (% netto)                                                                                                |
| **primary_gender_parity**    | Schulbesuch, Grundschule, Geschlechterparitätsindex                                                                               |
| edu_gender_parity            | Schulbesuch, Grund- und Sekundarschule, Geschlechterparitätsindex                                                                 |
| secondary_enrollment_gross   | Schulbesuch, Sekundarschule (% brutto)                                                                                            |
| secondary_enrollment_net     | Schulbesuch, Sekundarschule (% netto)                                                                                             |
| tertiary_enrollment          | Schulbesuch, Hochschule (% brutto)                                                                                                |
| journal_articles             | Wissenschaftliche und technische Journalartikel                                                                                   |
| secure_servers               | Sichere Internetserver (pro 1 Million Einwohner)                                                                                  |
| shortterm_debt               | Kurzfristige Schulden (% der Gesamtreserven)                                                                                      |
| surgical_workforce           | Chirurgisches Fachpersonal (pro 100'000 Einwohner)                                                                                |
| startup_procedures           | Gründungsverfahren für ein Unternehmen (Anzahl)                                                                                   |
| stocks_traded                | Gehandelte Aktien, Gesamtwert (% des BIP)                                                                                         |
| **legal_rights**             | Index der Stärke gesetzlicher Rechte (0=schwach bis 12=stark)                                                                     |
| surface_area                 | Gesamtfläche (km²)                                                                                                                |
| **income_bottom40**          | Durchschnittlicher Pro-Kopf-Konsum/Einkommen, untere 40% (2017 KKP $ pro Tag)                                                     |
| income_per_capita            | Durchschnittlicher Pro-Kopf-Konsum/Einkommen, gesamt (2017 KKP $ pro Tag)                                                         |
| tax_revenue                  | Steuereinnahmen (% des BIP)                                                                                                       |
| tech_cooperation             | Zuschüsse für technische Zusammenarbeit (US$)                                                                                     |
| rd_technicians               | Techniker in F&E (pro Million Einwohner)                                                                                          |
| protected_areas              | Terrestrische und marine Schutzgebiete (% der Gesamtfläche)                                                                       |
| electricity_time             | Zeit für Stromanschluss (Tage)                                                                                                    |
| business_startup_time        | Zeit für Unternehmensgründung (Tage)                                                                                              |
| **debt_service**             | Gesamter Schuldendienst (% der Exporte)                                                                                           |
| natural_resource_rents       | Gesamtrenten aus natürlichen Ressourcen (% des BIP)                                                                               |
| total_reserves               | Gesamtreserven (einschliesslich Gold, US$)                                                                                        |
| tax_rate                     | Gesamtsteuersatz (% des Gewinns)                                                                                                  |
| trained_teachers             | Ausgebildete Lehrer in der Grundschulbildung (% aller Lehrer)                                                                     |
| female_unemployment          | Arbeitslosigkeit, weiblich (% der weiblichen Erwerbsbevölkerung)                                                                  |
| male_unemployment            | Arbeitslosigkeit, männlich (% der männlichen Erwerbsbevölkerung)                                                                  |
| **unemployment**             | Arbeitslosigkeit, gesamt (% der Erwerbsbevölkerung)                                                                               |