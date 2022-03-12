import { Router } from 'express'
import materiaPensumControlador from '../controladores/materiaPensumControlador'


class MateriaPensumRuta {
    public materiaPensumRuta: Router

    constructor() {
        this.materiaPensumRuta = Router()
        this.config()
    }

    public config = () => {
        this.materiaPensumRuta.post('/crearMateriaPensum', materiaPensumControlador.crearMateriaPensum)
        this.materiaPensumRuta.get('/obtenerMateriaPensum', materiaPensumControlador.obtenerMateriaPensum)
    }
}


const materiaPensumRuta = new MateriaPensumRuta()
export default materiaPensumRuta.materiaPensumRuta