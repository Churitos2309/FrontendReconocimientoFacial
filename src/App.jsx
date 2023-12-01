import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import Roles from "./pages/Roles";


import RolGuardiaSeguridad from "./pages/Home/Rol_Guardia_Seguridad/Rol_Guardia_Seguridad";
import RolAdministrativo from "./pages/Home/Rol_Administrativo/RolAdministrativo";
import RolInstructor from "./pages/Home/Rol_Instructor/RolInstructor";
import RolAprendiz from "./pages/Home/Rol_Aprendiz/RolAprendiz";

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
          {/* Rutas Principales */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          {/* <Route path="/Roles" element={<Roles />} /> */}

          {/* Rutas Roles */}
          <Route path="/Aprendiz" element={<RolAprendiz />} />
          <Route path="/Instructor" element={<RolInstructor />} />
          <Route path="/Administrativo" element={<RolAdministrativo  />} />
          <Route path="/Vigilante" element={<RolGuardiaSeguridad />} />

        </Routes>
      </div>
    </div>
  );
};


export default App;