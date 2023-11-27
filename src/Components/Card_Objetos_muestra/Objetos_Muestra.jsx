import React from 'react';

const ObjetosMuestra = ({Imagen, Descripcion, TipoObjeto}) => {
    return (
        <div className='flex flex-col gap-5 items-center'>
            <h3>
                {TipoObjeto}
            </h3>
            <h4>
                {Descripcion}
            </h4>
            <img className='w-80 rounded-md' src={Imagen} alt="" />
        </div>
    );
}

export default ObjetosMuestra;
