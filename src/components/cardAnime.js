import React from "react";
import "../style/home.css";
import "../style/util.css";
function CardAnime(props) {



    return (
        <div className="card-anime flex flex-direction-column">
            <img src={props.img} alt={props.title}></img>
            <p >{props.title}</p>
            <div>
                <p>{props.type}</p>
                <p></p>
            </div>
        </div>
    )
}

export default CardAnime;