"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const conexionDB_1 = __importDefault(require("../../config/conexion/conexionDB"));
class Programa_obtenerDAO {
}
_a = Programa_obtenerDAO;
Programa_obtenerDAO.obtenerProgramas = (sqlConsulta, parameters, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield conexionDB_1.default.result(sqlConsulta, parameters)
        .then((respuesta) => {
        return res.status(200).json({
            ok: true,
            resultado: respuesta.rows
        });
    })
        .catch((ERROR) => {
        console.log('Error en obtener los programa: ', ERROR);
        return res.status(400).json({ ok: false, msg: 'Error en la consulta' });
    });
});
exports.default = Programa_obtenerDAO;
