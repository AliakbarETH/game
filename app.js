let currentPlayer = "X";
let cells = document.getElementsByTagName("td");
let result = document.getElementById("result");

function play(cell) {
  if (cell.innerHTML !== "") {
    return;
  }
  cell.innerHTML = currentPlayer;
  if (checkWin()) {
    result.innerHTML = currentPlayer + " wins!";
    disableCells();
    return;
  }
  if (checkDraw()) {
    result.innerHTML = "Draw!";
    disableCells();
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  let patterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];
  for (let pattern of patterns) {
    if (cells[pattern[0]].innerHTML === currentPlayer &&
        cells[pattern[1]].innerHTML === currentPlayer &&
        cells[pattern[2]].innerHTML === currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (let cell of cells) {
    if (cell.innerHTML === "") {
      return false;
    }
  }
  return true;
}

function disableCells() {
  for (let cell of cells) {
    cell.onclick = null;
  }
}

function reset() {
  for (let cell of cells) {
    cell.innerHTML = "";
    cell.onclick = function() { play(this); };
  }
  currentPlayer = "X";
  result.innerHTML = "";
}

for (let cell of cells) {
  cell.onclick = function() { play(this); };
}
