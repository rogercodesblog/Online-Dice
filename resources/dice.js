
let dice = document.getElementById("dice");
let diceButton = document.getElementById("btnRollDice");
let tabCoinButton = document.getElementById("panel-coin-tab");
let sidesSelector = document.getElementById("inputDiceSides");

function RollDice() {

  IsButtonEnabled(false);
  IsCoinTabButtonEnabled(false);

  SetDiceValue('');

  dice.classList.add("animate__rotateIn", "animate__animated");

  dice.addEventListener("animationend", () => {

    dice.classList.remove("animate__rotateIn", "animate__animated");

    SetDiceValue(GetRandomDiceValue(GetDiceSides()));

    IsButtonEnabled(true);
    IsCoinTabButtonEnabled(true);
  });
  
}

function GetDiceSides() {
  return sidesSelector.options[sidesSelector.selectedIndex].value;
}

function GetRandomDiceValue(diceSides) {
  return Math.floor(Math.random() * diceSides + 1);
}

function SetDiceValue(textToSet) {
  dice.innerText = textToSet;
}

function IsButtonEnabled(state) {
  diceButton.disabled = !state;
}

function IsCoinTabButtonEnabled(state) {
  tabCoinButton.disabled = !state;
}