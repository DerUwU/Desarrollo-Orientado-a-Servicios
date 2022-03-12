"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const semestresDAO_1 = __importDefault(require("../daos/semestresDAO"));
const semestre_sql_1 = require("../repositorios/semestre_sql");
class SemestreControlador extends semestresDAO_1.default {
    constructor() {
        super(...arguments);
        this.obtenerSemesters = (req, res) => {
            semestresDAO_1.default.obtenerSemestres(semestre_sql_1.SQL_SEMESTRES.TODOS, [], res);
        };
        this.crearSemestres = (req, res) => {
            const { nombreSemestre } = req.body;
            semestresDAO_1.default.crearSemestre(semestre_sql_1.SQL_SEMESTRES.CONFIRMAR, semestre_sql_1.SQL_SEMESTRES.CREAR, [nombreSemestre], res);
        };
    }
}
const semestreControlador = new SemestreControlador();
exports.default = semestreControlador;
