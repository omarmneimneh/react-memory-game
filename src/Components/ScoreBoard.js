import React from "react";

const ScoreBoard = ({ score, highScore }) =>{
    
    return(
        <div>
            <p>Score: {score}</p>
            <p>Highscore: {highScore}</p>
        </div>
    )
}

export default ScoreBoard