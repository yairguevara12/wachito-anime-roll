import React from "react";
import "../style/search.css";
import "../style/util.css";
export default function ResultCard(props){







    return(<div className="result-card-container flex normal-margin">
        <div className="result-card-img"><img alt={`${props.title}` }  src={props.img}></img></div>
        <div className=" flex result-card-info flex-direction-column normal-margin" >
            <p>{props.title}</p>
            <p className="result-episodes">{props.episodes + " Episodes" }</p>
            <p className="result-type">{props.type}</p>

        </div>
    </div>)
}