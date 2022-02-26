"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class dao {
    //RUTA 1
    static getInfo1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const route1 = { Michis: "Luna y Snarff", Raza: "Michi" };
            Promise.resolve(route1)
                .then((response) => {
                console.log("Informacion Michis", response);
                res.status(200).json(route1);
            })
                .catch((error) => {
                console.log("Error UnU", error);
                res.status(400).json({ response: "Se murio el servicio" });
            });
        });
    }
    //RUTA 2
    static getInfo2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const route2 = { Telefono: "+57*******", Nombre: "Der" };
            Promise.resolve(route2)
                .then((response) => {
                console.log("Informacion Personal", response);
                res.status(200).json(route2);
            })
                .catch((error) => {
                console.log("Error UnU", error);
                res.status(400).json({ response: "Se murio el servicio" });
            });
        });
    }
    //RUTA  3
    static getInfo3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const route3 = { Comida: "Pizza", Vehiculo: "Carro" };
            Promise.resolve(route3)
                .then((response) => {
                console.log("Informacion Random", response);
                res.status(200).json(route3);
            })
                .catch((error) => {
                console.log("Error UnU", error);
                res.status(400).json({ response: "Se murio el servicio" });
            });
        });
    }
}
exports.default = dao;
