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
  startButton: document.querySelector("#start-btn"),
  stopButton: document.querySelector("#stop-btn"),
  timerBox: document.querySelector("#timer"),
};
console.log(elements);

function updateTimerText(secondsElapsed) {
  // 0 iki 59 secundes
  const seconds = secondsElapsed % 60;
  // minutes 0 59
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  //hour 0 iki n
  const hours = Math.floor(Math.floor(secondsElapsed / 60) / 60);

  elements.timerBox.textContent = `${hours}:${minutes}:${seconds}`;
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
