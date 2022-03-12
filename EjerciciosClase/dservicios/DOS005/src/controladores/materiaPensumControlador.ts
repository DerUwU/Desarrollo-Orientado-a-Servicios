import { Request, Response } from 'express'
import MateriaPensumDAO from '../daos/materiaPensumDAO'
import { SQL_MATERIA_PENSUM } from '../repositorios/materiaPensum_sql'


class MateriaPensumControlador extends MateriaPensumDAO{
    public obtenerMateriaPensum = (req: Request, res: Response) => {
        MateriaPensumDAO.obtenerMateriaPensum(SQL_MATERIA_PENSUM.TODOS, [], res)
    }
    public crearMateriaPensum = (req: Request, res: Response) => {
        const { codPensum, codMateria, codSemestre } = req.body
        const params = [codPensum, codMateria, codSemestre]
        MateriaPensumDAO.crearMateriaPensum(
            SQL_MATERIA_PENSUM.CONFIRMAR_PENSUM,
            SQL_MATERIA_PENSUM.CONFIRMAR_MATERIA,
            SQL_MATERIA_PENSUM.CONFIRMAR_SEMESTRE,
            SQL_MATERIA_PENSUM.CONFIRMAR_MATERIAPENSUM,
            SQL_MATERIA_PENSUM.CREAR,
            params,
            res
        )
    }

}
const materiaPensumControlador = new MateriaPensumControlador()
export default materiaPensumControlador