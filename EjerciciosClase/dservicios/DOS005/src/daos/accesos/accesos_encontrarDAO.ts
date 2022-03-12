import {Response} from 'express';
import pool from '../../config/conexion/conexionDB';


class accesos_encontrarDAO{
    protected static accesos_encontrarPorID = async(sqlEncontrar:string, parameters:any, res:Response):Promise<any>=>{
        await pool.oneOrNone(sqlEncontrar, parameters)
        .then((dato:any) =>{
            console.log(dato);
            if(dato===null){
                return res.status(400).json({respuesta: "Error en los campos"})
            }
            return res.status(201).json({respuesta: dato
            })
        })
        .catch((ERROR:any)=>{
            console.log('Error al encontrar el usuario: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta de buscar'})

        })

    }
}
export default accesos_encontrarDAO