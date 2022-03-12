import { Request, Response } from 'express'
import PensumDAO from '../daos/pensumDAO'
import { SQL_PENSUMS } from '../repositorios/pensum_sql'


class PensumControlador extends PensumDAO {

    public obtenerPensums = (req: Request, res: Response): void => {
        PensumDAO.obtenerPensums(SQL_PENSUMS.TODOS, [], res)
    }

    public crearPensum = (req: Request, res: Response): void => {
        const { codPrograma, nombrePensum } = req.body
        const params = [codPrograma, nombrePensum]
        PensumDAO.crearPensum(SQL_PENSUMS.CONFIRMAR_PROGRAMA, SQL_PENSUMS.CONFIRMAR_PENSUM, SQL_PENSUMS.CREAR, params, res)
    }

}

const pensumControlador = new PensumControlador()
export default pensumControlador