import React, {useState} from "react";
import Ape from "./headshots/Ape.jpg"
import Armored from "./headshots/Armored.jpg"
import Attack from "./headshots/Attack.jpg"
import Cart from "./headshots/Cart.jpg"
import Colossal from "./headshots/Colossal.jpg"
import Female from "./headshots/Female.jpg"
import Founding from "./headshots/Founding.jpg"
import Jaw from "./headshots/Jaw.jpg"
import Warhammer from "./headshots/Warhammer.jpg"
import Card from "./Card";

const GameBoard = ({setScore, setHighScore, score, highScore}) =>{
    const [cards, setCards] = useState([
        {img : Attack, clicked : false, name: "Attack", key : 3},
        {img : Armored, clicked : false, name: "Armored", key : 2},
        {img : Colossal, clicked : false, name: "Colossal", key : 5},
        {img : Female, clicked : false, name : "Female", key : 6},
        {img : Founding, clicked : false, name : "Founding", key : 7},
        {img : Warhammer, clicked : false, name : "Warhammer", key : 9},
        {img : Ape, clicked : false, name: "Ape", key : 1},
        {img : Cart, clicked : false, name: "Cart" ,  key : 4},
        {img : Jaw, clicked : false, name : "Jaw", key : 8},
    ]);

    
    const handler = (e) => {
        let newCards = cards;
        if(e.clicked === false){
            newCards.forEach(card => {
                if(card.name === e.name){
                    card.clicked= true;
                    return;
                }
            })
            setCards(newCards);
            setScore(score + 1);
            setHighScore(score + 1 > highScore ? score + 1 : highScore);
            
            differentSequence()
        }
        else{
            setScore(0);
            setCards(cards.forEach(card => {
                return{...card, clicked : false}
            }))
        }
    }

    const differentSequence = () => {
        let array = cards;
        let currentIndex = array.length
        let randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        setCards(array);
    }

    return(
        <div className="GameBoard">
            {cards.map(card => {
                return(
                    <Card img={card.img} 
                    clicked={card.clicked} 
                    name={card.name} 
                    key={card.key}     
                    setCards={setCards} 
                    handler={handler}/>
                )
            })}
        </div>
    )
}

export default GameBoard;

