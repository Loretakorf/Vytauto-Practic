// 1. Kažkoks "display"
// 2. Yra 2 rūšių mygtukai: skaičiai ir operatoriai
/**** 1. Vartotojas įveda skaičių
 * ** 2. (optional) Vartotojas gali įvesti ir antrą ir trečią skaičių,
 * * jie bus sudedami kaip stringai.
 * * T.y. paspaudus "2" ir "5" ir "9" gausime "259".
 * ** 3. Vartotojas paspaudžia operatorių ir kažkur išsaugoma vertė,
 * * o "display" įvestas skaičius neberodomas.
 * ** 4. Įvedamas kitas skaičius, gali būti daugiau negu vienas,
 * * t.y. panašiai kaip antram žingsnyje.
 * ** 5. Paspaudžiama lygu, kažkur išsaugoma antroji vertė,
 * * įvyksta skaičiavimas ir ir rezultatas parodomas "display" vietoje antrosios įvesties.
 * *** Užduotis: Darom vieną skaičiaus mygtuką, pvz.: 2, daugybos operatorių ir lygu.**/

// 2*22*2=88

/**** (2 x 22) x 2 = 88
 * ** 1. (spaudžiam ant skaičiaus mygtuko) Išsaugom skaičių display.innerText'e.
 * *    operationType === undefined
 * *    innerText === "2"
 * *    temporaryValue === undefined
 * ** 2. Išsaugom vertę temporaryValue ir nustatom operacijos tipą.
 * *    operationType === "multiply"
 * *    innerText === ""
 * *    temporaryValue === 2
 * ** 3. Įvedam 22, atsivaizduoja display
 * *    operationType === "multiply"
 * *    innerText === "22"
 * *    temporaryValue === 2
 * ** 4. Kai paspaudžiam x operatorių antrą kartą, mes turime apskaičiuoti seną vertę.
 * *    Atliekam skaičiavimus ir išsaugom juos į temporaryValue.
 * **    Patikrinam ar yra jau egzistuojantis operationType (IF)
 * *    Jei egzistuoja:
 * *      Skaičuojam rezultatą
 * **    operationType === "multiply"
 * *    innerText === ""
 * *    temporaryValue === 44
 * ** 5. Įvedam 2 ir jis atsivaizduoja inner text'e
 * *    operationType === "multiply"
 * *    innerText === "2"
 * *    temporaryValue === 44
 * ** 6. suveikia calculateResult()*/

const displayElement = document.querySelector("#display");

let temporaryValue;
let operationType;
function call1() {
  const value = 1;
  displayElement.innerText += value;
}

function call2() {
  const value = 2;
  displayElement.innerText += value;
}
function call3() {
  const value = 3;
  displayElement.innerText += value;
}
function call4() {
  const value = 4;
  displayElement.innerText += value;
}
function call5() {
  const value = 5;
  displayElement.innerText += value;
}
function call6() {
  const value = 6;
  displayElement.innerText += value;
}
function call7() {
  const value = 7;
  displayElement.innerText += value;
}
function call8() {
  const value = 8;
  displayElement.innerText += value;
}
function call9() {
  const value = 9;
  displayElement.innerText += value;
}
function call0() {
  const value = 0;
  displayElement.innerText += value;
}
function saveValue() {
  if (
    typeof temporaryValue === "number" &&
    typeof operationType !== undefined
  ) {
    let result;

    if (operationType === "multiply") {
      result = temporaryValue * Number(displayElement.innerText);
    } else if (operationType === "divide") {
      result = temporaryValue / Number(displayElement.innerText);
    } else if (operationType === "add") {
      result = temporaryValue + Number(displayElement.innerText);
    } else if (operationType === "subtract") {
      result = temporaryValue - Number(displayElement.innerText);
    }
    temporaryValue = result;
  } else {
    temporaryValue = Number(displayElement.innerText);
  }
}
function multiply() {
  saveValue();

  displayElement.innerText = "";
  operationType = "multiply";
}
function divide() {
  saveValue();
  displayElement.innerText = "";
  operationType = "divide";
}
function add() {
  saveValue();
  displayElement.innerText = "";
  operationType = "add";
}
function subtract() {
  //   temporaryValue = Number(displayElement.innerText);
  saveValue();
  displayElement.innerText = "";
  operationType = "subtract";
}
function calculateResult() {
  let result;

  if (operationType === "multiply") {
    result = temporaryValue * Number(displayElement.innerText);
  } else if (operationType === "divide") {
    result = temporaryValue / Number(displayElement.innerText);
  } else if (operationType === "add") {
    result = temporaryValue + Number(displayElement.innerText);
  } else if (operationType === "subtract") {
    result = temporaryValue - Number(displayElement.innerText);
  }
  displayElement.innerText = result;
  temporaryValue = undefined;
  operationType = undefined;
}
function clearResult() {
  displayElement.innerText = "";
}
