---
title: Internet - das Netzwerk der Netzwerke
---

# Das Inter-Net

Im Jahr 2001 kam der erste **Herr der Ringe** Film in die Kinos. Im Film wurden normalgrosse Schauspieler mit genialen Filmtricks zu kleinen Hobbits gemacht. Ein Beispiel: Filmsets wurden einmal sehr gross gebaut für die Hobbits, damit sie klein wirken; und einmal sehr klein für die Menschen und Zauberer, damit sie gross wirken. Viel wurde auch mit Perspektiven gespielt, sodass Menschen im Vordergrund stehen und gross wirken, während die Hobbits viel weiter im Hintergrund stehen, als man vermuten würde, und dadurch klein wirken.

Das Dorf der Hobbits heisst Hobbiton und liegt im Auenland in Mittelerde. In unserer Welt wurde das Dorf in Neuseeland gebaut und kann bis heute besichtigt werden. Die Touristen können die Filmsets besuchen und die Häuser der Hobbits sehen.

![](https://www.wairualodge.co.nz/wordpress/wp-content/uploads/2020/03/Hobbiton-3-e1583826897607.jpg)

Nun denken Sie vielleicht: "Das ist ja alles schön und gut, aber **was hat das mit Informatik zu tun?**" 

Nun, das Bild von Hobbiton ist gar nicht auf dem gleichen Server wie diese Webseite gespeichert, sondern **auf dem Server `wairualodge.co.nz` in Neuseeland**. Tatsächlich setzt sich diese Webseite aus Daten von über fünf verschiedenen Webservern zusammen. Mit anderen Worten: Ihr Computer findet in deutlich weniger als einer Sekunde mehr als fünf Server weltweit und lädt die nötigen Dateien herunter!

Mit der Webseite [geotraceroute.com](https://geotraceroute.com/) habe ich den Weg zum Server mit dem Bild von Hobbiton visualisiert. Diese Webseite versucht, zu ermitteln, wo sich die Geräte befinden, die auf der Route nach Neuseeland genutzt werden. Das ist nur zu circa 90% verlässlich und **findet nicht alle involvierten Geräte**, aber es gibt allemal ein gutes Bild!

<iframe src="https://geotraceroute.com/?node=1761&host=wairualodge.co.nz" width="100%" height="500"></iframe>

Jetzt überlegen wir uns mal, die involvierten Geschwindigkeiten. Sie können das selbst auf Ihrem Computer ausprobieren, indem Sie die Konsole öffnen und `ping wairualodge.co.nz` eingeben. 

Was macht der Befehl `ping`? Er schickt ein kleines Datenpaket an den Server und wartet auf eine Antwort. Dabei misst er die Zeit, die das Paket braucht, um zum Server zu gelangen und wieder zurück. Diese Zeit wird als "Ping" bezeichnet und gibt an, wie schnell Ihr Computer mit dem Server kommunizieren kann.

Das Ergebnis des Befehls könnte so aussehen:

```bash
$ ping wairualodge.co.nz

PING wairualodge.co.nz (119.47.117.103) 56(84) bytes of data.
64 bytes from sulu.hosts.net.nz (119.47.117.103): icmp_seq=1 ttl=48 time=350 ms
64 bytes from sulu.hosts.net.nz (119.47.117.103): icmp_seq=2 ttl=48 time=271 ms
64 bytes from sulu.hosts.net.nz (119.47.117.103): icmp_seq=3 ttl=48 time=293 ms
64 bytes from sulu.hosts.net.nz (119.47.117.103): icmp_seq=4 ttl=48 time=317 ms

--- wairualodge.co.nz ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 5006ms
rtt min/avg/max/mdev = 248.442/303.558/350.340/36.340 ms
```

Das bedeutet, dass unsere Computer die Strecke nach Neuseeland über das Internet und zurück in durchschnittlich 303.558 Millisekunden (ms) zurücklegt. Das sind 0.3 Sekunden, also ziemlich schnell!

Die Verbindung von der Schweiz nach Neuseeland ist gemäss geotraceroute.com _mindestens_ 19'963 Kilometer. Wenn wir die Zeit von 0.303558 Sekunden nehmen, können wir die Geschwindigkeit berechnen, mit der die Datenpakete reisen:

$$
\text{Geschwindigkeit} = \frac{\text{Strecke}}{\text{Zeit}} = \frac{19'963 \text{ km}}{0.303558 \text{ s}} \approx 65'763 \text{ km/s}
$$

Vergleichen Sie das mit der Lichtgeschwindigkeit $c$ von 299'792 km/s:

$$
\text{Prozent der Lichtgeschwindigkeit} = \frac{65'763 \text{ km/s}}{299'792 \text{ km/s}} \approx 21.9\%
$$

Das bedeutet, dass die Reise hin und zurück von der Schweiz nach Neuseeland über das Internet mit einer Geschwindigkeit von etwa 21.9% der Lichtgeschwindigkeit erfolgt ist.

> [!note] Versuchen Sie es selbst
> 
> Gehen Sie selbst auf [geotraceroute.com](https://geotraceroute.com/) und klicken Sie auf "Run another traceroute". Geben Sie eigene Websites an oder wählen Sie ein Land aus. 
> - Finden Sie eine Strecke über 10'000 Kilometer?
> - Wenn Sie Zeit haben: Versuchen Sie ein 

Zwei Beispiele, die man gut findet:

| URL | Länge | Ping |
| ---- | ---- | ---- |
| example.com | 9'409km | 100ms |
| smh.com.au | 384km | 16ms |

Wieso werden wir für die australische Zeitung Sydney Morning Herald (smh.com.au) auf einen Server in Paris geleitet?

## Wie eine Webseite im Browser aufgebaut wird

### 1. DNS-Auflösung der URL
- **Nutzer gibt URL ein**: z.B. `informatikgarten.ch`
- **DNS-Anfrage**: Browser fragt seinen DNS-Server nach der IP-Adresse der Domain
- **IP-Adresse**: Browser erhält die IP-Adresse des Webservers (z.B. 76.171.20.51)

### 2. TCP-Verbindungsaufbau
- **TCP-Handshake**: Browser startet 3er-Handshake mit dem Server
- **TLS-Handshake**: Bei HTTPS zusätzlicher Austausch von Zertifikaten und Schlüsseln

### 3. Anfrage des HTML-Dokuments
- **HTTP-Request**: Browser sendet HTTP-GET-Anfrage für `/net/net-00-intro.html`
- **HTTP-Response**: Server antwortet mit:
  - Statuscode (z.B. 200 OK)
  - Headers (Content-Type, Content-Length, etc.)
  - HTML-Inhalt der Seite

### 4. HTML-Parsing
- **DOM-Erstellung**: Browser beginnt das HTML zu parsen und baut den DOM-Baum auf
- **Ressourcenerkennung**: Browser identifiziert externe Ressourcen im HTML-Dokument:
  - CSS-Dateien (z.B. Stylesheets)
  - JavaScript-Dateien
  - Bilder (z.B. das Hobbiton-Bild von wairualodge.co.nz)
  - iFrame (geotraceroute.com)

### 5. Laden externer Ressourcen
- **Parallele Verbindungen**: Browser öffnet mehrere TCP-Verbindungen zu verschiedenen Servern
- **Für jede Ressource**:
  1. DNS-Auflösung des jeweiligen Servers (z.B. wairualodge.co.nz)
  2. TCP/TLS-Verbindungsaufbau
  3. HTTP-Anfrage senden
  4. Antwort empfangen und verarbeiten
- **Ressourcen-Priorität**: CSS und JavaScript werden meist vor Bildern geladen

### 5.1 - Beispiel für das Hobbiton-Bild von wairualodge.co.nz:
- **DNS-Auflösung**: IP-Adresse von wairualodge.co.nz ermitteln
- **TCP-Verbindung**: Zu Server in Neuseeland aufbauen
- **HTTP-Anfrage**: GET-Request für das Bild
- **Datenübertragung**: Bild wird über internationale Unterseekabel und Netzwerkknoten übertragen
- **Empfang**: Browser erhält die Bilddaten und speichert sie temporär

### 6. Rendering und Darstellung
- **Layout-Berechnung**: Position und Grösse aller Elemente wird bestimmt
- **Painting**: Elemente werden gezeichnet
- **Komposition**: Verschiedene Ebenen werden zusammengesetzt

### 7. Abschluss
- **JavaScript-Ausführung**: Event-Handler werden eingerichtet
- **Fertigstellung**: Seite wird als vollständig geladen markiert
- **Nachladen**: Einige Ressourcen werden möglicherweise verzögert geladen
- **Benutzerinteraktion**: Seite ist bereit für Benutzereingaben

Dieser gesamte Prozess dauert typischerweise nur Bruchteile einer Sekunde bis wenige Sekunden, je nach Verbindungsgeschwindigkeit und Komplexität der Webseite.
