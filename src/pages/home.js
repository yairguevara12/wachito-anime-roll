import React from "react";
import "../style/home.css" ;
import "../style/util.css" ;

import Header from "../components/header.js";
import Menu from "../components/menu.js";
import HomeBody from "../components/homeBody.js";
export default function Home(){

    const [isShownMenu, setIsShownMenu] = React.useState(false);

    function handleSetIsShownMenu(){
        setIsShownMenu(prev => !prev);
    }

    return( 
        <div className="home">
           
        <Header isShownMenu={isShownMenu} handleSetIsShownMenu={handleSetIsShownMenu} />

        {isShownMenu && <Menu /> }

        <HomeBody></HomeBody>

        </div>
    );
}