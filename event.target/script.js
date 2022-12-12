// const button = document.querySelector('#todo-button');
// const input = document.querySelector('#todo-input')

// function clickListener(event) {
//     console.log(event.target);
//     console.log('click');
// }

// function focusListener() {
//     console.log('focus');
// }

// function blurListener() {
//     console.log('blur');
// }

// function changeListener() {
//     console.log('change');
// }

// button.addEventListener('click', clickListener);
// button.addEventListener('focus', focusListener);
// button.addEventListener('blur', blurListener);
// //click, focus, blur, change
// input.addEventListener('click', clickListener);
// input.addEventListener('focus', focusListener);
// input.addEventListener('blur', blurListener);

// const selectElement = document.querySelector('#ice-cream');
// function selectListener(event) {
//     console.log('event', event);
//     console.log('event.target', event.target);
//     console.log('event.target.value',event.target.value);
//     console.log('selectElement', selectElement);
// }

// selectElement.addEventListener('change', selectListener);
// window.addEventListener('resize', function(event) {
//     console.log('resize');
// });

// const changeLogElement = document.querySelector('#change-log');
// const ageSelectElement = document.querySelector('#age');
// const genderSelectElement = document.querySelector('#gender');

// function changeListener(event) {
//     const selectName =  event.target.name;
//     const selectValue = event.target.value;
//     const text = `User has changed ${selectName} select with a value ${selectValue}`;

//     changeLogElement.innerText += "\n" + text;
// }

// ageSelectElement.addEventListener('change', changeListener);
// genderSelectElement.addEventListener('change', changeListener);

// let x = false;
// console.log(x);
// console.log((x = true));
// let x, y, a;
// x = y = a = "hello";
// console.log(x, y, a);

// document.querySelector('#my-input').addEventListener('input', function(event) {
//     console.log(event.target.value);// su inputo
// })

// const result = add(2, 3, 4);
// console.log(result);

// function add(a, b, c) {
//     return a + b + c;
// }

// function getInputValue(input) {
//     return Number(input.value);
// }
// getInputValueAsNumber(document.querySelector('my-input'));

// function add(a, b, c) {
//     if(typeof b === "underfined") {
//     b = 0;
//     }
//     return a + b + c;
// }
// add(2, 3)

const firstElement = document.querySelector("#first-number");
const secondElement = document.querySelector("#second-number");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const resultElement = document.querySelector("#result");

multiplyBtn.addEventListener("click", function () {
  const firstValue = getElementValue(firstElement);
  const secondValue = getElementValue(secondElement);
  const resultValue = multiply(firstValue, secondValue);
  resultElement.innerText = resultValue;
});

divideBtn.addEventListener("click", function () {
  const firstValue = getElementValue(firstElement);
  const secondValue = getElementValue(secondElement);
  const resultValue = divide(firstValue, secondValue);
  resultElement.innerText = resultValue;
});

function getElementValue(element) {
  const elementValue = Number(element.value);
  return elementValue;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
