var selectedIcon, computerIcon, score, status;
const images = [
  {
    name: "rock",
    image: "./images/icon-rock.svg",
    winProp: ["scissors", "lizard"],
  },
  {
    name: "paper",
    image: "./images/icon-paper.svg",
    winProp: ["rock", "spock"],
  },
  {
    name: "scissors",
    image: "./images/icon-scissors.svg",
    winProp: ["paper", "lizard"],
  },
  {
    name: "spock",
    image: "./images/icon-spock.svg",
    winProp: ["rock", "scissors"],
  },
  {
    name: "lizard",
    image: "./images/icon-lizard.svg",
    winProp: ["paper", "spock"],
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
  selectedIcon = selected;
  computerIcon = images[random].name;
  var playerScore = document.querySelector(".player-score");
  var result = document.querySelector(".result");

  if (
    images[random].name === filter[0].winProp[0] ||
    images[random].name === filter[0].winProp[1]
  ) {
    score = score + 1;
    playerScore.textContent = score;
    result.textContent = "You Win!";
  } else if (images[random].name === filter[0].name) {
    score = score;
    playerScore.textContent = score;
    result.textContent = "Drawn";
  } else {
    result.textContent = "You Lose";
    if (score > 0) {
      score = score - 1;
      playerScore.textContent = score;
    }
  }

  // switch (selected) {
  //   case "rock":
  //     if (
  //       images[random].name === "scissors" ||
  //       images[random].name === "lizard"
  //     ) {
  //       console.log("increment");
  //       score = score + 1;
  //       playerScore.textContent = score;
  //       result.textContent = "You Win!";
  //     } else if (images[random].name === "rock") {
  //       console.log("equal");
  //       result.textContent = "Drawn";
  //       score = score;
  //       playerScore.textContent = score;
  //     } else {
  //       result.textContent = "You Lose";
  //       if (score > 0) {
  //         score = score - 1;
  //         playerScore.textContent = score;
  //       }
  //     }
  //     break;
  //   case "paper":
  //     if (images[random].name === "rock" || images[random].name === "spock") {
  //       score = score + 1;
  //       playerScore.textContent = score;
  //       result.textContent = "You Win!";
  //     } else if (images[random].name === "paper") {
  //       score = score;
  //       playerScore.textContent = score;
  //       result.textContent = "Drawn";
  //     } else {
  //       result.textContent = "You Lose";
  //       if (score > 0) {
  //         score = score - 1;
  //         playerScore.textContent = score;
  //       }
  //     }

  //     break;
  //   case "scissors":
  //     if (images[random].name === "paper" || images[random].name === "lizard") {
  //       score = score + 1;
  //       playerScore.textContent = score;
  //       result.textContent = "You Win!";
  //     } else if (images[random].name === "scissors") {
  //       score = score;
  //       playerScore.textContent = score;
  //       result.textContent = "Drawn";
  //     } else {
  //       result.textContent = "You Lose";
  //       if (score > 0) {
  //         score = score - 1;
  //         playerScore.textContent = score;
  //       }
  //     }

  //     break;
  //   case "spock":
  //     if (
  //       images[random].name === "rock" ||
  //       images[random].name === "scissors"
  //     ) {
  //       score = score + 1;
  //       playerScore.textContent = score;
  //       result.textContent = "You Win!";
  //     } else if (images[random].name === "spock") {
  //       score = score;
  //       playerScore.textContent = score;
  //       result.textContent = "Drawn";
  //     } else {
  //       result.textContent = "You Lose";
  //       if (score > 0) {
  //         score = score - 1;
  //         playerScore.textContent = score;
  //       }
  //     }

  //     break;
  //   case "lizard":
  //     if (images[random].name === "paper" || images[random].name === "spock") {
  //       score = score + 1;
  //       playerScore.textContent = score;
  //       result.textContent = "You Win!";
  //     } else if (images[random].name === "lizard") {
  //       score = score;
  //       playerScore.textContent = score;
  //       result.textContent = "Drawn";
  //     } else {
  //       result.textContent = "You Lose";
  //       if (score > 0) {
  //         score = score - 1;
  //         playerScore.textContent = score;
  //       }
  //     }
  // }
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
  var computerImage = document.querySelector(".computer-icon-selected");
  var selectedImage = document.querySelector(".gameplay-icon-selected");
  var comPar = computerImage.parentElement;
  var selPar = selectedImage.parentElement;
  comPar.classList.remove(computerIcon);
  selPar.classList.remove(selectedIcon);
  step2.style.display = "none";
  step1.style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  var rulesContainer = document.querySelector(".rules-absolute");
  rulesContainer.style.display = "none";
});
document.querySelector(".rules").addEventListener("click", () => {
  var rulesContainer = document.querySelector(".rules-absolute");
  rulesContainer.style.display = "block";
});
function init() {
  var playerScore = document.querySelector(".player-score");
  var rules = document.querySelector(".rules-absolute");
  rules.style.display = "none";

  var step2 = document.querySelector(".step-2");

  score = 0;
  step2.style.display = "none";
  playerScore.textContent = score;
}
