// En esta parte creamos el apartado de historial para el perfil de usuario

import { Link } from "react-router-dom";
import Img from "./ImgProfile.jpeg";

const HistorialP = () => {
    return(
        

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Historial de Ingreso</h5>
        <Link to="/Perfil">
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            Regresar
        </a>
        </Link>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={Img} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ingreso
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Novedad: Ingresó un computador
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        7:00 Am
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={Img} alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Salida
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Novedad: Salió con el computador
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        11:00 Am
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={Img} alt="Michael image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ingreso
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Novedad: Ingresó un balón 
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        8:00 Am
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={Img} alt="Lana image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Salida
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Novedad: No salió con el Balón
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        12:00 Pm
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={Img} alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ingreso
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Novedad: Ingresó un computador
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        7:30 Am
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

    );
};

export default HistorialP