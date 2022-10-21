input.onButtonPressed(Button.A, function () {
    while (hi <= 5) {
        led.plot(hi, 0)
        basic.pause(500)
        hi += 1
        basic.clearScreen()
        led.plot(hi, 0)
    }
    if (hi >= 5) {
        hi = 0
    }
})
input.onButtonPressed(Button.B, function () {
    while (bye <= 5) {
        led.plot(0, bye)
        basic.pause(500)
        bye += 1
        basic.clearScreen()
        led.plot(0, bye)
    }
    if (bye >= 5) {
        bye = 0
    }
})
let bye = 0
let hi = 0
hi = 0
bye = 0
