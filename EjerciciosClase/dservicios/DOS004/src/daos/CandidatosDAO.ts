import { Response } from "express";
import pool from "../config/conection/conexionDB";

class CandidatosDAO{

    public static async obtenerCandidatos(sqlConsulta: string, parametros: any, res: Response): Promise<any>{
            pool.result(sqlConsulta,parametros)
            .then((resultado)=>{
                res.status(200).json(resultado.rows)
            })
            .catch((miError)=>{
                console.log("Error", miError);
                res.status(400).json({respuesta: "No Sirvio :c"})
            });
    }
}

export default CandidatosDAO