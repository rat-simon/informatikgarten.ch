#!/usr/bin/env python3
"""
Generiert 5 PDF-Arbeitsblätter für RGB zu CMYK Farbenumrechnung
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.pdfgen import canvas
from reportlab.lib.colors import Color
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

def rgb_to_cmyk(r, g, b):
    """Konvertiert RGB (0-255) zu CMYK (0-100%)"""
    r_norm = r / 255
    g_norm = g / 255
    b_norm = b / 255
    
    k = 1 - max(r_norm, g_norm, b_norm)
    
    if k == 1:
        c = m = y = 0
    else:
        c = (1 - r_norm - k) / (1 - k)
        m = (1 - g_norm - k) / (1 - k)
        y = (1 - b_norm - k) / (1 - k)
    
    return (round(c * 100, 1), round(m * 100, 1), 
            round(y * 100, 1), round(k * 100, 1))

def create_worksheet(filename, rgb_color, color_name):
    """Erstellt ein PDF-Arbeitsblatt für eine RGB-Farbe"""
    
    r, g, b = rgb_color
    c, m, y, k = rgb_to_cmyk(r, g, b)
    
    # PDF erstellen
    pdf = canvas.Canvas(filename, pagesize=A4)
    width, height = A4
    
    # Titel
    pdf.setFont("Helvetica-Bold", 24)
    pdf.drawString(2*cm, height - 2*cm, f"RGB zu CMYK Umrechnung: {color_name}")
    
    # RGB-Farbe angeben
    pdf.setFont("Helvetica-Bold", 18)
    pdf.drawString(2*cm, height - 3.5*cm, f"RGB-Farbe: ({r}, {g}, {b})")
    
    # Große Farbfläche (RGB-kodiert für Bildschirmvergleich)
    pdf.setFillColorRGB(r/255, g/255, b/255)
    pdf.rect(2*cm, height - 8*cm, 8*cm, 3*cm, fill=1, stroke=1)
    
    # Beschriftung für Farbfläche
    pdf.setFillColorRGB(0, 0, 0)
    pdf.setFont("Helvetica", 10)
    pdf.drawString(2*cm, height - 8.5*cm, "Farbfläche (RGB-kodiert für Bildschirmvergleich)")
    
    # Zwei Felder für Mikroskopaufnahmen
    pdf.setFont("Helvetica", 12)
    pdf.drawString(12*cm, height - 4*cm, "Platz für Mikroskopaufnahme")
    pdf.drawString(12*cm, height - 4.5*cm, "RGB-Pixel (Bildschirm):")
    pdf.setFillColorRGB(0.95, 0.95, 0.95)
    pdf.rect(12*cm, height - 7*cm, 6*cm, 2.5*cm, fill=1, stroke=1)
    
    pdf.setFillColorRGB(0, 0, 0)
    pdf.drawString(12*cm, height - 8*cm, "Platz für Mikroskopaufnahme")
    pdf.drawString(12*cm, height - 8.5*cm, "CMYK-Druckfarben:")
    pdf.setFillColorRGB(0.95, 0.95, 0.95)
    pdf.rect(12*cm, height - 11*cm, 6*cm, 2.5*cm, fill=1, stroke=1)
    
    # Umrechnungsaufgabe
    pdf.setFillColorRGB(0, 0, 0)
    pdf.setFont("Helvetica-Bold", 14)
    pdf.drawString(2*cm, height - 10*cm, "Aufgabe: Rechnen Sie RGB zu CMYK um")
    
    # Normalisierung
    pdf.setFont("Helvetica", 12)
    pdf.drawString(2*cm, height - 11*cm, "1. Normalisierung (RGB ÷ 255):")
    pdf.drawString(3*cm, height - 11.5*cm, f"r = {r} ÷ 255 = _______")
    pdf.drawString(3*cm, height - 12*cm, f"g = {g} ÷ 255 = _______")
    pdf.drawString(3*cm, height - 12.5*cm, f"b = {b} ÷ 255 = _______")
    
    # K berechnen
    pdf.drawString(2*cm, height - 13.5*cm, "2. K-Wert bestimmen:")
    pdf.drawString(3*cm, height - 14*cm, "K = 1 - max(r, g, b) = _______")
    
    # CMY berechnen
    pdf.drawString(2*cm, height - 15*cm, "3. C, M, Y berechnen:")
    pdf.drawString(3*cm, height - 15.5*cm, "C = (1 - r - K) ÷ (1 - K) = _______")
    pdf.drawString(3*cm, height - 16*cm, "M = (1 - g - K) ÷ (1 - K) = _______")
    pdf.drawString(3*cm, height - 16.5*cm, "Y = (1 - b - K) ÷ (1 - K) = _______")
    
    # Ergebnis in Prozent
    pdf.drawString(2*cm, height - 17.5*cm, "4. Ergebnis in Prozent:")
    pdf.drawString(3*cm, height - 18*cm, "C = _______ %")
    pdf.drawString(3*cm, height - 18.5*cm, "M = _______ %")
    pdf.drawString(3*cm, height - 19*cm, "Y = _______ %")
    pdf.drawString(3*cm, height - 19.5*cm, "K = _______ %")
    
    # Fläche für Farbmischung mit Acryl
    pdf.setFont("Helvetica-Bold", 12)
    pdf.drawString(2*cm, height - 21*cm, "Farbmischung mit Acrylfarben:")
    pdf.setFont("Helvetica", 10)
    pdf.drawString(2*cm, height - 21.5*cm, "Mischen Sie hier die Farbe mit Acrylfarben nach:")
    
    # Weißes Rechteck für Farbmischung
    pdf.setFillColorRGB(1, 1, 1)
    pdf.rect(2*cm, height - 25*cm, 8*cm, 3*cm, fill=1, stroke=1)
    
    # Lösung klein unten
    pdf.setFont("Helvetica", 8)
    pdf.setFillColorRGB(0.5, 0.5, 0.5)
    solution = f"Lösung: CMYK({c}%, {m}%, {y}%, {k}%)"
    pdf.drawRightString(width - 2*cm, 2*cm, solution)
    
    # Fußzeile
    pdf.setFont("Helvetica", 10)
    pdf.drawString(2*cm, 2*cm, f"Arbeitsblatt: {color_name}")
    
    pdf.save()
    print(f"Erstellt: {filename}")

# 5 verschiedene Farben definieren
colors = [
    ((255, 64, 16), "Orange"),
    ((50, 0, 200), "Violett"),
    ((0, 255, 128), "Mintgrün"),
    ((255, 200, 0), "Goldgelb"),
    ((200, 30, 90), "Magentarot")
]

# PDFs erstellen
output_dir = "farben_arbeitsblaetter"
os.makedirs(output_dir, exist_ok=True)

for i, (rgb, name) in enumerate(colors, 1):
    filename = os.path.join(output_dir, f"arbeitsblatt_{i:02d}_{name.lower()}.pdf")
    create_worksheet(filename, rgb, name)

print(f"\n✓ Alle 5 Arbeitsblätter wurden im Ordner '{output_dir}' erstellt!")
print("\nDie Arbeitsblätter enthalten:")
print("- RGB-Farbangabe und große Farbfläche zum Vergleich")
print("- Platz für Mikroskopaufnahmen von RGB-Pixeln und CMYK-Druckfarben")
print("- Umrechnungsaufgabe mit Platz zum Ausfüllen")
print("- Fläche zum Nachmischen mit Acrylfarben")
print("- Lösung klein am Seitenende")