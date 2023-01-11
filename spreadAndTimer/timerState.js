// start ir stop mygtukai
//spaudom start, kas sekunde sekame kintanti laika
//ir isrodame didejanti laika in clock
//kai spa

// const state = {
//   secondsElapsed: 0,
//   intervalId: null,

//   start(updateTimerText) {
//     if (!state.intervalId) {
//       console.log("start interval", updateTimerText);
//       state.intervalId = setInterval(function () {
//         console.log("tick");
//         state.secondsElapsed++;

//         updateTimerText(state.secondsElapsed);// callback
//       }, 1000);
//     }
//   },
// stop() {
//   if (this.intervalId) {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   }
// },

// };

class TimerState {
  constructor({updateTime, setLap, clearLaps}) {
    this.secondsElapsed = 0;
    this.lastLapTime = 0;
    this.lapNumber = 0;
    this.intervalId = null;
    //dinamic methods
    this.updateTime = updateTime;
    this.setLap = setLap;
    this.clearLaps = clearLaps;
    //initialisation
    this.updateTime(0);
  }
  start() {
    if (!this.intervalId) {
      // console.log("start interval", updateTimerText);
      this.intervalId = setInterval(() => {
        // console.log("tick", this.secondsElapsed);
        this.secondsElapsed++;
        this.updateTime(this.secondsElapsed);
      }, 1000);
    }
  }
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  lap() {
    if(!this.intervalId) return;
    
    this.lapNumber++;
    const lapTime = this.secondsElapsed - this.lastLapTime;
    this.lastLapTime = this.secondsElapsed; // paciam gale

    this.setLap(this.lapNumber, lapTime);
    // console.log(this.lapNumber + " lap", lapTime);
  }
  reset() {
    this.stop();
    this.secondsElapsed = 0;
    this.lastLapTime = 0;
    this.lapNumber = 0;
    this.updateTime(0);
    this.clearLaps();
    // console.log(this.secondsElapsed);
  }
}
// paleidzia watch ir jis ticks
//po 5s lap spaudzia 5 - 0
//atvaizdojame lap teksta 00 00 05
//issaugome laika kaip lastLapTime
//saugome lap number
//po 5s lap spaudzia 9-5
// laikas 00 00 09
//saugome lap number
export default TimerState;
