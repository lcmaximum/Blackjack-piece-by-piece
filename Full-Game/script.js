const setBet = document.getElementById("set-bet");
const userMoney = document.getElementById("user-money");
const userBet = document.getElementById("user-bet");
const betMsgArea = document.getElementById("bet-msg-area");
const confMsg = document.getElementById("confirmation-msg");
const gameplay = document.getElementById("gameplay");
const changeBetBtn = document.getElementById("change-bet");
const msgSpace = document.getElementById("msg-space");
let userBank = 200;
let bet = userBet.value;
let betAmt = parseInt(bet, 10);

userMoney.textContent = "$" + userBank;

/*function toggleVisibility(e) {
  if (e.style.visibility === "hidden") {
    e.style.visibility = "visible";
  } else {
    e.style.visibility = "hidden";
  }
}*/

function toggleVisibility(e) {
  if (e.style.visibility === "visible") {
    e.style.visibility = "hidden";
  } else {
    e.style.visibility = "visible";
  }
}

function confirmBet() {
  bet = userBet.value;
  betAmt = parseInt(bet, 10);
  if (betAmt > userBank) {
    betMsgArea.style.color = "red";
    betMsgArea.style.fontWeight = "700";
    betMsgArea.textContent = "Please place a bet up to $" + userBank;
  } else {
    betMsgArea.style.color = "goldenrod";
    betMsgArea.style.fontWeight = "500";
    toggleVisibility(userBet);
    toggleVisibility(setBet);
    betMsgArea.textContent = "Bet set at $" + bet + ".";
    msgSpace.textContent = "Press Deal to begin.";
    toggleVisibility(changeBetBtn);
    toggleVisibility(gameplay);
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

const dealerSpace = document.getElementById("dealer-space");
const userSpace = document.getElementById("user-space");

const scoreboard = document.getElementById("score-board");
const dealerPoints = document.getElementById("dealer-points");
const userPoints = document.getElementById("user-points");
const dealBtn = document.getElementById("deal-btn");
const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");
const newRoundBtn = document.getElementById("new-round-btn");
const mysteryCardDiv = document.createElement("div");

const clubs2 = ["clubs", "♣", "2", 2, false];
const clubs3 = ["clubs", "♣", "3", 3, false];
const clubs4 = ["clubs", "♣", "4", 4, false];
const clubs5 = ["clubs", "♣", "5", 5, false];
const clubs6 = ["clubs", "♣", "6", 6, false];
const clubs7 = ["clubs", "♣", "7", 7, false];
const clubs8 = ["clubs", "♣", "8", 8, false];
const clubs9 = ["clubs", "♣", "9", 9, false];
const clubs10 = ["clubs", "♣", "10", 10, false];
const clubsJack = ["clubs", "♣", "J", 10, false];
const clubsQueen = ["clubs", "♣", "Q", 10, false];
const clubsKing = ["clubs", "♣", "K", 10, false];
const clubsAce = ["clubs", "♣", "A", 11, true];
const diamonds2 = ["diamonds", "♦", "2", 2, false];
const diamonds3 = ["diamonds", "♦", "3", 3, false];
const diamonds4 = ["diamonds", "♦", "4", 4, false];
const diamonds5 = ["diamonds", "♦", "5", 5, false];
const diamonds6 = ["diamonds", "♦", "6", 6, false];
const diamonds7 = ["diamonds", "♦", "7", 7, false];
const diamonds8 = ["diamonds", "♦", "8", 8, false];
const diamonds9 = ["diamonds", "♦", "9", 9, false];
const diamonds10 = ["diamonds", "♦", "10", 10, false];
const diamondsJack = ["diamonds", "♦", "J", 10, false];
const diamondsQueen = ["diamonds", "♦", "Q", 10, false];
const diamondsKing = ["diamonds", "♦", "K", 10, false];
const diamondsAce = ["diamonds", "♦", "A", 11, true];
const spades2 = ["spades", "♠", "2", 2, false];
const spades3 = ["spades", "♠", "3", 3, false];
const spades4 = ["spades", "♠", "4", 4, false];
const spades5 = ["spades", "♠", "5", 5, false];
const spades6 = ["spades", "♠", "6", 6, false];
const spades7 = ["spades", "♠", "7", 7, false];
const spades8 = ["spades", "♠", "8", 8, false];
const spades9 = ["spades", "♠", "9", 9, false];
const spades10 = ["spades", "♠", "10", 10, false];
const spadesJack = ["spades", "♠", "J", 10, false];
const spadesQueen = ["spades", "♠", "Q", 10, false];
const spadesKing = ["spades", "♠", "K", 10, false];
const spadesAce = ["spades", "♠", "A", 11, true];
const hearts2 = ["hearts", "♥", "2", 2, false];
const hearts3 = ["hearts", "♥", "3", 3, false];
const hearts4 = ["hearts", "♥", "4", 4, false];
const hearts5 = ["hearts", "♥", "5", 5, false];
const hearts6 = ["hearts", "♥", "6", 6, false];
const hearts7 = ["hearts", "♥", "7", 7, false];
const hearts8 = ["hearts", "♥", "8", 8, false];
const hearts9 = ["hearts", "♥", "9", 9, false];
const hearts10 = ["hearts", "♥", "10", 10, false];
const heartsJack = ["hearts", "♥", "J", 10, false];
const heartsQueen = ["hearts", "♥", "Q", 10, false];
const heartsKing = ["hearts", "♥", "K", 10, false];
const heartsAce = ["hearts", "♥", "A", 11, true];

const fullDeck = [
  clubs2,
  clubs3,
  clubs4,
  clubs5,
  clubs6,
  clubs7,
  clubs8,
  clubs9,
  clubs10,
  clubsJack,
  clubsQueen,
  clubsKing,
  clubsAce,
  diamonds2,
  diamonds3,
  diamonds4,
  diamonds5,
  diamonds6,
  diamonds7,
  diamonds8,
  diamonds9,
  diamonds10,
  diamondsJack,
  diamondsQueen,
  diamondsKing,
  diamondsAce,
  spades2,
  spades3,
  spades4,
  spades5,
  spades6,
  spades7,
  spades8,
  spades9,
  spades10,
  spadesJack,
  spadesQueen,
  spadesKing,
  spadesAce,
  hearts2,
  hearts3,
  hearts4,
  hearts5,
  hearts6,
  hearts7,
  hearts8,
  hearts9,
  hearts10,
  heartsJack,
  heartsQueen,
  heartsKing,
  heartsAce
];

function isRed(card) {
  if (card[0] === "hearts" || card[0] === "diamonds") {
    return true;
  } else {
    return false;
  }
}

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

let secretDealerCard = "";

const players = [user, dealer];
//state variables
let deck = [];

//functions

function shuffle() {
  deck = [];
  while (deck.length < 52) {
    let num = Math.floor(Math.random() * 52);
    if (!deck.includes(fullDeck[num])) {
      console.log(num, fullDeck[num]);
      deck.push(fullDeck[num]);
    }
  }
  console.log(deck);
  return deck;
}

function containsAce(hand) {
  for (let i = 0; i < hand.length; i++) {
    if (hand[i][4]) {
      return true;
    }
  }
  return false;
}

function calculateScore() {
  dealer.score = 0;
  user.score = 0;
  for (let i = 0; i < dealer.hand.length; i++) {
    dealer.score += dealer.hand[i][3];
  }
  if (containsAce(dealer.hand) && dealer.score > 21) {
    dealer.score -= 10;
  }
  for (let i = 0; i < user.hand.length; i++) {
    user.score += user.hand[i][3];
  }
  if (containsAce(user.hand) && user.score > 21) {
    user.score -= 10;
  }
}

function displayCard(newCard, cardDiv) {
  cardDiv.classList.add("card");
  cardDiv.style.border = "solid black";
  if (isRed(newCard)) {
    cardDiv.style.color = "red";
  } else {
    cardDiv.style.color = "black";
  }
  cardDiv.innerHTML = newCard[2] + "<br />" + newCard[1];
}

function displayScore() {
  dealerPoints.textContent = dealer.score;
  userPoints.textContent = user.score;
}

function dealFirstRound() {
  dealer.space.appendChild(mysteryCardDiv);
  mysteryCardDiv.style.color = "black";
  mysteryCardDiv.classList.add("card");
  mysteryCardDiv.textContent = "???";
  msgSpace.textContent =
    "Press Hit to draw another card or Stand to end your turn.";
  console.log("1");
  shuffle();
  console.log("2");
  toggleVisibility(scoreboard);
  toggleVisibility(dealBtn);
  toggleVisibility(hitBtn);
  toggleVisibility(standBtn);

  let userCard1 = document.createElement("div");
  let dealerCard1 = document.createElement("div");
  let userCard2 = document.createElement("div");

  let newUserCard = deck.pop();
  user.hand.push(newUserCard);
  user.space.appendChild(userCard1);
  displayCard(newUserCard, userCard1);

  let newDealerCard = deck.pop();
  dealer.hand.push(newDealerCard);
  dealer.space.appendChild(dealerCard1);
  displayCard(newDealerCard, dealerCard1);

  let newUserCard2 = deck.pop();
  user.hand.push(newUserCard2);
  user.space.appendChild(userCard2);
  displayCard(newUserCard2, userCard2);

  secretDealerCard = deck.pop();

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
  displayCard(newCard, extraCard);
  calculateScore();
  displayScore();
  if (user.score > 21) {
    toggleVisibility(hitBtn);
    toggleVisibility(standBtn);
    dealer.hand.push(secretDealerCard);
    displayCard(secretDealerCard, mysteryCardDiv);
    if (isRed(secretDealerCard)) {
      mysteryCardDiv.style.color = "red";
      mysteryCardDiv.style.border = "solid black";
    }
    endRound();
  }
}

function chooseStand() {
  toggleVisibility(hitBtn);
  toggleVisibility(standBtn);

  dealer.hand.push(secretDealerCard);
  displayCard(secretDealerCard, mysteryCardDiv);
  if (isRed(secretDealerCard)) {
    mysteryCardDiv.style.color = "red";
    mysteryCardDiv.style.border = "solid black";
  }
  while (dealer.score <= 16) {
    chooseHit(dealer);
  }
  endRound();
}

function endRound() {
  determineWinner();
  newRoundBtn.style.visibility = "visible";
}

function determineWinner() {
  let winner = "";
  if (user.score > 21) {
    winner = dealer;
    msgSpace.textContent = "Bust! Dealer wins!";
  } else if (dealer.score <= 21 && user.score < dealer.score) {
    winner = dealer;
    msgSpace.textContent = "Dealer wins!";
  } else if (dealer.score > 21) {
    winner = user;
    msgSpace.textContent = "Bust! You win!";
  } else if (user.score <= 21 && user.score > dealer.score) {
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
  msgSpace.textContent =
    "Press Deal to begin a new round or Change Bet to adjust your bet.";
  userPoints.textContent = "0";
  dealerPoints.textContent = "0";
  toggleVisibility(newRoundBtn);
  toggleVisibility(scoreboard);
  toggleVisibility(dealBtn);
}

//event listeners
dealBtn.addEventListener("click", dealFirstRound);
hitBtn.addEventListener("click", chooseHit.bind(null, user));
standBtn.addEventListener("click", chooseStand);
newRoundBtn.addEventListener("click", newRound);
