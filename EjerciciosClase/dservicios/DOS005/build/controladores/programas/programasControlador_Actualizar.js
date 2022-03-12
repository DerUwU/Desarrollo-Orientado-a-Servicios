"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programa_actualizarDAO_1 = __importDefault(require("../../daos/programas/programa_actualizarDAO"));
const programa_actualizar_sql_1 = require("../../repositorios/programas/programa_actualizar_sql");
class ProgramasControlador_actualizar extends programa_actualizarDAO_1.default {
    constructor() {
        super(...arguments);
        this.actualizar = (req, res) => {
            const nombre = req.body.programaNombre;
            const codigo = req.body.codPrograma;
            const parametro = [nombre, codigo];
            programa_actualizarDAO_1.default.actualPrograma(programa_actualizar_sql_1.SQL_PROGRAMAS_ACTUALIZAR.YA, parametro, res);
        };
    }
}
const programasControlador_Actualizar = new ProgramasControlador_actualizar();
exports.default = programasControlador_Actualizar;
