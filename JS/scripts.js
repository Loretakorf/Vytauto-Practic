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

// const cssSelector = "#some-element";
// const element = document.querySelector(cssSelector);

// element.className = "element-style";
// element.className += " active";
// console.log(element.className);

// const heading = document.querySelector("#my-element h1");

// const text = document.querySelector("#my-element p");

// console.log(heading, text);

// const heading = document.querySelector("#my-element h1");
// heading.innerText = "Booms!";

// const text = document.querySelector("#my-element p");
// text.innerText = "Ups!";
// console.log(heading.innerText, text.innerText);

// if (true) {
//     console.log("true");
// }
// const button = document.querySelector("#my-button");
// let i = 0;

// function myFunction() {
//     i++;
//     button.innerText = i;

// button.innerText += 1;

// console.log(typeof button.innerText);
// }

// console.log("1");
// myFunction();

// console.log("2");
// myFunction();



// const DROPDOWN_ACTIVE = "dropdown-menu active";
// const DROPDOWN_HIDDEN = "dropdown-menu";
// const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`); // (`#dropdown .dropdown-menu)
// dropdownElement.innerText = "Wow";

// function toggle() {
//   if (dropdownElement.className === DROPDOWN_ACTIVE) {
//     dropdownElement.className = DROPDOWN_HIDDEN;
//   } else {
//     dropdownElement.className = DROPDOWN_ACTIVE;
//   }
// }

// const accordion_active = "accordion-content active";
// const accordion_hidden = "accordion-content";
// const accordionElement = document.querySelector(`#accordion .${accordion_hidden}`);
// function toggle() {
//     if (accordionElement.className === accordion_active) {
//         accordionElement.className = accordion_hidden;
//     } else {
//         accordionElement.className = accordion_active;
//     }
// }
const accordion = "accordion-content";
const accordion_hidden = "accordion-content hidden";
const accordionContentElement = document.querySelector(`#accordion .accordion-content`);

function toggleAccordion() {
    const isAccordionContentHidden = accordionContentElement.className === accordion_hidden;
    if (isAccordionContentHidden) {
        accordionContentElement.className = accordion;
        
    } else {
        accordionContentElement.className = accordion_hidden;
    }
}