import logo from "./logo.svg";
import "./App.scss";
import { Card } from "./components/card";
import { useState } from "react";
import { Level } from "./components/level";

export function Game() {
  return (
    <div className="App">
      <Level />
    </div>
  );
}
