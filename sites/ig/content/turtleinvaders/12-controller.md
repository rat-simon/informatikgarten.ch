---
title: "Zusatz: Controller einbinden"
---
Für die Controller nutzen wir das Packet `inputs`, das nicht Teil der Standardbibliothek von Python ist. Das heisst: Wir müssen das Packet herunterladen und installieren. 
## Das Packet `inputs` installieren

Glücklicherweise bietet Python einen Packetmanager namens `pip`. Grundsätzlich können Sie einfach im Terminal in Visual Studio Code eingeben:

```cmd
pip install inputs
```

Nun kann es gut sein, dass Ihr Computer den Befehl `pip` nicht registriert hat. Dann können Sie so vorgehen:
1. Führen Sie ein Python-Programm in Visual Studio Code aus und beenden Sie es wieder.
2. Jetzt klicken Sie ins Terminal und drücken Sie die Pfeiltaste nach oben. Das wechselt Ihre Eingabe zum letzten Befehl, der ausgeführt wurde. Der könnte so aussehen: `& C:/Users/marcc/AppData/Local/Programs/Python/Python311/python.exe "c:/Users/marcc/OneDrive/0_vault/0_inbox/code_demo/code library/turtleinvader/turtleinvader_git/main.py"`
3. Grundsätzlich besteht dieser Befehl aus zwei Teilen:
	1. Der erste Teil ist der Pfad zu `python.exe`
	2. Der zweite Teil ist der Pfad zu Ihrem Programm (bei mir `main.py`)
4. Ersetzen Sie nun den zweiten Teil mit `-m pip install inputs`. Bei mir sieht das letztlich so aus: `& C:/Users/marcc/AppData/Local/Programs/Python/Python311/python.exe -m pip install inputs`
5. Dann drücken Sie Enter, um den Befehl auszuführen.

## Eine Datei `controller.py` erstellen

Nun erstellen Sie in Ihrem Projekt eine Datei `controller.py` mit folgendem Inhalt.

> [!NOTE]- Der Inhalt von `controller.py`
> 
> 
> ```python filename="controller.py"
> from inputs import get_gamepad
> import math
> import threading
> 
> class Controller(object):
>     MAX_TRIG_VAL = math.pow(2, 8)
>     MAX_JOY_VAL = math.pow(2, 15)
> 
>     def __init__(self):
> 
>         self.LeftJoystickY = 0
>         self.LeftJoystickX = 0
>         self.RightJoystickY = 0
>         self.RightJoystickX = 0
>         self.LeftTrigger = 0
>         self.RightTrigger = 0
>         self.LeftBumper = 0
>         self.RightBumper = 0
>         self.A = 0
>         self.X = 0
>         self.Y = 0
>         self.B = 0
>         self.LeftThumb = 0
>         self.RightThumb = 0
>         self.Back = 0
>         self.Start = 0
>         self.LeftDPad = 0
>         self.RightDPad = 0
>         self.UpDPad = 0
>         self.DownDPad = 0
> 
>         self._monitor_thread = threading.Thread(target=self._monitor_controller, args=())
>         self._monitor_thread.daemon = True
>         self._monitor_thread.start()
> 
> 
>     def read(self): # return the buttons/triggers that you care about in this methode
>         x = self.LeftJoystickX
>         y = self.LeftJoystickY
>         a = self.A
>         b = self.X # b=1, x=2
>         rb = self.RightBumper
>         return [x, y, a, b, rb]
> 
> 
>     def _monitor_controller(self):
>         while True:
>             events = get_gamepad()
>             for event in events:
>                 if event.code == 'ABS_Y':
>                     self.LeftJoystickY = event.state / Controller.MAX_JOY_VAL # normalize between -1 and 1
>                 elif event.code == 'ABS_X':
>                     self.LeftJoystickX = event.state / Controller.MAX_JOY_VAL # normalize between -1 and 1
>                 elif event.code == 'ABS_RY':
>                     self.RightJoystickY = event.state / Controller.MAX_JOY_VAL # normalize between -1 and 1
>                 elif event.code == 'ABS_RX':
>                     self.RightJoystickX = event.state / Controller.MAX_JOY_VAL # normalize between -1 and 1
>                 elif event.code == 'ABS_Z':
>                     self.LeftTrigger = event.state / Controller.MAX_TRIG_VAL # normalize between 0 and 1
>                 elif event.code == 'ABS_RZ':
>                     self.RightTrigger = event.state / Controller.MAX_TRIG_VAL # normalize between 0 and 1
>                 elif event.code == 'BTN_TL':
>                     self.LeftBumper = event.state
>                 elif event.code == 'BTN_TR':
>                     self.RightBumper = event.state
>                 elif event.code == 'BTN_SOUTH':
>                     self.A = event.state
>                 elif event.code == 'BTN_NORTH':
>                     self.Y = event.state #previously switched with X
>                 elif event.code == 'BTN_WEST':
>                     self.X = event.state #previously switched with Y
>                 elif event.code == 'BTN_EAST':
>                     self.B = event.state
>                 elif event.code == 'BTN_THUMBL':
>                     self.LeftThumb = event.state
>                 elif event.code == 'BTN_THUMBR':
>                     self.RightThumb = event.state
>                 elif event.code == 'BTN_SELECT':
>                     self.Back = event.state
>                 elif event.code == 'BTN_START':
>                     self.Start = event.state
>                 elif event.code == 'BTN_TRIGGER_HAPPY1':
>                     self.LeftDPad = event.state
>                 elif event.code == 'BTN_TRIGGER_HAPPY2':
>                     self.RightDPad = event.state
>                 elif event.code == 'BTN_TRIGGER_HAPPY3':
>                     self.UpDPad = event.state
>                 elif event.code == 'BTN_TRIGGER_HAPPY4':
>                     self.DownDPad = event.state
> 
> 
> 
> 
> if __name__ == '__main__':
>     joy = Controller()
>     while True:
>         print(joy.read())
> ```

