"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const materiaPensumDAO_1 = __importDefault(require("../daos/materiaPensumDAO"));
const materiaPensum_sql_1 = require("../repositorios/materiaPensum_sql");
class MateriaPensumControlador extends materiaPensumDAO_1.default {
    constructor() {
        super(...arguments);
        this.obtenerMateriaPensum = (req, res) => {
            materiaPensumDAO_1.default.obtenerMateriaPensum(materiaPensum_sql_1.SQL_MATERIA_PENSUM.TODOS, [], res);
        };
        this.crearMateriaPensum = (req, res) => {
            const { codPensum, codMateria, codSemestre } = req.body;
            const params = [codPensum, codMateria, codSemestre];
            materiaPensumDAO_1.default.crearMateriaPensum(materiaPensum_sql_1.SQL_MATERIA_PENSUM.CONFIRMAR_PENSUM, materiaPensum_sql_1.SQL_MATERIA_PENSUM.CONFIRMAR_MATERIA, materiaPensum_sql_1.SQL_MATERIA_PENSUM.CONFIRMAR_SEMESTRE, materiaPensum_sql_1.SQL_MATERIA_PENSUM.CONFIRMAR_MATERIAPENSUM, materiaPensum_sql_1.SQL_MATERIA_PENSUM.CREAR, params, res);
        };
    }
}
const materiaPensumControlador = new MateriaPensumControlador();
exports.default = materiaPensumControlador;
