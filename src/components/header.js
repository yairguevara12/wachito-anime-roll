import "../style/header.css";
import "../style/util.css";
import React from "react";
import Menu from "../img/menu.png"
import Logo from "../img/logo.png"
import Lupa from "../img/lupa.png"
import User from "../img/user.png"
import { Link} from 'react-router-dom';
export default function Header(props) {


    function flipBackgroundColor() {
        if (props.isShownMenu) {
            return { backgroundColor: "rgb(20, 21, 25)" };
        }
    }

    return (
        <div className="bar_menu  basic-background-color flex flex-between">
            <div className="flex flex-align-center flex-gap">
                <div onClick={() => props.handleSetIsShownMenu()} className="menu-icon-body flex" style={flipBackgroundColor()}>
                    <img className="menu-icon " alt="menu" src={Menu}></img>
                </div>
                <Link to={'/home'}>
                <div className="menu-icon-body flex">
                    <img className="logo-icon" alt="logo" src={Logo}></img>
                </div>
                </Link>
            </div>
            <div className="flex flex-align-center flex-gap">
                <Link to={'/search'} > <div className="menu-icon-body flex">
                    <img className="lupa-icon " alt="lupa" src={Lupa}></img>
                </div>
                </Link>
                <div className="menu-icon-body flex">
                    <img className="user-icon " alt="lupa" src={User}></img>
                </div>

            </div>
        </div>
    )
}   