## `main.py` anpassen

Duplizieren Sie die Datei `main.py` zu `main_controller.py`. So versichern wir, dass Sie Ihr altes Programm nicht verlieren. Weil nun müssen wir die gesamte Steuerung ersetzen.

Ganz oben in der Datei importieren Sie nun aus `controller.py`

```python filename="main.py"
...
from controller import Controller # [!code ++]
joycon = Controller() # [!code ++]
...
```

Diesen gesamten Teil unserer Steuerung brauchen wir nicht mehr.

```python filename="main.py"
# Steuerung
ship_direction = 0  # [!code --]
 # [!code --]
 # [!code --]
def move_left(): # [!code --]
    global ship_direction # [!code --]
    ship_direction = -1 # [!code --]
 # [!code --]
 # [!code --]
def move_right(): # [!code --]
    global ship_direction # [!code --]
    ship_direction = 1 # [!code --]
 # [!code --]
 # [!code --]
def stop_moving_left(): # [!code --]
    global ship_direction # [!code --]
    if ship_direction == -1: # [!code --]
        ship_direction = 0 # [!code --]
 # [!code --]
 # [!code --]
def stop_moving_right(): # [!code --]
    global ship_direction # [!code --]
    if ship_direction == 1: # [!code --]
        ship_direction = 0 # [!code --]
 # [!code --]
 # [!code --]
window.onkeypress(quit, "q")
window.onkeypress(move_left, "Left") # [!code --]
window.onkeypress(move_right, "Right") # [!code --]
window.onkeypress(create_laser, "space") # [!code --]
window.onkeyrelease(stop_moving_left, "Left") # [!code --]
window.onkeyrelease(stop_moving_right, "Right") # [!code --]
window.listen()
```

Zu Beginn unseres Mainloops lesen wir nun die Inputs des Controllers und `x` ersetzt `ship_direction`.

```python filename="main.py"
while running:
    x, y, a, b, rb = joycon.read() # read the controller  # [!code ++]
	new_x = ship.xcor() + SHIP_STEP * x # [!code ++]
	new_x = ship.xcor() + SHIP_STEP * ship_direction # [!code --]
```

Das sollte so bereits funktionieren, aber der Laser kann nicht mehr schiessen. Natürlich: Wir haben den Leertasten-Eventlistener gelöscht. Machen wir das nun mit der Taste `a` im Mainloop.

```python filename="main.py"

while running:
    x, y, a, b, rb = joycon.read()
    new_x = ship.xcor() + SHIP_STEP * x
    if LEFT < new_x < RIGHT:
        ship.setx(new_x)
    if a == 1:  # [!code ++]
        create_laser() # [!code ++]
```

Das funktioniert leider nicht sehr gut, weil das Spiel zu schnell zu viele Laser erzeugt. Wir lösen das mit einem Intervall:

```python filename="main.py"

LASER_INTERVALL = 0.05 # [!code ++]
laser_time = time.time() # [!code ++]
while running:
    x, y, a, b, rb = joycon.read()
    new_x = ship.xcor() + SHIP_STEP * x
    if LEFT < new_x < RIGHT:
        ship.setx(new_x)
    if a == 1 and time.time() - laser_time > LASER_INTERVALL:  # [!code ++]
        create_laser() # [!code ++]
        laser_time = time.time() # [!code ++]
```

