// const myDiv = document.createElement("div");
// const myText = document.createTextNode("Hello world");

// // myDiv.append(
// //   myText,
// //   document.createElement("br"),
// //   document.createTextNode("hello")
// // );

// myDiv.append(
//     document.createElement('br'),
//     document.createTextNode("hello")
// );
// myDiv.prepend(myText);

// const myDiv1 = document.createElement("div");

// myDiv1.textContent = 'first';
// const myDiv2 = document.createElement("div");
// myDiv1.textContent = 'second';

// const bodyEl = document.querySelector('body');

// bodyEl.append(myDiv2);

// const btn = document.createElement('button');
// btn.textContent = "remove first div";

// btn.addEventListener('click', function(){
//     bodyEl.removeChild(myDiv1);
// });

// const btn2 = document.createElement('button');

// btn2.textContent = "add first div"
// btn2.addEventListener('click', function(){
//     bodyEl.prepend(myDiv1);
// });

// document.body.prepend(btn, btn2);

// const btn = document.createElement("button");

// let counter = 0; //1//2

// btn.addEventListener("click", function () {
//   const div = document.createElement("div");
//   div.textContent = "new div";
//   div.id = "mydiv-" + counter;
//   counter++;
//   document.body.append(div);
// });

// console.log(document.body.children);
// btn.textContent = "Add new div";
// document.body.prepend(btn);

// const inputEl = document.querySelector("#todo-input");
// const btnEl = document.querySelector("#todo-btn");
// const todoListEl = document.querySelector("#todo-list");

// //create todo konstantos cia neveiktu
// function deleteTodo(elementToDelete) {
//   todoListEl.removeChild(elementToDelete);
// }

// function createTodo() {
//   const inputText = inputEl.value;
//   const todoEl = document.createElement("li");
//   todoEl.textContent = inputText;
//   inputEl.value = "";

//   todoListEl.append(todoEl); // kada idedame i dom

//   todoEl.addEventListener("click", function () {
//     //todoEl.remove();
//     //todoListEl.removeChild(todoEl);
//     deleteTodo(todoEl);
//   });
//   // const inputText ir todolist dingsta
// }
// //todoEl nepasiekamas

// btnEl.addEventListener("click", createTodo);

// //function myFunction(){

// }
//  myFunction();

// otherFunctionVariable();

// const anonymousFunctionInVariable = function() {
//     //bevarde
//     console.log('anonimine');
// };
// anonymousFunctionInVariable();

// function  callOtherFunction(otherFunction) {
//    return otherFunction;
// }
// const returnedFunction = callOtherFunction(myFunction);
// returnedFunction();

/*

Programa pradeda veikti paspaudus pliusiuką.

- pasiimam tekstą iš inputo

- tikrinam ar tekstas yra

   - Jei nėra:

     - atsiranda raudonas border ant inputo.

     - return



   - Jei yra:

    - Sukuriam naują elementą su dviem mygtukais.

    - Į elementą įdedam tekstą.

    - Prie mygtukų prikabinam atskiras funkcijas. Jos aprašomos kitame flow.

    - Įdėti elementą į DOM. (dokumento medį)

*/

const inputEl = document.querySelector("#todo-input");
const todoButtonEl = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");
const doneListEl = document.querySelector("#done-list");

todoButtonEl.addEventListener("click", addTodo);

function addTodo() {
  inputEl.style.border = "";
  const inputValue = inputEl.value;

  if (!inputValue) {
    inputEl.style.border = "1px solid red";
    return;
  }
  inputEl.value = "";
  //   const todo = createNewTodo(inputValue);
  todoListEl.append(createNewTodo(inputValue)); //todo
}
function createNewTodo(text) {
  const textNode = document.createTextNode(text);
  const newTodo = document.createElement("li");
  const doneButton = document.createElement("button");
  const closeButton = document.createElement("button");
  doneButton.textContent = "V";
  closeButton.textContent = "X";
  newTodo.append(textNode, doneButton, closeButton);

  function deleteTodo() {
    newTodo.remove();
  }

  closeButton.addEventListener("click", deleteTodo);
  doneButton.addEventListener("click", function () {
    deleteTodo();
    createNewDoneEl(text);
  });
  return newTodo;
}

function createNewDoneEl(title) {
  const newDoneEl = document.createElement("li");
  const textNode = document.createTextNode(title);
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  newDoneEl.append(textNode, closeButton);
  doneListEl.append(newDoneEl);
  closeButton.addEventListener("click", deleteDoneTodo);
  
  function deleteDoneTodo() {
    newDoneEl.remove();
  }
}
