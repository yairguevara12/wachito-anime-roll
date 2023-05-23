import React from "react";
import "../style/util.css";
import HomeBody from "../components/homeBody.js";
import GridLoader from "react-spinners/GridLoader";
import useToken from "../util/useToken";
export default function Home() {
    const override = {
        display: "block",
      /*   margin: "2em auto", */
        borderColor: "green",
        alignSelf: "center" 
    };
    const [showLoarder, setShowLoarder] = React.useState(true);
    const {validateTokenInStorage} = useToken();
    /* const [isShownMenu, setIsShownMenu] = React.useState(false);
   const lockWindow = React.useRef(null);
   function handleSetIsShownMenu() {
       setIsShownMenu(prev => !prev);

   }

   React.useEffect(() => {

       isShownMenu ? lockWindow.current.parentElement.parentElement.style.overflow = 'hidden'
           : lockWindow.current.parentElement.parentElement.style.overflow = 'auto';



   }, [isShownMenu]) */
    React.useEffect(() => {


        validateTokenInStorage();
        setTimeout(() => {
            setShowLoarder(false);
        }, 4000);
    }, []);


    const styleloading = function () {
        return showLoarder
            ? { height: "70vh" , alignItems: "center" , justifyContent: "center"}
            : {};
    };

    return (
        <div style={styleloading()} className="home flex flex-direction-column flex-justify-center adding-top-margin">

            {/*  <Header isShownMenu={isShownMenu} handleSetIsShownMenu={handleSetIsShownMenu} />

            {isShownMenu && <Menu />} */}
            {showLoarder && <GridLoader
                color={"#36d7b7"}
                loading={true}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}

             {<HomeBody loarderIsShown={showLoarder}></HomeBody>} 
      </div>
    );
}