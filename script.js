const date = new Date();
let footer = document.querySelector('footer');
footer.innerHTML = `Syed Mehdi ${date.getFullYear()}`;
footer.style.cssText = 'font-family:Arial;';
/*---------------------------------------------------*/ 

let userInput = document.querySelector('.user-input');
let allButtons = document.querySelectorAll('button');
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equal');
let deleteButton = document.querySelector('.delete');
let operands = {
  num1: '',
  num2: '',
  operator: null
};

allButtons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.classList.contains('num-btn')){
      userInput.innerText += button.innerText;
      if(!operands.operator){
        operands.num1 += button.innerText;
      }else{
        operands.num2 += button.innerText;
      }
    }

    if(button.classList.contains('operator-btn')){
      if(!operands.operator){
        operands.operator = button.innerText;
        limitDigit();
        userInput.innerText += operands.operator;
      }else{
        calculate();
      }
    }
    limitDigit(userInput.innerText);
  })
});

//----------CLEAR BUTTON----------//
clearButton.addEventListener('click', () => {
  userInput.innerText = '';
  operands.num1 = operands.num2 = '';
  operands.operator = null;
});

//----------DELETE BUTTON---------//
deleteButton.addEventListener('click', () => {
  let enteredString = userInput.innerText;

  if(enteredString.charAt(enteredString.length-1) == operands.operator){
    operands.operator = null;
    userInput.innerText = enteredString.slice(0, enteredString.length-1);
  }
  else if(enteredString.charAt(enteredString.length-1) == (operands.num2).charAt(operands.num2.length-1)){
    let newNum2 = operands.num2.slice(0, operands.num2.length-1);
    operands.num2 = newNum2;
    userInput.innerText = enteredString.slice(0, enteredString.length-1);
  }
  else if(enteredString.charAt(enteredString.length-1) == (operands.num1).charAt(operands.num1.length-1)){
    let newNum1 = operands.num1.slice(0, operands.num1.length-1);
    operands.num1 = newNum1;
    userInput.innerText = enteredString.slice(0, enteredString.length-1);
  }
});

//--------------------FUNCTIONS-----------------------//
function add(a, b) { return a + b }
function sub(a, b) { return a - b }
function mul(a, b) { return a * b }
function div(a, b) { return a / b }

function operate(num1, operator, num2) {
  switch(operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return mul(num1, num2);
    case "/":
      return div(num1, num2);
    default: 
      return 0;
  }
}
//----------CALCULATE-------------//
function calculate() {
  let result = operate(+operands.num1, operands.operator, +operands.num2);
  if(result == "Infinity"){
    userInput.innerText = "BRUH";
    operands.num1 = operands.num2 = '';
    operands.operator = null;
    return;
  }
  if(Number(result)){
    if(Number.isInteger(result)){
      userInput.innerText = result;
    }else if(!Number.isInteger(result)){
      userInput.innerText = (+Math.fround(result)).toFixed(1);
    }
    operands.num1 = `${result}`;
    operands.num2 = '';
    operands.operator = null;
    return;
  }
}

function limitDigit(str) {
  if(userInput.innerText.length > 10){
    alert("Stop!");
    userInput.innerText = str.slice(0, str.length-1);
    return ;
  }
}