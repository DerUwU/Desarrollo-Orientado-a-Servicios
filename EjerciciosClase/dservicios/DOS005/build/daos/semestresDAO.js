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
const conexionDB_1 = __importDefault(require("../config/conexion/conexionDB"));
class SemestreDAO {
}
_a = SemestreDAO;
SemestreDAO.obtenerSemestres = (sqlQuery, parameters, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield conexionDB_1.default.result(sqlQuery, parameters);
        return res.status(200).json({ ok: true, resultsQuery: rows });
    }
    catch (error) {
        console.log(('Error: '), error);
        return res.status(500).json({ ok: false, msg: 'Error' });
    }
});
SemestreDAO.crearSemestre = (sqlConfirmar, sqlCrear, parameters, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codSemestre, cantidad } = yield conexionDB_1.default.task((query) => __awaiter(void 0, void 0, void 0, function* () {
            const { cantidad } = yield query.one(sqlConfirmar, parameters);
            if (parseInt(cantidad) === 0) {
                return yield query.one(sqlCrear, parameters);
            }
            else {
                return { semesterId: 0, cantidad };
            }
        }));
        if (codSemestre !== 0) {
            return res.status(201).json({ ok: true, msg: 'Semestre creado', newId: codSemestre });
        }
        else
            return res.status(400).json({ ok: false, msg: 'Este semestre ya existe', cantidad });
    }
    catch (error) {
        console.log(('Error: '), error);
        return res.status(500).json({ ok: false, msg: 'Error' });
    }
});
exports.default = SemestreDAO;
