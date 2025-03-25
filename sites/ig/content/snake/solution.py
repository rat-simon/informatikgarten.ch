import turtle

# Konfigurationsvariabeln
speed = 15
messabstand = 10
turtle.mode("logo")

# Helfervariabeln für uns Menschen
KEY_D = 68
KEY_A = 65
KEY_S = 83
KEY_W = 87
KEY_LEFT = 37
KEY_RIGHT = 39
KEY_UP = 38
KEY_DOWN = 40
KEY_SPACE = 32
KEY_ESC = 27

# Steuert beide Turtle bei keypressed-Event
def onKeyPressed(key):
    global eva, joe, RUNNING
    print(key)
    
    if (key == KEY_ESC):
        RUNNING = False
        
    elif (key == "Right"):
        eva.setheading(90)
    elif (key == "Up"):
        print("yes Up")
        eva.setheading(0)
    elif (key == KEY_LEFT):
        eva.setHeading(270)
    elif (key == KEY_DOWN):
        eva.setHeading(180)

    if (key == KEY_D):
        joe.setHeading(90)
    elif (key == KEY_W):
        joe.setHeading(0)
    elif (key == KEY_S):
        joe.setHeading(180)
    elif (key == KEY_A):
        joe.setHeading(270)

def detectCrash(turtle):
    crash = False

    # Ab hier setzen wir die Position der detector-Turtle
    x = turtle.getX()
    y = turtle.getY()

    if turtle.heading() == 0:
        y = y + messabstand
    elif turtle.heading() == 90:
        x = x + messabstand
    elif turtle.heading() == 180:
        y = y - messabstand
    elif turtle.heading() == 270:
        x = x - messabstand
    detector.setPos(x, y)

    # Jetzt können wir die Farbmessung vornehmen
    farbmessung = detector.getPixelColor() # Die Farbe am Ort der Detector-Turtle
    if farbmessung == hintergrundsfarbe:
      crash = False
    else:
      crash = True
    return crash
    
window = turtle.Screen()
# Bind multiple keys to the onKeyPressed function
keys = ["Up", "Down", "Left", "Right"]
for key in keys:
    window.onkeypress(lambda k=key: onKeyPressed(k), key)
window.listen()

# Erste Spiel-Turtle
eva = turtle.Turtle()
eva.color("green")
eva.pencolor("green")
eva.pensize(10)
eva.setpos(115,-50)

# Zweite Spiel-Turtle
joe = turtle.Turtle()
# joe.setColor("red")
# joe.setPenColor("red")
# joe.setPenWidth(speed)
joe.setpos(-135, -50)

# Unsichtbare Detector-Turtle
# detector = turtle.Turtle()
# detector.hideTurtle()
# hintergrundsfarbe = detector.get()


# Laufzeit-Variabeln, die uns das Leben erleichtern
RUNNING = True


# Der Eventloop. Läuft solange RUNNING == True.
while RUNNING:
    eva.forward(speed)
    joe.forward(speed)