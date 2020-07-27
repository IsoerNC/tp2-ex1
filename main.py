def Monter_led():
    return 0
Y = 0
X = 0
led.plot(X, Y)
Direction2 = 1

def on_forever():
    global X, Y
    X += Direction2
    Y += Direction2
basic.forever(on_forever)
