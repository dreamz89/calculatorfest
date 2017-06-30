// DOM Manipulator file

document.addEventListener('DOMContentLoaded', init)

function init () {
  var basic_calc = calculator()
  var display = document.querySelector('.display')

  document.addEventListener('keyup', onKeyUp)

  console.log(event)

  function onKeyUp (event) {
    if (checkKeyCode(event.keyCode)) {
    // check if we are clicking enter
      if (event.keyCode !== 13) {
        display.value += ' ' + event.key
      }
      else {
        var displayValue = display.value
        if (displayValue.includes('+')) calculateAdd(displayValue)
        if (displayValue.includes('-')) calculateMinus(displayValue)
        if (displayValue.includes('*')) calculateMultiply(displayValue)
        if (displayValue.includes('/')) calculateDivide(displayValue)
      }
    }
  }

  function calculateAdd (combo) {
    combo = combo.replace(/ /g, '')
    var splitStr = combo.split('+')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])

    var result = basic_calc.add(firstNum, secondNum)

    displayResult(result)
  }

  function calculateMinus (combo) {
    combo = combo.replace(/ /g, '')
    var splitStr = combo.split('-')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])

    var result = basic_calc.minus(firstNum, secondNum)

    displayResult(result)
  }

  function calculateMultiply (combo) {
    combo = combo.replace(/ /g, '')
    var splitStr = combo.split('*')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])

    var result = basic_calc.multiply(firstNum, secondNum)

    displayResult(result)
  }

  function calculateDivide (combo) {
    combo = combo.replace(/ /g, '')
    var splitStr = combo.split('/')
    var firstNum = parseInt(splitStr[0])
    var secondNum = parseInt(splitStr[1])

    var result = basic_calc.division(firstNum, secondNum)

    displayResult(result)
  }

  function displayResult (result) {
    display.value = result
  }

// if the key event is 1-0
// extend this to '=', 'enter', 'multiply', 'add', 'subtract', 'divide'
  function checkKeyCode (keycode) {
    if (keycode >= 48 && keycode <= 57) return true
    if (keycode === 187 || keycode === 13 || keycode === 106 || keycode === 107 || keycode === 109 || keycode === 191) return true
    else return false
  }
}
