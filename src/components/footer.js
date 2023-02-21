import React from "react";
import "../style/util.css";
import "../style/footer.css";

export default function Footer() {



    return (<div className="footer-container flex flex-direction-column ">

        <div className="footer-section flex normal-padding ">
            <div className="footer-section-title">
                <p>Navegación</p>
            </div>
            <div className="footer-section-list">
                <ul>
                    <li>Explorar lo más popular</li>

                    {/*  <li> Explorar los Simulcasts</li> */}
                    <li> Explorar Manga</li>
                    <li> Calendario de lanzamientos</li>
                    <li> Noticias</li>
                    <li> Juegos</li>


                </ul>
            </div>

            <div></div>
        </div>

        <div className="footer-section flex normal-padding ">
            <div className="footer-section-title">
                <p>Conecta con nosotros</p>
            </div>
            <div className="footer-section-list">
                <ul>
                    <li>Youtube</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Twitter</li>
                    <li>TikTok</li>
                </ul>
            </div>
        </div>
        <div className="footer-section flex normal-padding ">
            <div className="footer-section-title"><p>WachitoRoll</p></div>
            <div className="footer-section-list">
                <ul>
                    <li> Acerca </li>
                    <li> Ayuda/FAQ</li>
                    <li> Términos de Uso</li>
                    <li> Política de Privacidad</li>
                    <li> Herramienta de aceptación
                        de cookies</li>
                    <li> Contacto de prensa</li>
                    <li>  Hazte con nuestras</li>
                    <li>  aplicaciones</li>
                    <li> Canjear Tarjeta Regalo</li>
                    <li> Empleo</li>



                </ul>
            </div>

        </div>

        <div className="footer-section flex normal-padding ">
            <div className="footer-section-title-final">
                <p>©Yair Guevara </p>
                <p>Educational Project</p>
            </div>
            <div className="footer-section-list">
                <ul><li>    Espanglish</li></ul>

            </div>
        </div>
    </div>

    )
}