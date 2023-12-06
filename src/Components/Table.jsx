
const Table = () => {
    return (
        <div>
            <div className="w-full relative shadow-2xl rounded-lg flex justify-center items-center mt-16 mx-24">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-base font-medium text-gray-800 bg-gray-200 light:bg-gray-700 light:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Rol
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Ingreso
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-auto">
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                10
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Jesús Eduardo Paladinez Vargas
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Aprendiz
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                7:05 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                9
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Pablo Antonio Ortiz Gutierrez
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Instructor
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                7:03 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                8
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Jonier Alexander Gómez Martinez
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                No pertenece
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-red-500 rounded-lg">Bloqueado</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                7:01 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                7
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Andres Maca
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Aprendiz
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                7:00 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Daniel Camilo Astaiza Toro
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Aprendiz
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6:59 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                5
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Yeimy Carolina Dorado                                
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                No pertenece
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-red-500 rounded-lg">Bloqueado</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6:58 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                4
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Franco Antonio Reina Argoty
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Instructor
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6:57 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                3
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Juan Eduardo Ochoa Cordoba
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Aprendiz
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6:56 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                2
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Jorge Andrés Coral
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Instructor
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6:55 a.m
                            </td>
                        </tr>
                        <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-100 light:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                1
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Nebar Alexis Ceron Santacruz
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-left">
                                Aprendiz
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">

                                <button type="button" className="w-20 px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg">Activo</button>

                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap light:text-white text-center">
                                6:54 a.m
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
