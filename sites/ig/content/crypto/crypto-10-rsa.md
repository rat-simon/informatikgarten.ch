---
title: RSA-Demonstration
---
Eine simples Python-Programm für RSA.

```turtle
import random
 
# Funktion zur Berechnung des grössten gemeinsamen Teilers (ggT)
def ggT(a, b):
    while b != 0:
        a, b = b, a % b
    return a
 
# Funktion zur Berechnung des modularen Inversen
def modinv(a, m):
    m0, x, y = m, 0, 1
    if m == 1:
        return 0
    while a > 1:
        q = a // m # ganzzahlige, abgerundete Division
        m, a = a % m, m
        x, y = y - q * x, x
    if y < 0:
        y += m0
    return y
 
# Funktion zur Generierung eines Schlüsselpaares
def generate_keypair(p, q):
    # Berechne n als Produkt von p und q
    n = p * q
    # Berechne phi als Produkt von (p-1) und (q-1)
    phi = (p - 1) * (q - 1)
 
    gefundener_ggT = 0
    while gefundener_ggT != 1:
        # Wähle e zufällig, sodass 1 < e < phi und ggT(e, phi) = 1
        pub = random.randrange(1, phi)
        gefundener_ggT = ggT(pub, phi)
 
    # Berechne d als das modulare Inverse von e modulo phi
    priv = modinv(pub, phi)
    # Rückgabe des öffentlichen Schlüssels (e, n) und des privaten Schlüssels (d, n)
    return (pub, priv, n)
 
# Funktion zur Verschlüsselung einer Nachricht
def encrypt(pk, plaintext):
    key, n = pk
    # Verschlüssele jedes Zeichen der Nachricht
    cipher = [chr(pow(ord(char), key, n)) for char in plaintext]
    return cipher
 
# Funktion zur Entschlüsselung einer Nachricht
def apply_key(key, n, ciphertext):
    # Entschlüssele jedes Zeichen der verschlüsselten Nachricht
    plain = [chr(pow(ord(char), key, n)) for char in ciphertext]
    return ''.join(plain)
 
# Beispielwerte für p und q (Primezahlen)
p = 61
q = 53
 
print("Generiere Schlüsselpaare...")
public, private, n = generate_keypair(p, q)
print("Öffentlicher Schlüssel:", public)
print("Privater Schlüssel:", private)
 
message = "Hallo"
print("Ursprüngliche Nachricht:", message)
encrypted_msg = apply_key(public, n, message)
print("Verschlüsselte Nachricht:", ''.join(map(lambda x: str(x), encrypted_msg)))
decrypted_msg = apply_key(private, n, encrypted_msg)
print("Entschlüsselte Nachricht:", decrypted_msg)
```