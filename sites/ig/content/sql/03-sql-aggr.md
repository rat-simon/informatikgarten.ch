---
title: Aggregatsfunktionen
---

## Erklärvideo

![[sql-aggr.mp4]]

## Aggregatsfunktionen in SQL

Aggregatsfunktionen **fassen Daten zusammen**, indem sie mehrere Zeilen zu einem einzelnen Wert verdichten. Sie sind die Grundlage für Statistiken und Datenanalyse in SQL.

Stellen wir uns folgende Tabelle mit Verkaufsdaten vor:

### `sales`

| product_id | product_name | category | price | units_sold | sale_date   |
|-----------|-------------|----------|-------|-----------|------------|
| 101       | Laptop      | Electronics | 1200  | 5         | 2023-06-01 |
| 102       | Smartphone  | Electronics | 800   | 10        | 2023-06-01 |
| 103       | T-Shirt     | Clothing    | 25    | 50        | 2023-06-02 |
| 104       | Jeans       | Clothing    | 60    | 20        | 2023-06-02 |
| 105       | Headphones  | Electronics | 100   | 15        | 2023-06-03 |
| 106       | Tablet      | Electronics | 350   | 8         | 2023-06-03 |
| 107       | Dress       | Clothing    | 80    | 12        | 2023-06-04 |
| 108       | Laptop      | Electronics | 1200  | 3         | 2023-06-04 |


<Tabs items={['COUNT', 'SUM', 'AVG', 'MIN/MAX', 'GROUP BY', 'HAVING']}>
  <Tabs.Tab>

Zählt die Anzahl der Datensätze. `COUNT(*)` zählt alle Zeilen, `COUNT(column)` zählt Zeilen ohne NULL-Werte, und `COUNT(DISTINCT column)` zählt eindeutige Werte.

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT COUNT(*) AS total_records,
       COUNT(product_id) AS total_products,
       COUNT(DISTINCT category) AS unique_categories
FROM sales;`}>

count-example

</SQLQuestion>
  </Tabs.Tab>
  <Tabs.Tab>

Summiert numerische Werte. Ignoriert NULL-Werte.

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT SUM(units_sold) AS total_units,
       SUM(price * units_sold) AS total_revenue
FROM sales;`}>
sum-example
</SQLQuestion>
  </Tabs.Tab>
  <Tabs.Tab>

Berechnet den Durchschnitt numerischer Werte.

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT AVG(price) AS average_price,
       AVG(units_sold) AS average_units_sold
FROM sales;`}>
avg-example
</SQLQuestion>
  </Tabs.Tab>
  <Tabs.Tab>

Findet Minimum und Maximum der Werte in einer Spalte.

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT MIN(price) AS lowest_price,
       MAX(price) AS highest_price,
       MIN(sale_date) AS first_sale,
       MAX(sale_date) AS last_sale
FROM sales;`}>
minmax-example
</SQLQuestion>
  </Tabs.Tab>
  <Tabs.Tab>

`GROUP BY` gruppiert Zeilen mit gleichen Werten. **Jede Spalte im SELECT muss entweder:**
1. Eine Aggregatsfunktion sein ODER
2. In der GROUP BY-Klausel erscheinen

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT category, 
       COUNT(*) AS product_count,
       SUM(units_sold) AS total_sales,
       AVG(price) AS average_price
FROM sales
GROUP BY category;`}>
groupby-example
</SQLQuestion>
  </Tabs.Tab>
  <Tabs.Tab>

`HAVING` filtert gruppierte Ergebnisse (funktioniert wie WHERE, aber für Gruppen).

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT category, 
       COUNT(*) AS product_count,
       SUM(units_sold) AS total_sales,
       AVG(price) AS average_price
FROM sales
GROUP BY category
HAVING SUM(units_sold) > 50;`}>
having-example
</SQLQuestion>
  </Tabs.Tab>
</Tabs>

## Wichtige Hinweise zu Aggregatsfunktionen

### 1. Vorsicht beim Mischen von aggregierten und nicht-aggregierten Spalten

Folgendes Query ist problematisch, da `product_name` eine normale Spalte ist, während `AVG(price)` aggregiert wird. Welches `product_name` soll angezeigt werden, wenn der Durchschnitt aus mehreren Zeilen berechnet wird? Der SQL-Standard verbietet solche logisch widersprüchliche Queries eigentlich, aber viele Server füllen einfach den letzten oder irgendeinen Wert ein. Also Achtung beim Vermischen von aggregierten und nicht-aggregierten Spalten - da passieren **häufig Logikfehler**!

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT product_name, AVG(price)
FROM sales;`}>
incorrect-example
</SQLQuestion>

### 2. Korrekte Verwendung mit GROUP BY

Es ist aber nicht unmöglich aggregierte und nicht-aggregierte Spalten zu mischen, wie in diesem Beispiel. Bei der Verwendung von `GROUP BY` hat jede Gruppe genau einen Wert für die nicht-aggregierte Spalte `category`, daher ist dies korrekt.

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT category, AVG(price) AS average_price
FROM sales
GROUP BY category;`}>
correct-groupby
</SQLQuestion>

### 3. GROUP BY kann mehrere Spalten haben

Dies gruppiert die Daten nach Kategorie UND Datum.

<SQLQuestion
autoExecute={true}
dbPath="/sql/sales.db"
defaultQuery={`SELECT category, sale_date, SUM(units_sold) AS daily_category_sales
FROM sales
GROUP BY category, sale_date;`}>
multi-column-groupby
</SQLQuestion>

