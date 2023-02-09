import logo from "./logo.svg";
import "./App.scss";
import { Card } from "./components/card";
import { useState } from "react";
import { Level } from "./components/level";

export function Game() {
  const levelsArr = [
    {
      name: 1,
      waifuArr: [
        {
          name: "darkness",
          alt: "darkness",
          url: "/img/lvl1/darkness.jpeg",
        },
        { name: "nagatoro", alt: "nagatoro", url: "/img/lvl1/nagatoro.jpg" },
        { name: "power", alt: "power", url: "/img/lvl1/power.png" },
        { name: "nezuko", alt: "nezuko", url: "/img/lvl1/nezuko.jpg" },
      ],
      background: "",
    },
    {
      name: 2,
      waifuArr: [
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
      ],
      background: "",
    },
    { name: 3, waifuArr: [], background: "" },
  ];
  return (
    <div className="App">
      <div className="header">Welcome to the waifus memory game</div>
      <Level levelContent={levelsArr[0]} />
    </div>
  );
}
