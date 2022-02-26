"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FacultadDAO_1 = __importDefault(require("../daos/FacultadDAO"));
const Facultad_sql_1 = require("../repo/Facultad_sql");
class FacultadControlador extends FacultadDAO_1.default {
    darFacul(req, res) {
        FacultadControlador.obtenerFacul(Facultad_sql_1.SQL_FACULTAD.TODASFACULTADES, [], res);
    }
}
const facultadControlador = new FacultadControlador();
exports.default = facultadControlador;
