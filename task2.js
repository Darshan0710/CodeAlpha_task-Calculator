const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else if (value === '=') {
            currentInput = calculate(previousInput, currentInput, operator);
            operator = '';
        } else {
            currentInput += value;
        }

        updateScreen(currentInput);
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateScreen('0');
});

function updateScreen(value) {
    calculatorScreen.value = value;
}

function calculate(first, second, operator) {
    let result = 0;
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);

    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
    }

    return result.toString();
}
