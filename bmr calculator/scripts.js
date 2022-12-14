//2 operatoriai:
//and - &&
// or - ||
// if(isHeightValid && isWeightValid && function return boolean) {
// console.log(true && true);
//} else {
//if(!isWeightValid) {
//neteisingos
//}
//if(!isHeightValid) {
//neteisingos
//}
// //}
// if(!isHeightValid || !isWeightValid) {
//     //true
//      //if(!isWeightValid) {
//     //neteisingos
//     //}
//     //if(!isHeightValid) {
// //neteisingos
//     //}
// } else {
//     console.log(true && true);
// }
// console.log(!(isHeightValid && isWeightValid) === !isHeightValid && !isWeightValid);

// const result = document.querySelector("#result");

function calculateBMR() {
  //reikia domenu, inputu su variable
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const ageInput = document.querySelector("#age");

  const heightCm = Number(heightInput.value);
  const weightKg = Number(weightInput.value);
  const age = Number(ageInput.value);

  const genderInput = document.querySelector('input[name="gender"]:checked');
  const activityError = document.querySelector("#activity-error"); //?
  const heightError = document.querySelector("#height-error");
  const weightError = document.querySelector("#weight-error");
  const ageError = document.querySelector("#age-error");
  const genderError = document.querySelector("#gender-error"); //?

  let gender;
  if (genderInput) {
    gender = genderInput.value;
  }

  const activityInput = document.querySelector(
    'input[name="activity-level"]:checked'
  );

  let activity; //undef
  if (activityInput) {
    activity = activityInput.value;
  }
  const isHeightValid = heightCm > 0;
  const isWeightValid = weightKg > 0;
  const isAgeValid = age > 0;
  const isGenderValid = "man" === gender || "woman" === gender;
  const isActivityValid =
    "sedentary" === activity ||
    "light" === activity ||
    "moderate" === activity ||
    "very" === activity ||
    "extra" === activity;

  let multiplayer;

  if ("sedentary" === activity) {
    multiplayer = 1.2;
  } else if ("light" === activity) {
    multiplayer = 1.375;
  } else if ("moderate" === activity) {
    multiplayer = 1.55;
  } else if ("very" === activity) {
    multiplayer = 1.725;
  } else  {
    multiplayer = 1.99;
  }
console.log(multiplayer);
  let BMR;
  if (
    ("man" === gender, isHeightValid, isWeightValid, isAgeValid, isGenderValid, isActivityValid)
  ) {
    BMR = ((66.5 + 13.75 * weightKg + 5.003 * heightCm - 6.75 * age) * multiplayer);
    
  } else if (!isHeightValid || !isWeightValid || !isAgeValid) {
    heightError.innerText = "";
    weightError.innerText = "";
    ageError.innerText = "";
  }
  if (
    ("woman" === gender, isHeightValid, isWeightValid, isAgeValid, isGenderValid, isActivityValid)
  ) {
    BMR = ((655.1 + 9.563 * weightKg + 1.85 * heightCm - 4.676 * age) * multiplayer);
   
  } else if (!isHeightValid || !isWeightValid || !isAgeValid) {
    heightError.innerText = "";
    weightError.innerText = "";
    ageError.innerText = "";
  }

  const result = document.querySelector("#result");
  result.innerText = BMR;
}


