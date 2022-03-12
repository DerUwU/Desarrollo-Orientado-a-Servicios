import { Router } from "express";
import CandidatosControlador from "../controller/CandidatosController";
import partidosControlador from "../controller/PartidosController";
import PartidosControlador from "../controller/PartidosController";

class GeneralRutas{
    public rutasGeneralAPI: Router;

    constructor(){
        this.rutasGeneralAPI = Router()
        this.config()
    }

    public config(){
        this.rutasGeneralAPI.get("/candidatos", CandidatosControlador.darCandidatos)
        this.rutasGeneralAPI.get("/partidos", PartidosControlador.darPartidos)
        this.rutasGeneralAPI.post("/partidos/crear",partidosControlador.crearPartidos)
    }
}
const generalRutas = new GeneralRutas();
export default generalRutas.rutasGeneralAPI;
