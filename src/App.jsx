import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./pages/Home";
import MuestraObjetosRegistrados from "./pages/Home/Rol_Guardia_Seguridad/Pages_Guardia/Muestra_Objetos/MuestraObjetosRegistrados";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        {/* <div className='flex-grow flex flex-col overflow-hidden'>
          <Home />
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/objetosregistrados" element={<MuestraObjetosRegistrados />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;