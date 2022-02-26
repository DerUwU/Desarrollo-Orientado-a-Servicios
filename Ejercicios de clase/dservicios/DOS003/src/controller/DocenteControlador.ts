import { Request, Response } from "express";
import DocenteDAO from "../daos/DocenteDAO";
import { SQL_DOCENTES, SQL_FACULTAD } from "../repo/TablasGeneral_sql";

class DocenteControlador extends DocenteDAO{

    public darDocentes(req: Request, res: Response):void{
        DocenteControlador.obtenerDocen(SQL_DOCENTES.TODASDOCENTES , [], res);
    }

}

const docenteControlador = new DocenteControlador();
export default docenteControlador;