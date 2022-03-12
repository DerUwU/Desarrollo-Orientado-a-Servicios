import { Router } from 'express'
import accesosControlador from '../controladores/accesos/accesosControlador_buscar'


class AccesosRuta {
    public accesosRuta: Router

    constructor() {
        this.accesosRuta = Router()
        this.config()
    }

    public config = () => {
        this.accesosRuta.post('/iniciar', accesosControlador.buscarAcceso)
    }
}


const accesosRuta = new AccesosRuta();
export default accesosRuta.accesosRuta