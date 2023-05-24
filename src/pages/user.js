import React from "react";
import userPicture from "../img/User-Picture.jpg"
import "../style/user.css";
import "../style/util.css";
import '../style/accountContent.css';
import useToken from "../util/useToken";
import bannerImage from "../img/banner-image.png"
import Preference from "../components/account-content/preference";
export default function User() {
    const user = {
        name: "John",
        email: "john@example.com",
        bio: "John"
    };
    const { validateTokenInStorage } = useToken();

    React.useEffect(() => {
        validateTokenInStorage();
    }, []);

    return (
        <>
            <div className="user-container flex  flex-direction-column">
                <div className="userBannerContainer">
                    <img src={bannerImage} alt="banner" className="userBanner " />
                    <div className="userPictureContainer">
                        <img src={userPicture} alt="User profile " className="userPicture user-img" />
                        <div className="userName ">{user.name}</div>
                    </div>
                </div>
                <div className="userBodyContainer    ">

                    <div className="userNavigation flex justify-content-center">
                        <div className="configurationList">
                            <ul>
                                <li><a href="/">General</a></li>
                                <li><a href="/">Subscription Information</a></li>
                                <li><a href="/">Preferences</a></li>
                                <li><a href="/">Email notifications</a></li>
                                <li><a href="/">Change mail</a></li>
                                <li><a href="/">Change password</a></li>
                                <li><a href="/">Activate device</a></li>
                                <li><a href="/">Device Management</a></li>
                                <li><a href="/">Connected applications</a></li>
                                <li><a href="/">Purchases and Balance</a></li>
                                <li><a href="/">Order History</a></li>
                                <li><a href="/">Payment methods</a></li>
                            </ul>


                        </div>
                        <div className="accountContent flex justify-content-center">
                                <Preference></Preference>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}