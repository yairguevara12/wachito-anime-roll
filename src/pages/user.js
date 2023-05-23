import React from "react";
import userPicture from "../img/User-Picture.jpg"
import "../style/user.css";
import "../style/util.css";
import useToken from "../util/useToken";
export default function User() {
    const user = {
        name: "John",
        email: "john@example.com" , 
        bio: "John"
    };
    const {validateTokenInStorage} = useToken();

    React.useEffect(() => {
        validateTokenInStorage();
    },[]);

    return (
        <>

            <div className="user-display d-flex flex-align-center flex-justify-center flex-direction-column">
                <img className="user-img " src={userPicture} alt="Profile" />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.bio}</p>
            </div>
        </>
    )
}