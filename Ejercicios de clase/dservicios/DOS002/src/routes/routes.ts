import { Router } from "express";
import controller from "../controller/controller";

class route{
    public routeAPI

    constructor(){
        this.routeAPI = Router()
        this.config();
    }

        public config(){
            this.routeAPI.get("/ruta1", controller.searchRoute1)
            this.routeAPI.get("/ruta2", controller.searchRoute2)
            this.routeAPI.get("/ruta3", controller.searchRoute3)
        }
    }


const Route = new route();
export default Route.routeAPI