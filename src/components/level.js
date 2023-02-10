import { useState, useEffect } from "react";
import { Card } from "./card";

export function Level(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levelContent, setLevelContent] = useState({
    arr: [],
    backgroundImage: "",
  });
  const [isGameOver, setIsGameOver] = useState(false);

  function increaseScore() {
    setScore(score + 1);
  }

  class Waifu {
    #isTouched;
    constructor(name, url) {
      this.#isTouched = false;
      this.name = name;

      this.url = url;
    }

    touch() {
      if (this.#isTouched) {
        alert("error , ya esta tocada");
        return false;
      } else {
        this.#isTouched = true;
        return true;
      }
    }

    get isTouched() {
      return this.#isTouched;
    }
  }
  const waifusArr = [
    new Waifu("Darkness", "/img/waifus/darkness.jpeg"),
    new Waifu("Nagatoro", "/img/waifus/nagatoro.jpg"),
    new Waifu("Nezuko", "/img/waifus//nezuko.jpg"),
    new Waifu("Power", "/img/waifus/power.png"),
    new Waifu("Toga", "/img/waifus/toga.png"),
    new Waifu("Misa", "/img/waifus/misa.jpeg"),
    new Waifu("Mikasa", "/img/waifus/mikasa.jpg"),
    new Waifu("Aqua", "/img/waifus/aqua.png"),
    new Waifu("Hinata", "/img/waifus/hinata.jpg"),
    new Waifu("Robert", "/img/waifus/robert.jpg"),
  ];

  function pickRandomElements(arr, quantity) {
    let pickedElements = [];
    let remainingElements = [...arr];

    for (let i = 0; i < quantity; i++) {
      let randomIndex = Math.floor(Math.random() * remainingElements.length);
      let randomElement = remainingElements[randomIndex];
      pickedElements.push(randomElement);
      remainingElements.splice(randomIndex, 1);
    }
    return pickedElements;
  }

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  //switch
  useEffect(() => {
    console.log("render");
    switch (currentLevel) {
      case 1:
        setLevelContent({
          arr: [...pickRandomElements(waifusArr, 4)],
          backgroundImage: "to be set",
        });

        break;
      case 2:
        setLevelContent({
          arr: [...pickRandomElements(waifusArr, 6)],
          backgroundImage: "to be set",
        });

        break;
      case 3:
        setLevelContent({
          arr: [...pickRandomElements(waifusArr, 8)],
          backgroundImage: "to be set",
        });

        break;
      default: {
      }
    }
  }, [currentLevel]);

  useEffect(() => {
    if (currentLevel === 1) {
      if (score === 4) {
        alert("you win");
        setCurrentLevel(2);
      }
    } else if (currentLevel === 2) {
      if (score === 10) {
        alert("you win");
        setCurrentLevel(3);
      }
    } else if (currentLevel === 3) {
      if (score === 18) {
        alert("no more levels you won the game");
      }
    }
  }, [score]);

  function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  return isGameOver ? (
    <div>
      <p>is game over</p>
      <button
        onClick={() => {
          setIsGameOver(false);
          setCurrentLevel(1);
          setScore(0);
          ////
          setLevelContent({
            arr: [...pickRandomElements(waifusArr, 4)],
            backgroundImage: "to be set",
          });
        }}
      >
        Reiniciar
      </button>
    </div>
  ) : (
    <div className="body">
      <div className="header">
        <p>Memoria waifu</p>
        <p>Nivel : {currentLevel}</p>
        <p>
          Puntuacion: {score} | Mejor:{bestScore}
        </p>
      </div>
      <div className="cards-container">
        {levelContent.arr.map((waifu) => {
          return (
            <Card
              waifu={waifu}
              shuffle={() => {
                /* console.log(levelContent.arr.indexOf(waifu));
                console.log(waifu.name); */
                if (waifu.touch()) {
                  setLevelContent({ arr: shuffleArray(levelContent.arr) });
                  increaseScore();
                } else {
                  alert("game over");
                  setIsGameOver(true);
                }
              }}
              setLevelContent={setLevelContent}

              /* increaseScore= {increaseScore} */
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          console.log(levelContent.arr);
        }}
      >
        Click
      </button>
      <button>Increase score</button>
    </div>
  );
}
