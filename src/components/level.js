import { useState, useEffect } from "react";
import { Card } from "./card";

export function Level(props) {
  const waifusArr = [
    {
      name: "darkness",
      alt: "darkness",
      url: "/img/lvl1/darkness.jpeg",
    },
    { name: "nagatoro", alt: "nagatoro", url: "/img/lvl1/nagatoro.jpg" },
    { name: "power", alt: "power", url: "/img/lvl1/power.png" },
    { name: "nezuko", alt: "nezuko", url: "/img/lvl1/nezuko.jpg" },
    {
      name: "toga",
      alt: "toga",
      url: "/img/lvl2/toga.png",
    },
    {
      name: "misa",
      alt: "misa",
      url: "/img/lvl2/misa.jpeg",
    },
    {
      name: "mikasa",
      alt: "mikasa",
      url: "/img/lvl2/mikasa.jpg",
    },
    {
      name: "aqua",
      alt: "aqua",
      url: "/img/lvl2/aqua.png",
    },
    {
      name: "hinata",
      alt: "hinata",
      url: "/img/lvl2/hinata.jpg",
    },
    {
      name: "robert",
      alt: "robert",
      url: "/img/lvl2/robert.jpg",
    },
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
            return <Card waifu={waifu} shuffle={x} />;
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
