import React from 'react';

const Otraopcion = () => {
    return (
        <div className='parte1'>
            <div className="class">
                <div className='sidecuadrado'>
                    <div className='fotoicon'>
                        <img src="./img/png-transparent-facial-recognition-system-computer-icons-iris-recognition-face-face-text-people-interface.png" alt="icon" />
                    </div>
                </div>
                <div>
                    <div className='casa'>
                        <img src="./img/25694.png" alt="casa" />
                    </div>
                    <div className='home'>
                        <p>inicio</p>
                    </div>
                    <div className='Objetos'>
                        <img src="./img/1280118.png" alt="objetos" />
                    </div>
                    <div className='textobjetos'>
                        <p>Objetos</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Objetos</h3>
                <img src="./img/images.png" alt="usuario" />
            </div>
            <div>
                <div>
                    <h2>icon</h2>
                </div>
                <div>
                    <h2>Prohibido el ingreso de:</h2>
                    <p>Armas, municiones, explosivos, elementos cortantes, punzantes, contundentes o sus combinaciones, que amenacen o causen riesgo a la convivencia</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>Corta descripcion del objeto:</h4>
                </div>
                <div>
                    <h4>Cargue aqui la imagen del objeto:</h4>
                </div>
            </div>
            <div>
                <div className='recuadro'>
                    <input type="text" value={text} onChange={manejartext} placeholder='Ingrese aqui la descripcion del objeto...' />
                </div>
                <div className='cuadro'>
                    <div>
                        <img src="" alt="image" />
                    </div>
                </div>
            </div>
            <div>
                <div className='boton'>
                    <button>Registrar objeto</button>
                </div>
            </div>
        </div>
    );
}

export default Otraopcion;