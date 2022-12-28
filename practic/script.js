const attackBtn = document.querySelector("#attack-btn");
const defendBtn = document.querySelector("#defend-btn");
const healBtn = document.querySelector("#heal-btn");
const resultDragonHealth = document.querySelector("#dragon-health");
const resultKnightHealth = document.querySelector("#knight-health");
const footer = document.querySelector(".footer");
const containerRight = document.querySelector(".container-right");
const containerLeft = document.querySelector(".container-left");

const title = document.querySelector(".paragraph-center");
const dragon = document.querySelector(".dragon");

let currentRound = 1;

attackBtn.addEventListener("click", knightAttack);
// defendBtn.addEventListener("click", dragonAttack);
// healBtn.addEventListener("click", displayCombatLog);

function getRandomNb(max) {
  const randomInt = Math.ceil(Math.random() * max);
  return randomInt;
}
resultDragonHealth.textContent = "200";
function knightAttack() {
  const attackDragonDamage = getRandomNb(10);

  resultDragonHealth.textContent =
    Number(resultDragonHealth.textContent) - attackDragonDamage;
  dragonAttack(attackDragonDamage);
}

resultKnightHealth.textContent = "100";
function dragonAttack(attackDragonDamage) {
  const attackKnightDamage = getRandomNb(20);

  resultKnightHealth.textContent =
    Number(resultKnightHealth.textContent) - attackKnightDamage;
  displayCombatLog(attackDragonDamage, attackKnightDamage);
}

// function first() {
//     // atakuoja riteris
//     const variable = Math.random(); // 0 iki 1
//     console.log("first", variable);
//     second(variable, 2, "hello"); // drakono ataka
//   }
//   function second(param1, dvejetas, pasisveikinimas) {
//     // drakono ataka
//     const variable2 = Math.random(); // atakos žala
//     console.log("second", param1, variable2);
//     third(param1, variable2); // displayCombat log
//   }
//   function third(param1, param2) {
//     // combat log funkcija // var1 ir var2
//     console.log("third", param1, param2);
//   }
//   first();

// function isKnightDefend() {
//     let knightDefend = true;
//     dragonAttack(knightDefend)
//     if(attackDragonDamage <= 0) {
//         displayCombatLog();
//     } else {
//         dragonAttack(knightDefend)
//     }
// }

function displayCombatLog(attackDragonDamage, attackKnightDamage) {
  footer.style.display = "block";

  const logContainer = document.createElement("div");
  const logHeading = document.createElement("h2");

  logHeading.textContent = "Round-" + currentRound;
  currentRound++;
  const knightInfo = document.createElement("p");
  knightInfo.textContent = `Knight attacks and deals ${ attackDragonDamage
    
  } damage.`;
  const dragonInfo = document.createElement("p");
  dragonInfo.textContent = `Dragon attacks and deals ${ attackKnightDamage
    
  } damage.`;
  footer.append(logContainer);
  logContainer.append(logHeading, knightInfo, dragonInfo);
  areTheyAlive(attackDragonDamage, attackKnightDamage);
}
function areTheyAlive(attackDragonDamage, attackKnightDamage) {
  if (
    resultKnightHealth.textContent > 0 &&
    resultDragonHealth.textContent <= 0
  ) {
    containerLeft.style.display = "none";
  } else if (
    resultKnightHealth.textContent < 0 &&
    resultDragonHealth.textContent >= 0
  ) {
    containerRight.style.display = "none";
    title.style.display = "none";
    dragon.classList.remove = "hidden";
  }
}

