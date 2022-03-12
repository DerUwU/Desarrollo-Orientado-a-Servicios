import { Response, Request } from "express";

class dao{
//RUTA 1
    protected static async getInfo1(req:Request, res:Response): Promise<any>
    {
    const route1 = {Michis: "Luna y Snarff", Raza: "Michi"}
    
    Promise.resolve(route1)
    .then((response: any)=>{console.log("Informacion Michis", response); 
        res.status(200).json(route1);
    })
    .catch((error: any)=>{console.log("Error UnU", error);
        res.status(400).json({response: "Se murio el servicio"})
    });
}
//RUTA 2
protected static async getInfo2(req:Request, res:Response): Promise<any>
{
    const route2 = {Telefono:"+57*******", Nombre: "Der"}
    Promise.resolve(route2)
    .then((response: any)=>{console.log("Informacion Personal", response); 
        res.status(200).json(route2);
    })
    .catch((error: any)=>{console.log("Error UnU", error);
        res.status(400).json({response: "Se murio el servicio"})
    });
}
//RUTA  3
protected static async getInfo3(req:Request, res:Response): Promise<any>
{
    const route3 = {Comida:"Pizza", Vehiculo: "Carro"}

    Promise.resolve(route3)
    .then((response: any)=>{console.log("Informacion Random", response); 
        res.status(200).json(route3);
    })
    .catch((error: any)=>{console.log("Error UnU", error);
        res.status(400).json({response: "Se murio el servicio"})
    });

    }
}
export default dao
