import React from "react";
import FichasIntructor from "./FichasInstructor/FichasIntructor";
import NameProgram from "./FichasInstructor/NameProgram";
import "./FichasInstructor/FichasIntructor";



const RolInstructor = () => {
  return (
    <>
      <div className="rol_ints">
        <NameProgram></NameProgram>
        <div className="rol_ints2 min-[320px]:mt-5 min-[768px]:mt-20">
          <h1 className="textof min-[320px]:text-3xl min-[320px]:ml-14 min-[768px]:mb-3 min-[768px]:text-5xl">Fichas asignadas</h1>
          <FichasIntructor />
        </div>
      </div>
    </>
  );
};

export default RolInstructor;
