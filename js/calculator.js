'use strict';

const btnCalculator = document.querySelector('.btn-calculator')
const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')

// abre e fecha a calculadora
btnCalculator.addEventListener('click', function () {
    const calculator = document.querySelector('.calculator')
    calculator.classList.toggle('display-block')
})
document.addEventListener('click', (e) => {
    if (!e.target.matches('.btn-calculator') && !e.target.closest('.calculator')) {
        calculator.classList.remove('display-block')
    }
})

// variaveis iniciais
display.textContent = '';
let newNumber = true;
let newDecimal = true;

// funcoes
function addDigit(digit) {
    display.textContent += digit;
}

function clean() {
    const numDisplayed = display.innerHTML;
    if (newNumber == false) {
        newNumber = true;
    }
    if (numDisplayed.slice(-1) == '.') {
        newDecimal = true;
    }

    display.innerHTML = numDisplayed.substring(0, numDisplayed.length - 1)
}

function cleanAll() {
    display.innerHTML = "";
    newNumber = true;
    newDecimal = true;
}

function calculate() {
    display.innerHTML = eval(display.innerHTML);

    newNumber = true;
    newDecimal = true;
    if (display.innerHTML == 'undefined') {
        display.innerHTML = ""
    }
    if (display.innerHTML.includes('.')) {
        let numAfterDecimal = display.textContent.split('.')[1]
        if (numAfterDecimal.length > 3) {
            display.innerHTML = Number(eval(display.innerHTML)).toFixed(2)
        }
    }
}

// limpar tudo clicando na tela
calculator.querySelector('.calculator__btn-clean').addEventListener('click', cleanAll)

// botoes clicados
const btnKeyCalculator = calculator.querySelectorAll('button');
btnKeyCalculator.forEach((key) => {
    key.addEventListener('click', (e) => {
        const value = e.target.textContent;
        if (e.target.matches('.calculator__value')) {
            newNumber = true;
            // checa se a operação já tem um ponto
            if (value === '.' && newDecimal == true) {
                newNumber = false;
                if (display.textContent == '') {
                    display.textContent = '0.';
                } else if (display.textContent.length > 0 && newDecimal == true) {
                    newNumber = false;
                    addDigit(value)
                }
                newDecimal = false;
            } else if (value === '.' && newDecimal == false) {
                return
            } else {
                // adiciona um número
                addDigit(Number(value));
            }
        } else {
            if (newNumber == false) {
                return
            } else {
                if (value == 'x') {
                    addDigit('*')
                    newDecimal = true;
                } else if (value == '÷') {
                    addDigit('/')
                    newDecimal = true;
                } else if (value == '+' || value == '-') {
                    addDigit(value)
                    newDecimal = true;
                }
                newNumber = false;
            }
        }
    })
})
calculator.querySelector('.clean').addEventListener('click', clean);
calculator.querySelector('.igual').addEventListener('click', calculate)

//Digitar um número com teclado faz digitar na calculadora

const keyMap = {
    '0': 'zero',
    '1': 'um',
    '2': 'dois',
    '3': 'tres',
    '4': 'quatro',
    '5': 'cinco',
    '6': 'sete',
    '8': 'oito',
    '9': 'nove',
    'Backspace': 'clean',
    ',': 'ponto',
    '.': 'ponto',
    '+': 'mais',
    '-': 'menos',
    '*': 'multiplicar',
    '/': 'dividir',
    'Enter':'igual'
}

function keyPressedValue(keyValue) {
    document.querySelector(`.${keyValue}`).click()
}

const keyPressed = (e) => {
    if (calculator.matches('.display-block')) {
        const key = e.key
        const keyArrayValue = keyMap[key]

        const allowedKeys = Object.keys(keyMap).indexOf(key) !== -1;
        if(allowedKeys){
            keyPressedValue(keyArrayValue)
        }
    } else {
        return
    }
}

document.addEventListener('keydown', keyPressed)
