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
    liste = [X, Y]
    while (X - Y < 0) {
        X += X - Y
        led.plot(X - Y, Y)
        if (X - Y >= 0) {
        	
        }
    }
}
let liste: number[] = []
let Direction2 = 0
let Y = 0
let X = 0
let Led_mouvante1 = 4
let Led_mouvante_2 = 0
X = 4
led.plot(Led_mouvante1, Led_mouvante_2)
led.plot(X - 1, Y + 1)
led.plot(X - 2, Y + 2)
led.plot(X - 3, Y + 3)
led.plot(X - 4, Y + 4)
Direction2 = 1
basic.forever(function () {
    basic.pause(100)
    Vezrtical_move()
    Horizontal_move()
    basic.pause(100)
})
