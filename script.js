let formerNum;
let operator;

let displayVal;

let opToggle = false;

const numBtn = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const allClear = document.querySelector('#ac');
const opBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');

display.textContent = '0';

function checkOpToggle() {
    if (opToggle == false) {
        opBtn.forEach(button => {button.style.opacity = '1'});
    }
}

//clears display and resets the selected operator
allClear.addEventListener('click', () => {
    display.textContent = '0';
    opToggle = false;
    checkOpToggle();
});

//populate the display and log the number there
numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (opToggle == true) {
            display.textContent = '0';
            opToggle = false;
            checkOpToggle(opToggle);
        }

        if (display.textContent == 0) {
            display.textContent = '';
            display.textContent = display.textContent + button.value;
            displayVal = display.textContent;
        } else {
            display.textContent = display.textContent + button.value;
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
        opToggle = true;
    });
});

//when = is pressed
equalBtn.addEventListener('click', () => {
    opToggle = false;
    checkOpToggle();
    console.log(operate(formerNum, displayVal));
});

function power(a, b) { return Math.pow(a, b) }
function add(a, b) { return Number(a) + Number(b); }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(a, b) {
    if (operator == 'power') {
        return display.textContent = power(a, b);
    } else if (operator == 'divide') {
        return display.textContent = divide(a, b);
    } else if (operator == 'multiply') {
        return display.textContent = multiply(a, b);
    } else if (operator == 'subtract') {
        return display.textContent = subtract(a, b);
    } else if (operator == 'add') {
        return display.textContent = add(a, b);
    }
}