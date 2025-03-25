---
display: hidden
---

## Fehlererkennung und Fehlerkorrektur

Sie haben die Prüfziffer bei **EAN-13-Barcodes** kennengelernt. In vielen Datenstrukturen verwendet man solche Prüfmechanismen, um Fehler in den Daten zu erkennen und teilweise zu korrigieren. 

Die Verfahren unterscheiden sich darin, was das Hauptziel ist.
- Prüfziffern und Prüfbits sind gut darin

Diese Mechanismen unterscheiden sich hauptsächlich darin, ob Fehler nur **erkannt, oder auch korrigiert** werden können.

Dieses Konzept unterscheidet sich jedoch grundlegend von einer **Hashfunktion**. Während das Prüfbit dazu dient, Fehler zu finden und zu beheben, verfolgen Hashfunktionen einen anderen Zweck: Sie erzeugen aus beliebigen Daten eine eindeutige, jedoch nicht umkehrbare Zeichenkette fester Länge.

| Eigenschaft     | Prüfziffer (EAN-13) oder Prüfbit | Hashfunktion (z. B. SHA-256)            |
| --------------- | -------------------------------- | --------------------------------------- |
| Ziel            | Fehlererkennung und -korrektur   | Datenintegrität und Identifikation      |
| Fehlerkorrektur | Ja                               | Nein                                    |
| Feste Länge     | 1 Ziffer / 1 Bit                 | Feste Länge (z. B. 256 Bit bei SHA-256) |
| Kollisionen     | Selten, aber gut möglich         | Extrem unwahrscheinlich                 |

### **SHA-256 Hash eines Files berechnen**

Ein Hashwert kann für die Integritätsprüfung von Dateien genutzt werden. So wird sichergestellt, dass eine Datei nicht verändert wurde.

**Windows (Eingabeaufforderung / PowerShell):**

```cmd
certutil -hashfile C:\Pfad\zur\Datei.txt SHA256
```

Oder in PowerShell:

```powershell
Get-FileHash -Path "C:\Pfad\zur\Datei.txt" -Algorithm SHA256
```

**macOS (Terminal):**

```sh
shasum -a 256 /Pfad/zur/Datei
```

**Linux (Terminal):**

```sh
sha256sum /Pfad/zur/Datei
```

Hashfunktionen spielen eine zentrale Rolle in der IT-Sicherheit, insbesondere bei Passwörtern, digitalen Signaturen und Blockchain-Technologien.

Der Unterschied liegt in der **Fehlertoleranz** bzw. **Fehlerkorrektur** versus **Fehlererkennung**.  

- **Fehlerkorrigierende Codes** (engl. *error-correcting codes*, ECC) ermöglichen nicht nur die Überprüfung, sondern auch die Rekonstruktion der ursprünglichen Daten, z. B. Reed-Solomon-Codes oder Hamming-Codes.  
- **Fehlererkennende Codes** (engl. *error-detecting codes*) wie Prüfziffern oder kryptografische Hashfunktionen dienen nur zur Integritätsprüfung, ohne eine Wiederherstellung der Originaldaten zu ermöglichen.