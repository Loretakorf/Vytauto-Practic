import myvar, { logStuff, x } from "./script.js";
// import createUser from "./script.js";
import { text, text1 } from "./constant.js";
import {createUser } from "./logger.js";
createUser(text);
console.log(text, text1);

logStuff(x);
logStuff(myvar);// tik viena
// // function first() {
// //   // atakuoja riteris
// //   const variable = Math.random(); // 0 iki 1
// //   console.log("first", variable);
// //   second(variable, 2, "hello"); // drakono ataka
// // }
// // function second(param1, dvejetas, pasisveikinimas) {
// //   // drakono ataka
// //   const variable2 = Math.random(); // atakos žala
// //   console.log("second", param1, variable2);
// //   third(param1, variable2); // displayCombat log
// // }
// // function third(param1, param2) {
// //   // combat log funkcija // var1 ir var2
// //   console.log("third", param1, param2);
// // }
// // first();
// let variable = "test";
// switch (variable) {
//     case "test":
//         console.log("it is a test");
//         break;
//     case "not-test":
//     console.log("it is not a test");
// }
// if(variable === "test") {

// }
// if(variable === "not-test") {

// }
// const user = {
//     email: "example@email",
//     password: "wwww"
// }
// const admin = {
//     user: user,// jeigu vienodai galima rasyti
//     user,
//     isAdmin: true,
//     key: "value"
// };
// // console.log(admin.isAdmin);
// // function logUser(someUser) {
// //     console.log(someUser.email);
// //     console.log(someUser.password);
// // }
// // logUser(user);
// admin.isAdmin = false;
// someFunction(admin);

// const el = document.querySelector("a");
// const otherEl = el;
// const simpleObject = {
//     a: "someValue"
// };
// const otherObject = simpleObject;
// otherObject.a = "otherValue";
// console.log(simpleObject.a);

// function changeA(pbj) {
//     obj.a ="different"
// }
// changeA(otherObject);
// console.log(simpleObject.a);

// const objValue = otherObject;

// const obj = {
//     email: "myemail@gmail.com",
//     myName: "Vardenis",
//     someMethod() {
//         console.log("hello");
//     },
//     innerObj: {
//         someProperty: "hello",
//     },
// }
// console.log(obj.email);
// const { myName: anotherName, email , someMethod, innerObj: {someProperty}, } = obj; // cia ne reference, o kopija myName is obj, naudojant jo rakta//destructarisacija
// // myName = "newName";
// console.log(anotherName, email, someProperty);
// someMethod();

const user = {
  email: "myemail@gmail.com",
  name: "vardenis",
  age: 27,
};
//create function that logs email
logUser(user);
function logUser({ email, age, name, someProperty = "default" }) {
  name = "anotherName";
  // if(!someProperty) {
  //     someProperty = "default";
  // }
  console.log(email);
  console.log(name);
  console.log(age);
  console.log(someProperty);
}
console.log(user);
logUser({
  email: "newEmail",
  name: "new name",
  age: 18,
}); // inline obj

// 1. Sukurkite funkciją, kuri priima objektą:// su "prekių kaina", "siuntimo kaina" ir "administraciniu mokesčiu"
// ir iš log'ina pvm (21 procentas), nuo sudėtos sumos.// funkcija turi destruktūrizuoti tris atributus

//iškviesti funkciją du kartus:
// 1. sukurti objekto konstantą ir ją paduoti į funkciją
// 2. paduoti inline objektą į funkciją nenaudojant konsantos.
const price = {
  price: 20,
  shippingPrice: 15,
  taxFee: 12,
};
getPrice(price);

function getPrice({ price, shippingPrice, taxFee }) {
//   const result = (price + shippingPrice + taxFee) * 0.21;
    console.log((price + shippingPrice + taxFee) * 0.21);
//   console.log(result);
}
getPrice({
  price: 120,
  shippingPrice: 30,
  taxFee: 20,
});
