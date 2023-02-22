import React from "react";
import "../style/util.css";
import "../style/header.css";
import arrows from "../img/up-and-down-arrows.png"
import {Link} from 'react-router-dom';
export default function Menu() {
    const [isShownGenners, setIsShownGenners] = React.useState(false);
    function swicthGenner() {
        setIsShownGenners(prev => !prev);
    }

   
  

    return (
        <div  className="menu-body ">

            <ul>
                <li className="menu-explorar">EXPLORAR</li>
                <Link to={"/videos/popular"}><li>Popular</li></Link>
                <li>Novedades</li>
                <li>Alfabético</li>
                <li onClick={swicthGenner} className="flex flex-between">Géneros
                    <img alt="arrow-up-down" className="up-down-arrow"  src={arrows}></img>
                </li>

            </ul>
            {isShownGenners &&
                <div className="menu-genners">
                    <ul>

                        <li>Acción</li>
                        <li>Aventura</li>
                        <li>Comedia</li>
                        <li>Drama</li>
                        <li>Fantasia</li>
                        <li>Musical</li>
                        <li>Romance</li>
                        <li>Ciencia Ficción</li>
                        <li>Seinen</li>
                        <li>Shoujo</li>
                        <li>Shounen</li>
                        <li>Recuentos de la Vida</li>
                        <li>Deportes</li>
                        <li>Sobrenatural</li>
                        <li>Thriller</li>



                    </ul>
                </div>
            }

            <ul className="menu-manga">
                <li >Manga</li>
                <li>Juegos</li>
                <li>Noticias</li>
            </ul>
        </div>
    )
}
