import { Request, Response } from "express";
import testDAO from "../daos/testDAO";

class TestController extends testDAO{

    public attackMe(req: Request,res: Response):void{
        TestController.getInfo(req,res)
    }
}
const testController = new TestController()
export default testController