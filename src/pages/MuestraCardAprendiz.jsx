import React from 'react';
import CardAprendiz from '../Components/Card_Aprendiz/CardAprendiz';

const MuestraCardAprendiz = () => {                 {/* CREO PAGINA MuestraCardAprendiz.jsx  */}
    return (
        <div className="ml-96 mt-12 " >
            <div className="  border-2 border-black p-4 rounded-md shadow-2xl shadow-black">
            <CardAprendiz 
            FotoSena={"https://tramiteinformativo.com/wp-content/uploads/2022/08/logo-sena-naranja-sin-fondo.png"}
            FotoAprendiz={"https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/mujer-mirada-profunda.jpg?resize=500%2C500&ssl=1"}
            Rol={"APRENDIZ"}
            Nombres={"La Cossita "}
            Apellidos={"Mas Bonita"}
            Cedula={"34.519.041"}
            Rh={"O +"}
            CodigoBarras={"https://codigodebarra.com.ar/wp-content/uploads/2019/11/codigo-de-barras-argentino.png"}
            Regional={"Regional Cauca"}
            Sede={"Centro de Teleinformatica y Produccion Industrial "}
            />
            </div>
        </div>
    );
}

export default MuestraCardAprendiz;

