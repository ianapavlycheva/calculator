const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let num1 = "";
let operator = "";
let num2 = "";
let displayValue = "";

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function updateDisplay(value) {
  displayValue += value;
  document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
  num1 = "";
  operator = "";
  num2 = "";
  displayValue = "";
  document.getElementById("display").innerText = "0";
}

document.querySelectorAll(".num").forEach((button) => {
  button.addEventListener("click", function () {
    if (operator === "") {
      num1 += button.innerText;
      updateDisplay(button.innerText);
    } else {
      num2 += button.innerText;
      updateDisplay(button.innerText);
    }
  });
});

document.querySelectorAll(".oper").forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerText === "C") {
      clearDisplay();
    } else if (button.innerText === "=") {
      if (num1 && operator && num2) {
        const result = operate(Number(num1), operator, Number(num2));
        clearDisplay();
        updateDisplay(result);
        num1 = result.toString();
      }
    } else {
      if (num1) {
        operator = button.innerText;
        updateDisplay(" " + operator + " ");
      }
    }
  });
});
