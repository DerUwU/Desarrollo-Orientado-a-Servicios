import ProgramaDAO from "../daos/programaDAO"
import { SQL_PROGRAMAS } from "../repositorios/programas_sql"
import {Request, Response} from 'express';

class ProgramasControlador extends ProgramaDAO{
    public obtenerProgrmas = (req:Request, res:Response):void=>{
        ProgramaDAO.obtenerProgramas(SQL_PROGRAMAS.TODOS, [], res )
    }

    public crearPrograma = (req:Request, res:Response):void =>{
        const nombre = req.body.programaNombre;
        const parametro=[nombre]
        ProgramaDAO.crearProgrmas(SQL_PROGRAMAS.CREAR, parametro, res) 
    }

    public buscarPrograma(req: Request, res: Response):void{
        const codigo = req.params.elCodigo;
        const parametro = [codigo];
        ProgramaDAO.encontrarPorID(SQL_PROGRAMAS.CARGAR, parametro, res)
    }

    public borrarPrograma(req: Request, res: Response):void{
        const codigo = req.params.elCodigo;
        const parametro = [codigo];
        ProgramaDAO.eliminarPorID(SQL_PROGRAMAS.BORRAR, parametro, res)
    }
}
const programaControlador = new ProgramasControlador()
export default programaControlador
