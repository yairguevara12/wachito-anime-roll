import React from "react";

export default function ChangePassword() {

    const [formData, setFormData] = React.useState(
        { newPassword: "", CurrentPassword: "", reNewPassword: "" }
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
        if (formData.newPassword !== "" && formData.CurrentPassword !== "" && formData.reNewPassword !== "") {
            setButtonColor((prev) => !prev);
        } else {
            setButtonColor((prev) => prev);
        }

    }, [formData]);



    const style = () => {
        return buttonColor ? "btnEmail" : "btnEmail-disabled";
    }

    return (
        <div className="preferenceContainer flex flex-direction-column ">
            <div className="preferenceHeader text-center">
                <h3>Cambiar Contraseña</h3>
                <p>Crea una unica contraseña para mantener la seguridad de tu cuenta</p>
            </div>
            <div className="preferenceBody">
                
             
                <div className="flex flex-direction-column">
                    <form >
                        <input type="password" autoComplete="new-password" className="password-input" placeholder="Contraseña actual" name="CurrentPassword"
                            value={formData.CurrentPassword} onChange={handIeChange}
                        />

                        <input type="password" autoComplete="new-password" className="password-input" placeholder="Nueva contraseña" name="newPassword"
                            value={formData.newPassword} onChange={handIeChange}
                        />
                        <input type="password" autoComplete="new-password" className="password-input" placeholder="Confirmar contraseña" name="reNewPassword"
                            value={formData.reNewPassword} onChange={handIeChange}
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