const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.querySelector("#config-overlay");
const backdropElement = document.querySelector("#backdrop");
const formElement = document.querySelector("form");
const gameAreaElement = document.querySelector("#active-game");
const successErrorMessage = document.querySelector("#success-error");
const validateText = document.querySelector("#playerName");
const activePlayerNameElement = document.querySelector("#active-player-name");
const gameOverElement = document.querySelector("#game-over");

const editPlayer1BtnElement = document.querySelector("#edit-player-1-btn");
const editPlayer2BtnElement = document.querySelector("#edit-player-2-btn");
const cancelConfigBtnElement = document.querySelector("#cancel-config-btn");
const startNewGameBtnElement = document.querySelector("#start-game-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.querySelector("#game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
validateText.addEventListener("input", validateInputText);
startNewGameBtnElement.addEventListener("click", startNewGame);

// for (let gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }
gameBoardElement.addEventListener("click", selectGameField);
