let num = 113
let firstName = 'Ildar' //string
const isprigrammer = true //boolean


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const umnogBtn = document.getElementById('umnog')
const rasdelBtn = document.getElementById('rasdel')
let action = '+'


plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

umnogBtn.onclick = function () {
    action = '*'
}

rasdelBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } 
    else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}


function computerNumbersWithAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }

    if (actionSymbol == '-') {
        return num1 - num2
    }

    if (actionSymbol == '*') {
        return num1 * num2
    }

    if (actionSymbol == '/') {
        return num1 / num2
    }
} 

submitBtn.onclick = function () {
    const result = computerNumbersWithAction(input1, input2, action)
    printResult(result)


} 
