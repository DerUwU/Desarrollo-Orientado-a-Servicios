import { Response } from 'express'
import pool from '../config/conexion/conexionDB'


class MateriaPensumDAO{
    protected static obtenerMateriaPensum = async (sqlQuery: string, params: any, res: Response) => {
        try {
            const { rows } = await pool.result(sqlQuery, params)
            return res.status(200).json({ ok: true, resultQuery: rows })
        } catch (error) {
            console.log(('Error'), error)
            return res.status(500).json({ ok: false, msg: 'Error al obtener materiapensum' })
        }
    }
    protected static crearMateriaPensum = async (sqlConfirmarPensum: string, sqlConfirmarMateria: string, sqlConfirmarSemestre: string, sqlConfirmarMateriaPensum: string, sqlCrear: string, params: any, res: Response) => {
        try {
            const { pensumCantidad } = await pool.one(sqlConfirmarPensum, params[0])
            const { materiaCantidad } = await pool.one(sqlConfirmarMateria, params[1])
            const { semestreCantidad } = await pool.one(sqlConfirmarSemestre, params[2])
            if (pensumCantidad === '0') return res.status(400).json({ ok: false, msg: `No hay pensum con el id ${params[0]}` })
            if (materiaCantidad === '0') return res.status(400).json({ ok: false, msg: `No hay materias con el id ${params[1]}` })
            if (semestreCantidad === '0') return res.status(400).json({ ok: false, msg: `No hay semestres con el id ${params[2]}` })

            const { codPensum, codMateria, codSemestre } = await pool.task(async query => {
                const { pAmount, sAmount } = await query.one(sqlConfirmarMateriaPensum, params)
                if (pAmount !== '0' && sAmount !== '0') {
                    return { pensumId: 0, subjectId: 0, semesterId: 0 }
                }
                else return query.one(sqlCrear, params)
            })
            if (codPensum === 0 && codMateria === 0 && codSemestre === 0) {
                return res.status(400).json({ ok: false, msg: 'Ya existe una relación del pensum con la materia' })
            }
            return res.status(201).json({ ok: true, msg: 'Matriapensum creado con exito', codPensum, codMateria, codSemestre })
        } catch (error) {
            console.log(('Error: '), error)
            return res.status(500).json({ ok: false, msg: 'Error' })
        }
    }
}
export default MateriaPensumDAO