// Importanción de dependencias:
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Importación de componentes:
import Header from "./components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

// Importación de páginas:
import Inicio from "./pages/Inicio";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MuestraCardAprendiz from "./pages/MuestraCardAprendiz";
import MuestraObjetosRegistrados from "./pages/Home/Rol_Guardia_Seguridad/Pages_Guardia/Muestra_Objetos/MuestraObjetosRegistrados";
import RegistroExterno from "./pages/GuardiaDeSeguridad/RegistroExterno";
import Historial from "./pages/GuardiaDeSeguridad/Historial";
import ReportesAdministrador from "./pages/Administrador/ReportesAdministrador";
import ReportesInstructor from "./pages/Instructor/ReportesInstructor";
import RegistroObjetos from "./pages/Aprendiz/RegistroObjetos";

const App = () => {
  const navigate = useNavigate();

  const mostrarSidebarHeader = () => {
    const rutasOcultas = ['/login', '/register'];
    return !rutasOcultas.includes(window.location.pathname);
  }
  return (
    <div className="flex flex-col h-screen overflow-auto">
      {mostrarSidebarHeader() && <Header />}
      <div className="flex min-h-screen">
        {mostrarSidebarHeader() && <Sidebar />}

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/muestraCardAprendiz" element={<MuestraCardAprendiz />} />
          <Route path="/objetosregistrados" element={<MuestraObjetosRegistrados />} />
          <Route path="/registroExterno" element={<RegistroExterno />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/reportesAdministrador" element={<ReportesAdministrador />} />
          <Route path="/reportesInstructor" element={<ReportesInstructor />} />
          <Route path="/RegistroObjetos" element={<RegistroObjetos />} />

        </Routes>
      </div>
    </div>
  );
};

export default App;