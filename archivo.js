let expression = '';

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  expression += operator;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = '';
    updateDisplay();
    alert('Error in expression');
  }
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function deleteOne() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}