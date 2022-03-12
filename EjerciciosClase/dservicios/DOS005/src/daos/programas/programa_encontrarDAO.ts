import {Response} from 'express';
import pool from '../../config/conexion/conexionDB';


class Programa_encontrarDAO{
    protected static encontrarPorID = async(sqlCrear:string, parameters:any, res:Response):Promise<any>=>{
        await pool.one(sqlCrear, parameters)
        .then((dato:any) =>{
            console.log(dato);
            return res.status(201).json({respuesta: dato
            })
        })
        .catch((ERROR:any)=>{
            console.log('Error al encontrar el programa: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})

        })

    }
}
export default Programa_encontrarDAO