import { Response } from "express";
import pool from "../config/conection/conexionDB"

class DocenteDAO{

    public static async obtenerDocen(sqlConsulta: string, parametros: any, res:Response): Promise<any>{
            pool.result(sqlConsulta, parametros)
            .then((resultado)=>{
                res.status(200).json(resultado.rows)
            })
            .catch((miError)=>{
                console.log("eror", miError);
                res.status(400).json({respuesta: "No sirvio"});
            });
    }

}

export default DocenteDAO