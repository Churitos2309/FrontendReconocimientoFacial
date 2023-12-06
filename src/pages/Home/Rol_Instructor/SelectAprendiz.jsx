import React from "react";
import CardAprendiz from "../../../Components/Card_Aprendiz/CardAprendiz";
import TablaAprendiz from "./SelectFicha/TablaAprendiz";

const SelectAprendiz = () => {
  return (
    <div>
      <div className="flex "> 
        <div>
          <CardAprendiz></CardAprendiz>
        </div>
        <div>
          <TablaAprendiz></TablaAprendiz>
        </div>
      </div>
    </div>
  );
};

export default SelectAprendiz;
