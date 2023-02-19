import React from "react";
import "../style/home.css";
import "../style/util.css";

import Header from "../components/header.js";
import Menu from "../components/menu.js";
import HomeBody from "../components/homeBody.js";
export default function Home() {

    const [isShownMenu, setIsShownMenu] = React.useState(false);
    const lockWindow = React.useRef(null);
    function handleSetIsShownMenu() {
        setIsShownMenu(prev => !prev);

    }

    React.useEffect(() => {
        console.log(isShownMenu);

        isShownMenu ? lockWindow.current.parentElement.parentElement.style.overflow = 'hidden'
            : lockWindow.current.parentElement.parentElement.style.overflow = 'auto';



    }, [isShownMenu])
    return (
        <div ref={lockWindow} className="home">

            <Header isShownMenu={isShownMenu} handleSetIsShownMenu={handleSetIsShownMenu} />

            {isShownMenu && <Menu />}

            <HomeBody></HomeBody>

        </div>
    );
}