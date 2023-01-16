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
    display.textContent = '';
});

function add(num1, num2) {
    return num1 + num2;
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

