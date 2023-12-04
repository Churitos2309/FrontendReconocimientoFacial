import React from "react";
import FichasIntructor from "./FichasInstructor/FichasIntructor";
import NameProgram from "./FichasInstructor/NameProgram";
import "./FichasInstructor/FichasIntructor";



const RolInstructor = () => {
  return (
    <>
      <div className="rol_ints">
        <NameProgram></NameProgram>
        <div className="rol_ints2 sm:w-20">
          <h1 className="textof">Fichas asignadas</h1>
          <FichasIntructor />
        </div>
      </div>
    </>
  );
};

export default RolInstructor;
