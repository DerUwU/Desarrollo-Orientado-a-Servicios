"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const programaDAO_1 = __importDefault(require("../daos/programaDAO"));
const programas_sql_1 = require("../repositorios/programas_sql");
class ProgramasControlador extends programaDAO_1.default {
    constructor() {
        super(...arguments);
        this.obtenerProgrmas = (req, res) => {
            programaDAO_1.default.obtenerProgramas(programas_sql_1.SQL_PROGRAMAS.TODOS, [], res);
        };
        this.crearPrograma = (req, res) => {
            const nombre = req.body.programaNombre;
            const parametro = [nombre];
            programaDAO_1.default.crearProgrmas(programas_sql_1.SQL_PROGRAMAS.CREAR, parametro, res);
        };
    }
    buscarPrograma(req, res) {
        const codigo = req.params.elCodigo;
        const parametro = [codigo];
        programaDAO_1.default.encontrarPorID(programas_sql_1.SQL_PROGRAMAS.CARGAR, parametro, res);
    }
    borrarPrograma(req, res) {
        const codigo = req.params.elCodigo;
        const parametro = [codigo];
        programaDAO_1.default.eliminarPorID(programas_sql_1.SQL_PROGRAMAS.BORRAR, parametro, res);
    }
}
const programaControlador = new ProgramasControlador();
exports.default = programaControlador;
