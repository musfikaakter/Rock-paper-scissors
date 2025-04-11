// get score
let userScore = document.querySelector(".user_score");
let compScore = document.querySelector(".computer_score");

// show message
const showMsg = document.querySelector(".result");
let userWin = true;

const showWinner = (userWin, userMove, compMove) => {
  if (userWin) {
    showMsg.textContent = `You won! ${userMove} beats ${compMove}`;
    showMsg.style.backgroundColor = "#00ff73";
    userScore.textContent++;
  } else {
    showMsg.textContent = `You lost! ${compMove} beats ${userMove}`;
    showMsg.style.backgroundColor = "#ff0000";
    compScore.textContent++;
  }
};

// draw message
const drawGame = () => {
  showMsg.textContent = `Draw`;
  showMsg.style.backgroundColor = "#8a2ce2";
};

// get computer move
const genCompMove = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

/// game moves
const playGames = (userMove) => {
  const compMove = genCompMove();

  if (userMove === compMove) {
    drawGame();
  } else {
    if (userMove === "rock") {
      userWin = compMove === "paper" ? false : true;
    } else if (userMove === "paper") {
      userWin = compMove === "scissors" ? false : true;
    } else {
      userWin = compMove === "rock" ? false : true;
    }
    showWinner(userWin, userMove, compMove);
  }

  showMsg.style.color = "#ffffff";
};

const moves = document.querySelectorAll(".moves");
moves.forEach((move) => {
  move.addEventListener("click", () => {
    const userMove = move.getAttribute("id");
    playGames(userMove);

  });
});

// restart
const restart = document.querySelector(".restart");

restart.addEventListener("click", () => {
  showMsg.textContent = `Pick your move`;
  userScore.textContent = "0";
  compScore.textContent = "0";
  showMsg.style.backgroundColor = "transparent";
  showMsg.style.color = "#8a2ce2";
});

