
const Table = ({numero, nombre, rol, ingreso}) => {
    return (
        <div>
            <table className="table-fixed hover:table-fixed md:table-fixed">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Esta primera fila iria como unica fila, ya que tiene parametros los cueles se pueden llenar con información. */}
                    <tr>
                        <td>{numero}</td>
                        <td>{nombre}</td>
                        <td>{rol}</td>
                        <td>{ingreso}</td>
                    </tr>
                    {/* Estos demás compos solo sirven de ejemplo */}
                    <tr>
                        <td>6</td>
                        <td>Miguel Ángel Astudillo Campo</td>
                        <td>Aprendiz</td>
                        <td>7:05 a.m</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Julieth Ximena Rendón Sánchez</td>
                        <td>Aprendiz</td>
                        <td>7:02 a.m</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Andrés Santiago Mosquera Maca</td>
                        <td>Aprendiz</td>
                        <td>6:57 a.m</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Franco Antonio Reina Argoty</td>
                        <td>Instructor</td>
                        <td>6:55 a.m</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Juan Eduardo Ochoa Cordoba</td>
                        <td>Aprendiz</td>
                        <td>6:52 a.m</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Pablo Antonio Ortíz Gutierrez</td>
                        <td>Instructor</td>
                        <td>6:50 a.m</td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    );
}

export default Table;
