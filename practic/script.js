const attackBtn = document.querySelector("#attack-btn");
const defendBtn = document.querySelector("#defend-btn");
const healBtn = document.querySelector("#heal-btn");
const resultDragonHealth = document.querySelector("#dragon-health");
const resultKnightHealth = document.querySelector("#knight-health");
const footer = document.querySelector('#footer');


attackBtn.addEventListener("click", knightAttack);
defendBtn.addEventListener("click", dragonAttack);
healBtn.addEventListener("click", displayCombatLog);

// resultDragonHealth = resultDragonHealth.textContent;
// resultKnightHealth = resultKnightHealth.textContent;

function getRandomNb(max) {
    const randomInt = Math.ceil(Math.random() * max);
    return randomInt;
    
}

function knightAttack() {
    const attackDamage = getRandomNb(10);
    resultDragonHealth.textContent = "200";
    resultDragonHealth.textContent = Number(resultDragonHealth.textContent) - attackDamage;
}

function isDragonAlive() {
    if(resultDragonHealth.textContent > 0) {
        return true;
    } else {
        return false
    }
}
function dragonAttack() {
    const attackDamage = getRandomNb(20);
    resultKnightHealth.textContent = "100";
    resultKnightHealth.textContent = Number(resultKnightHealth.textContent) - attackDamage;
    console.log(resultKnightHealth);
}
function isKnightAlive() {
    if(resultKnightHealth.textContent > 0) {
        return true;
    } else {
        return false
    }
}
function displayCombatLog() {
    if(resultDragonHealth > 0 || resultKnightHealth > 0) {
        footer.style.display = "block";
        createCombatLog();
    } 
}

function createCombatLog() {
    const myDiv = document.createElement("div");
     const myText = document.createTextNode("Round 1");
     myText.textContent = "Round 1";
   

    footer.append(myDiv);
     myDiv.append(myText);
    
   return myDiv;
}
