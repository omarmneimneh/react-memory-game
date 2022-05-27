import logo from "./logo.svg";
import React, { useState } from "react";
import ScoreBoard from "./Components/ScoreBoard";
import GameBoard from "./Components/GameBoard/GameBoard";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <ScoreBoard score={score} highScore={highScore} className="scoreboard"/>
      <GameBoard setScore={setScore} setHighScore={setHighScore} score={score} highScore={highScore} />
    </div>
  );
}

export default App;
