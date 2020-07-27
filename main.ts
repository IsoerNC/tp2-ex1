function Vezrtical_move () {
    Y += Direction2
    if (Y <= 0) {
        Direction2 += 1
        led.unplot(X, Y + 4)
    } else if (Y >= 4) {
        Direction2 += -1
        led.unplot(X, Y - 4)
    }
    led.plot(X, Y)
}
function Horizontal_move () {
    while (X - Y < 0) {
        X += X - Y
        led.plot(X - Y, Y)
        if (X - Y >= 0) {
        	
        }
    }
}
let Direction2 = 0
let Y = 0
let X = 0
X = 4
Y = 0
led.plot(X, Y)
led.plot(X - 1, Y + 1)
led.plot(X - 2, Y + 2)
led.plot(X - 3, Y + 3)
led.plot(X - 4, Y + 4)
Direction2 = 1
basic.forever(function () {
    basic.pause(500)
    Vezrtical_move()
    Horizontal_move()
    basic.pause(500)
})
