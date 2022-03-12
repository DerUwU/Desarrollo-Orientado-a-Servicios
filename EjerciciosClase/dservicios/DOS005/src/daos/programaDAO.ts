import {Response} from 'express';
import pool from '../config/conexion/conexionDB';


class ProgramaDAO{
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

    protected static eliminarPorID = async(sqlCrear:string, parameters:any, res:Response):Promise<any>=>{
        await pool.result(sqlCrear, parameters)
        .then((respuesta:any) =>{
            return res.status(200).json({
                ok: true, 
                resultado: respuesta.rows
            })
        })
        .catch((ERROR:any)=>{
            console.log('Error al borrar el programa: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})

        })


    }

    
}

export default ProgramaDAO