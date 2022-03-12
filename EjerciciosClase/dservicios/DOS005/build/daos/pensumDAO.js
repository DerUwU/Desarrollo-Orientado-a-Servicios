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
class PensumDAO {
}
_a = PensumDAO;
PensumDAO.obtenerPensums = (sqlQuery, params, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield conexionDB_1.default.result(sqlQuery, params);
        return res.status(200).json({ ok: true, resultsQuery: rows });
    }
    catch (error) {
        console.log(('Error: '), error);
        return res.status(500).json({ ok: false, msg: 'Error' });
    }
});
PensumDAO.crearPensum = (sqlConfirmarPrograma, sqlConfirmarPensum, sqlCrear, params, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { programaCantiad } = yield conexionDB_1.default.one(sqlConfirmarPrograma, params);
        if (parseInt(programaCantiad) === 0) {
            return res.status(400).json({ ok: false, msg: `No existe ningún programa con el cod ${params[0]}` });
        }
        const { codPensum, cantidad } = yield conexionDB_1.default.task((query) => __awaiter(void 0, void 0, void 0, function* () {
            const { cantidad } = yield query.one(sqlConfirmarPensum, params);
            if (cantidad === '0')
                return query.one(sqlCrear, params);
            return { pensumId: 0, cantidad };
        }));
        if (codPensum !== 0) {
            return res.status(201).json({ ok: true, msg: 'Pensum creado', newId: codPensum });
        }
        return res.status(400).json({ ok: false, msg: 'Este pensum ya existe', cantidad });
    }
    catch (error) {
        console.log(('Error: '), error);
        return res.status(500).json({ ok: false, msg: 'Error' });
    }
});
exports.default = PensumDAO;
