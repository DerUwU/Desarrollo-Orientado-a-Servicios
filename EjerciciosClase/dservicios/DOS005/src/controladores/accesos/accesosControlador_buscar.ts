import accesos_encontrarDAO from "../../daos/accesos/accesos_encontrarDAO"
import { SQL_ACCESOS } from "../../repositorios/accesos/accesos_buscar_sql"
import {Request, Response} from 'express';

class AccesosControlador_buscar extends accesos_encontrarDAO{

    public buscarAcceso(req: Request, res: Response):void{
    const correo = req.body.elCorreo;
    const clave = req.body.laClave;
    const parametro = [correo, clave];
    accesos_encontrarDAO.accesos_encontrarPorID(SQL_ACCESOS.CARGAR, parametro, res)
    }
}
const accesosControlador_buscar = new AccesosControlador_buscar()
export default accesosControlador_buscar