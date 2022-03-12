import {Response, Request} from "express";

class testDAO{

    protected static async getInfo(req:Request, res:Response): Promise<any>
    {
    const miJson = {Profesores: ["Harvey y Andres"], Materia: "DOS"}

    Promise.resolve(miJson)
    .then((response: any)=>{console.log("Holiwi UwU", response); 
        res.status(200).json(miJson);
    })
    .catch((error: any)=>{console.log("Error UnU", error);
        res.status(400).json({response: "Se murio el servicio"})
    });

    }
}
export default testDAO
