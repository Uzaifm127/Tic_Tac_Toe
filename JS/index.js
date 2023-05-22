const boxes = document.querySelectorAll(".boxes");
const resetButton = document.querySelector(".btn");
const winnerLines = document.querySelectorAll(".winnerLines");
const winner = document.querySelector(".winner");
const divClassTurn = document.querySelector(".turn");
const winnerImage = document.querySelector(".winnerImage");
let currentPlayer = "X";
let turn = "X";
let chances = 0;
let gameOver = false;

// change turn function
const changeTurn = () => {
  return (turn = turn === "X" ? "o" : "X");
};

// checkWin function
const checkWin = () => {
  if (
    boxes[0].innerHTML === boxes[1].innerHTML &&
    boxes[1].innerHTML === boxes[2].innerHTML &&
    boxes[0].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[0].style.width = "100%";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[1].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[3].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[5].innerHTML &&
    boxes[3].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[1].style.width = "100%";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[4].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[6].innerHTML === boxes[7].innerHTML &&
    boxes[7].innerHTML === boxes[8].innerHTML &&
    boxes[6].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[2].style.width = "100%";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[7].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[0].innerHTML === boxes[3].innerHTML &&
    boxes[3].innerHTML === boxes[6].innerHTML &&
    boxes[0].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[3].style.height = "100%";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[3].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[1].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[7].innerHTML &&
    boxes[1].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[4].style.height = "100%";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[4].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[2].innerHTML === boxes[5].innerHTML &&
    boxes[5].innerHTML === boxes[8].innerHTML &&
    boxes[2].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[5].style.height = "100%";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[5].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[0].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[8].innerHTML &&
    boxes[0].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[6].style.opacity = "1";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[4].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  } else if (
    boxes[2].innerHTML === boxes[4].innerHTML &&
    boxes[4].innerHTML === boxes[6].innerHTML &&
    boxes[2].innerHTML !== ""
  ) {
    // divClassTurn.setAttribute("hidden", "")
    winnerLines[7].style.opacity = "1";
    divClassTurn.hidden = true;
    winner.style.fontSize = "5vmax";
    winner.innerHTML = `${boxes[4].innerHTML} Wins`;
    winnerImage.style.opacity = "1";
    gameOver = true;
    resetButton.style.top = "8.5%";
  }
};

// Convert HTML collections into an array
Array.from(boxes);
Array.from(winnerLines);

// main Game Logic
boxes.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.currentTarget.innerHTML === "" && !gameOver) {
      e.currentTarget.innerHTML = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "o" : "X";
      changeTurn();
      divClassTurn.innerHTML = `Turn For <span>${turn}</span>`;
      chances++;
      checkWin();
      if (chances === 9) {
        divClassTurn.innerHTML = "Game Over";
      }
    }
  });
});

// reset button Logic
resetButton.addEventListener("click", () => {
  boxes.forEach((element) => {
    element.innerHTML = "";
  });
  turn = "X";
  currentPlayer = "X";
  chances = 0;
  gameOver = false;
  winnerImage.style.opacity = "0";
  winner.innerHTML = "";
  divClassTurn.hidden = false;
  divClassTurn.innerHTML = `Turn For <span>${turn}</span>`;
  resetButton.style.top = "1%";
  resetButton.classList.add("btnHover");
  winnerLines[0].style.width = "0%";
  winnerLines[1].style.width = "0%";
  winnerLines[2].style.width = "0%";
  winnerLines[3].style.height = "0%";
  winnerLines[4].style.height = "0%";
  winnerLines[5].style.height = "0%";
  winnerLines[6].style.opacity = "0";
  winnerLines[7].style.opacity = "0";
  setTimeout(() => {
    resetButton.classList.remove("btnHover");
  }, 200);
});
