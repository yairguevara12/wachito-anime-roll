import React from "react";
import "../style/util.css";
import "../style/header.css";
import arrows from "../img/up-and-down-arrows.png"
import { Link } from 'react-router-dom';
export default function Menu() {
    const [isShownGenners, setIsShownGenners] = React.useState(false);
    function swicthGenner() {
        setIsShownGenners(prev => !prev);
    }




    return (
        <div className="menu-body ">

            <ul>
                <li className="menu-explorar">EXPLORAR</li>
                <Link to={"/videos/popular"}><li>Popular</li></Link>
                <li>Novedades</li>
                <li>Alfabético</li>
                <li onClick={swicthGenner} className="flex flex-between">Géneros
                    <img alt="arrow-up-down" className="up-down-arrow" src={arrows}></img>
                </li>

            </ul>
            {isShownGenners &&
                <div className="menu-genners">
                    <ul>

                        <Link to={"/videos/genero/Action"}><li>Action</li></Link>
                        <Link to={"/videos/genero/Adventure"}><li>Adventure</li></Link>
                        <Link to={"/videos/genero/Comedy"}><li>Comedy</li></Link>
                        <Link to={"/videos/genero/Drama"}><li>Drama</li></Link>
                        <Link to={"/videos/genero/Ecchi"}><li>Ecchi</li></Link>
                        <Link to={"/videos/genero/Fantasy"}><li>Fantasy</li></Link>
                        <Link to={"/videos/genero/Horror"}><li>Horror</li></Link>
                        <Link to={"/videos/genero/Mahou Shoujo"}><li>Mahou Shoujo</li></Link>
                        <Link to={"/videos/genero/Mecha"}><li>Mecha</li></Link>
                        <Link to={"/videos/genero/Music"}><li>Music</li></Link>
                        <Link to={"/videos/genero/Mystery"}><li>Mystery</li></Link>
                        <Link to={"/videos/genero/Psychological"}><li>Psychological</li></Link>
                        <Link to={"/videos/genero/Romance"}><li>Romance</li></Link>
                        <Link to={"/videos/genero/Sci-Fi"}><li>Sci-Fi</li></Link>
                        <Link to={"/videos/genero/Slice of Life"}><li>Slice of Life</li></Link>
                        <Link to={"/videos/genero/Sports"}><li>Sports</li></Link>
                        <Link to={"/videos/genero/Supernatura"}><li>Supernatural</li></Link>
                        <Link to={"/videos/genero/Thriller"}><li>Thriller</li></Link>
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
