let num1 = "";
let operator = "";
let num2 = "";
let displayValue = "";
let isResultDisplayed = false;
let isDecimalAdded = false;

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
  if (b === 0) {
    return "Error";
  } else {
    return a / b;
  }
};

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
    default:
      return null;
  }
}

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}

function clearDisplay() {
  num1 = "";
  operator = "";
  num2 = "";
  displayValue = "";
  isResultDisplayed = false;
  updateDisplay("0");
}

document.querySelector(".dec").addEventListener("click", function () {
  if (isResultDisplayed) {
    clearDisplay();
    isResultDisplayed = false;
  }

  if (!isDecimalAdded) {
    if (operator === "") {
      num1 += ".";
      displayValue = num1;
    } else {
      num2 += ".";
      displayValue = num2;
    }
    updateDisplay(displayValue);
    isDecimalAdded = true;
  }
});

document.querySelectorAll(".num").forEach((button) => {
  button.addEventListener("click", function () {
    if (isResultDisplayed) {
      clearDisplay();
      isResultDisplayed = false;
    }

    if (operator === "") {
      num1 += button.innerText;
      displayValue = num1;
    } else {
      num2 += button.innerText;
      displayValue = num2;
    }
    updateDisplay(displayValue);
  });
});

document.querySelectorAll(".oper").forEach((button) => {
  button.addEventListener("click", function () {
    const oper = button.innerText;

    if (oper === "C") {
      clearDisplay();
    } else if (oper === "=") {
      if (num1 && operator && num2) {
        const result = operate(Number(num1), operator, Number(num2));
        updateDisplay(result);
        num1 = result.toString();
        num2 = "";
        operator = "";
        isResultDisplayed = true;
      }
    } else {
      if (isResultDisplayed) {
        isResultDisplayed = false;
      }

      if (num1 && !operator) {
        operator = oper;
      } else if (operator && num2) {
        num1 = operate(Number(num1), operator, Number(num2)).toString();
        operator = oper;
        num2 = "";
        displayValue = num1;
        updateDisplay(displayValue);
      } else if (num1 && operator && !num2) {
        operator = oper;
      }
      isDecimalAdded = false;
    }
  });
});
