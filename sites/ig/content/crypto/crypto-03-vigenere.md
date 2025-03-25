---
title: Vigenère in Python
---

> [!success] Lernziele
> 
> - Sie haben den **Vigenère-Cipher in Python** umgesetzt und verstehen den Code. Insbesondere
> 	- wie wir durch die Buchstaben zweier Wörter gleichzeitig iteriert haben,
> 	- wie wir die Buchstaben solange nötig wiederholt haben,
> 	- und wie wir die Caesar-Funktionen wiederverwendet haben.

Wir schreiben nun zwei Funktionen, um einen String mit einem Vignère-Cipher zu verschlüsseln: `vignere_encrypt` und `vignere_decrypt`. Hierzu folgendes Erklärvideo

![[python_vigenere.mp4]]

Im Video werden folgende Fragen beantwortet.

1) Beantworten Sie mit **Pseudocode**: Wie könnten Sie `caesar_encrypt` nutzen, um den Vignère-Cipher zu implementieren?

2) Der **Schlüssel** soll sich ja immer **wiederholen**. Wie könnten Sie das **in Python lösen?** Hier ein Tipp: Sie können bei Zeichenketten ein einzelnes Zeichen mit seiner Position adressieren, wie bei einer Liste. Sie brauchen also eine Rechnung für die Schlüsselposition.

```turtle
string = "Testwort"
print(string[0]) # T
print(string[2]) # s

print(string[2:5]) # stw
```

3) Sagen wir mal, Sie wüssten den aktuellen Schlüsselbuchstaben. Wie würden Sie daraus in Python die Verschiebung ableiten? 
	![[Excalidraw/crypto-02-2024-06-10-11.09.08.excalidraw]]
4) Versuchen Sie die Funktion zu implementieren. Hierzu einige Tipps:
	- Sie können den `return`-Wert von `caesar_encrypt` weiterverarbeiten, z.B. aneinanderhängen.
	- Mit `len()` erhalten Sie die Länge einer Liste oder auch einer Zeichenkette. z.B. so:

```turtle
string = "Testwort"
laenge = len(string) 
print(laenge) # 8
```

> [!solution]- Vigenère-Verschlüsselung mit Python
> 
> ```python filename="vigenere.py"
> from caesar_komplett import caesar_encrypt, caesar_decrypt
> 
> def vigener_encrypt(klartext, key):
>     ciphertext = ""
>     
>     for i in range(len(klartext)):
>         original_buchstabe = klartext[i]
>         verschiebung = ord(key[i % len(key)])
>         ciphertext = ciphertext + caesar_encrypt(original_buchstabe, verschiebung)
>     return ciphertext
> 
> def vigener_decrypt(ciphertext, key):
>     entschluesselt = ""
>     for i in range(len(ciphertext)):
>         cipher_buchstabe = ciphertext[i]
>         verschiebung = ord(key[i % len(key)])
>         entschluesselt = entschluesselt + caesar_decrypt(cipher_buchstabe, verschiebung)
>     
>     return entschluesselt
> 
> # Dieses if führt dazu, dass die Tests nur ausgeführt werden, wenn diese Datei selbst ausgeführt wird, aber nicht, wenn sie importiert wird.
> if __name__ == "__main__":
>     # Beispielaufruf
>     ciphertext = "Wir treffen uns im Cybercafe, follow the white rabbit."
>     schluessel = "SCHLUESSEL"
>     ciphertext = vigener_encrypt(ciphertext, schluessel)
>     print("Ciphertext:", ciphertext)
>     entschluesselt = vigener_decrypt(ciphertext, schluessel)
>     print("Entschlüsselt:", entschluesselt)
> ```

