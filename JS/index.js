const spanXorO = document.querySelector(".turn span");
const boxes = document.querySelectorAll(".boxes");
const boxContent = document.querySelectorAll(".boxContent");
const resetButton = document.querySelector(".btn");
const winnerLines = document.querySelectorAll(".winnerLines");
const winner = document.querySelector(".winner");
const divClassTurn = document.querySelector(".turn");
// const endSound = new Audio("/Music/gameover.wav");
// const turnSound = new Audio("/Music/chance.wav");
// const resetSound = new Audio("/Music/reset.wav");
// const winSound = new Audio("/Music/win.wav");
const endSound = new Audio("/Tic_Tac_Toe/Music/gameover.wav");
const turnSound = new Audio("/Tic_Tac_Toe/Music/chance.wav");
const resetSound = new Audio("/Tic_Tac_Toe/Music/reset.wav");
const winSound = new Audio("/Tic_Tac_Toe/Music/win.wav");
const winChance = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontally
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertically
  [0, 4, 8], [2, 4, 6], // diagonally
];
let turn = "X";
let chances = 0;
let gameOver = false;

const checkWin = () => {
  for (let i = 0; i < winChance.length; i++) {
    if (
      boxContent[winChance[i][0]].innerHTML ===
        boxContent[winChance[i][1]].innerHTML &&
      boxContent[winChance[i][1]].innerHTML ===
        boxContent[winChance[i][2]].innerHTML &&
      boxContent[winChance[i][1]].innerHTML !== ""
    ) {
      winLineShow(winChance[i], "100");
      divClassTurn.classList.add("winner");
      divClassTurn.innerHTML = `${boxContent[winChance[i][1]].innerHTML} Win`;
      gameOver = true;
      winSound.play();
    } else {
      winLineShow(winChance[i], "0");
    }
  }
};

const winLineShow = (trio, value) => {
  const currentWinIndex = winChance.indexOf(trio);
  switch (currentWinIndex) {
    case 0:
    case 1:
    case 2:
      winnerLines[currentWinIndex].style.width = `${value}%`;
      break;
    case 3:
    case 4:
    case 5:
      winnerLines[currentWinIndex].style.height = `${value}%`;
      break;
    case 6:
    case 7:
      winnerLines[currentWinIndex].style.opacity = value;
      break;
  }
};

boxes.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    if (boxContent[index].innerHTML === "" && !gameOver) {
      turnSound.play();
      boxContent[index].innerHTML = turn;
      turn = turn === "X" ? "o" : "X";
      divClassTurn.innerHTML = `Turn For <span>${turn}</span>`;
      chances++;
      checkWin();
      if (chances === 9 && !gameOver) {
        divClassTurn.innerHTML = "Game Over";
        endSound.play();
      }
    }
  });
});

resetButton.addEventListener("click", () => {
  divClassTurn.innerHTML = `Turn For <span>${turn}</span>`;
  divClassTurn.classList.remove("winner");
  boxContent.forEach((element) => {
    element.innerHTML = "";
  });
  resetSound.play();
  gameOver = false;
  chances = 0;
  turn = "X";
  checkWin();
});
