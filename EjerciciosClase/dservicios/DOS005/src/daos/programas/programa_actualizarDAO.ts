import {Response} from 'express';
import pool from '../../config/conexion/conexionDB';


class Programa_ActualizarDAO{
    protected static actualPrograma = async(sqlActualizar:string, parameters:any, res: Response): Promise<any>=>{
        await pool
        .task(async(parametro:any) => {
            console.log(parametro);
            return await parametro.result(sqlActualizar, parameters);
        })
        .then((respuesta)=>{
            console.log(respuesta);
            res.status(200).json({respuesta: 'Programa Actualizado'})
        })
        .catch((ERROR:any)=>{
            console.log('Error al actualizar los programas: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error al actualizar programas'})
        
        })

    }

    
    }


export default Programa_ActualizarDAO