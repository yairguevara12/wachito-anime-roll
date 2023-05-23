import React from "react";
import "../style/util.css";
import "../style/login.css";
import "../style/util.css"
import registerCharacter from "../img/register-character.png";
import secondImageCharacter from "../img/login-character_2.png";
import useAuth from "../util/useAuth";
/* import useToken from "../util/useToken"; */

export default function Register() {
    // create a login page
    /* const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState(""); */

    const [formData, setFormData] = React.useState(
        { email: "", password: "" }
    );


    const [error, setError] = React.useState(false);
    /*     const { handleLogin } = useAuth({
            userEmail: formData.email,
            userPassword: formData.password
        });
     */
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

    }




    return (
        <div className=" maiLogin flex flex-align-center flex-justify-center flex-direction-column">

            <div className=" loginContainer  flex flex-direction-column flex-align-center flex-justify-center">
                <div><h1 className="titleLogin">Crear Cuenta</h1></div>
                <img className="firstCharacterRegister" src={registerCharacter} alt="imagen de personaje" />
                <form onSubmit={handleSubmit} className="flex flex-direction-column mainForm flex-align-center flex-justify-center">
                    <input type="text" placeholder="Direccion de email" name="email" value={formData.email}
                        onChange={handIeChange} />
                    <input type="password" placeholder="Contraseña" name="password" value={formData.password}
                        onChange={handIeChange} />
                    {error && <p className="errorLogin">Hay un error en la contraseña o email</p>}
                    <div className="registerWarning"><p className="">Utiliza almenos 8 caracteres y almenos 1 numero</p></div>
                    <button type="submit" className="">Registrarse</button>
                </form>
                <div className="flex flex-justify-center flex-align-center normal-margin FormFooter">
                    <p>¿Ya tienes una cuenta?</p>
                    <a href="/login">Iniciar sesion</a>
                </div>
            </div>
        </div>
    )

}