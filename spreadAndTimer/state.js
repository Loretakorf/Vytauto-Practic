// start ir stop mygtukai
//spaudom start, kas sekunde sekame kintanti laika
//ir isrodame didejanti laika in clock
//kai spa

const state = {
  secondsElapsed: 0,
  intervalId: null,

  start(updateTimerText) {
    if (!state.intervalId) {
      console.log("start interval", updateTimerText);
      state.intervalId = setInterval(function () {
        console.log("tick");
        state.secondsElapsed++;

        updateTimerText(state.secondsElapsed);// callback
      }, 1000);
    }
  },

  stop() {
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  },
};

// class TimerState {
//   secondsElapsed = 0;
//   intervalId = null;
//   constructor(secondsElapsed, intervalId) {
//     this.intervalId = !intervalId || intervalId;
//     this.secondsElapsed = secondsElapsed;
//   }
//   start(updateTimerText) {
//     this.intervalId = setInterval(function () {
//       this.secondsElapsed++;
//       updateTimerText(this.secondsElapsed);
//     }, 1000);
//   };
//   stop() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   };
// };

export default state;
