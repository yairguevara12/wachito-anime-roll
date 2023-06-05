import React from "react";

export default function ActivateDevice() {

    const [formData, setFormData] = React.useState(
        { deviceCode: "" }
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
        if (formData.deviceCode !== "" ) {
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
                <h3>Activa tus Dispositivos</h3>
                <p>Sigue las intrucciones para obtener tu codigo de activacion</p>
            </div>
            <div className="preferenceBody">
            
             
                <div className="flex flex-direction-column">
                    <form >
                        <input type="text" autoComplete="new-password" className="password-input" placeholder="Codigo del dispositivo" name="deviceCode"
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