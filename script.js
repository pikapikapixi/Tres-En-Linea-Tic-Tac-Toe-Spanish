let currentPlayer = "X";
let gameEnded = false;
const board = Array.from(Array(9).keys());

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
  [0, 4, 8], [2, 4, 6] // diagonal
];

const cells = document.getElementsByClassName("cell");
document.getElementById("turn").textContent = "¡Es el turno de " + currentPlayer + "!";

function makeMove(cellIndex) {
  if (!gameEnded && board[cellIndex] === cellIndex) {
    board[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);

    if (checkWin(currentPlayer)) {
      gameEnded = true;
      document.getElementById("result").textContent = currentPlayer + " gana!";
    } else if (board.every(cell => typeof cell === "string")) {
      gameEnded = true;
      document.getElementById("result").textContent = "¡Juego empatado!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("turn").textContent = "¡Es el turno de " + currentPlayer + "!";
    }
  }
}

function checkWin(player) {
  return winningCombos.some(combo => {
    return combo.every(cellIndex => board[cellIndex] === player);
  });
}

function restartGame() {
  currentPlayer = "X";
  gameEnded = false;
  board.forEach((cell, index) => {
    board[index] = index;
    cells[index].textContent = "";
    cells[index].classList.remove("X", "O");
  });
  document.getElementById("turn").textContent = "¡Es el turno de " + currentPlayer + "!";
  document.getElementById("result").textContent = "";
}
