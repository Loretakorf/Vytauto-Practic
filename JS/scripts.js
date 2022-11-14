// let svoris = prompt('Koks jusu svoris? (kg)');
// let svorisKg = Number(svoris);

// let height = prompt('Koks jusu ugis? (cm)');
// let heightCm = Number(height);
// let heightCmKv = heightCm**2;

// const daugiklis = 10_000;

// let bmi = svorisKg / heightCmKv * daugiklis;

// console.log(bmi);

// alert(`Jusu bmi yra ${bmi}`)

// 
// const pradzia = 18;
// const valandos = Number(prompt("Kiek dabar valandu?")); //4
// const minutes = Number(prompt("Kiek dabar minuciu?")); //0 //25


// let minuciuTikrinimas = minutes > 0; //boolean false
// let valandosKeitimas = Number(minuciuTikrinimas); //0 //1
// let skirtumasValandu = valandos + valandosKeitimas; //
// let likutisValandu = pradzia - skirtumasValandu;

// let likutesMinuciu = (60 - minutes) * valandosKeitimas;

// alert(`iki paskaitos liko ${likutisValandu}val. ir ${likutesMinuciu}min.`)
//jegu valandos keitimas yra 1, mes rodome minuciu likuti,
//jegu valandos keitimas yra 0 mes rodome 0 minuciu likuti()


// console.log(likutisValandu);
/*
turim gauti skirtuma tarp minuciu, 
jegu atimame nors viena minute, valanda turi sumazieti -1,


*/
 
// const StartHours = 18;
// const maxMinutes = 60;

// const currentHours = Number(prompt("Kiek dabar val")); // a) 9 b) 9
// const currentMinutes = Number(prompt("Kiek dabar min")); // a)0 b) 15

// const shouldReduceHour = currentMinutes > 0; //false true
// //ar yra minutes ar ne - optional hour
// const additionalHour = Number(shouldReduceHour);

// // const hourDifference = 18 - currentHours - additionalHour; // a)9 b) 8
// //18 - 9 - (1 or 0)
// // const minutDifference = (60 - currentMinutes) * additionalHour;

// const isNotTooLate = Number(currentHours < 18);// c) 8 = 0 D) 19 = 1
// const hourDifference = (18 - currentHours - additionalHour) * isNotTooLate;

// const minuteDifference = (60 - currentMinutes) * additionalHour * isNotTooLate;
// alert (`liko: ${hourDifference} val ${minuteDifference} min`);

console.log("A", "" + 1 + 0); // 10
console.log("B", "" - 1 + 0); // -1
console.log("C", true + false); // 1
console.log("D", 6 / "3"); // 2
console.log("E", "2" * "3"); // 6
console.log("F", 4 + 5 + "px"); //"9px"
console.log("G", "$" + 4 + 5); //"$45"
console.log("H", "4" - 2); // "2"
console.log("I", "4px" - 2); // NaN
console.log("J", "  -9  " + 5); //" -9 5 "
console.log("K", "  -9  " - 5); // "-14"




// console.log("valandos", valandos, typeof valandos);
// console.log("minutes", minutes, typeof minutes);

// console.log(Number(' 123 ')); //123
// console.log(Number(""));//0

// console.log(Boolean("")); //false and with 0
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
// console.log(Boolean("a")); //true
// console.log(Boolean(-1)); //true

// console.log(Number(true)); //1
// console.log(Number(false)); //0


// let x = -1;
// x = -x; // x = -(-1)
// console.log(x); //1

// console.log(4 ** 2); //16 
// console.log(4 ** (1/2)); //2

// console.log( 7 % 2); //1
// console.log(5 % 12); //5

// console.log( 57 % 10); // 7
// console.log(57 - (57 % 10));

// let firstWorld = "Name";
// let secondWorld = "Surname";
// let fullWorld = `${firstWorld} ${secondWorld}`;
// let nextWorld = firstWorld + " " + secondWorld;
// console.log(fullWorld ===nextWorld);

// console.log("2" + 1); //"12"
// console.log("1" + 2 + 2); //"122"
// console.log(2 + 2 + "1"); //"41"
// console.log(2 + "1"); //"21"

// console.log("6" - 2); // "4"







// let x = 0.01;
// let tipas = typeof x;
// console.log(typeof tipas);
// console.log(typeof 0.01);

//string
// let typeText = `variable "type" yra "${type}"`;


// let x = 123;
// let tipas = typeof ((1/2) * 3 + "asd") === "number"; //"number"
// console.log((1/2) * 3 + "asd");
// console.log(typeof ((1/2) * 3 + "asd"));

// let isEqual = 123 == "123"; //true

// let isEven = 123 == "123";
// let string123 = String(123);
// console.log(typeof string123);

