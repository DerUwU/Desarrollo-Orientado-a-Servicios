import { Response } from 'express'
import pool from '../config/conexion/conexionDB'


class PensumDAO {
  
    protected static obtenerPensums = async (sqlQuery: string, params: any, res: Response): Promise<any> => {
        try {
            const { rows } = await pool.result(sqlQuery, params)
            return res.status(200).json({ ok: true, resultsQuery: rows })
        } catch (error) {
            console.log(('Error: '), error)
            return res.status(500).json({ ok: false, msg: 'Error' })
        }
    }

    protected static crearPensum = async (sqlConfirmarPrograma: string, sqlConfirmarPensum: string, sqlCrear: string, params: any, res: Response): Promise<any> => {
        try {
            const { programaCantiad } = await pool.one(sqlConfirmarPrograma, params)
            if (parseInt(programaCantiad) === 0) {
                return res.status(400).json({ ok: false, msg: `No existe ningún programa con el cod ${params[0]}` })
            }
            const { codPensum, cantidad } = await pool.task(async query => {
                const { cantidad } = await query.one(sqlConfirmarPensum, params)
                if (cantidad === '0') return query.one(sqlCrear, params)
                return { pensumId: 0, cantidad }
            })
            if (codPensum !== 0) {
                return res.status(201).json({ ok: true, msg: 'Pensum creado', newId: codPensum })
            }
            return res.status(400).json({ ok: false, msg: 'Este pensum ya existe', cantidad })
        } catch (error) {
            console.log(('Error: '), error)
            return res.status(500).json({ ok: false, msg: 'Error' })
        }
    }
}


export default PensumDAO