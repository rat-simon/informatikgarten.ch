---
title: Join-Befehle
---
## Erklärvideo 

![[sql-joins.mp4]]

## `JOIN`-Arten in SQL

Stellen wir uns im Folgenden vor, wir hätten zwei Tabellen mit folgenden Daten, die wir anhand der Gebäudenamen zusammenführen möchten.

<Flex>
<Flex.Item>
### `buildings`

|building_name|capacity|
|---|---|
|1e|24|
|1w|32|
|2e|16|
|2w|20|

</Flex.Item>

<Flex.Item>
### `employees`

|role|name|building|years_employed|
|---|---|---|---|
|Engineer|Becky A.|1e|4|
|Engineer|Dan B.|1e|2|
|Engineer|Sharon F.|1e|6|
|Manager|Shirlee M.|1e|3|
|Artist|Sherman D.|2w|8|
|Manager|Daria O.|2w|6|
|Artist|Jakob J.|3e|6|
|Artist|Brandon J.|3e|7|


</Flex.Item>
</Flex>

Mit SQL können Sie dem Datenbanksystem die mühselige Arbeit überlassen, diese Daten zusammenzuführen. Dazu brauchen Sie die JOIN-Befehlen, von denen es mehrere Varianten gibt. Ein Tipp: Wenn Sie sich die Gebäudenamen in einem Venn-Diagramm vorstellen, sind die Befehle einfacher verständlich.

<Tabs items={['JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN']}>
  <Tabs.Tab>
```sql
SELECT * 
FROM buildings
JOIN employees ON building_name = building;
```

Gibt nur die Zeilen zurück, bei denen es in **beiden Tabellen** eine Übereinstimmung gibt. `INNER`ist optional und ist nur vorhanden, damit Datenbanken auch mit früheren Versionen von SQL kompatibel bleiben.

![[02-joins-inner.excalidraw]]

**Resultat**
| building_name | capacity | role     | name       | building | years_employed |
| ------------- | -------- | -------- | ---------- | -------- | -------------- |
| 1e            | 24       | Engineer | Becky A.   | 1e       | 4              |
| 1e            | 24       | Engineer | Dan B.     | 1e       | 2              |
| 1e            | 24       | Engineer | Sharon F.  | 1e       | 6              |
| 1e            | 24       | Manager  | Shirlee M. | 1e       | 3              |
| 2w            | 20       | Artist   | Sherman D. | 2w       | 8              |
| 2w            | 20       | Manager  | Daria O.   | 2w       | 6              |
  </Tabs.Tab>
<Tabs.Tab>
```sql
SELECT * 
FROM buildings
LEFT JOIN employees ON building_name = building;
```
Gibt alle **Zeilen aus `buildings`** zurück und ergänzt sie mit `employees`. Falls keine Übereinstimmung existiert, wird `NULL` eingetragen.

![[02-joins-left.excalidraw]]

**Resultat**

| building_name | capacity | role     | name       | building | years_employed |
| ------------- | -------- | -------- | ---------- | -------- | -------------- |
| 1e            | 24       | Engineer | Becky A.   | 1e       | 4              |
| 1e            | 24       | Engineer | Dan B.     | 1e       | 2              |
| 1e            | 24       | Engineer | Sharon F.  | 1e       | 6              |
| 1e            | 24       | Manager  | Shirlee M. | 1e       | 3              |
| 2w            | 20       | Artist   | Sherman D. | 2w       | 8              |
| 2w            | 20       | Manager  | Daria O.   | 2w       | 6              |
| 1w            | 32       | NULL     | NULL       | NULL     | NULL           |
| 2e            | 16       | NULL     | NULL       | NULL     | NULL           |

</Tabs.Tab>
<Tabs.Tab>
```sql
SELECT * 
FROM buildings
RIGHT JOIN employees ON building_name = building;
```
Gibt alle **Zeilen aus `employees`** zurück und ergänzt sie mit `buildings`. Falls keine Übereinstimmung existiert, wird `NULL` eingetragen.

![[02-joins-right.excalidraw]]

**Resultat**

| building_name | capacity | role     | name       | building | years_employed |
| ------------- | -------- | -------- | ---------- | -------- | -------------- |
| 1e            | 24       | Engineer | Becky A.   | 1e       | 4              |
| 1e            | 24       | Engineer | Dan B.     | 1e       | 2              |
| 1e            | 24       | Engineer | Sharon F.  | 1e       | 6              |
| 1e            | 24       | Manager  | Shirlee M. | 1e       | 3              |
| 2w            | 20       | Artist   | Sherman D. | 2w       | 8              |
| 2w            | 20       | Manager  | Daria O.   | 2w       | 6              |
| NULL          | NULL     | Artist   | Jakob J.   | 3e       | 6              |
| NULL          | NULL     | Artist   | Brandon J. | 3e       | 7              |

</Tabs.Tab>
<Tabs.Tab>
```sql
SELECT * 
FROM buildings
FULL JOIN employees ON building_name = building;
```

Gibt alle Zeilen aus **beiden Tabellen** zurück. Falls keine Übereinstimmung existiert, wird `NULL` eingetragen.

![[02-joins-full.excalidraw]]

**Resultat**

| building_name | capacity | role     | name       | building | years_employed |
| ------------- | -------- | -------- | ---------- | -------- | -------------- |
| 1e            | 24       | Engineer | Becky A.   | 1e       | 4              |
| 1e            | 24       | Engineer | Dan B.     | 1e       | 2              |
| 1e            | 24       | Engineer | Sharon F.  | 1e       | 6              |
| 1e            | 24       | Manager  | Shirlee M. | 1e       | 3              |
| 2w            | 20       | Artist   | Sherman D. | 2w       | 8              |
| 2w            | 20       | Manager  | Daria O.   | 2w       | 6              |
| 1w            | 32       | NULL     | NULL       | NULL     | NULL           |
| 2e            | 16       | NULL     | NULL       | NULL     | NULL           |
| NULL          | NULL     | Artist   | Jakob J.   | 3e       | 6              |
| NULL          | NULL     | Artist   | Brandon J. | 3e       | 7              |

</Tabs.Tab>
</Tabs>
