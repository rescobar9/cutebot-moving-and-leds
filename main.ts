let Speed = 0
basic.forever(function () {
    if (Speed == 100) {
        Speed = 0
    }
    cuteBot.motors(Speed, Speed)
    Speed += 1
    cuteBot.forward()
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(1000)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    basic.pause(1000)
})
