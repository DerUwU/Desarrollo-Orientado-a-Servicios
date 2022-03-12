"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PartidosDAO_1 = __importDefault(require("../daos/PartidosDAO"));
const PartidosSQL_1 = require("../repo/PartidosSQL");
class PartidosControlador extends PartidosDAO_1.default {
    darPartidos(req, res) {
        PartidosControlador.obtenerPartidos(PartidosSQL_1.SQL_PARTIDOS.TODO_PARTIDOS, [], res);
    }
    crearPartidos(req, res) {
        const nombre = req.body.nombrePartido;
        const parametro = [nombre];
        PartidosControlador.crearPartidos(PartidosSQL_1.SQL_PARTIDOS.CREAR, PartidosSQL_1.SQL_PARTIDOS.CONFIRMAR, parametro, res);
    }
}
const partidosControlador = new PartidosControlador();
exports.default = partidosControlador;
