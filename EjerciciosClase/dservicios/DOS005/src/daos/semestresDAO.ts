import { Response } from 'express'
import pool from '../config/conexion/conexionDB'


class SemestreDAO{

    protected static obtenerSemestres = async (sqlQuery: string, parameters: any, res: Response): Promise<any> => {
        try {
            const { rows } = await pool.result(sqlQuery, parameters)
            return res.status(200).json({ ok: true, resultsQuery: rows })
        } catch (error) {
            console.log(('Error: '), error)
            return res.status(500).json({ ok: false, msg: 'Error' })
        }
    }
    protected static crearSemestre = async (sqlConfirmar: string, sqlCrear: string, parameters: any, res: Response): Promise<any> => {
        try {
            const { codSemestre, cantidad } = await pool.task(async query => {
                const { cantidad } = await query.one(sqlConfirmar, parameters)
                if (parseInt(cantidad) === 0) {
                    return await query.one(sqlCrear, parameters)
                } else {
                    return { semesterId: 0, cantidad }
                }
            })
            if(codSemestre !== 0) {
                return res.status(201).json({ ok: true, msg: 'Semestre creado', newId: codSemestre })
            } 
            else return res.status(400).json({ ok: false, msg: 'Este semestre ya existe', cantidad })
        } catch (error: any) {
            console.log(('Error: '), error)
            return res.status(500).json({ ok: false, msg: 'Error' })
        }
    }
}
export default SemestreDAO