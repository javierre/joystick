let item = 0
let buttonVal = 0
function joystick () {
    if (item) {
    	
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        radio.sendNumber(10)
        basic.showString("-X")
    } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
        radio.sendNumber(11)
        basic.showString("+X")
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        basic.showString("-Y")
    } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
        basic.showString("+Y")
    } else {
        basic.clearScreen()
    }
}
function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256) {
        item = 1
    } else if (buttonVal < 597) {
        item = 2
    } else if (buttonVal < 725) {
        item = 3
    } else if (buttonVal < 793) {
        item = 4
    } else if (buttonVal < 836) {
        radio.setGroup(1)
        item = 0
    } else if (buttonVal < 938) {
        radio.setGroup(2)
        item = 0
    } else {
        item = 0
    }
    if (item != 0) {
        radio.sendNumber(item)
    }
}
basic.forever(function () {
    button()
})
