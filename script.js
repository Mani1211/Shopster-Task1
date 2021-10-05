var selectedIcon, computerIcon, score, status;
const images = [
  {
    name: "rock",
    image: "./images/icon-rock.svg",
  },
  {
    name: "paper",
    image: "./images/icon-paper.svg",
  },
  {
    name: "scissors",
    image: "./images/icon-scissors.svg",
  },
  {
    name: "spock",
    image: "./images/icon-spock.svg",
  },
  {
    name: "lizard",
    image: "./images/icon-lizard.svg",
  },
];

init();
function chooseWinner(selected) {
  step1.style.display = "none";
  step2.style.display = "flex";

  const random = Math.floor(Math.random() * 5);
  var computerImage = document.querySelector(".computer-icon-selected");
  var selectedImage = document.querySelector(".gameplay-icon-selected");
  const filter = images.filter((i) => i.name === selected);
  var comPar = computerImage.parentElement;
  var selPar = selectedImage.parentElement;
  selectedImage.src = filter[0].image;
  computerImage.src = images[random].image;
  comPar.classList.add(images[random].name);
  selPar.classList.add(selected);

  var playerScore = document.querySelector(".player-score");
  var result = document.querySelector(".result");
  switch (selected) {
    case "rock":
      if (
        images[random].name === "scissors" ||
        images[random].name === "lizard"
      ) {
        console.log("increment");
        score = score + 1;
        playerScore.textContent = score;
        result.textContent = "You Win!";
      } else if (images[random].name === "rock") {
        console.log("equal");
        result.textContent = "Drawn";
        score = score;
        playerScore.textContent = score;
      } else {
        if (score > 0) {
          score = score - 1;
          playerScore.textContent = score;
          result.textContent = "You Lose";
        }
      }
      break;
    case "paper":
      if (images[random].name === "rock" || images[random].name === "spock") {
        score = score + 1;
        playerScore.textContent = score;
        result.textContent = "You Win!";
      } else if (images[random].name === "paper") {
        score = score;
        playerScore.textContent = score;
        result.textContent = "Drawn";
      } else {
        if (score > 0) {
          score = score - 1;
          playerScore.textContent = score;
          result.textContent = "You Lose";
        }
      }

      break;
    case "scissors":
      if (images[random].name === "paper" || images[random].name === "lizard") {
        score = score + 1;
        playerScore.textContent = score;
        result.textContent = "You Win!";
      } else if (images[random].name === "scissors") {
        score = score;
        playerScore.textContent = score;
        result.textContent = "Drawn";
      } else {
        if (score > 0) {
          score = score - 1;
          playerScore.textContent = score;
          result.textContent = "You Lose";
        }
      }

      break;
    case "spock":
      if (images[random].name === "rock" || images[random].name === "scissor") {
        score = score + 1;
        playerScore.textContent = score;
        result.textContent = "You Win!";
      } else if (images[random].name === "spock") {
        score = score;
        playerScore.textContent = score;
        result.textContent = "Drawn";
      } else {
        if (score > 0) {
          score = score - 1;
          playerScore.textContent = score;
          result.textContent = "You Lose";
        }
      }

      break;
    case "lizard":
      if (images[random].name === "paper" || images[random].name === "spock") {
        score = score + 1;
        playerScore.textContent = score;
        result.textContent = "You Win!";
      } else if (images[random].name === "lizard") {
        score = score;
        playerScore.textContent = score;
        result.textContent = "Drawn";
      } else {
        if (score > 0) {
          score = score - 1;
          playerScore.textContent = score;
          result.textContent = "You Lose";
        }
      }
  }
}

var rock = document.querySelector(".rock-1");
var paper = document.querySelector(".paper-1");
var scissors = document.querySelector(".scissors-1");
var spock = document.querySelector(".spock-1");
var lizard = document.querySelector(".lizard-1");

rock.addEventListener("click", () => chooseWinner("rock"));
paper.addEventListener("click", () => chooseWinner("paper"));
scissors.addEventListener("click", () => chooseWinner("scissors"));
spock.addEventListener("click", () => chooseWinner("spock"));
lizard.addEventListener("click", () => chooseWinner("lizard"));
var step1 = document.querySelector(".gameicons-container");
var step2 = document.querySelector(".step-2");

document.querySelector(".play-again").addEventListener("click", () => {
  step2.style.display = "none";

  step1.style.display = "block";
});
function init() {
  var playerScore = document.querySelector(".player-score");
  var step2 = document.querySelector(".step-2");

  score = 0;
  step2.style.display = "none";
  playerScore.textContent = score;
}
