//create the 4 calculation types: + - * /
//an operation will consist of 3 variables:
    //a number
    //an operator
    //a second number

//function operate() will take an operator and 2 numbers and then calls one of the above functions on the numbers

let formerNum;
let operator;
let latterNum;

function operate() {

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

console.log(add(2, 2));
console.log(subtract(8, 4));
console.log(multiply(2, 5));
console.log(divide(6, 3));
