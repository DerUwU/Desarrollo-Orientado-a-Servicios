import { Response } from "express";
import pool from "../config/conection/conexionDB";

class PartidosDAO{

    public static async obtenerPartidos(sqlConsulta: string, parametros: any, res: Response): Promise<any>{
            pool.result(sqlConsulta,parametros)
            .then((resultado)=>{
                res.status(200).json(resultado.rows)
            })
            .catch((miError)=>{
                console.log("Error", miError);
                res.status(400).json({respuesta: "No Sirvio :c"})
            });
    }
    public static async crearPartidos(sqlConfirmar: string, sqlCrear: string, parametros: any, res: Response):Promise<any>{
            await pool.task(async Consulta=>{
                const dato = await Consulta.one(sqlConfirmar, parametros);
                if(dato.cantidad == 0){
                   return await Consulta.one(sqlCrear, parametros)
                }else{
                    return {id_partido: 0};
                }
            })
            .then((Respuesta)=>{
               if (Respuesta.id_partido != 0) {
                   res.status(200).json({respuesta : "Partido Creado", nuevoCodigo: Respuesta.id_partido})
               } else {
                res.status(402).json({respuesta : "Error al crear partido"})
               }
            })
            .catch((MiError)=>{
                console.log(MiError);
                res.status(400).json({respuesta: "Error en las consultas"})
            });
    }
}

export default PartidosDAO