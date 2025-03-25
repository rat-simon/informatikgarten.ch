---
display: hidden
---

> [!solution]- Eine Scytale-Verschlüsselung
> 
> ```python
> def scytale_encrypt(plaintext, columns):
>     
>     # Berechne die Anzahl der Zeilen (aufgerundete Division)
>     rows = -(-len(plaintext) // columns)  # entspricht math.ceil(len(plaintext) / columns)
>     
>     # Initialisiere eine Liste für die verschlüsselten Spalten
>     ciphertext = [''] * columns
>     
>     # Lese den Text spaltenweise aus
>     for col in range(columns):
>         for row in range(rows):
>             if (row * columns + col) < len(plaintext):
>                 ciphertext[col] += plaintext[row * columns + col]
>     
>     # Füge die Spalten zu einem String zusammen
>     return ''.join(ciphertext)
> 
> def scytale_decrypt(ciphertext, columns):
>     # Berechne die Anzahl der Zeilen (aufgerundete Division)
>     rows = -(-len(ciphertext) // columns)  # aufgerundetes Ergebnis der Division, entspricht math.ceil(len(ciphertext) / columns)
>     
>     # Initialisiere eine Liste für den entschlüsselten Text
>     plaintext = [''] * len(ciphertext)
>     
>     # Berechne die Anzahl der vollständigen Zeilen
>     full_rows = len(ciphertext) % columns
>     if full_rows == 0:
>         full_rows = columns
>     
>     index = 0
>     for col in range(columns):
>         for row in range(rows):
>             if col < full_rows or row < rows - 1:
>                 plaintext[row * columns + col] = ciphertext[index]
>                 index += 1
>     
>     # Füge die Zeilen zu einem String zusammen
>     return ''.join(plaintext)
> 
> if __name__ == "__main__":
>     # Beispielaufruf
>     klartext = "Dies ist erneut eine Testnachricht."
>     verschluesselter_text = scytale_encrypt(klartext, 5)
>     print("ciphertext", verschluesselter_text)
>     klartext2 = scytale_decrypt(verschluesselter_text, 5)
>     print("wiederklar", klartext2)
> ```

> [!solution]- main.py
> 
> ```python
> import scytale, caesar
> 
> # Beispielschlüssel und -nachricht
> klartext = "Das ist meine hochgeheime Nachricht. Wir treffen uns um 17 Uhr am Bahnhof."
> caesar_key = 3
> scytale_rails = 5
> 
> # Verschlüsseln
> ciphertext = klartext
> ciphertext = caesar.caesar_encrypt(ciphertext, caesar_key)
> ciphertext = scytale.scytale_encrypt(ciphertext, scytale_rails)
> print(ciphertext)
> 
> # Entschlüsseln
> klartext2 = ciphertext
> klartext2 = scytale.scytale_decrypt(klartext2, scytale_rails)
> klartext2 = caesar.caesar_decrypt(klartext2, caesar_key)
> print(klartext2)
> ```
