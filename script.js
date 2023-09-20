

let formerNum;
let operator;
let result;

let displayVal;

let opToggle = false;
let opChain = false;

const numBtn = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const allClear = document.querySelector('#ac');
const opBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const decimalBtn = document.querySelector('.decimal');

display.textContent = '0';

function checkOpToggle() {
    if (opToggle == false) {
        opBtn.forEach(button => {button.style.opacity = '1'});
    }
}

//clears display and resets the selected operator
allClear.addEventListener('click', () => {
    formerNum = undefined;
    operator = undefined;
    opChain = false;
    opToggle = false;

    display.textContent = '0';
    checkOpToggle();
});

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
})

//populate the display and log the number there
numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent.length === 9 && opToggle == false){
             //stops inputting numbers once display is full
        } else {
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
        }
    });
});

decimalBtn.addEventListener('click', () => {
    if(display.textContent.includes('.')) {
        //do nothing
    } else {
        display.textContent = display.textContent + decimalBtn.value;
    }
});


//function for the operator keys
opBtn.forEach(button => {
    button.addEventListener('click', () => {

        if (opChain === true) {
            opToggle = false;
            checkOpToggle();
            operate(formerNum, displayVal);
            displayVal = display.textContent;
        }
        button.style.opacity = '.8';

        operator = button.id;
        formerNum = displayVal;
        opToggle = true;
        opChain = true;
    });
});

//when = is pressed
equalBtn.addEventListener('click', () => {
    opToggle = false;
    checkOpToggle();
    operate(formerNum, displayVal);
    opToggle = true;
    formerNum = undefined;
    operator = undefined;
});

function power(a, b) { return Math.pow(a, b) }
function add(a, b) { return Number(a) + Number(b); }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }


function operate(a, b) {


    if (operator == 'power') {
        result = power(a, b).toString();
    } else if (operator == 'divide') {
        result = divide(a, b).toString();
    } else if (operator == 'multiply') {
        result = multiply(a, b).toString();
    } else if (operator == 'subtract') {
        result = subtract(a, b).toString();
    } else if (operator == 'add') {
        result = add(a, b).toString();
    }

    if (result.length >= 10) {
        return display.textContent = result.slice(0, 9);
    } else { return display.textContent = result }
}

