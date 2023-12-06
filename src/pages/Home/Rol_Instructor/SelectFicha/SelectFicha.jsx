import React from "react";
import TablaAprendiz from "./TablaAprendiz";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const SelectFicha = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center min-5xl:ml-60 ">
        <div className="flex ml-40 min-[1350px]:h-20">
          <div
            className="mt-12 :
            min-[1350px]:m  mr-10 text-3xl bg-[#00324d] rounded-xl px-3 shadow-xl shadow-inner 
          text-white hover:text-[#39a900] font-serif min-[1350px]:mt-11 min-[1350px]:ml-7"
          >
            <Link to={"/RolInstructor"}>
              <button>Back</button>
            </Link>
          </div>
          <div className="flex">
            <div className="flex min-[1350px]:mt-8 ">
            <IoSearchOutline text-white className="text-sky-500 hover:text-black mt-12 pointer-events-none text-3xl min-[1350px]:mt-2 min-[1350px]:absolute min-[1350px]:ml-8" />
              <input
                type="text"
                className="w-96 rounded-xl inline-block  px-7 mt-10 pl-14 
             border-solid border-2 border-sky-500 py-1 ml-4 min-[1350px]:mt-0
             min-[1350px]:static min-[1350px]:"
                placeholder={"Nombre o Número de identificación"}
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
