import React from 'react';

const CardAprendiz = ({FotoSena, FotoAprendiz, Rol, Nombres, Apellidos, Cedula, Rh, CodigoBarras, Regional, Sede}) => {        {/* CREO COMPONENTE  CardAprendiz.jsx  */}
    return (
        
        <div className=' '>
            <div className='flex gap-2 w-96 p-0.5'>
                <img className='w-28 h-28 ' src={FotoSena} alt="" />

                <img className='h-52  ml-2  rounded-md' src={FotoAprendiz} alt="" />
                
                <p className=' font-bold text-2xl transform -rotate-90  pt-48 ml-48 mt-6 fixed'>{Rol}</p>
                
            </div>
                                
                <h1 className="border-b-4 border-orange-500 "> </h1>

            <div>
                <br />
                <h2 className='text-orange-600 font-bold text-2xl'>{Nombres}</h2>
                <h2 className='text-orange-600 font-bold text-2xl'>{Apellidos}</h2>
                <h3 className='font-bold'>CC: {Cedula}</h3>
                <h3 className='font-bold'>RH : {Rh}</h3>
                <img className='h-8 w-48 rounded-md' src={CodigoBarras} alt="" />
                <br />
                <h1 className="border-b-4 border-orange-500 w-8"> </h1>
                <br />

            </div>
                <h4 className='font-bold'>{Regional}</h4>
                <h4 className='text-orange-600 font-bold'>{Sede}</h4>
            
                        
             
        </div>
    );
}


export default CardAprendiz;


