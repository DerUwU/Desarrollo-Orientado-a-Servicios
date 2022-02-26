"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DocenteDAO_1 = __importDefault(require("../daos/DocenteDAO"));
const TablasGeneral_sql_1 = require("../repo/TablasGeneral_sql");
class DocenteControlador extends DocenteDAO_1.default {
    darDocentes(req, res) {
        DocenteControlador.obtenerDocen(TablasGeneral_sql_1.SQL_DOCENTES.TODASDOCENTES, [], res);
    }
}
const docenteControlador = new DocenteControlador();
exports.default = docenteControlador;
