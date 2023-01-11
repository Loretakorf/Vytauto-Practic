import TimerState from "./timerState.js";
import { calculateTime } from "./utils.js";
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
  lapContainer: document.querySelector("#lap-container"),
};
console.log(elements);
//

function getTimeFormat(time) {
  // if(time < 10) {
  //   return `0${time}`;
  // }
  // return time;
  return time < 10 ? `0${time}` : time; // ternary expression
}
// const variable = condition ? "true" : "false";
// const timeString = time < 10 ? `0${time}` : time > 60 ? time % 60 : time;
// 0 iki 9

function updateTimerText(secondsElapsed) {
  // 0 iki 59 secundes
  const { seconds, minutes, hours } = calculateTime(secondsElapsed);

  elements.timerBox.textContent = `${getTimeFormat(hours)}:${getTimeFormat(
    minutes
  )}:${getTimeFormat(seconds)}`;
  // console.log( hours, minutes, seconds);
}
// callback

const createLap = (lapNumber, lapTime) => {
  //setLap

  const lapParagraph = document.createElement("p");
  const lapNumberText = document.createTextNode(`Lap ${lapNumber}`);
  const lapTimeElement = document.createElement("span");
  const { seconds, minutes, hours } = calculateTime(lapTime);
  lapTimeElement.textContent = `${getTimeFormat(hours)}:${getTimeFormat(
    minutes
  )}:${getTimeFormat(seconds)}`;
  lapParagraph.append(lapNumberText, lapTimeElement);
  elements.lapContainer.append(lapParagraph);

  lapParagraph.style.display = "flex";
  lapParagraph.style.gap = "50px";
  // 1lap    00 00 02
  // console.log(lapNumber, lapTime);
};
const clearLaps = () => {
  elements.lapContainer.innerHTML = "";
};

const timerState = new TimerState({
  updateTime: updateTimerText,
  setLap: createLap,
  clearLaps: clearLaps,
}); //constructor

elements.startButton.addEventListener("click", function () {
  console.log("start");
  timerState.start();
});
elements.stopButton.addEventListener("click", function () {
  timerState.stop();
});
elements.lapButton.addEventListener("click", () => {
  timerState.lap(); //error function
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
