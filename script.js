//create the 4 calculation types: + - * /
//an operation will consist of 3 variables:
    //a number
    //an operator
    //a second number

//function operate() will take an operator and 2 numbers and then calls one of the above functions on the numbers

let formerNum;
let operator;
let latterNum;

let displayVal;

const numBtn = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const allClear = document.querySelector('#ac');
// display.textContent = '123';

allClear.addEventListener('click', () => {
    display.textContent = '';
});


numBtn.forEach(button => {
    button.addEventListener('click', () => {
        console.log('ok');
        display.textContent = display.textContent + button.id;
        displayVal = display.textContent;
    });
});

function operate(callback, a, b) {
    
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
