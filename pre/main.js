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

const el = document.querySelector("a");
const otherEl = el;
const simpleObject = {
    a: "someValue"
};
const otherObject = simpleObject;
otherObject.a = "otherValue";
console.log(simpleObject.a);

function changeA(pbj) {
    obj.a ="different"
}
changeA(otherObject);
console.log(simpleObject.a);

const objValue = otherObject;