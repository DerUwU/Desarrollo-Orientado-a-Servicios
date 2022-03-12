"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesos_encontrarDAO_1 = __importDefault(require("../../daos/accesos/accesos_encontrarDAO"));
const accesos_buscar_sql_1 = require("../../repositorios/accesos/accesos_buscar_sql");
class AccesosControlador_buscar extends accesos_encontrarDAO_1.default {
    buscarAcceso(req, res) {
        const correo = req.body.elCorreo;
        const clave = req.body.laClave;
        const parametro = [correo, clave];
        accesos_encontrarDAO_1.default.accesos_encontrarPorID(accesos_buscar_sql_1.SQL_ACCESOS.CARGAR, parametro, res);
    }
}
const accesosControlador_buscar = new AccesosControlador_buscar();
exports.default = accesosControlador_buscar;
