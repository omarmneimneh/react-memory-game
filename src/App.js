import logo from "./logo.svg";
import React, { useState } from "react";
import ScoreBoard from "./Components/ScoreBoard";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <ScoreBoard score={score} highScore={highScore} />

    </div>
  );
}

export default App;
