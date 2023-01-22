           
class TimerView {
  constructor(containerEl) {
    //root element
    const timerRootEl = document.createElement("div");
    timerRootEl.className = "timer";

    timerRootEl.append(
      this.initTimerClock(),
      this.initButtonGroup(),
      this.initLapContainer(),
      this.initCloseTimerButton()
    );

    containerEl.append(timerRootEl);

    this.closeTimer.addEventListener("click", () => {
        timerRootEl.remove()
    });
    // console.log(timerRootEl);
  }
  initTimerClock() {
    const timerClockEl = document.createElement("div");
    timerClockEl.className = "timer-clock";
    timerClockEl.textContent = "00: 00: 00";

    this.timerBox = timerClockEl;
    return timerClockEl;
  }
  initCloseTimerButton() {
    const closeTimerButtonrEl = document.createElement("button");
    closeTimerButtonrEl.className = "close-btn";
    closeTimerButtonrEl.textContent = "close Timer";

    this.closeTimer =closeTimerButtonrEl;

    return closeTimerButtonrEl;
  }
  initButtonGroup() {
    const buttonGroupEl = document.createElement("div");
    buttonGroupEl.className = "buttons";

    const [startBtnEl, stopBtnEl, resetBtnEl, lapBtnEl] = this.initButtons();
    

    this.lapButton = lapBtnEl;
    this.startButton = startBtnEl;
    this.stopButton = stopBtnEl;
    this.resetButton = resetBtnEl;

    buttonGroupEl.append(startBtnEl, stopBtnEl, resetBtnEl, lapBtnEl);
    return buttonGroupEl;
  }
  initButtons() {
    const buttonTextContentList = ["start", "stop", "reset", "lap"];
    const buttonElements = [];

    for (const buttonText of buttonTextContentList) {
      const buttonEl = document.createElement("button");
      buttonEl.textContent = buttonText;

      buttonElements.push(buttonEl);
    }
    // buttonTextContentList.length === 4
    // for (let index = 0; index < buttonTextContentList.length; index++) {
    //     const buttonEl = document.createElement('button');
    //     buttonEl.textContent = buttonTextContentList[index];
    //     buttonElements.push(buttonEl);
    // }
    // let index = 0;
    // while(index < buttonTextContentList.length) {
    //     const buttonEl = document.createElement('button');
    //     buttonEl.textContent = buttonTextContentList[index];
    //     buttonElements.push(buttonEl);
    //     index++
    // }

    // while(buttonTextContentList.length) {
    //     const buttonEl = document.createElement('button');
    //     buttonEl.textContent = buttonTextContentList.pop();
    //     buttonElements.push(buttonEl)
    // }

    return buttonElements;
  }
  initLapContainer() {
    const lapScrollContainerEl = document.createElement("div");
    lapScrollContainerEl.className = "lap-container";

    const lapContainerEl = document.createElement("div");
    lapScrollContainerEl.append(lapContainerEl);
    this.lapContainer = lapContainerEl;
    
    return lapScrollContainerEl;
  }
}
export default TimerView;
