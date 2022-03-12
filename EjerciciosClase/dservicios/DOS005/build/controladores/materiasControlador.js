"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const materiasDAO_1 = __importDefault(require("../daos/materiasDAO"));
const materias_sql_1 = require("../repositorios/materias_sql");
class MateriasControlador extends materiasDAO_1.default {
    obtenerMaterias(req, res) {
        materiasDAO_1.default.obtenerMaterias(materias_sql_1.SQL_MATERIAS.TODOS, [], res);
    }
    crearMaterias(req, res) {
        const { nombreMateria, referenciaMateria } = req.body;
        materiasDAO_1.default.crearMaterias(materias_sql_1.SQL_MATERIAS.CONFIRMAR, materias_sql_1.SQL_MATERIAS.CREAR, [nombreMateria, referenciaMateria], res);
    }
    buscarMaterias(req, res) {
        const codigo = req.params.elCodigo;
        const parametro = [codigo];
        materiasDAO_1.default.encontrarPorID(materias_sql_1.SQL_MATERIAS.CARGAR, parametro, res);
    }
}
const materiasControlador = new MateriasControlador();
exports.default = materiasControlador;
