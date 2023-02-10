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
        //alert("error , ya esta tocada");
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
          backgroundImage: "url(/img/lvl1-background.jpg)",
        });

        break;
      case 2:
        setLevelContent({
          arr: [...pickRandomElements(waifusArr, 6)],
          backgroundImage: "url(/img/lvl2-background.jpg)",
        });

        break;
      case 3:
        setLevelContent({
          arr: [...pickRandomElements(waifusArr, 8)],
          backgroundImage: "url(/img/lvl3-background.jpg)",
        });

        break;
      default: {
      }
    }
  }, [currentLevel]);

  function coso() {
    const loadingScreen = document.getElementById("loading");
    loadingScreen.style.display = "flex";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1000);
  }

  useEffect(() => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.style.backgroundImage = levelContent.backgroundImage;
  }, [currentLevel]);

  useEffect(() => {
    if (currentLevel === 1) {
      if (score === 4) {
        //alert("you win");
        setCurrentLevel(2);
      }
    } else if (currentLevel === 2) {
      if (score === 10) {
        //alert("you win");
        setCurrentLevel(3);
      }
    } else if (currentLevel === 3) {
      if (score === 18) {
        alert("no more levels you won the game");
      }
    }
  }, [score]);

  useEffect(() => {
    coso();
  }, [currentLevel]);

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
    <div id="game-over">
      <img src="/img/death.png" alt="death" />
      <p>Fin del juego</p>
      <button
        onClick={() => {
          setIsGameOver(false);
          setCurrentLevel(1);
          setScore(0);
          ////
          setLevelContent({
            arr: [...pickRandomElements(waifusArr, 4)],
            backgroundImage: levelContent.backgroundImage,
          });
        }}
      >
        Reiniciar
      </button>
    </div>
  ) : (
    <div className="body">
      <div id="header">
        <p className="font-effect-neon">Memoria waifu</p>
        <p>
          Nivel : <span id="level">{currentLevel}</span>
        </p>
        <p>
          <span id="score">Puntuacion: {score}</span> |
          <span id="best-score"> Mejor Puntuacion: {bestScore}</span>
        </p>
      </div>
      <div
        id="cards-container"
        style={{ backgroundImage: levelContent.backgroundImage }}
      >
        {levelContent.arr.map((waifu) => {
          return (
            <Card
              waifu={waifu}
              onClick={() => {
                if (waifu.touch()) {
                  setLevelContent({
                    arr: shuffleArray(levelContent.arr),
                    backgroundImage: levelContent.backgroundImage,
                  });
                  increaseScore();
                } else {
                  //alert("game over");
                  setIsGameOver(true);
                }
              }}
              setLevelContent={setLevelContent}
            />
          );
        })}
      </div>
      <div id="loading" style={{ display: "none" }}>
        <img src="/img/loading.png" alt="cute anime girl" />
        <p>Cargando nivel {currentLevel}</p>
      </div>
    </div>
  );
}
