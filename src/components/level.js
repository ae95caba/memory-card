import { useState, useEffect } from "react";
import { Card } from "./card";

export function Level(props) {
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
      } else {
        this.#isTouched = true;
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

  const [currentLevel, setCurrentLevel] = useState(1);

  const [levelContent, setLevelContent] = useState({
    arr: [],
    backgroundImage: "",
  });

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
          arr: [pickRandomElements(waifusArr, 6)],
          backgroundImage: "to be set",
        });

        break;
      default: {
      }
    }
  }, []);

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

  function x() {
    setLevelContent({ arr: shuffleArray(levelContent.arr) });
  }

  return (
    <div className="App">
      <div className="header"></div>
      <div className="body">
        <div className="cards-container">
          {levelContent.arr.map((waifu) => {
            return (
              <Card
                waifu={waifu}
                shuffle={() => {
                  console.log(levelContent.arr.indexOf(waifu));
                  console.log(waifu.name);
                  waifu.touch();
                  console.log(levelContent.arr);
                  setLevelContent({ arr: shuffleArray(levelContent.arr) });
                }}
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
      </div>
    </div>
  );
}
