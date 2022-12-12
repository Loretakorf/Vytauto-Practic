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

  let x;
  if ("sedentary" === activity) {
    x = 1.2;
  } else if ("light" === activity) {
    x = 1.375;
  } else if ("moderate" === activity) {
    x = 1.55;
  } else if ("very" === activity) {
    x = 1.725;
  } else {
    x = 1.99;
  }

  let BMR;
  if (
    ("man" === gender && isHeightValid && isWeightValid && isAgeValid && isGenderValid && isActivityValid)
  ) {
    BMR = (66.5 + 13.75 * weightKg + 5.003 * heightCm - 6.75 * age) * x;
  } else if (!isHeightValid || !isWeightValid || !isAgeValid) {
    heightError.innerText = "";
    weightError.innerText = "";
    ageError.innerText = "";
  }
  if (
    ("woman" === gender && isHeightValid && isWeightValid && isAgeValid && isGenderValid && isActivityValid)
  ) {
    BMR = (655.1 + 9.563 * weightKg + 1.85 * heightCm - 4.676 * age) * x;
  } else if (!isHeightValid || !isWeightValid || !isAgeValid) {
    heightError.innerText = "";
    weightError.innerText = "";
    ageError.innerText = "";
  }

  const result = document.querySelector("#result");
  result.innerText = BMR;
}

// function Checkcallories() {
//   const calories = Number(calories.value);
//   if ("sedentary" === activity) {
//     (calories = BMR * 1), 2;
//   } else if ("light" === activity) {
//     (calories = BMR * 1), 375;
//   } else if ("moderate" === activity) {
//     (calories = BMR * 1), 55;
//   } else if ("very" === activity) {
//     (calories = BMR * 1), 725;
//   } else {
//     (calories = BMR * 1), 99;
//   }
// }
function clearResult() {
  heightError.innerText = "";
  weightError.innerText = "";
  ageError.innerText = "";
  result.innerText = "";
}
