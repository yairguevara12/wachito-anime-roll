import React from "react";

export default function EmailNotification() {
    return (
        <div className="preferenceContainer flex flex-direction-column ">
            <div className="preferenceHeader text-center">
                <h3>Email Notificaciones</h3>
                <p>Activa las notificaciones que quie   res recibir</p>
            </div>
            <div className="preferenceBody">
                <div className="flex marginButton-1 ">
                    <div className="toogleSwitchContainer">
                        <div className="toogleSwitch ">

                        </div>
                    </div>
                    <div>
                        <p className="toogleSwitchTittle">Todas las Notificaciones</p>
                        <p className="toogleSwitchDescription"></p>

                    </div>
                </div>

                <div className="flex marginButton-1">
                    <div className="toogleSwitchContainer">
                        <div className="toogleSwitch ">

                        </div>
                    </div>
                    <div>
                        <p className="toogleSwitchTittle">Notificaciones</p>
                        <p className="toogleSwitchDescription">Recibe las notificaciones de las ultimas noticias</p>
                    </div>
                </div>
                <div className="flex marginButton-1">
                    <div className="toogleSwitchContainer">
                        <div className="toogleSwitch ">

                        </div>
                    </div>
                    <div>
                        <p className="toogleSwitchTittle">Promociones</p>
                        <p className="toogleSwitchDescription">Recibe promociones</p>
                    </div>
                </div>
            </div>

        </div>

    );
}