import timerState from "./state.js";
// //spread operatorius
// const obj = {
//   a: "text",
//   b: "text2",
// };

// const copy = { ...obj }; // daznai obj kopijvimo budas

// const obj2 = {
//     // a: "x", //istrins
//   ...obj,
//   a: obj.a + " (extended a)", //spread
//   c: "text3",
// };
// console.log(obj);
// console.log(obj2);
// console.log(copy);

// const { ...rest } = obj2; //destruct and rest

// const user = {
//   name: "vardas",
//   email: "l@gmail.com",
// };
// const personalInfo = {
//   address: "mmmmm",
//   age: 87,
// };

// const customer = createCustomer(user, personalInfo)
// // function createCustomer(userData, personalData) {
// //   const customer = {
// //     ...user,
// //     ...personalInfo,
// //   }
// //   return customer;
// // }
//  function createCustomer(userData, personalData) {
//   return {
//     ...userData,
//     ...personalData
//   };
//  }
//  console.log(customer);

// let time = 0;

// function tick() {
//   time++;
//   console.log("time");
// }
//  const currentInterval = setInterval(tick, 1000); // ms
// function stop() {
//   clearInterval(currentInterval);
// }
const elements = {
  lapButton: document.querySelector("#lap-btn"),
  startButton: document.querySelector("#start-btn"),
  stopButton: document.querySelector("#stop-btn"),
  resetButton: document.querySelector("#reset-btn"),
  timerBox: document.querySelector("#timer"),
};
console.log(elements);
// const timer = new TimerState(updateTimerText);//??

function getTimeFormat(time) {
  // if(time < 10) {
  //   return `0${time}`;
  // }
  // return time;
  return time < 10 ? `0${time}` : time;// ternary expression
};
// const variable = condition ? "true" : "false";
// const timeString = time < 10 ? `0${time}` : time > 60 ? time % 60 : time;
// 0 iki 9


function updateTimerText(secondsElapsed) {
  // 0 iki 59 secundes
  const seconds = secondsElapsed % 60;
  // minutes 0 59
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  //hour 0 iki n
  const hours = Math.floor(Math.floor(secondsElapsed / 60) / 60);

  elements.timerBox.textContent = `${getTimeFormat(hours)}:${getTimeFormat(minutes)}:${getTimeFormat(seconds)}`;
  // console.log( hours, minutes, seconds);
}
// callback

elements.startButton.addEventListener("click", function () {
  console.log("start");
  timerState.start(updateTimerText);
});
elements.stopButton.addEventListener("click", function () {
  timerState.stop();
});
elements.lapButton.addEventListener("click", function () {
  timerState.lap();
});
elements.resetButton.addEventListener("click", function () {
  timerState.reset();
});


// const add = function(a, b) { //no arg
//   console.log("a + b"); //22
// };
// function useCallback(callback, a, b) { //add
//   console.log(("before callback"));
//   callback(a, b);// 10,12
//   console.log("after callback");
// }

// useCallback(add, 10, 12);
// // log "before callback"
// // log 22
// // log "after callback"
// const subtract =(a, b) => {
//   console.log(a- b);
// };
// useCallback(subtract, 55, 5);
// // log "before callback"
// // log 50
// // log "after callback"
// useCallback(
//   function(a, b) {
//     console.log(a);
//     console.log(b);
//   },
//   "hello",
//   "world"
// );
