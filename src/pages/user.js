import React from "react";
import userPicture from "../img/User-Picture.jpg"
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "../style/user.css";
import "../style/util.css";
import '../style/accountContent.css';
import useToken from "../util/useToken";
import bannerImage from "../img/banner-image.png"
import Preference from "../components/account-content/preference";
import EmailNotification from "../components/account-content/emailNotification";
import ChangeEmail from "../components/account-content/changeEmail";
import ChangePassword from "../components/account-content/changePassword";
import ActivateDevice from "../components/account-content/activateDevice";
export default function User() {
    const user = {
        name: "John",
        email: "john@example.com",
        bio: "John"
    };
    const { option } = useParams();
    const { validateTokenInStorage } = useToken();

    React.useEffect(() => {
       /*  validateTokenInStorage(); */
    }, []);

    function renderContent() {
       
            if (option === "preference") { return <Preference></Preference> }
            else if (option === "emailNotification") { return <EmailNotification></EmailNotification> }
            else if (option === "changeEmail") { return <ChangeEmail></ChangeEmail> }
            else if (option === "changePassword") { return <ChangePassword></ChangePassword> }
            else if (option === "activateDevice") { return <ActivateDevice></ActivateDevice> }
            else { return <Preference></Preference>}
        
    }
    return (
        <>
            <div className="user-container flex  flex-direction-column">
                <div className="userBannerContainer">
                    <img src={bannerImage} alt="banner" className="userBanner " />
                    <div className="userPictureContainer flex  gap flex-justify-center">
                        <img src={userPicture} alt="User profile " className="userPicture user-img" />
                        <div className="userName ">{user.name}</div>
                    </div>
                </div>
                <div className="userBodyContainer    ">

                    <div className="userNavigation flex justify-content-center">
                        <div className="configurationList">
                            <ul>
                                <li>General</li>

                                <Link to={"/user/preference"}><li>Preferencias</li></Link>
                                <Link to={"/user/emailNotification"}><li>Email notificaciones</li></Link>
                                <Link to={"/user/changeEmail"}><li>Cambiar email</li></Link>
                                <Link to={"/user/changePassword"}><li>Cambiar contraseña</li></Link>
                                <Link to={"/user/activateDevice"}><li>Activar dispositivo</li></Link>
                            </ul>


                        </div>
                        <div className="accountContent flex justify-content-center">
                            {renderContent()}



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}