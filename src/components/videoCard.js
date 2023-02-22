import React from "react";

export default function VideoCard(props) {
    return (<div className="video-card-container flex flex-direction-column">
        <div className="video-card-img"><img alt={`${props.title}`} src={props.img}></img></div>
        <div className="video-card-info flex flex-direction-column flex-between" >
            <p className="video-card-title">{props.title}</p>
            <p className="video-card-type">{props.type}</p>

        </div>
    </div>);
}