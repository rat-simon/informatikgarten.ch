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
-   Pfeile: Die Tabelle `view_summary` hat eine Relation mit der Tabelle `movie`. Das bedeutet: Die Daten in der Spalte `movie_id` in `view_summary` entsprechen den Daten in der Spalte `id` der Tabelle `movie`. Das Datenbanksystem kann solche Beziehungen überwachen und je nach Konfiguration sicherstellen, dass es keine Einträge mit einer `movie_id` geben kann, die es in der Tabelle `movie` gar nicht gibt.
-   Schlüssel: Die Tabelle `movie` hat eine Spalte `id` als **Primärschlüssel**. Das bedeutet, dass jeder Datensatz der Tabelle anhand von `id` eindeutig identifiziert werden kann. Das Datenbanksystem garantiert uns, dass es keine zwei Filme mit dem gleichen Wert in der Spalte `id` zulassen wird.

Schauen wir uns nun an, wie die Daten in der Tabelle `view_summary` vorliegen. Eine Frage, die sich stellt: Offenbar werden die Zuschauerzahlen für spezifische Zeitperioden rapportiert. Sind das Stunden, Tage, Wochen, Monate? Ein Beispiel-Query, wie Sie das herausfinden können.

Was gibt es für Zeitperioden? (Sie können das Query wie vorgegeben einfach ausführen.)

<SQLQuestion
defaultQuery={`SELECT DISTINCT duration
FROM view_summary;`}>
select-distinct
</SQLQuestion>

Wunderbar. Jetzt wissen wir, dass es bei `duration` nur zwei mögliche Werte gibt. Machen wir uns das Leben also einfach: Wir schauen in diesem Quiz ausschliesslich **Halbjahresperioden** an, also `WHERE duration = 'SEMI_ANNUALLY'{:sql}` .

## 1. Meistgeschaute Inhalte

Selektieren Sie aus der Tabelle `view_summary` die Spalten `id` und `hours_viewed` der zehn Datensätze, die in einer Halbjahresperiode am meisten geschaut wurden.

| id                                  | hours_viewed                                  |
| ----------------------------------- | --------------------------------------------- |
| `id` aus der Tabelle `view_summary` | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion
defaultQuery={`SELECT id, hours_viewed
FROM view_summary 
LIMIT 5;`}
correctQuery={`SELECT id, hours_viewed 
FROM view_summary 
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 10`}>
most-watched
</SQLQuestion>

## 2. Meistgeschaute Filme

Finden Sie nun die Filmtitel und `hours_viewed` der zehn meistgeschauten **Filme** in einem Halbjahr heraus. Wir selektieren also **nur Filme**, Serien werden ignoriert.

| title                        | hours_viewed                                  |
| ---------------------------- | --------------------------------------------- |
| `title` aus der Tabelle `movie` | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion
defaultQuery={`SELECT title, hours_viewed 
FROM view_summary 
JOIN movie ON view_summary.movie_id = movie.id 
LIMIT 5;`}
correctQuery={`SELECT title, hours_viewed 
FROM view_summary 
JOIN movie ON view_summary.movie_id = movie.id 
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 10;`}>
most-watched-movietitle
</SQLQuestion>

## 3. Serien dominieren

Hmm... Jetzt haben sich die Zahlen stark verändert. Können Sie sich das erklären? Schauen wir uns doch mal die **50 meistgeschauten Inhalte generell** in einem Halbjahr an. Selektieren Sie erneut die Filmtitel (`title`) und `hours_viewed`, aber zeigen Sie zusätzlich auch die `hours_viewed` von Serien an - die also keinen `title` in der Tabelle `movie` haben.

| title                                            | hours_viewed                                  |
| ------------------------------------------------ | --------------------------------------------- |
| `title` aus der Tabelle `movie` (kann NULL sein) | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion
defaultQuery={`SELECT title, hours_viewed 
FROM view_summary 
JOIN movie ON view_summary.movie_id = movie.id 
LIMIT 5;`}
correctQuery={`SELECT title, hours_viewed 
FROM view_summary 
LEFT JOIN movie ON view_summary.movie_id = movie.id 
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 50;`}>
most-watched-content
</SQLQuestion>

## 4. Meistgeschaute Staffeln und Filme

Sie sehen: Serien dominieren die Ranglisten total! Versuchen wir nun zusätzlich herauszufinden, welche Serienstaffeln oft geschaut wurden.

Erweitern Sie die 50 meistgeschauten Inhalte in einem Halbjahr mit den Titeln der Filme und der Serienstaffeln. Achtung: Den `title`-Spalten müssen Sie andere Namen gegeben.

| season_title                     | movie_title                     | hours_viewed                                  |
| -------------------------------- | ------------------------------- | --------------------------------------------- |
| `title` aus der Tabelle `season` | `title` aus der Tabelle `movie` | `hours_viewed` aus der Tabelle `view_summary` |

