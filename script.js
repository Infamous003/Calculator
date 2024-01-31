const date = new Date();
let footer = document.querySelector('footer');
footer.innerHTML = `Syed Mehdi ${date.getFullYear()}`;
footer.style.cssText = 'font-family:Arial;';
console.log("FOOOOOOTER");

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
let deletebtn = document.querySelector('.delete');
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
  userInput.innerText = Number.isInteger(result) ? result : result.toFixed(3);
  num1 = result;
  num2 = 0;
  operator = null;
});

deletebtn.addEventListener('click' , () => {
  let enteredString = userInput.innerText;
  let len = enteredString.length;
  let newsString = enteredString.slice(0, len-1);
  let newNum1 = num1.toString().slice(0, num1.length-1);
  let newNum2 = num2.toString().slice(0, num2.length-1);
  num1 = newNum1;
  num2 = newNum2;
  userInput.innerText = newsString;
})

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

