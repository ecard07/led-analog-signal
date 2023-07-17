pins.servoWritePin(AnalogPin.P0, 180)
basic.forever(function () {
    basic.showNumber(0)
    pins.servoWritePin(AnalogPin.P0, pins.map(
    input.temperature(),
    -5,
    1023,
    0,
    180
    ))
})
