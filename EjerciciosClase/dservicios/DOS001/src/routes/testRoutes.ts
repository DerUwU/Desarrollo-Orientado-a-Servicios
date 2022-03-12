import { Router } from "express";
import testController from "../controller/testController";

class testRoutes{
    public routesTestAPI

    constructor(){
        this.routesTestAPI = Router()
        this.config()
    }

        public config(){
            this.routesTestAPI.get("/get-info", testController.attackMe)
        }
    }


const TestRoutes = new testRoutes();
export default TestRoutes.routesTestAPI