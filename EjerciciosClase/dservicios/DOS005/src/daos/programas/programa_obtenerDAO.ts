import {Response} from 'express';
import pool from '../../config/conexion/conexionDB';


class Programa_obtenerDAO{
    protected static obtenerProgramas = async(sqlConsulta:string, parameters:any, res: Response): Promise<any>=>{
        await pool.result(sqlConsulta, parameters)
        .then((respuesta:any) =>{
            return res.status(200).json({
                ok: true, 
                resultado: respuesta.rows
            })
        })
        .catch((ERROR:any)=>{
            console.log('Error en obtener los programa: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})
        
        })

    }
}
export default Programa_obtenerDAO