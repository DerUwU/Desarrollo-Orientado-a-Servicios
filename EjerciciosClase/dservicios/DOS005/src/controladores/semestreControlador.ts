import { Request, Response } from "express";
import SemestreDAO from "../daos/semestresDAO";
import { SQL_SEMESTRES } from "../repositorios/semestre_sql";


class SemestreControlador extends SemestreDAO{

    public obtenerSemesters = (req: Request, res: Response): void => {
        SemestreDAO.obtenerSemestres(SQL_SEMESTRES.TODOS, [], res)
    }

    public crearSemestres = (req: Request, res: Response): void => {
        const { nombreSemestre } = req.body
        SemestreDAO.crearSemestre(SQL_SEMESTRES.CONFIRMAR, SQL_SEMESTRES.CREAR, [nombreSemestre], res)
    }
}
const semestreControlador = new SemestreControlador()
export default semestreControlador