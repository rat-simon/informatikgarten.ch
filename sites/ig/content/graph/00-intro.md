---
title: Einführung Graphentheorie
draft: "true"
---
# Einführung in die Graphentheorie

Die Graphentheorie ist ein Teilgebiet der Mathematik und Informatik, das sich mit der Untersuchung von Graphen beschäftigt. Ein Graph besteht aus einer Menge von Knoten (auch als **Knoten** oder **Ecken** bezeichnet) und einer Menge von Kanten (Verbindungen zwischen den Knoten). Graphen modellieren Beziehungen und Verbindungen in verschiedenen Anwendungen wie sozialen Netzwerken, Strassennetzen oder Computernetzwerken.

## Mathematische Definition

Ein **ungerichteter Graph** \( G \) ist ein Paar $$ G = (V, E) $$, wobei:
- ( V ) eine nicht-leere Menge von Knoten (Vertices) ist.
- ( E ) eine Menge von Kanten ist, wobei jede Kante eine Verbindung zwischen zwei Knoten darstellt. $$ E \subseteq \{ \{u, v\} \mid u, v \in V, u \neq v \} $$

Ein **gerichteter Graph (Digraph)** ist ein Paar $$ G = (V, E) $$, wobei:
- \( V \) eine nicht-leere Menge von Knoten (Vertices) ist.
- \( E \subseteq \{ (u, v) \mid u, v \in V, u \neq v \} \) eine Menge von gerichteten Kanten ist, wobei jede Kante eine Verbindung von einem Knoten \( u \) zu einem anderen Knoten \( v \) darstellt. Hier ist die Richtung der Kante wichtig.

### Beispiel eines gerichteten Graphen

Sei \( V = \{A, B, C, D\} \) und \( E = \{(A, B), (B, C), (C, D)\} \). Dieser Graph enthält vier Knoten und drei gerichtete Kanten, die sie verbinden.

## Repräsentation eines Graphen in Python

Ein einfacher Weg, einen Graphen in Python darzustellen, ist die Verwendung von Adjazenzlisten. Für einen **benannten Graphen** nutzen wir separate Listen für die Knoten und deren Verbindungen:

```python
# Knotenliste
nodes = ['A', 'B', 'C', 'D']

# Adjazenzlisten-Darstellung eines gerichteten Graphen
edges = [
    [1],        # Knoten 'A' ist verbunden mit 'B'
    [2],        # Knoten 'B' ist verbunden mit 'C'
    [3],        # Knoten 'C' ist verbunden mit 'D'
    []          # Knoten 'D' hat keine ausgehenden Verbindungen
]

# Ausgabe des Graphen
for i, adj in enumerate(edges):
    connected_nodes = [nodes[j] for j in adj]
    print(f"Knoten {nodes[i]} ist verbunden mit: {connected_nodes}")
```

### Erklärung der Darstellung

- **nodes[0] = 'A'** und **edges[0] = [1]** bedeutet, dass der Knoten 'A' mit dem Knoten 'B' verbunden ist.
- **edges[2] = [3]** bedeutet, dass der Knoten 'C' mit dem Knoten 'D' verbunden ist.

Diese Darstellungsweise ermöglicht eine einfache und übersichtliche Repräsentation sowohl von ungerichteten als auch von gerichteten Graphen. Sie bildet eine Grundlage für das Verständnis und die Implementierung von Pfadfindungsalgorithmen wie BFS (Breadth-First Search) und DFS (Depth-First Search).