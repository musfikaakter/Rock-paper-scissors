///
let userMove;
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");

// rock
const rockMove = document.querySelector(".rock");

rockMove.addEventListener("click", () => {
  result.style.color = "#ffffff";
  let userMove = 1;
  let computerMove = Math.floor(Math.random() * 3 + 1);

  if (userMove && computerMove == 2) {
    result.textContent = `You lost!`;
    result.style.backgroundColor = "#ff0000";
    computer.textContent++;
  } else if (userMove && computerMove == 3) {
    result.textContent = `You won!`;
    result.style.backgroundColor = "#00ff73";
    user.textContent++;
  } else {
    result.textContent = `Draw!`;
    result.style.backgroundColor = "#8a2ce2";
    computer.textContent;
    user.textContent;
  }
});

// paper
const paperMove = document.querySelector(".paper");

paperMove.addEventListener("click", () => {
  result.style.color = "#ffffff";
  let userMove = 2;
  let computerMove = Math.floor(Math.random() * 3 + 1);

  if (userMove && computerMove == 1) {
    result.textContent = `You won!`;
    result.style.backgroundColor = "#00ff73";
    user.textContent++;
  } else if (userMove && computerMove == 3) {
    result.textContent = `You lost!`;
    result.style.backgroundColor = "#ff0000";
    computer.textContent++;
  } else {
    result.textContent = `Draw!`;
    result.style.backgroundColor = "#8a2ce2";
    computer.textContent;
    user.textContent;
  }
});

// scissors
const scissorsMove = document.querySelector(".scissors");

scissorsMove.addEventListener("click", () => {
  result.style.color = "#ffffff";
  let userMove = 3;
  let computerMove = Math.floor(Math.random() * 3 + 1);

  if (userMove && computerMove == 1) {
    result.textContent = `You lost!`;
    result.style.backgroundColor = "#ff0000";
    computer.textContent++;
  } else if (userMove && computerMove == 2) {
    result.textContent = `You won!`;
    result.style.backgroundColor = "#00ff73";
    user.textContent++;
  } else {
    result.textContent = `Draw!`;
    result.style.backgroundColor = "#8a2ce2";
    computer.textContent;
    user.textContent;
  }
});

// restart
const restart = document.querySelector(".restart");

restart.addEventListener("click", () => {
  result.textContent = `Pick your move`;
  user.textContent = "0";
  computer.textContent = "0";
  result.style.backgroundColor = "transparent";
  result.style.color = "#8a2ce2";
});



