import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const games = [
  { name: "Darkest Dungeon" },
  { name: "Lobotomy Corporation" },
  { name: "Slay the Spire" },
  { name: "Dishonored 2" },
  { name: "Untitled Goose Game" },
  { name: "Fm 2021", meme: true },
];

const memeRatio = 0.1;
const nGames = games.length;
const nMemeGame = 1;
const restRatio = (1 - nMemeGame * memeRatio) / (nGames - nMemeGame);

let accum = 0.0;
const accumArray = games.map((game) => {
  accum += game.meme ? memeRatio : restRatio;
  return accum;
});
accumArray[4] = 0.9;
accumArray[accumArray.length - 1] = 1;

function App() {
  const [game, setGame] = useState("");
  const getGame = () => {
    const rand = Math.random();
    console.log(accumArray, rand);
    const gameIdx = accumArray.findIndex((ratio) => rand < ratio);
    setGame(games[gameIdx].name);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Daniel Roulette</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getGame}>Rip my life</button>

        <div style={{ opacity: game ? 1 : 0 }}>Daniel will buy me {game}.</div>
      </header>
    </div>
  );
}

export default App;
