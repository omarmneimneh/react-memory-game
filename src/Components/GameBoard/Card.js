import React, {useState} from "react";

const Card = (props) => {
    return(
        <div className="card" >
            <img src={props.img} alt={props.name} onClick={() => {props.handler(props)}}/>
            <p>{props.name}</p>
        </div>
    )
    
}

export default Card;