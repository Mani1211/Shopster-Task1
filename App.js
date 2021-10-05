import React, { useState } from "react";
import Rock from "./images/icon-rock.svg";
import Paper from "./images/icon-paper.svg";
import Scissor from "./images/icon-scissors.svg";
import Spock from "./images/icon-spock.svg";
import Lizard from "./images/icon-lizard.svg";
import "./App.css";

function App() {
  const [selectedLogo, setSelectedLogo] = useState("");
  const [score, setScore] = useState(0);
  const [compImage, setCompImage] = useState("");

  const Images = [
    { name: "Rock", image: Rock },
    { name: "Paper", image: Paper },
    { name: "Scissor", image: Scissor },
    { name: "Spock", image: Spock },
    { name: "Lizard", image: Lizard },
  ];
  const selectPoint = (selected) => {
    const random = Math.floor(Math.random() * 5);
    setCompImage(Images[random].image);
    setSelectedLogo(Images.filter((i) => i.name === selected));
    // console.log(`random`, random, Images[random].name, selected);

    const filter = Images.filter((i) => i.name === selected);

    setSelectedLogo(filter[0].image);
    switch (selected) {
      case "Rock":
        if (
          Images[random].name === "Scissor" ||
          Images[random].name === "Lizard"
        )
          setScore(score + 1);
        else if (Images[random].name === "Rock") setScore(score);
        else setScore(score - 1);
        break;
      case "Paper":
        if (Images[random].name === "Rock" || Images[random].name === "Spock")
          setScore(score + 1);
        else if (Images[random].name === "Paper") setScore(score);
        else setScore(score - 1);
        break;
      case "Scissor":
        if (Images[random].name === "Paper" || Images[random].name === "Lizard")
          setScore(score + 1);
        else if (Images[random].name === "Scissor") setScore(score);
        else setScore(score - 1);
        break;
      case "Spock":
        if (Images[random].name === "Rock" || Images[random].name === "Scissor")
          setScore(score + 1);
        else if (Images[random].name === "Spock") setScore(score);
        else setScore(score - 1);
        break;
      case "Lizard":
        if (Images[random].name === "Paper" || Images[random].name === "Spock")
          setScore(score + 1);
        else if (Images[random].name === "Lizard") setScore(score);
        else setScore(score - 1);
        break;

      default:
        break;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{score}</h1>
        <div>
          <img
            src={Rock}
            className="App-logo"
            alt="logo"
            onClick={() => {
              selectPoint("Rock");
            }}
          />
          <img
            src={Paper}
            className="App-logo"
            alt="logo"
            onClick={() => {
              selectPoint("Paper");
            }}
          />
          <img
            src={Scissor}
            className="App-logo"
            alt="logo"
            onClick={() => {
              selectPoint("Scissor");
            }}
          />
          <img
            src={Spock}
            className="App-logo"
            alt="logo"
            onClick={() => {
              selectPoint("Spock");
            }}
          />
          <img
            src={Lizard}
            className="App-logo"
            alt="logo"
            onClick={() => {
              selectPoint("Lizard");
            }}
          />
        </div>

        <div>
          {selectedLogo && (
            <img src={selectedLogo} className="App-logo" alt="logo" />
          )}
          {compImage && <img src={compImage} className="App-logo" alt="logo" />}
        </div>
      </header>
    </div>
  );
}

export default App;
