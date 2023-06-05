import React from "react";

export default function ChangeEmail() {

    const [formData, setFormData] = React.useState(
        { newEmail: "", CurrentPassword: "" }
    );
    const [buttonColor, setButtonColor] = React.useState(false
    );

    function handIeChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }
    React.useEffect(() => {
        if (formData.newEmail !== "" && formData.CurrentPassword !== "") {
            setButtonColor((prev)=> !prev);
        } else {
            setButtonColor((prev)=> prev);
        }

    }, [formData]);



    const style = () => {
        return buttonColor ? "btnEmail" : "btnEmail-disabled";
    }

    return (
        <div className="preferenceContainer flex flex-direction-column ">
            <div className="preferenceHeader text-center">
                <h3>Change Email</h3>
                <p>Elige un email para iniciar sesion y recibir wachitoroll alertas</p>
            </div>
            <div className="preferenceBody">
                <p className="small-transparent">Actual Email</p>
                <div className="email-container">
                    <p>test@test.com</p>
                </div>
                <div className="flex flex-direction-column">
                    <form >
                        <input type="email" autoComplete="new-password" className="email-input" placeholder="Nuevo email" name="newEmail"
                            value={formData.newEmail} onChange={handIeChange} />
                        <input type="password" autoComplete="new-password" className="password-input" placeholder="Contraseña actual" name="CurrentPassword"
                            value={formData.CurrentPassword} onChange={handIeChange}
                        />
                        <div className="flex justify-content-center">
                            <button className={style()}>CAMBIAR EMAIL</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}