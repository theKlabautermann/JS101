const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINS_FOR_MATCH = 5;
const MIDDLE_SQUARE = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(str) {
  console.log(`=> ${str}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  });
}

function joinOr(arr, separator1 = ', ', separator2 = 'or') {
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

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board), ', ', 'or')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function decidingMoves(board, marker) {
  let emptySquare;
  let winningLines = WINNING_LINES;

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];
    if ([sq1, sq2, sq3].filter((square) => {
      return board[square] === marker;
    }).length === 2) {
      emptySquare = [sq1, sq2, sq3].find((square) => {
        return board[square] === INITIAL_MARKER;
      });
      if (emptySquare) return emptySquare;
    }
  }
  return null;
}

function computerChoosesSquare(board) {
  let square;
  if (decidingMoves(board, COMPUTER_MARKER)) {
    square = decidingMoves(board, COMPUTER_MARKER);
    board[square] = COMPUTER_MARKER;
  } else if (decidingMoves(board, HUMAN_MARKER)) {
    square = decidingMoves(board, HUMAN_MARKER);
    board[square] = COMPUTER_MARKER;
  } else if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
    board[MIDDLE_SQUARE] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = WINNING_LINES;

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if ([sq1, sq2, sq3].filter((square) => {
      return board[square] === HUMAN_MARKER;
    }).length === 3) {
      return 'Player';
    }
    if ([sq1, sq2, sq3].filter((square) => {
      return board[square] === COMPUTER_MARKER;
    }).length === 3) {
      return 'Computer';
    }
  }
  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "Player") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === "Player") {
    return "Computer";
  } else {
    return "Player";
  }
}

let humanScore;
let computerScore;
let gameCounter = 1;

while (true) {

  let currentPlayer = "Player";
  let board = initializeBoard();
  let answer = "n";

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
    currentPlayer = alternatePlayer(currentPlayer);
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    if (detectWinner(board) === "Player") humanScore += 1;
    if (detectWinner(board) === "Computer") computerScore += 1;
  } else {
    prompt("It's a tie!");
  }

  gameCounter += 1;

  if (gameCounter >= 2) {
    if (humanScore < WINS_FOR_MATCH && computerScore < WINS_FOR_MATCH) {
      prompt(`Current Score:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
      prompt(`(${WINS_FOR_MATCH} wins to win the match!)`);
    } else {
      if (humanScore === WINS_FOR_MATCH) prompt(`Player wins the match!`);
      if (computerScore === WINS_FOR_MATCH) prompt(`Computer wins the match!`);
      gameCounter = 0;
      humanScore = 0;
      computerScore = 0;
    }
  }

  prompt("Play again? (y or n)");
  answer = readline.question().toLowerCase();
  while (!(["y", "Y", "n", "N"].includes(answer))) {
    prompt("Sorry, that's not a valid choice.\nDo you want to play again? (y or n)");
    answer = readline.question().toLowerCase();
  }

  if (answer === "n") break;
}

prompt("Thanks for playing Tic Tac Toe");