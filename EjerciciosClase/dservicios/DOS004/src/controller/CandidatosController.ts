import { Request, Response } from "express";
import CandidatosDAO from "../daos/CandidatosDAO";
import { SQL_CANDIDATOS } from "../repo/CandidatosSQL";

class CandidatosControlador extends CandidatosDAO{

    public darCandidatos(req: Request, res: Response):void{
        CandidatosControlador.obtenerCandidatos(SQL_CANDIDATOS.TODO_CANDIDATOS,[],res);
    }
}

const candidatosControlador = new CandidatosControlador();
export default candidatosControlador;