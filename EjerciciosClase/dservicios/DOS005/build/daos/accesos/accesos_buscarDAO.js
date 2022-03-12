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
class accesos_encontrarDAO {
}
_a = accesos_encontrarDAO;
accesos_encontrarDAO.encontrarPorID = (sqlCrear, parameters, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield conexionDB_1.default.result(sqlCrear, parameters)
        .then((dato) => {
        console.log(dato);
        return res.status(201).json({ respuesta: dato
        });
    })
        .catch((ERROR) => {
        console.log('Error al encontrar el programa: ', ERROR);
        return res.status(400).json({ ok: false, msg: 'Error en la consulta' });
    });
});
exports.default = accesos_encontrarDAO;
