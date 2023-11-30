import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

const RolGuardiaSeguridad = () => {
  return (
    <div>
        
      <div>
        <Routes>
          <Route path="/Home_Guardia" element={<Home />} />
          <Route path="/Reconocimiento_Guardia" element={<LoginForm />} />
          <Route path="/Registro_Guardia" element={<RegistroForm />} />
          <Route path="/objetosregistrados" element={<MuestraObjetosRegistrados />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default RolGuardiaSeguridad;
