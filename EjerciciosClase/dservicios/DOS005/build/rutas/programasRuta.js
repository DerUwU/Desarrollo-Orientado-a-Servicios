"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const programasControlador_1 = __importDefault(require("../controladores/programasControlador"));
const programasControlador_Actualizar_1 = __importDefault(require("../controladores/programas/programasControlador_Actualizar"));
class ProgramaRuta {
    constructor() {
        this.programaRuta = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.programaRuta.get('/obtenerprograma', programasControlador_1.default.obtenerProgrmas);
        this.programaRuta.post('/crearprograma', programasControlador_1.default.crearPrograma);
        this.programaRuta.get('/obtenerprograma/:elCodigo', programasControlador_1.default.buscarPrograma);
        this.programaRuta.delete('/obtenerprograma/:elCodigo', programasControlador_1.default.borrarPrograma);
        this.programaRuta.put('/obtenerprograma/update', programasControlador_Actualizar_1.default.actualizar);
    }
}
const programaRuta = new ProgramaRuta();
exports.default = programaRuta.programaRuta;
