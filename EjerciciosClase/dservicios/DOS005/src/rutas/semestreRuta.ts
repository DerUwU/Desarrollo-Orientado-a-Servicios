import { Router } from "express"
import semestreControlador from "../controladores/semestreControlador"


class SemestreRuta {
    public semestreRuta: Router

    constructor() {
        this.semestreRuta = Router()
        this.config()
    }

    public config = (): void => {
        this.semestreRuta.get('/obtenerSemestre', semestreControlador.obtenerSemesters)
        this.semestreRuta.post('/crearSemestre', semestreControlador.crearSemestres)
    }
}


const semestreRuta = new SemestreRuta()
export default semestreRuta.semestreRuta