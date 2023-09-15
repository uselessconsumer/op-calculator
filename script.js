//number is input

//user selects an operator
    //stores displayVal in formerNum
    //operator stays greyed out until = is pressed


//user inputs second number
    //display is cleared once a number is clicked
//user presses =
    //operate is ran with formerNum and displayVal
    //displayVal is calculated against formerNum
//display shows the answer based on operator selected

let formerNum;
let operator;

let displayVal;

const numBtn = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const allClear = document.querySelector('#ac');
const opBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');


display.textContent = '0';

allClear.addEventListener('click', () => {
    display.textContent = '0';
});

//populate the display and log the number there
numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent == 0) {
            display.textContent = '';
            display.textContent = display.textContent + button.id;
            displayVal = display.textContent;
        } else {
            display.textContent = display.textContent + button.id;
            displayVal = display.textContent;
        }
    });
});

//start of the function for the operator keys
opBtn.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id;
        button.style.opacity = '.8';
        formerNum = displayVal;
    });
});

equalBtn.addEventListener('click', () => {
    
    console.log(operate(formerNum, displayVal));
});

function operate(a, b) {
    if (operator == 'power') {

    } else if (operator == 'divide') {

    } else if (operator == 'multiply') {

    } else if (operator == 'subtract') {

    } else if (operator == 'add') {
        
    }
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
