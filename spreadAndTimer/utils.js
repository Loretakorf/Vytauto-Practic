export const calculateTime = (secondsElapsed) => {
  const seconds = secondsElapsed % 60;
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  const hours = Math.floor(Math.floor(secondsElapsed / 60) / 60);
  return { hours, minutes, seconds };
};
export const getTimeFormat =(time) => {
  // if(time < 10) {
  //   return `0${time}`;
  // }
  // return time;
  return time < 10 ? `0${time}` : time; // ternary expression
}