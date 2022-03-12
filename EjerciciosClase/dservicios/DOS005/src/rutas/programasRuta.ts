import { Router } from "express";
import programaControlador from "../controladores/programasControlador";
import programaControladorActualizar from "../controladores/programas/programasControlador_Actualizar";

class ProgramaRuta{
    public programaRuta: Router

    constructor(){
        this.programaRuta = Router()
        this.configuracion()
    }

    public configuracion():void{
        this.programaRuta.get('/obtenerprograma', programaControlador.obtenerProgrmas)
        this.programaRuta.post('/crearprograma', programaControlador.crearPrograma)
        this.programaRuta.get('/obtenerprograma/:elCodigo', programaControlador.buscarPrograma)
        this.programaRuta.delete('/obtenerprograma/:elCodigo', programaControlador.borrarPrograma)
        this.programaRuta.put('/obtenerprograma/update', programaControladorActualizar.actualizar)


    }
}
const programaRuta = new ProgramaRuta()
export default programaRuta.programaRuta