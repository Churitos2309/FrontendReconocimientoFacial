import React from "react";
import "./StylePrimero.css"

const VentanaEmergente = ({isOpen, onClose, children}) => {
  return (
    <div className="Modal-container" style={ {display: isOpen ? "grid" : "none"}}>
      <div className="Modal-body">
        <button className="buton" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
};

export default VentanaEmergente;
