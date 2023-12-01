import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./pages/Home";
import MuestraObjetosRegistrados from "./pages/Home/Rol_Guardia_Seguridad/Pages_Guardia/Muestra_Objetos/MuestraObjetosRegistrados";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MuestraCardAprendiz from './pages/MuestraCardAprendiz';     /*IMPORTO Page MuestraCardAprendiz.jsx*/


const App = () => {
  const navigate = useNavigate();

  const mostrarSidebarHeader = () => {
    const rutasOcultas = ['/login','/register'];
    return !rutasOcultas.includes(window.location.pathname);
  }
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {mostrarSidebarHeader () && <Header />}
      <div className="flex min-h-screen">
        {mostrarSidebarHeader () && <Sidebar />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/objetosregistrados" element={<MuestraObjetosRegistrados />} />
          <Route path="CardAprendiz" element={<MuestraCardAprendiz/>} />       {/* DOY RUTA Page MuestraCardAprendiz */}

          
        </Routes>
      </div>
    </div>
  );
};

export default App;