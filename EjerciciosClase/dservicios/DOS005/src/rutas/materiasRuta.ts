import { Router } from "express";
import materiasControlador from "../controladores/materiasControlador";

class MateriasRutas{
    public materiasRuta: Router


    constructor(){
        this.materiasRuta = Router()
        this.configuracion()
    }
    public configuracion():void{
        this.materiasRuta.get('/obtenermateria', materiasControlador.obtenerMaterias)
        this.materiasRuta.post('/crearmateria', materiasControlador.crearMaterias)
        this.materiasRuta.get('/obtenermateria/:elCodigo', materiasControlador.buscarMaterias)

    }
    
}
const materiasRutas = new MateriasRutas()
export default materiasRutas.materiasRuta