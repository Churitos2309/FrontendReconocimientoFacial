import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import VentanaEmergente from "../Components/VentanaEmergente/VentanaEmergente";
import "./Style/Login.css";

function LoginPage() {
  const [mostrar, setMostrar] = useState(false);
  const [] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br mm ">
      <form className=" bg-white rounded-xl drop-shadow-lg space-y-5" action="">
        <h1 className="text-center text-3xl">Login</h1>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="email">
            Documento
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="email"
            placeholder="Numero Documento"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-light" htmlFor="password">
            Contraseña
          </label>
          <input
            className="w-96 px-3 py-2 rounded-md border border-slate-400"
            type="password"
            placeholder="Cotraseña"
            name="password"
            id="password"
          />
        </div>
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className="text-sm font-light" htmlFor="remember">
            Recordarme
          </label>
        </div>
      </form>
      <div className="optionsabajo">
        <div>
          <Link>
            <button
              onClick={() => setMostrar(true)}
              className="w-full px-10 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
              type="submit"
            >
              Ingresar
            </button>
            <VentanaEmergente
              isOpen={mostrar}
              onClose={() => setMostrar(false)}
            >
              <div className="contenedor">
                <h2>
                  <b>A que rol deseas dirigirte?</b>
                </h2>
                <ul className="Opciones">
                  <li>
                    <Link to="/Administrativo">Administrador</Link>
                  </li>
                  <li>
                    <Link to="/Vigilante">Vigilante</Link>
                  </li>
                  <li>
                    <Link to="/Aprendiz">Aprendiz</Link>
                  </li>
                  <li>
                    <Link to="/Instructor">Instructor</Link>
                  </li>
                </ul>
              </div>
            </VentanaEmergente>
          </Link>
        </div>

        <p className="text-right">
          <a
            className="text-blue-600 text-sm font-light hover:underline"
            href="https://www.kindacode.com"
          >
            ¿Olvido la Contraseña?
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
