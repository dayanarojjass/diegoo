let time = 0
let start = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    time = input.runningTime() - start
    basic.showNumber(time - 1000)
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(time % 1000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    start = input.runningTime()
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
})
