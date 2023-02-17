import React from "react";
import "../style/home.css";
import "../style/util.css";
function CardAnime(props) {



    return (
        <div className="card-anime extra-padding flex flex-direction-column flex-justify-center flex-align-center">

            <div className="card-anime-img">
                <img src={props.img} alt={props.title}></img>
            </div>
            <div className="card-anime-title"><p >{props.title}</p></div>

            <div>
                <p>{props.type}</p>
                <p></p>
            </div>
        </div>
    )
}

export default CardAnime;