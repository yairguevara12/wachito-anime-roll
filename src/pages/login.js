import React from "react";
import "../style/util.css";
import "../style/login.css";
import "../style/util.css"
import firstImageCharacter from "../img/login-character.png";
import secondImageCharacter from "../img/login-character_2.png";
import useAuth from "../util/useAuth";
/* import useToken from "../util/useToken"; */

export default function Login() {
    // create a login page
    /* const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState(""); */

    const [formData, setFormData] = React.useState(
        { email: "", password: "" }
    );


    const [error, setError] = React.useState(false);
    const { handleLogin } = useAuth({
        userEmail: formData.email,
        userPassword: formData.password
    });


    function handIeChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email === "" || formData.password === "") {
            setError(true);
            return;
        }
        console.log(formData);
        const result = await handleLogin();
        if (!result) {
            setError(true);
        }


    }




    return (
        <div className=" maiLogin flex flex-align-center flex-justify-center flex-direction-column">

            <div className=" loginContainer  flex flex-direction-column flex-align-center flex-justify-center">
                <div><h1 className="titleLogin">Ingresar</h1></div>
                <img className="firstCharacterLogin" src={firstImageCharacter} alt="imagen de personaje" />
                <img className="secondCharacterLogin" src={secondImageCharacter} alt="imagen de personaje" />
                <form onSubmit={handleSubmit} className="flex flex-direction-column mainForm flex-align-center flex-justify-center">
                    <input type="text" placeholder="Direccion de email" name="email" value={formData.email}
                        onChange={handIeChange} />
                    <input type="password" placeholder="Contraseña" name="password" value={formData.password}
                        onChange={handIeChange} />
                    {error && <p className="errorLogin">Hay un error en la contraseña o email</p>}
                    <button type="submit" className="">Ingresar</button>
                </form>
                <div className="flex flex-justify-center flex-align-center normal-margin FormFooter">
                    <p>¿No tienes cuenta?</p>
                    <a href="/register">Crea una cuenta</a>
                </div>
            </div>
        </div>
    )

}