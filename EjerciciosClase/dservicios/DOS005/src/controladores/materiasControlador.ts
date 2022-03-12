import { Response, Request } from "express";
import MateriasDAO from "../daos/materiasDAO";
import { SQL_MATERIAS } from "../repositorios/materias_sql";

class MateriasControlador extends MateriasDAO{
    public obtenerMaterias(req:Request, res:Response):void{
        MateriasDAO.obtenerMaterias(SQL_MATERIAS.TODOS, [], res)


    }
    public crearMaterias(req:Request, res:Response):void{
        const {nombreMateria, referenciaMateria} = req.body;
        MateriasDAO.crearMaterias(SQL_MATERIAS.CONFIRMAR, SQL_MATERIAS.CREAR, [nombreMateria, referenciaMateria], res)

    }

    public buscarMaterias(req: Request, res: Response):void{
        const codigo = req.params.elCodigo;
        const parametro = [codigo];
        MateriasDAO.encontrarPorID(SQL_MATERIAS.CARGAR, parametro, res)
    }

    
}
const materiasControlador = new MateriasControlador()
export default materiasControlador