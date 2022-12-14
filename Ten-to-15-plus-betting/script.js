const setBet = document.getElementById("set-bet");
const userMoney = document.getElementById("user-money");
const userBet = document.getElementById("user-bet");
const betMsgArea = document.getElementById("bet-msg-area");
const confMsg = document.getElementById("confirmation-msg");
const dealerSpace = document.getElementById("dealer-space");
const userSpace = document.getElementById("user-space");
const msgSpace = document.getElementById("msg-space");
const scoreboard = document.getElementById("score-board");
const dealerPoints = document.getElementById("dealer-points");
const userPoints = document.getElementById("user-points");
const dealBtn = document.getElementById("deal-btn");
const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");
const newRoundBtn = document.getElementById("new-round-btn");

const changeBetBtn = document.getElementById("change-bet");

let userBank = 200;
let bet = userBet.value;
let betAmt = parseInt(bet, 10);

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
    betMsgArea.textContent = "Bet set at $" + bet + ". Press Deal to begin.";
    toggleVisibility(changeBetBtn);
    dealBtn.style.visibility = "visible";
  }
}

function changeBet() {
  newRound();
  dealerPoints.textContent = dealer.score;
  userPoints.textContent = user.score;
  toggleVisibility(userBet);
  toggleVisibility(setBet);
  userBet.value = "";
  toggleVisibility(changeBetBtn);
  betMsgArea.textContent = "";
  confMsg.textContent = "";
}

setBet.addEventListener("click", confirmBet);
changeBetBtn.addEventListener("click", changeBet);
let user = {
  hand: [],
  score: 0,
  isDealer: false,
  space: userSpace
};

let dealer = {
  hand: [],
  score: 0,
  isDealer: true,
  space: dealerSpace
};

const players = [user, dealer];
//state variables
let deck = [];

//functions

function shuffle() {
  deck = [];
  while (deck.length < 10) {
    let num = Math.ceil(Math.random() * 10);
    if (!deck.includes(num)) {
      deck.push(num);
    }
  }

  return deck;
}

function calculateScore() {
  dealer.score = 0;
  user.score = 0;
  for (let i = 0; i < dealer.hand.length; i++) {
    dealer.score += dealer.hand[i];
  }
  for (let i = 0; i < user.hand.length; i++) {
    user.score += user.hand[i];
  }
  console.log("dealer score", dealer.score);
  console.log("user score", user.score);
}

function displayScore() {
  dealerPoints.textContent = dealer.score;
  userPoints.textContent = user.score;
}

function dealFirstRound() {
  shuffle();
  toggleVisibility(scoreboard);
  toggleVisibility(dealBtn);
  toggleVisibility(hitBtn);
  toggleVisibility(standBtn);

  let userCard1 = document.createElement("div");
  let dealerCard1 = document.createElement("div");

  let newUserCard = deck.pop();
  user.hand.push(newUserCard);
  user.space.appendChild(userCard1);
  userCard1.classList.add("card");
  userCard1.textContent = newUserCard;

  let newDealerCard = deck.pop();
  dealer.hand.push(newDealerCard);
  dealer.space.appendChild(dealerCard1);
  dealerCard1.classList.add("card");
  dealerCard1.textContent = newDealerCard;

  calculateScore();
  displayScore();

  return deck;
}
function chooseHit(player) {
  let extraCard = document.createElement("div");
  extraCard.classList.add("card");
  player.space.appendChild(extraCard);
  let newCard = deck.pop();
  player.hand.push(newCard);
  extraCard.textContent = newCard;
  calculateScore();
  displayScore();
  if (user.score > 15) {
    toggleVisibility(hitBtn);
    toggleVisibility(standBtn);
    toggleVisibility(newRoundBtn);
    endRound();
  }
}

function chooseStand() {
  toggleVisibility(hitBtn);
  toggleVisibility(standBtn);
  toggleVisibility(newRoundBtn);
  while (dealer.score <= 12) {
    chooseHit(dealer);
  }
  endRound();
}

function endRound() {
  determineWinner();
}

function determineWinner() {
  let winner = "";
  if (user.score > 15) {
    winner = dealer;
    msgSpace.textContent = "Bust! Dealer wins!";
  } else if (dealer.score <= 15 && user.score < dealer.score) {
    winner = dealer;
    msgSpace.textContent = "Dealer wins!";
  } else if (dealer.score > 15) {
    winner = user;
    msgSpace.textContent = "Bust! You win!";
  } else if (user.score <= 15 && user.score > dealer.score) {
    winner = user;
    msgSpace.textContent = "You win!";
  } else {
    msgSpace.textContent = "Push! You're both winners!";
  }
  return findOutcome(winner);
}

function findOutcome(o) {
  if (o === user) {
    userBank += betAmt;
  } else if (o === dealer) {
    userBank -= betAmt;
  }
  userMoney.textContent = "$" + userBank;
}

function newRound() {
  players.forEach((player) => (player.hand = []));
  players.forEach((player) => (player.score = 0));
  players.forEach((player) => (player.space.innerHTML = ""));
  msgSpace.textContent = "";
  toggleVisibility(dealBtn);
  toggleVisibility(newRoundBtn);
  toggleVisibility(scoreboard);
}

//event listeners
dealBtn.addEventListener("click", dealFirstRound);
hitBtn.addEventListener("click", chooseHit.bind(null, user));
standBtn.addEventListener("click", chooseStand);
newRoundBtn.addEventListener("click", newRound);
