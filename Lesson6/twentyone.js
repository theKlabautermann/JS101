const BUST_LIMIT = 21;
const DEALER_LIMIT = 17; //The dealer will hit until he has a hand worth >= 17
const ACE_VALUES = [1, 11];
const WINS_FOR_MATCH = 5;
const readline = require('readline-sync');
let playerScore = 0;
let dealerScore = 0;

function prompt(str) {
  console.log(`=> ${str}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function initializeDeck() {
  let colors = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, ACE_VALUES];

  let deck = [];
  for (let color = 0; color < colors.length; color++) {
    for (let card = 0; card < cards.length; card++) {
      deck.push([cards[card] + " of " + colors[color], values[card]]);
    }
  }
  shuffle(deck);
  return deck;
}

function hit(player, deck) {
  player.push(deck.pop());
}

function dealHands(player1, player2, deck) {
  let players = [player1, player2];
  for (let player = 0; player < players.length; player++) {
    for (let cards = 0; cards < 2; cards++) {
      hit(players[player], deck);
    }
  }
}

function joinOr(arr, separator1 = ', ', separator2 = 'and') {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${arr[0]} ${separator2} ${arr[1]}`;
  } else {
    let result = arr.slice();
    let lastElement = result.pop();
    return `${result.join(separator1)}${separator1}${separator2} ${lastElement}`;
  }
}

function displayHands(hand1, hand2) {
  prompt(`You have: ${joinOr(hand1.map((card) => card[0]))}.`);
  prompt(`Dealer has: ${hand2.map((card) => card[0])[0]} and an unknown card.`);
}

function getAction() {
  prompt("Do you want to Hit (h) or Stay (s)?");
  let decision = readline.question().trim().toLowerCase();
  while (!(["h", "s"].includes(decision))) {
    prompt("Sorry, that's not a valid choice.");
    prompt("Do you want to Hit (h) or Stay (s)?");
    decision = readline.question().trim().toLowerCase();
  }
  return decision;
}

function totalValue(hand) {
  let sum = 0;
  let numberOfAces = 0;

  for (let card = 0; card < hand.length; card += 1) {
    if (Array.isArray(hand[card][1])) {
      sum += ACE_VALUES[1];
      numberOfAces += 1;
    } else {
      sum += hand[card][1];
    }
  }

  for (let ace = numberOfAces; ace > 0; ace -= 1) {
    if (sum > BUST_LIMIT) sum -= (ACE_VALUES[1] - ACE_VALUES[0]);
  }
  return sum;
}

function someoneBust(handValue) {
  if (handValue > BUST_LIMIT) {
    return true;
  } else return false;
}

function returnWinner(hand1, hand2) {
  if (hand1 > hand2) {
    return "you win the game!";
  } else if (hand1 < hand2) {
    return "dealer wins the game!";
  } else {
    return "it's a tie!";
  }
}

function displayWinner(yourHand, computerHand, yourTotal, computerTotal) {
  if (someoneBust(yourTotal)) {
    prompt(`With a hand worth ${yourTotal}, you are bust.`);
    prompt("Dealer wins!");
  } else if (someoneBust(computerTotal)) {
    prompt(`With a hand worth ${computerTotal}, dealer is bust.`);
    prompt("You win!");
  } else {
    let winner = returnWinner(yourTotal, computerTotal);
    prompt(`You hold ${joinOr(yourHand.map((card) => card[0]))}.`);
    prompt(`Dealer holds ${joinOr(computerHand.map((card) => card[0]))}.`);
    prompt(`With your hand worth ${yourTotal} and the dealer's hand worth ${computerTotal},`);
    prompt(`${winner}`);
  }
}

function playAgain() {
  prompt("Play again? (y or n)");
  let answer = readline.question().trim().toLowerCase();
  while (!(["y", "n"].includes(answer))) {
    prompt("Sorry, that's not a valid choice.\nDo you want to play again? (y or n)");
    answer = readline.question().trim().toLowerCase();
  }
  return answer === "y";
}

function updateScores(playerHandValue, dealerHandValue) {
  if (someoneBust(dealerHandValue)) {
    playerScore += 1;
  } else if (someoneBust(playerHandValue)) {
    dealerScore += 1;
  } else if (returnWinner(playerHandValue, dealerHandValue) === "you win the game!") {
    playerScore += 1;
  } else if (returnWinner(playerHandValue, dealerHandValue) === "dealer wins the game!") {
    dealerScore += 1;
  }
}

function displayMatchWinner(playerScore, dealerScore) {
  if (playerScore === WINS_FOR_MATCH) {
    prompt(`With ${WINS_FOR_MATCH} wins, this makes you the match winner`);
  } else if (dealerScore === WINS_FOR_MATCH) {
    prompt(`With ${WINS_FOR_MATCH} wins, this makes the dealer the match winner`);
  }
}

while (true) {
  if (playerScore === WINS_FOR_MATCH || dealerScore === WINS_FOR_MATCH) { //re-set after match-win
    playerScore = 0;
    dealerScore = 0;
  }
  console.clear();
  let deck = initializeDeck();
  let playerHand = [];
  let dealerHand = [];
  let playerTotal;
  let dealerTotal;
  dealHands(playerHand, dealerHand, deck);
  displayHands(playerHand, dealerHand);

  //User/Player actions
  while (true) {
    let action = getAction();

    if (action === "h") {
      console.clear();
      hit(playerHand, deck);
      displayHands(playerHand, dealerHand);
      playerTotal = totalValue(playerHand);
      if (someoneBust(playerTotal)) break;
    } else {
      playerTotal = totalValue(playerHand);
      break;
    }
  }

  if (someoneBust(playerTotal)) {
    displayWinner(playerHand, dealerHand, playerTotal, dealerTotal);
    updateScores(playerTotal, dealerTotal);
    displayMatchWinner(playerScore, dealerScore);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  //Computer/Dealer actions
  while (true) {
    hit(dealerHand, deck);
    if (totalValue(dealerHand) >= DEALER_LIMIT) {
      dealerTotal = totalValue(dealerHand);
      break;
    }
  }

  if (someoneBust(dealerTotal)) {
    displayWinner(playerHand, dealerHand, playerTotal, dealerTotal);
    updateScores(playerTotal, dealerTotal);
    displayMatchWinner(playerScore, dealerScore);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  displayWinner(playerHand, dealerHand, playerTotal, dealerTotal);
  updateScores(playerTotal, dealerTotal);
  displayMatchWinner(playerScore, dealerScore);
  if (!playAgain()) break;
}