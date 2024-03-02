
let coin = document.getElementById('coin');
let coinButton = document.getElementById("btnFlipCoin");
let tabDiceButton = document.getElementById("panel-dice-tab");

function FlipCoin() {

  IsButtonEnabled(false);
  IsDiceTabButtonEnabled(false);

  SetCoinValue('');

  coin.classList.add("animate__flip", "animate__animated");

  coin.addEventListener("animationend", () => {

    coin.classList.remove("animate__flip", "animate__animated");

    SetCoinValue(GetRandomCoinValue());

    IsButtonEnabled(true);
    IsDiceTabButtonEnabled(true);
  });
  
}

function GetRandomCoinValue() {
  return Math.random() < 0.5 ? "Head" : "Tails";
}

function SetCoinValue(textToSet) {
  coin.innerText = textToSet;
}

function IsButtonEnabled(state) {
  coinButton.disabled = !state;
}

function IsDiceTabButtonEnabled(state) {
  tabDiceButton.disabled = !state;
}
