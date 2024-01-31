let num1 = 0,
    operator, 
    num2 = 0;
let expression = '';
let userInput = document.querySelector('.user-input');
let numButtons = document.querySelectorAll('.num-btn');
let optrButtons = document.querySelectorAll('.operator-btn');
let buttons = document.querySelectorAll('button');
let equals = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let isOperatorPresent = false;

function add(a, b) { return a + b }
function sub(a, b) { return a - b }
function mul(a, b) { return a * b }
function div(a, b) { return a / b }

function operate(num1, operator, num2) {
  switch(operator) {
    case "+":
      console.log("num1: " + num1 + " | num2: " + num2);
      return add(num1, num2);
    case "-":
      console.log("num1: " + num1 + " | num2: " + num2);
      return sub(num1, num2);
    case "*":
      console.log("num1: " + num1 + " | num2: " + num2);
      return mul(num1, num2);
    case "/":
      console.log("num1: " + num1 + " | num2: " + num2);
      return div(num1, num2);
    default: 
      return ;
  }
  
}
clear.addEventListener('click', () => {
  userInput.innerText = '';
  num1 = num2 = 0;
})

equals.addEventListener('click', () => {
  let result = operate(+num1, operator, +num2);
  userInput.innerText = Number.isInteger(result) ? result : result.toFixed(1);
  num1 = result;
  num2 = 0;
  operator = null;
});

showText();

function showText() {
  let span = document.createElement('span');
  numButtons.forEach(btn => {
    btn.addEventListener('click', () => {;
      if(operator) {
        userInput.innerText += btn.innerText;
        num2 += btn.innerText;
        return ;
      }else{
        userInput.innerText += btn.innerText;
        num1 += btn.innerText;
        return ;
      }
    })
  });
  optrButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      operator = btn.innerText;
      span.innerText = btn.innerText;
      userInput.appendChild(span);
    })
  })
}

// function displayText() {
//   buttons.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       if(!Number(userInput.innerText.charAt(userInput.innerText.length))){
//         expression = userInput.innerText.charAt(userInput.innerText.length);
//       }
//       expression += btn.innerText;
//       userInput.innerText = expression;
      
//     })
//   })
// }

// displayText();