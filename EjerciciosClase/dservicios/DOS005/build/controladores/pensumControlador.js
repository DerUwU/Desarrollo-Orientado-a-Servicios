"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pensumDAO_1 = __importDefault(require("../daos/pensumDAO"));
const pensum_sql_1 = require("../repositorios/pensum_sql");
class PensumControlador extends pensumDAO_1.default {
    constructor() {
        super(...arguments);
        this.obtenerPensums = (req, res) => {
            pensumDAO_1.default.obtenerPensums(pensum_sql_1.SQL_PENSUMS.TODOS, [], res);
        };
        this.crearPensum = (req, res) => {
            const { codPrograma, nombrePensum } = req.body;
            const params = [codPrograma, nombrePensum];
            pensumDAO_1.default.crearPensum(pensum_sql_1.SQL_PENSUMS.CONFIRMAR_PROGRAMA, pensum_sql_1.SQL_PENSUMS.CONFIRMAR_PENSUM, pensum_sql_1.SQL_PENSUMS.CREAR, params, res);
        };
    }
}
const pensumControlador = new PensumControlador();
exports.default = pensumControlador;
