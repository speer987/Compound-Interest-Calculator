let principal = document.getElementById("principal");
let interestRate = document.getElementById("interest-rate");
let timesCompounded = document.getElementById("times-compounded");
let years = document.getElementById("years");
let calcBtn = document.getElementById("calc-btn");
let interestSpan = document.getElementById("interest");
let resetBtn = document.getElementById("reset");

principal.addEventListener("input", calcInterest);
interestRate.addEventListener("input", calcInterest);
timesCompounded.addEventListener("input", calcInterest);
years.addEventListener("input", calcInterest);

function calcInterest() {
  var parenthesis =
    1 + Number(interestRate.value / 100) / Number(timesCompounded.value);
  var exponent = Number(timesCompounded.value) * Number(years.value);
  var result = Number(principal.value) * parenthesis ** exponent;
  if (isNaN(result)) {
    result = 0;
  }
  return result;
}

calcBtn.addEventListener("click", displayInterest);
function displayInterest() {
  if (isPositive()) {
    interestSpan.textContent =
      "$" + parseFloat(calcInterest().toFixed(2)).toLocaleString("en");
  } else {
    interestSpan.textContent = "Error. Please enter positive numbers.";
  }
}

function isPositive() {
  if (
    Number(principal.value) > 0 &&
    timesCompounded.value > 0 &&
    years.value > 0 &&
    interestRate.value > 0
  ) {
    return true;
  }
}

resetBtn.addEventListener("click", resetFields);
function resetFields() {
  principal.value = "";
  interestRate.value = "";
  timesCompounded.value = "";
  years.value = "";
  interestSpan.textContent = "";
}
