
let previousNumber;
let operationsClicked = 0;
let currOperation;
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function() {
    displayNumber(number.textContent);
}));

function displayNumber(number) {
    display.textContent = display.textContent + number;
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    clear();
});

const numSign = document.querySelector('.numSign');
numSign.addEventListener('click', function() {
    if (getCurrNumber().charAt(0) === '-'){
        display.textContent = getCurrNumber().substring(1, getCurrNumber().length)
    }
    else{
        display.textContent = '-' + getCurrNumber();
    }
})

function getCurrNumber(){
    return display.textContent;
}

function clear() {
    display.textContent = '';
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operate(num1, num2, operation){
    let result;
    if (operation === '&divide;') {
        result = divide(num1, num2);
    }
    if (operation === '&times;') {
        result = multiply(num1, num2);
    }
    if (operation === '&minus;') {
        result = subtract(num1, num2);
    }
    if (operation === '&plus;') {
        result = add(num1, num2);
    }
    
    previousNumber = result;

}

const operations = document.querySelectorAll('.operation');
operations.forEach(operation => operation.addEventListener('click', function() {
    operationsClicked++;
    if (operationsClicked > 1) {
        operate(previousNumber, getCurrNumber(), currOperation);
    }
    else {
        previousNumber = getCurrNumber();
        clear();
    }
    currOperation = operation.textContent;
    operationsClicked = 1;
}));

