// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));

    let currentInput = '';
    let operator = '';
    let previousValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousValue = '';
                updateDisplay('');
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput === '' && previousValue === '') {
                    // No previous input, do nothing
                    return;
                }

                if (currentInput === '' && previousValue !== '') {
                    // Only operator clicked after a previous value, update operator
                    operator = value;
                    updateDisplay(previousValue + ' ' + operator);
                    return;
                }

                if (previousValue !== '') {
                    calculate();
                }

                operator = value;
                previousValue = currentInput;
                currentInput = '';
                updateDisplay(previousValue + ' ' + operator);
            } else if (value === '=') {
                if (currentInput === '' || previousValue === '') return;
                calculate();
                operator = '';
                previousValue = '';
            } else {
                currentInput += value;
                updateDisplay(previousValue + ' ' + operator + ' ' + currentInput);
            }
        });
    });

    function calculate() {
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }

        updateDisplay(result);
        currentInput = result;
    }

    function updateDisplay(value) {
        display.textContent = value;
    }
});
s