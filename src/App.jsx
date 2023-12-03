// Importanción de dependencias:
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Importación de componentes:
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar"

// Importación de páginas:
import Home from "./pages/Home";
import MuestraObjetosRegistrados from "./pages/Home/Rol_Guardia_Seguridad/Pages_Guardia/Muestra_Objetos/MuestraObjetosRegistrados";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Historial from "./pages/GuardiaDeSeguridad/Historial";
import ReportesAdministrador from "./pages/Administrador/ReportesAdministrador";
import ReportesInstructor from "./pages/Instructor/ReportesInstructor";
import RolInstructor from "./pages/Home/Rol_Instructor/RolInstructor"
import SelectFicha from "./pages/Home/Rol_Instructor/SelectFicha/SelectFicha";


const App = () => {
  const navigate = useNavigate();

  const mostrarSidebarHeader = () => {
    const rutasOcultas = ['/login', '/register'];
    return !rutasOcultas.includes(window.location.pathname);
  }
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {mostrarSidebarHeader() && <Header />}
      <div className="flex min-h-screen">
        {mostrarSidebarHeader() && <Sidebar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/objetosregistrados" element={<MuestraObjetosRegistrados />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/RolInstructor" element={<RolInstructor/>} />
          <Route path="/reportesAdministrador" element={<ReportesAdministrador />} />
          <Route path="/reportesInstructor" element={<ReportesInstructor />} />
          <Route path="/SelectFicha" element={<SelectFicha/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;