"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accesosControlador_buscar_1 = __importDefault(require("../controladores/accesos/accesosControlador_buscar"));
class AccesosRuta {
    constructor() {
        this.config = () => {
            this.accesosRuta.post('/iniciar', accesosControlador_buscar_1.default.buscarAcceso);
        };
        this.accesosRuta = (0, express_1.Router)();
        this.config();
    }
}
const accesosRuta = new AccesosRuta();
exports.default = accesosRuta.accesosRuta;
