import React from 'react';
import "./footer.css"
import imagen1 from "../../pages/Img/Logo Reconocimiento Facial - Blanco.png"
import imagen2 from "../../pages/Img/logoVerdeSENA.png"


const Footer = () => {
    return (
        <footer>
        <div class="arriba">
            <div class="primer">
                <div class="logos">
                    <img class="Logo" src={imagen1} alt=""/>
                    <img class="Logo" src={imagen2} alt=""/>
                </div>
                <p>Todos los derechos reservados para "MARCA" </p>
            </div>

            <div class="second">
            <h3 class="tituls"><b>Contactenos</b></h3>
            <div class="abajito">
            <a href=""><p class="options">Escribanos</p></a>
            <a href=""><p class="options">reconocimientofacial@hotmail.com</p></a>  
            </div>
            
            </div>

            <div class="three">
                <h3 class="tituls"><b>Siganos</b></h3>
                <div class="abajito">
                <a href=""><p class="options">Facebook</p></a>
                <a href=""><p class="options">Instagram</p></a> 
                </div>

            </div>
        </div>

        <div class="abajo">
            <ul class="ff">
                <li><a class="optionse" href="">Politica y privacidad</a></li>
                <li><a class="optionse" href="">Términos de servicio</a></li>
                <li><a class="optionse" href="">Mapa del sitio</a></li>
                <li><a class="optionse" href="">Politica de cookies</a></li>
                <li><a class="optionse" href="">Preferencias de cookies</a></li>
                <li><a class="optionse" href="">Politica de divulgacion de vulnerabilidades</a></li>
            </ul>
        </div>
    </footer>
    );
}

export default Footer;