<SQLQuestion
defaultQuery={`SELECT [...]`}
correctQuery={`SELECT season.title as season_title, movie.title as movie_title, hours_viewed
FROM view_summary 
LEFT JOIN movie ON view_summary.movie_id = movie.id 
LEFT JOIN season ON view_summary.season_id = season.id
WHERE duration = 'SEMI_ANNUALLY' 
ORDER BY hours_viewed DESC 
LIMIT 50;`}>
50-most-watched-seasons-and-movies
</SQLQuestion>

## 5. Wer war am längsten in den Top 10?

Nun kommt die einzige Frage, bei der wir nicht nur Halbjahresdaten einbeziehen - löschen Sie also für diese Aufgabe `WHERE duration = 'SEMI_ANNUALLY'{:sql}`. Ändern Sie den Rest Ihres Queries so ab, dass Sie die drei Inhalte finden, die am längsten in den Top10 waren.

| season_title                     | movie_title                     | cumulative_weeks_in_top10                                  |
| -------------------------------- | ------------------------------- | ---------------------------------------------------------- |
| `title` aus der Tabelle `season` | `title` aus der Tabelle `movie` | `cumulative_weeks_in_top10` aus der Tabelle `view_summary` |

<SQLQuestion
defaultQuery={`SELECT [...]`}
correctQuery={`SELECT season.title as season_title, movie.title as movie_title, cumulative_weeks_in_top10
FROM view_summary 
LEFT JOIN movie ON view_summary.movie_id = movie.id 
LEFT JOIN season ON view_summary.season_id = season.id
ORDER BY cumulative_weeks_in_top10 DESC 
LIMIT 3;`}>
longest-top-10
</SQLQuestion>

## 6. Meistgeschaute Serien überhaupt

Nun nutzen wir eine Aggregatsfunktion, um herauszufinden, welche 10 Serien über alle Staffeln und Halbjahresperioden hinweg am meisten geschaut wurde. 

Dazu brauchen Sie erstmals einen `JOIN` über zwei Tabellen - nämlich über `season` zu `tv_show`. Keine Sorge, das ist relativ einfach: Machen Sie einfach einen `JOIN` für jede Beziehung - also insgesamt zwei `JOIN`s. Ich habe Ihnen das Grundgerüst des Querys vorgeschrieben.

| show_title                        | hours                                               |
| --------------------------------- | --------------------------------------------------- |
| `title` aus der Tabelle `tv_show` | Summe der `hours_viewed` aller Staffeln einer Serie |

<SQLQuestion
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
LIMIT 10;`}>
most-watched-alltime
</SQLQuestion>

## 7. Meistgeschaute Serie in einem Halbjahr

Bei der vorhergehenden Frage haben wir alle Halbjahresperioden einer Serie aufaddiert. So haben ältere Serien wie Suits oder Grey's Anatomy natürlich einen grossen Vorteil!

Korrigieren wir das. Ändern Sie Ihr Query so ab, dass weiterhin jeweils die Zahlen aller Staffeln einer Serie aufaddiert werden - aber nur, wenn sie zur selben Halbjahresperiode gehören. Dazu müssen Sie wissen: Mit `GROUP BY spalte1, spalte2 {:sql}` können Sie nach mehreren Spalten gruppieren und Daten derselben Periode haben dasselbe `start_date`.

| show_title                        | hours                                               |
| --------------------------------- | --------------------------------------------------- |
| `title` aus der Tabelle `tv_show` | Summe der `hours_viewed` aller Staffeln einer Serie |

<SQLQuestion
defaultQuery={`SELECT [...]`}
correctQuery={`SELECT tv_show.title as show_title, sum(hours_viewed) as hours
FROM view_summary 
JOIN season ON view_summary.season_id = season.id
JOIN tv_show ON season.tv_show_id = tv_show.id
WHERE duration = 'SEMI_ANNUALLY' 
GROUP BY show_title, start_date
ORDER BY hours DESC 
LIMIT 10;`}>
most-watched-semiannually
</SQLQuestion>

## 8. Welche Serie hat die meisten Staffeln erfasst?

Zum Schluss versuchen Sie die fünf Serien zu finden, die (in dieser Datenbank) am meisten Staffeln haben.

| show_title                        | nr                       |
| --------------------------------- | ------------------------ |
| `title` aus der Tabelle `tv_show` | Anzahl erfasste Staffeln |

<SQLQuestion
defaultQuery={`SELECT [...]`}
correctQuery={`SELECT tv_show.title as show_title, count(*) as nr
FROM tv_show
JOIN season ON tv_show.id = season.tv_show_id
GROUP BY tv_show.id
ORDER BY nr DESC
LIMIT 5;`}>
series-with-most-seasons
</SQLQuestion>
