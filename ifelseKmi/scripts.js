// let i = 0;
// i += 1; //1
// console.log("pirmas", i);
// i++; //1
// console.log("antras", i);

// ++i; // i++, yra skirtumas
// console.log("trecias", i);

// let y = 0;
// console.log(y++); //0 | 1.console.log;  2. y+=1; //1
// console.log(++y); //2  | 1. y+=1;  2. console.log; //2

// console.log(1 =="1"); //true retai
// console.log(1 ==="1"); //false

// const metai = prompt("Kurie dabar metai");

// if (metai === "2022") {
//     alert("tu teisus");
// }
// else if (Number(metai) < 2000) {
//     alert("Visiskai nepataikei")
// }
// else {
//     alert("Tu neteisus");

// }

// const metai2 =  Number(prompt("Kurie dabar metai"));
// if (metai === "2022") {
//     alert("tu teisus");
// }
// else if (metai2 > 2000) {
//     alert("Visiskai nepataikei")
// }
// else {
//     alert("Tu neteisus");

// }

// const colour = prompt("KOkia spalva?(red, blue, yellow)");
// const model = prompt("koks modelis?(rasykite metus)");
// const make = prompt("Kokia marke?(ferrari, etc)");
// const mileage = prompt("kokia rida?(kiek km nuvaziuta)");

// if (colour === "red") {
//   // yes
//   if (Number(model) > 2010) {
//     alert("Buy!");
//   } else if (mileage < 50000) {
//     alert("Buy!");
//   } else {
//     alert("Don't buy!");
//   }
// } else {
//   //no
//   if (colour === "yellow") {
//     //yes
//     if (make === "ferrari") {
//       alert("Buy!");
//     } else {
//       alert("Dont buy!");
//     }
//   } else {
//     alert("Dont buy!");
//   }
// }

// const svoris = Number(prompt("Koks jusu svoris? (kg)"));
// const ugisKv = Number(prompt("Koks jusu ugis? (cm)")) ** 2;

// const KMI = svoris / ugisKv;

// if ((KMI < 18, 5)) {
//   alert("Underweight");
// } else if (KMI < 25) {
//   alert("Normal");
// } else if (KMI < 30) {
//   alert("Overweight");
// } else if (KMI < 35) {
//   alert("Obesity (class1)");
// } else if (KMI < 40) {
//   alert("Obesity");
// } else {
//   alert("Extremely Obesity");
// }

/* For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)
[20:37] Vytautas Stripeika
2. Sukurti BMR kalkuliatorių

For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)


To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
Sedentary (little or no exercise): calories = BMR × 1.2;
Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.

// suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// atsakomas koks mūsų aktyvumo lygis
// atsakomas kiek kalorijų mums reikia per dieną

*/

const gender = prompt("Kokia jusu litis? (vyras, moteris)");
const weight = Number(prompt("Koks jusu svoris? (kg)"));
const height = Number(prompt("Koks jusu ugis? (cm)"));
const age = Number(prompt("Koks jusu amzius? (metais)"));
const activityLevel = Number(prompt("Koks jusu aktivumo lygis? (0, 1, 2, 3)"));

let BMR;
if (gender === "vyras") {
    BMR = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age));
    console.log("vyras");
} else {
    BMR = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    console.log("moteris");
}
console.log(BMR);
if (activityLevel === 0) {
    alert(BMR * 1.2);
} else if (activityLevel === 1) {
    alert(BMR * 1.375);
} else if (activityLevel === 2) {
   alert(BMR * 1.555);
} else if (activityLevel === 3) {
    alert(BMR * 1.725);
} else {
   alert(BMR * 1,9);
}

// /let year = prompt(
//     "In which year was the ECMAScript-2015 specification published?",
//     ""
//   );
//   if (year == 2015) {
//     alert("You guessed it right!");
//   } else {
//     alert("How can you be so wrong?"); // any value except 2015
//   }

// const answer = prompt();
// if (y === true)

// const answer = prompt("Definite budzet?(yes, no)");
// if (answer === "yes") {
//   const champion = prompt("Known champion for it?(yes, no)");
//   if (champion === "yes") {
//     const project = prompt("Clear project Scope?(yes, no)");
//     if (project === "yes") {
//       const timescale = prompt("Achievavle timescale?");
//       if (timescale === "yes") {
//         alert("go for it");
//       } else {
//         alert("Get more time");
//       }
//     } else {
//       const profit = prompt("Happy to profit?");
//       if (profit === "yes") {
//         alert("Cash in");
//       } else {
//         alert("Explain what it matter");
//       }
//     }
//   } else {
//     alert("Leave it alone!");
//   }
// } else {
//   const funding = prompt("alternative funding?(yes, no)");
//   if (funding === "yes") {
//     alert("Sort out funding");
//   } else {
//     alert("Leave it alone");
//   }
// }
