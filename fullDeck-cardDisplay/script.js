const cardValue = document.getElementById("card-value");
const cardDiv = document.getElementById("card-div");
const dealButt = document.getElementById("deal-btn");
function tempShrink() {
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

  function isRed(card) {
    if (card[0] === "hearts" || card[0] === "diamonds") {
      return true;
    } else {
      return false;
    }
  }

  function cardInfo(card) {
    return card[2] + " of " + card[0] + ": " + card[3] + " points";
  }

  function displayCard(newCard) {
    cardDiv.classList.add("card");
    cardDiv.style.border = "solid black";
    if (isRed(newCard)) {
      cardDiv.style.color = "red";
    } else {
      cardDiv.style.color = "black";
    }
    cardDiv.innerHTML = newCard[2] + "<br />" + newCard[1];
  }

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

  function shuffle() {
    let idxOrder = [];
    let deck = [];
    while (idxOrder.length < 52) {
      let num = Math.ceil(Math.random() * 52);
      if (!idxOrder.includes(num)) {
        idxOrder.push(num);
      }
    }

    idxOrder.forEach((e) => deck.push(fullDeck[e]));

    return deck;
  }

  function dealFirstRound() {
    console.log("wooo");
    let deck = shuffle();
    let firstCard = deck.pop();
    console.log(firstCard[0], firstCard[2]);
    console.log(isRed(firstCard));
    displayCard(firstCard);
    cardValue.textContent = cardInfo(firstCard);
  }

  dealButt.addEventListener("click", dealFirstRound);
}
tempShrink();
