---
title: Checkpoint-Quiz
---
In diesem Quiz arbeiten Sie mit Daten von Netflix ([Quelle](https://github.com/lerocha/netflixdb)), die zeigen, was beim Streaminganbieter wie oft geschaut wird.

## Datenbankschema und Primärschlüssel

Typischerweise stellt man Datenbanken in einem sogenannten **Schema** dar: Das ist eine Übersicht der Tabellen, ihren Spalten, deren Datentypen, sowie den Beziehungen zwischen den Tabellen - aber ohne Daten! In unserem Beispiel sieht das Schema so aus:

<StickMe>
![[netflix-schema.excalidraw]]
</StickMe>

Einige Beobachtungen, damit Sie sehen, was hier alles dargestellt ist:

-   Boxen: Es gibt eine Tabelle `movie` mit den Spalten `title`, `runtime`, `release_date`, etc.
-   Datentypen rechts: Die Spalte `available_globally` hat den Datentyp `boolean` und ist demzufolge ein Wahr/Falsch-Wert. (Sie müssen die SQL-Datentypen nicht lernen.)
-   Pfeile: Die Tabelle `view_summary` hat eine Relation mit der Tabelle `movie`. Beim Pfeil steht "movie_id:id". Das bedeutet: Die Daten in der Spalte `movie_id` in `view_summary` entsprechen den Daten in der Spalte `id` der Tabelle `movie`.
-   Goldener Schlüssel: Die Tabelle `movie` hat eine Spalte `id` als **Primärschlüssel**. Das bedeutet, dass jeder Datensatz (jede Reihe) dort einen eindeutigen Wert hat. Das Datenbanksystem garantiert uns, dass es keine zwei Filme mit dem gleichen Wert in der Spalte `id` zulassen wird.
-   Blauer Schlüssel: `movie_id` der Tabelle `view_summary` ist ein **Fremdschlüssel**. Das Datenbanksystem kann diese Beziehung überwachen und je nach Konfiguration sicherstellen, dass es keine Einträge mit einer `movie_id` gibt, die es in der Tabelle `movie` unter `id` gar nicht gibt.

Schauen wir uns nun an, wie die Daten in der Tabelle `view_summary` vorliegen. Eine Frage, die sich stellt: Offenbar werden die Zuschauerzahlen für spezifische Zeitperioden rapportiert. Sind das Stunden, Tage, Wochen, Monate? Ein Beispiel-Query, wie Sie das herausfinden können.

Was gibt es für Zeitperioden? (Diese Lösung ist so korrekt.)

<SQLQuestion id="select-distinct"
defaultQuery={`SELECT DISTINCT duration
FROM view_summary;`} />

Wunderbar. Machen Sie sich das Leben also einfach: Schauen wir bis auf Weiteres **Halbjahresperioden** an, also `WHERE duration = 'SEMI_ANNUALLY'{:sql}` . Jetzt sind Sie dran:

## Frage 1: Meistgeschaute Inhalte

Selektieren Sie aus der Tabelle `view_summary` die Spalten `id` und `hours_viewed` der zehn Datensätze, die in einem halben Jahr am meisten geschaut wurden.


| id                                  | hours_viewed                                  |
| ----------------------------------- | --------------------------------------------- |
| `id` aus der Tabelle `view_summary` | `hours_viewed` aus der Tabelle `view_summary` |


<SQLQuestion id="most-watched"
defaultQuery={`SELECT id, hours_viewed
FROM view_summary 
LIMIT 5;`}
correctQuery={`SELECT id, hours_viewed 
FROM view_summary 
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 10`}/>

## Frage 2: Meistgeschaute Filme

Finden Sie nun die Filmtitel und `hours_viewed` der zehn meistgeschauten **Filme** in einem Halbjahr heraus. Wir selektieren also **nur Filme**, Serien werden ignoriert.

| title                        | hours_viewed                                  |
| ---------------------------- | --------------------------------------------- |
| `title` aus der Tabelle `movie` | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion id="most-watched-movietitle"
defaultQuery={`SELECT title, hours_viewed 
FROM view_summary 
JOIN movie ON view_summary.movie_id = movie.id 
LIMIT 5;`}
correctQuery={`SELECT title, hours_viewed 
FROM view_summary 
JOIN movie ON view_summary.movie_id = movie.id 
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 10;`}
/>

## Frage 3: Serien dominieren

Hmm... Jetzt haben sich die Zahlen stark verändert. Können Sie sich das erklären? Schauen wir uns doch mal die **50 meistgeschauten Inhalte generell** in einem Halbjahr an. Selektieren Sie erneut die Filmtitel (`title`) und `hours_viewed`, aber zeigen Sie zusätzlich auch die `hours_viewed` von Serien an - die also keinen `title` in der Tabelle `movie` haben.

| title                                            | hours_viewed                                  |
| ------------------------------------------------ | --------------------------------------------- |
| `title` aus der Tabelle `movie` (kann NULL sein) | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion id="most-watched-thing"
defaultQuery={`SELECT title, hours_viewed 
FROM view_summary 
JOIN movie ON view_summary.movie_id = movie.id 
LIMIT 5;`}
correctQuery={`SELECT title, hours_viewed 
FROM view_summary 
LEFT JOIN movie ON view_summary.movie_id = movie.id 
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 50;`}
/>

## Frage 4: Meistgeschaute Staffeln und Filme

Sie sehen: Serien dominieren die Ranglisten total! Versuchen wir nun zusätzlich herauszufinden, welche Serienstaffeln oft geschaut werden.

Erweitern Sie die 50 meistgeschauten Inhalte in einem Halbjahr mit den Titeln der Filme und der Serienstaffeln. Achtung: Den `title`-Spalten habe im Ergebnis andere Namen gegeben.

| season_title                     | movie_title                     | hours_viewed                                  |
| -------------------------------- | ------------------------------- | --------------------------------------------- |
| `title` aus der Tabelle `season` | `title` aus der Tabelle `movie` | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion id="50-most-watched-seasons-and-movies"
correctQuery={`SELECT season.title as season_title, movie.title as movie_title, hours_viewed
FROM view_summary 
LEFT JOIN movie ON view_summary.movie_id = movie.id 
LEFT JOIN season ON view_summary.season_id = season.id
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 50;`}
/>

## Frage 5: Meistgeschaute Serien

Nun nutzen wir eine Aggregatsfunktion, um herauszufinden, welche 10 Serien am meisten geschaut wurde - also über alle Staffeln und Halbjahresperioden hinweg!

Dazu brauchen Sie erstmals einen `JOIN` über zwei Tabellen. Keine Sorge, das ist relativ einfach: Machen Sie einfach einen `JOIN` pro Beziehung - also insgesamt zwei separate `JOIN`s.

| show_title                        | hours                                               |
| --------------------------------- | --------------------------------------------------- |
| `title` aus der Tabelle `tv_show` | Summe der `hours_viewed` aller Staffeln einer Serie |

<SQLQuestion id="most-watched-series-alltime"
defaultQuery={`SELECT tv_show.title as show_title, [...] as hours
FROM view_summary 
JOIN season ON [Verknüpfung view_summary - season]
JOIN tv_show ON [Verknüpfung season - tv_show]
WHERE duration = 'SEMI_ANNUALLY' 
GROUP BY [...]
ORDER BY hours DESC 
LIMIT 10;`}
correctQuery={`SELECT tv_show.title as show_title, sum(hours_viewed) as hours
FROM view_summary 
JOIN season ON view_summary.season_id = season.id
JOIN tv_show ON season.tv_show_id = tv_show.id
WHERE duration = 'SEMI_ANNUALLY' 
GROUP BY show_title
ORDER BY hours DESC 
LIMIT 10;`}
/>

## Frage 6: Meistgeschaute Serie in einem Halbjahr

Bei der vorhergehenden Fragen haben wir alle Halbjahresperioden einer Serie aufaddiert. So haben ältere Serien wie `Suits (2011)` oder `Grey's Anatomy` natürlich einen grossen Vorteil!

Korrigieren wir das. Ändern Sie Ihr Query so ab, dass weiterhin jeweils die Zahlen aller Staffeln einer Serie aufaddiert werden - aber nur innerhalb derselben Halbjahresperiode. Als kleiner Tipp: Daten derselben Periode haben dasselbe `start_date`. Die Änderung im Query ist letztlich minim!

| show_title                        | hours                                               |
| --------------------------------- | --------------------------------------------------- |
| `title` aus der Tabelle `tv_show` | Summe der `hours_viewed` aller Staffeln einer Serie |

<SQLQuestion id="most-watched-50"
defaultQuery={`SELECT [...]`}
correctQuery={`SELECT tv_show.title as show_title, sum(hours_viewed) as hours
FROM view_summary 
JOIN season ON view_summary.season_id = season.id
JOIN tv_show ON season.tv_show_id = tv_show.id
WHERE duration = 'SEMI_ANNUALLY' 
GROUP BY show_title, start_date
ORDER BY hours DESC 
LIMIT 10;`}
/>
