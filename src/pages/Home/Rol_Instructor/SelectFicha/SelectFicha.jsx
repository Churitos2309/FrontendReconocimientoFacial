import React from "react";
import TablaAprendiz from "./TablaAprendiz";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SelectFicha = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center min-5xl:ml-60 ">
        <div className="flex ml-40">
          <div
            className="mt-12 mr-10 text-3xl bg-[#00324d] rounded-xl px-3 shadow-xl shadow-inner 
          text-white hover:text-[#39a900] font-serif"
          >
            <Link to={"/RolInstructor"}>
              <button>Back</button>
            </Link>
          </div>
          <div className="flex">
            <div>
            <FaSearch text-white className="mt-12 text-3xl" />
              <input
                type="text"
                className="w-96 rounded-xl inline-block  px-7 mt-10 
             border-solid border-2 border-sky-500 py-1 ml-4"
                placeholder="Nombre o Número de identificación"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <TablaAprendiz />
        </div>
      </div>
    </div>
  );
};

export default SelectFicha;
