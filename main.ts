let hi = 0
let bye = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, bye)
        basic.pause(500)
        bye += 1
    }
    if (bye > 4) {
        bye = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(hi, 0)
        basic.pause(500)
        hi += 1
    }
    if (hi > 4) {
        hi = 0
    }
})
