import React from "react";
import "../style/util.css";
import "../style/header.css";
import arrows from "../img/up-and-down-arrows.png"
import { Link } from 'react-router-dom';
export default function Menu(props) {
    const [isShownGenners, setIsShownGenners] = React.useState(false);
    function swicthGenner() {
        setIsShownGenners(prev => !prev);
    }




    return (
        <div className="menu-body fixed-top">

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

                        <Link to={"/videos/genero/Action"}><li  onClick={()=>props.handleSetIsShownMenu()}>Action</li></Link>
                        <Link to={"/videos/genero/Adventure"}><li onClick={()=>props.handleSetIsShownMenu()}>Adventure</li></Link>
                        <Link to={"/videos/genero/Comedy"}><li onClick={()=>props.handleSetIsShownMenu()}>Comedy</li></Link>
                        <Link to={"/videos/genero/Drama"}><li onClick={()=>props.handleSetIsShownMenu()}>Drama</li></Link>
                        <Link to={"/videos/genero/Ecchi"}><li onClick={()=>props.handleSetIsShownMenu()}>Ecchi</li></Link>
                        <Link to={"/videos/genero/Fantasy"}><li onClick={()=>props.handleSetIsShownMenu()}>Fantasy</li></Link>
                        <Link to={"/videos/genero/Horror"}><li onClick={()=>props.handleSetIsShownMenu()}>Horror</li></Link>
                        <Link to={"/videos/genero/Mahou Shoujo"}><li >Mahou Shoujo</li></Link>
                        <Link to={"/videos/genero/Mecha"}><li onClick={()=>props.handleSetIsShownMenu()}>Mecha</li></Link>
                        <Link to={"/videos/genero/Music"}><li onClick={()=>props.handleSetIsShownMenu()}>Music</li></Link>
                        <Link to={"/videos/genero/Mystery"}><li onClick={()=>props.handleSetIsShownMenu()}>Mystery</li></Link>
                        <Link to={"/videos/genero/Psychological"}><li onClick={()=>props.handleSetIsShownMenu()}>Psychological</li></Link>
                        <Link to={"/videos/genero/Romance"}><li  onClick={()=>props.handleSetIsShownMenu()} >Romance</li></Link>
                        <Link to={"/videos/genero/Sci-Fi"}><li   onClick={()=>props.handleSetIsShownMenu()} >Sci-Fi</li></Link>
                        <Link to={"/videos/genero/Slice of Life"}><li>Slice of Life</li></Link>
                        <Link to={"/videos/genero/Sports"}><li    onClick={()=>props.handleSetIsShownMenu()}>Sports</li></Link>
                        <Link to={"/videos/genero/Supernatura"}><li   onClick={()=>props.handleSetIsShownMenu()} >Supernatural</li></Link>
                        <Link to={"/videos/genero/Thriller"}><li    onClick={()=>props.handleSetIsShownMenu()}>Thriller</li></Link>
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
