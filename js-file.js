// const keys = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 187, 189, 190];

let operatiopJustFinished = false;
let containsDecimal = false;
let previousNumber;
let operationsClicked = 0;
let currOperation;
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function() {
    displayNumber(number.textContent);
}));

// window.addEventListener('keydown', function() {
//     console.log()
// });

function displayNumber(number) {
    if(operatiopJustFinished === true) {
        clear();
    }
    operatiopJustFinished = false;
    display.textContent = display.textContent + number;
}

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', function() {
    display.textContent = getCurrNumber().substring(0, getCurrNumber().length - 1);
});


const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    clear();
    previousNumber = 0;
    operationsClicked = 0;
    operatiopJustFinished = false;
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

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function() {
    if (containsDecimal === false) {
        display.textContent = getCurrNumber() + '.';
    }
    containsDecimal = true;
});


function getCurrNumber(){
    return display.textContent;
}

function clear() {
    display.textContent = '';
    containsDecimal = false;
}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function divide(num1, num2) {
    if(num2 === 0) {
        display.textContent = "wtf";
    }
    return parseFloat(num1) / parseFloat(num2);
}

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function operate(num1, num2, operation){
    let result;
    if (operation === 'divide') {
        result = divide(num1, num2);
    }
    if (operation === 'multiply') {
        result = multiply(num1, num2);
    }
    if (operation === 'subtract') {
        result = subtract(num1, num2);
    }
    if (operation === 'add') {
        result = add(num1, num2);
    }
   
    previousNumber = result;
    display.textContent = result;
    operatiopJustFinished = true;
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
    currOperation = operation.id;
    operationsClicked = 1;
}));

