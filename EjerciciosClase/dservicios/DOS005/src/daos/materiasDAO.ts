import { Response } from "express";
import pool from "../config/conexion/conexionDB";

class MateriasDAO{
    protected static async obtenerMaterias(sqlConsulta:string, parameters:any, res:Response): Promise<any>{
        try {
            const {rows} = await pool.result(sqlConsulta, parameters)
            return res.status(200).json({ok:true, resultados: rows})

            
        } catch (error) {
            console.log('Error en obtener matwrias',error)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})
            
        }


    }

    protected static async crearMaterias(sqlConfirmar:string, sqlCrear:string, params:any, res:Response): Promise<any>{
        await pool.task(async consulta=>{
            const {cantidad} = await consulta.one(sqlConfirmar, params)
            if (cantidad == '0') {
                return await consulta.one(sqlCrear, params)
                
            } else {
                return {codMateria: 0, cantidad}
            }

        })
        .then(({codMateria, cantidad})=>{
            if (codMateria !=0) {
                return res.status(201).json({ok:true, msg: 'Materia creada', nuevoID: codMateria})
                
            } else {
                return res.status(400).json({ok:false, msg:'materia existente', cantidad})
                
            }

        })
        .catch((error:any)=>{
            console.log('Error en la creacion de materias', error)
            return res.status(500).json({ok:false, msg:'Comuniquese con el admin'})
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
            console.log('Error al encontrar la materia: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})

        })

    }

}
export default MateriasDAO