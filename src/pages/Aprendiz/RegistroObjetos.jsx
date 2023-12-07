import { BiBlock } from "react-icons/bi";

const RegistroObjetos = () => {
  return (
    <div className="flex flex-col">
      {/* <div>
                <div>
                <BiBlock />
                </div>
                <div>
                    <h2>Prohibido el ingreso de:</h2>
                    <p>Armas, municiones, explosivos, elementos cortantes, punzantes, contundentes o sus combinaciones, que amenacen o causen riesgo a la convivencia</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>¿Qué objeto desea ingresar?:</h4>
                </div>
                <div>
                    <h4>Marca del objeto:</h4>
                </div>
                <div>
                    <h4>Cargue aqui la imagen del objeto:</h4>
                </div>
            </div>
            <div>
                <div className='recuadro'>
                    <input type="text" placeholder='Ingrese aqui la descripcion del objeto...' />
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
            </div> */}

      <div className="flex justify-center mx-40 my-10 drop-shadow-2b	rounded-2xl bg-white">
        <div className="flex mr-20  ">
          <BiBlock className="w-40 h-40" />
        </div>
        <div>
          <b>Prohibido el ingreso de:</b>
          <p className="mt-11">
            Armas, municiones, explosivos, elementos cortantes, punzantes,
            contundentes o sus combinaciones, que amenacen o causen riesgo a la
            convivencia
          </p>
        </div>
      </div>

      <form class="flex justify-items-center	drop-shadow-2b mx-40 my-9  ">
        <section className="flex">
          <div>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ¿Qué objeto desea ingresar?
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Marca del objeto:
              </label>
              <input
                type="text"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
          </div>
          <div className="drop-shadow-2b mx-30 my-10">
            <label for="image">Imagen:</label>
            <input type="file" id="image" name="image" accept="image/*"></input>
          </div>
        </section>
      </form>
      <div>
        <button
          type="submit"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default RegistroObjetos;
