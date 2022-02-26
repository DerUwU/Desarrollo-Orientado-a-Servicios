import { Request, Response } from "express";
import FacultadDAO from "../daos/FacultadDAO";
import { SQL_FACULTAD } from "../repo/TablasGeneral_sql";

class FacultadControlador extends FacultadDAO{

    public darFacul(req: Request, res: Response):void{
            FacultadControlador.obtenerFacul(SQL_FACULTAD.TODASFACULTADES , [], res);
    }

}

const facultadControlador = new FacultadControlador();
export default facultadControlador;