import React from "react";

function CardAnime(props){
    
    
    
    return(
        <div>
            <img src={props.img} alt={props.title}></img>
            <p >{props.title}</p>
            <div>
                <p>{props.type}</p>
                <p></p>
            </div>
        </div>
    )
}

export default CardAnime ;