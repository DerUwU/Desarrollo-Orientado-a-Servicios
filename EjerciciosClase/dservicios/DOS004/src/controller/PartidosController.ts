import { Request, Response } from "express";
import PartidosDAO from "../daos/PartidosDAO";
import { SQL_PARTIDOS } from "../repo/PartidosSQL";

class PartidosControlador extends PartidosDAO{

    public darPartidos(req: Request, res: Response):void{
        PartidosControlador.obtenerPartidos(SQL_PARTIDOS.TODO_PARTIDOS,[],res);
    }

    public crearPartidos(req: Request, res: Response):void{
        const nombre = req.body.nombrePartido;
        const parametro = [nombre];
        PartidosControlador.crearPartidos(SQL_PARTIDOS.CREAR, SQL_PARTIDOS.CONFIRMAR, parametro, res)
    }
}

const partidosControlador = new PartidosControlador();
export default partidosControlador;