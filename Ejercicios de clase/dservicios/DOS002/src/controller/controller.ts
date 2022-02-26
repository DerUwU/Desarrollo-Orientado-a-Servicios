import { Request, Response } from "express";
import dao from "../daos/dao";

class controller extends dao{

    public searchRoute1(req: Request, res: Response):void{
        controller.getInfo1(req,res)   
     }

     public searchRoute2(req: Request, res: Response):void{
        controller.getInfo2(req,res)   
     }

     public searchRoute3(req: Request, res: Response):void{
        controller.getInfo3(req,res)   
     }
}
const Controller = new controller()
export default Controller