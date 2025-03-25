---
display: hidden
---
## Das `import`-Statement

Um in Python Funktionen aus einer anderen Datei zu importieren, können Sie das `import`-Statement verwenden. Nehmen wir an, Sie haben eine Datei `caesar.py`, die die Funktionen `caesar_encrypt` und `caesar_decrypt` enthält.

```python filename="caesar_komplett.py"
def caesar_encrypt(klartext, verschiebung):
    # Initialisiere den verschlüsselten Text als leere Zeichenkette
    verschluesselter_text = ""

    # Gehe jeden Buchstaben im Eingabetext durch
    for buchstabe in klartext:
        if buchstabe.isupper():
            # Grossbuchstaben, A = 65
            neue_position = (ord(buchstabe) - 65 + verschiebung) % 26 + 65
        elif buchstabe.islower():
            # Kleinbuchstaben, a = 97
            neue_position = (ord(buchstabe) - 97 + verschiebung) % 26 + 97
        else:
            # Alle anderen Zeichen
            neue_position = ord(buchstabe)
        verschluesselter_text = verschluesselter_text + chr(neue_position)

    # Gebe den verschlüsselten Text zurück
    return verschluesselter_text

def caesar_decrypt(ciphertext, verschiebung):
    # Die Entschlüsselung ist einfach die Verschlüsselung mit negativer Verschiebung
    return caesar_encrypt(ciphertext, -verschiebung)

if __name__ == "__main__":

    # Beispiel: Verschlüsseln und Entschlüsseln
    ciphertext = caesar_encrypt("Wir treffen uns am Bahnhof", 5)
    print("Unser Ciphertext ist:", ciphertext)

    entschluesselt = caesar_decrypt(ciphertext, 5)
    print("Entschlüsselte Nachricht:", entschluesselt)
```

Stellen Sie sich vor, Sie möchten nun in einer Datei `vignere.py` eine Vigenère-Verschlüsselung programmieren, und dazu die Verschiebung von `caesar.py` verwenden. Sie können die gesamte Datei `caesar.py` als Paket importieren, wie Sie das auch von `import turtle` kennen.

```python filename="vignere.py"
import caesar

text = "hallo das ist ein test"
verschiebung = 3
ciphertext = caesar.caesar_encrypt(text, verschiebung)
print("Verschlüsselter Text:", ciphertext)
decoded = caesar.caesar_decrypt(ciphertext, verschiebung)
print("Wieder entschlüsselt:", decoded)
```

Mit einem leicht geänderten Syntax können Sie auch spezifische Funktionen importieren.

```python filename="vigenere.py"
from caesar import caesar_encrypt, caesar_decrypt

text = "hallo das ist ein test"
verschiebung = 3
ciphertext = caesar_encrypt(text, verschiebung)
print("Verschlüsselter Text:", ciphertext)
decoded = caesar_decrypt(ciphertext, verschiebung)
print("Wieder entschlüsselt:", decoded)
```

## Wieso `if __name__ == "__main__":`

Sie sehen bei `caesar.py` oben die Konstruktion `if __name__ == "__main__":`. Das ist eine gängige Art sicherzustellen, dass ein bestimmter Codeblock **nur ausgeführt wird, wenn die Datei selbst direkt ausgeführt wird**, und nicht, wenn es als Modul importiert wird.

Wie funktioniert das? Jede Python-Datei, die als Skript ausgeführt wird, hat automatisch eine spezielle Variable namens `__name__`. Wenn das Skript direkt ausgeführt wird, wird `__name__` auf den Wert `"__main__"` gesetzt. Wenn die Datei jedoch als Modul in ein anderes Skript importiert wird, entspricht `__name__` dem Namen des Moduls.