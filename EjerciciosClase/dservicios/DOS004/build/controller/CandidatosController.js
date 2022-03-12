"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CandidatosDAO_1 = __importDefault(require("../daos/CandidatosDAO"));
const CandidatosSQL_1 = require("../repo/CandidatosSQL");
class CandidatosControlador extends CandidatosDAO_1.default {
    darCandidatos(req, res) {
        CandidatosControlador.obtenerCandidatos(CandidatosSQL_1.SQL_CANDIDATOS.TODO_CANDIDATOS, [], res);
    }
}
const candidatosControlador = new CandidatosControlador();
exports.default = candidatosControlador;
