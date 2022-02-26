import { Router } from "express";
import facultadControlador from "../controller/FacultadControlador";
import docenteControlador from "../controller/DocenteControlador";

class FacultadesRutas{
    public rutaFacultadAPI: Router;

    constructor(){
        this.rutaFacultadAPI = Router()
        this.config();
    }

    public config(){
        this.rutaFacultadAPI.get("/givef", facultadControlador.darFacul)
        this.rutaFacultadAPI.get("/gived", docenteControlador.darDocentes)
    }

    }

const facultadesRutas = new FacultadesRutas();
export default facultadesRutas.rutaFacultadAPI;