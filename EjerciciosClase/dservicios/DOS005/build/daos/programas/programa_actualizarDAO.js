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
class Programa_ActualizarDAO {
}
_a = Programa_ActualizarDAO;
Programa_ActualizarDAO.actualPrograma = (sqlActualizar, parameters, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield conexionDB_1.default
        .task((parametro) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(parametro);
        return yield parametro.result(sqlActualizar, parameters);
    }))
        .then((respuesta) => {
        console.log(respuesta);
        res.status(200).json({ respuesta: 'Programa Actualizado' });
    })
        .catch((ERROR) => {
        console.log('Error al actualizar los programas: ', ERROR);
        return res.status(400).json({ ok: false, msg: 'Error al actualizar programas' });
    });
});
exports.default = Programa_ActualizarDAO;
