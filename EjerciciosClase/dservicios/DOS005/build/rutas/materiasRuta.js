"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiasControlador_1 = __importDefault(require("../controladores/materiasControlador"));
class MateriasRutas {
    constructor() {
        this.materiasRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.materiasRuta.get('/obtenermateria', materiasControlador_1.default.obtenerMaterias);
        this.materiasRuta.post('/crearmateria', materiasControlador_1.default.crearMaterias);
        this.materiasRuta.get('/obtenermateria/:elCodigo', materiasControlador_1.default.buscarMaterias);
    }
}
const materiasRutas = new MateriasRutas();
exports.default = materiasRutas.materiasRuta;
