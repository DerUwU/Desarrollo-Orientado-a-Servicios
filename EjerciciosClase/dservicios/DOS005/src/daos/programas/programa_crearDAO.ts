import {Response} from 'express';
import pool from '../../config/conexion/conexionDB';


class Programa_crearDAO{
    protected static crearProgrmas = async(sqlCrear:string, parameters:any, res:Response):Promise<any>=>{
    await pool.one(sqlCrear, parameters)
    .then((respuesta:any)=>{
        return res.status(201).json({ok:true, msg: 'Programa creado', nuevoID: respuesta.codPrograma
        })

    })
    .catch((ERROR:any)=>{
        console.log('Error en crear el programa: ', ERROR)
        return res.status(400).json({ok:false, msg:'Error en la consulta'})

    })


}
}
export default Programa_crearDAO