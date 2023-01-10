// const attackBtn = document.querySelector("#attack-btn");
// const defendBtn = document.querySelector("#defend-btn");
// const healBtn = document.querySelector("#heal-btn");
// const resultDragonHealth = document.querySelector("#dragon-health");
// const resultKnightHealth = document.querySelector("#knight-health");
// const footer = document.querySelector(".footer");
// const containerRight = document.querySelector(".container-right");
// const containerLeft = document.querySelector(".container-left");

// const title = document.querySelector(".paragraph-center");
// const dragon = document.querySelector(".dragon");

// let currentRound = 1;

// attackBtn.addEventListener("click", knightAttack);
// // defendBtn.addEventListener("click", dragonAttack);
// // healBtn.addEventListener("click", displayCombatLog);

// function getRandomNb(max) {
//   const randomInt = Math.ceil(Math.random() * max);
//   return randomInt;
// }
// resultDragonHealth.textContent = "200";
// function knightAttack() {
//   const attackDragonDamage = getRandomNb(10);

//   resultDragonHealth.textContent =
//     Number(resultDragonHealth.textContent) - attackDragonDamage;
//   dragonAttack(attackDragonDamage);
// }

// resultKnightHealth.textContent = "100";
// function dragonAttack(attackDragonDamage) {
//   const attackKnightDamage = getRandomNb(20);

//   resultKnightHealth.textContent =
//     Number(resultKnightHealth.textContent) - attackKnightDamage;
//   displayCombatLog(attackDragonDamage, attackKnightDamage);
// }

// function first() {
//     // atakuoja riteris
//     const variable = Math.random(); // 0 iki 1
//     console.log("first", variable);
//     second(variable, 2, "hello"); // drakono ataka
//   }
//   function second(param1, dvejetas, pasisveikinimas) {
//     // drakono ataka
//     const variable2 = Math.random(); // atakos žala
const elements = {
  dragonHealthText: document.querySelector("#dragon-health"),
  knightHealthText: document.querySelector("#knight-health"),

  attackButton: document.querySelector("#attack-btn"),
  defendButton: document.querySelector("#defend-btn"),
  healButton: document.querySelector("#heal-btn"),

  gameLogContainer: document.querySelector(".game-log"),
  controlsContainer: document.querySelector("#controls"),

  combatLog: null,
  dragonImage: document.querySelector("#dragon-image"),
  knightImage: document.querySelector("#knight-image"),

};

const roundType = {
  attack: "attack",
  defend: "defend",
  heal: "heal",
};

const state = {
  round: 0,
  dragonHealth: 200,
  knightHealth: 100,
  update() {
    elements.dragonHealthText.textContent = state.dragonHealth;
    elements.knightHealthText.textContent = state.knightHealth;
  },
  increaseRound() {
    state.round++;
  },
};

function generateNumberTo(max) {
  return Math.ceil(Math.random() * max);
}
function playerAttack() {
  const damage = generateNumberTo(10);
  state.dragonHealth -= damage;
  state.update();
  return damage;
  //   log.playerText = `Player attacks and deals ${damage} to the dragon`;
}

function playerHeal() {
  const healing = generateNumberTo(30);
  const sum = state.knightHealth + healing;
  if (sum > 100) {
    state.knightHealth = 100;
  } else {
    state.knightHealth = sum; //issaugojimas
  }

  state.update();
  return healing;
}

function dragonAttack() {
  const damage = generateNumberTo(20);
  state.knightHealth -= damage;
  state.update();
  return damage;
  // log.dragonText = `Knight attacks and deals ${damage} to the dragon`;
}

function writeLogToHTML(roundLog) {
  if (!elements.combatLog) {
    //prodeti heading
    setupCombatLog();
    //    elements.combatLog = combatLog;
  }
  //kai jau turim combatlog
  // pildyti combatlog
  const liElement = document.createElement("li");
  const titleElement = document.createElement("span");
  const titleBoldElement = document.createElement("b");
  const playerInfoElement = document.createElement("span");
  const dragonInfoElement = document.createElement("span");

  titleElement.append(titleBoldElement);
  liElement.append(titleElement, playerInfoElement, dragonInfoElement);

  titleBoldElement.textContent = `Round ${state.round}`;
  playerInfoElement.textContent = roundLog.playerText;
  dragonInfoElement.textContent = roundLog.dragonText;

  elements.combatLog.append(liElement);
  
}

function setupCombatLog() {
  const heading = document.createElement("h2");
  heading.textContent = "Combat log";
  elements.gameLogContainer.append(heading);

  elements.combatLog = document.createElement("ul");
  elements.combatLog.className = "combat-log";
  elements.gameLogContainer.append(elements.combatLog);
}

function checkIfEndOfGame() {
    if(state.knightHealth <= 0) {
        // riteris pralaimejo
        elements.knightImage.remove();
        elements.controlsContainer.remove();
    } else if (state.dragonHealth <= 0) {
        elements.dragonImage.remove();
        elements.controlsContainer.remove();
    }
}

function playRound(type) {
  state.increaseRound();

  const log = {
    playerText: null,
    dragonText: null,
  };

  
  switch (type) {
    case roundType.attack:
      const damage = playerAttack();

      log.playerText = `Knight attacks and deals ${damage} to the dragon`;
      break;
    case roundType.defend:
      log.playerText = "Not implemented";
      break;
    case roundType.heal:
      const healing = playerHeal();
      log.playerText = `Knight heals himself and receives ${healing} health.`;
      break;
  }

  const damage = dragonAttack();
  log.dragonText = `Player attacks and deals ${damage} to the dragon`;
  //atlikti drakono ejima,
  //zaidejo,
  //irasyti loga,
  writeLogToHTML(log);
  checkIfEndOfGame();
  //patikrinti ar zaidimas baigesi
}
elements.attackButton.addEventListener("click", function () {
  playRound(roundType.attack);
});
elements.defendButton.addEventListener("click", function () {
  playRound(roundType.defend);
});
elements.healButton.addEventListener("click", function () {
  playRound(roundType.heal);
});
