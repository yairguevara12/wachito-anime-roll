import React from "react";

export default function Preference() {

    const customDropdown = React.useRef(null);

    function toogleDropdown() {
        customDropdown.current.classList.toggle('open');
    }

    return (
        <div className="preferenceContainer flex flex-direction-column ">
            <div className="preferenceHeader text-center">
                <h3>Preferencias</h3>
                <p>Configura tus preferencias</p>
            </div>
            <div className="preferenceBody">
                <p className="bold-1-3" >Idioma</p>
                <p className="small-transparent">Mostrar Idioma</p>
                <div className="custom-dropdown" ref={customDropdown}>
                    <div className="dropdown-button" onClick={toogleDropdown}>Español</div>
                    <div className="dropdown-content">
                        <div className="option">English</div>
                        <div className="option">Portuguese</div>
                        <div className="option">French</div>
                    </div>
                </div>


                <p className="bold-1-3" >Contenido</p>
                <div>
                    <div className="toogleSwitch flex">
                       
                    </div>
                    <div><p>Contenido para Adultos</p>
                         <p>Al activar esta opción estás confirmando que
                            tienes 18 años o más.</p>
                    </div>
                </div>

            </div>

        </div>

    );
}