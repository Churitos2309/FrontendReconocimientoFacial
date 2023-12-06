import React from "react";
import "./NavHome.css";
import imagen2 from "../../pages/Img/Logo Reconocimiento Facial - Negro.png"
import { Link } from "react-router-dom";

const NavHome = () => {
  return (
    <div>
      <nav>
        <div class="izquierda">
          <img
            class="logo"
            src={imagen2}
            alt=""
          />
          <ul class="izq">
            <li>
              <a class="LL" href="">
                Servicios
              </a>
            </li>
            <li>
              <a class="LL" href="">
                Contactanos
              </a>
            </li>
            <li>
              <a class="LL" href="">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>
        <div class="derecha">
          <button class="Boton">
            <Link to="/login">Inicia sesion</Link>
          </button>
          <button class="Boton">
            <Link to="/Register">Registrate</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavHome;
