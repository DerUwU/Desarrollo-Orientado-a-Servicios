import { Router } from "express";
import pensumControlador from "../controladores/pensumControlador";



class PensumRuta {
    public pensumRuta: Router

    constructor() {
        this.pensumRuta = Router()
        this.config()
    }

    public config = (): void => {
        this.pensumRuta.get('/obtenerPensum', pensumControlador.obtenerPensums)
        this.pensumRuta.post('/crearPensum', pensumControlador.crearPensum)
    }
}


const pensumRuta = new PensumRuta()
export default pensumRuta.pensumRuta