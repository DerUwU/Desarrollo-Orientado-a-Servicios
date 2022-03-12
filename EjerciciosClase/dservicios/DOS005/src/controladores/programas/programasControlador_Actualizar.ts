import Programa_ActualizarDAO from "../../daos/programas/programa_actualizarDAO";
import { SQL_PROGRAMAS_ACTUALIZAR } from "../../repositorios/programas/programa_actualizar_sql";
import {Request, Response} from 'express';

class ProgramasControlador_actualizar extends Programa_ActualizarDAO{


    public actualizar = (req:Request, res:Response):void =>{
        const nombre = req.body.programaNombre;
        const codigo = req.body.codPrograma;
        const parametro=[nombre,codigo];
        Programa_ActualizarDAO.actualPrograma(SQL_PROGRAMAS_ACTUALIZAR.YA, parametro, res);
    }

  
}
const programasControlador_Actualizar = new ProgramasControlador_actualizar()
export default programasControlador_Actualizar
