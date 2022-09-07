const userChoices = document.getElementById("user-choices");
const setBet = document.getElementById("set-bet");
const userMoney = document.getElementById("user-money");
const userBet = document.getElementById("user-bet");
const betMsgArea = document.getElementById("bet-msg-area");
const confMsg = document.getElementById("confirmation-msg");
const headsBtn = document.getElementById("bet-heads");
const tailsBtn = document.getElementById("bet-tails");
const resetBtn = document.getElementById("start-over");
const flipBtn = document.getElementById("flip-coin");
const result = document.getElementById("result");
let userBank = 200;
let bet = userBet.value;
let betAmt = parseInt(bet, 10);
let userChoice = "";
let coinChoice = "";

userMoney.textContent = "$" + userBank;

function toggleVisibility(e) {
  if (e.style.visibility === "hidden") {
    e.style.visibility = "visible";
  } else {
    e.style.visibility = "hidden";
  }
}

function confirmBet() {
  bet = userBet.value;
  betAmt = parseInt(bet, 10);
  if (betAmt > userBank) {
    betMsgArea.style.color = "red";
    betMsgArea.textContent = "Please place a bet up to $" + userBank;
  } else {
    betMsgArea.style.color = "black";
    toggleVisibility(userBet);
    toggleVisibility(setBet);
    betMsgArea.textContent = "Bet set at $" + bet + ". Choose heads or tails.";
    toggleVisibility(userChoices);
  }
}

function confirmHeads() {
  userChoice = "heads";
  headsBtn.style.border = "3px solid";
  toggleVisibility(tailsBtn);
  confMsg.textContent = "Flip coin to bet $" + bet + " on heads.";
  toggleVisibility(flipBtn);
}

function confirmTails() {
  userChoice = "tails";
  tailsBtn.style.border = "3px solid";
  toggleVisibility(headsBtn);
  confMsg.textContent = "Flip coin to bet $" + bet + " on tails.";
  toggleVisibility(flipBtn);
}

function flipCoin() {
  let landsOn = "";
  let newNum = Math.floor(Math.random() * 10);
  if (newNum % 2 === 0) {
    landsOn = "heads";
  } else {
    landsOn = "tails";
  }
  confMsg.textContent = "The coin lands on... " + landsOn + ".";
  return findOutcome(landsOn);
}

function findOutcome(o) {
  let outcomeMsg = "";
  if (o === userChoice) {
    outcomeMsg = "Cha-ching!";
    userBank += betAmt;
  } else {
    userBank -= betAmt;
    outcomeMsg = "Tough break!";
  }
  userMoney.textContent = "$" + userBank;
  betMsgArea.textContent = outcomeMsg;
}

setBet.addEventListener("click", confirmBet);
headsBtn.addEventListener("click", confirmHeads);
tailsBtn.addEventListener("click", confirmTails);
flipBtn.addEventListener("click", flipCoin);
