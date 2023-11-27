import React from "react";
import ObjetosMuestra from "../Components/Card_Objetos_muestra/Objetos_Muestra";

const MuestraObjetosRegistrados = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-7 items-center border-2 border-black p-4 rounded-md">
        <div className="  ">
          <h1>Registro de Objetos</h1>
        </div>
        <div>
          <ObjetosMuestra
            TipoObjeto={"Portatil"}
            Descripcion={"HP-JK3"}
            Imagen={
              "https://th.bing.com/th/id/R.443ca5455adb8bed41ab9a6cd99267a0?rik=CBcHakFeIfs1wQ&riu=http%3a%2f%2fcdn.mos.cms.futurecdn.net%2fZsdhcrMUSMC9c5n7goFSsX.jpg&ehk=42P8CZ3S0w4J3XUKXW483etKOWp8rnB%2fV7bobx6FK04%3d&risl=&pid=ImgRaw&r=0"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MuestraObjetosRegistrados;
