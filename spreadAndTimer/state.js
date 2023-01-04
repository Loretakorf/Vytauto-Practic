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

        updateTimerText(state.secondsElapsed);
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

export default state;
