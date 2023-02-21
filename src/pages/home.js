import React from "react";

import HomeBody from "../components/homeBody.js";
export default function Home() {

     /* const [isShownMenu, setIsShownMenu] = React.useState(false);
    const lockWindow = React.useRef(null);
    function handleSetIsShownMenu() {
        setIsShownMenu(prev => !prev);

    }

    React.useEffect(() => {

        isShownMenu ? lockWindow.current.parentElement.parentElement.style.overflow = 'hidden'
            : lockWindow.current.parentElement.parentElement.style.overflow = 'auto';



    }, [isShownMenu]) */
    return (
        <div  className="home">

           {/*  <Header isShownMenu={isShownMenu} handleSetIsShownMenu={handleSetIsShownMenu} />

            {isShownMenu && <Menu />} */}

            <HomeBody></HomeBody>

        </div>
    ); 
}