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
class MateriaPensumDAO {
}
_a = MateriaPensumDAO;
MateriaPensumDAO.obtenerMateriaPensum = (sqlQuery, params, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield conexionDB_1.default.result(sqlQuery, params);
        return res.status(200).json({ ok: true, resultQuery: rows });
    }
    catch (error) {
        console.log(('Error'), error);
        return res.status(500).json({ ok: false, msg: 'Error al obtener materiapensum' });
    }
});
MateriaPensumDAO.crearMateriaPensum = (sqlConfirmarPensum, sqlConfirmarMateria, sqlConfirmarSemestre, sqlConfirmarMateriaPensum, sqlCrear, params, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pensumCantidad } = yield conexionDB_1.default.one(sqlConfirmarPensum, params[0]);
        const { materiaCantidad } = yield conexionDB_1.default.one(sqlConfirmarMateria, params[1]);
        const { semestreCantidad } = yield conexionDB_1.default.one(sqlConfirmarSemestre, params[2]);
        if (pensumCantidad === '0')
            return res.status(400).json({ ok: false, msg: `No hay pensum con el id ${params[0]}` });
        if (materiaCantidad === '0')
            return res.status(400).json({ ok: false, msg: `No hay materias con el id ${params[1]}` });
        if (semestreCantidad === '0')
            return res.status(400).json({ ok: false, msg: `No hay semestres con el id ${params[2]}` });
        const { codPensum, codMateria, codSemestre } = yield conexionDB_1.default.task((query) => __awaiter(void 0, void 0, void 0, function* () {
            const { pAmount, sAmount } = yield query.one(sqlConfirmarMateriaPensum, params);
            if (pAmount !== '0' && sAmount !== '0') {
                return { pensumId: 0, subjectId: 0, semesterId: 0 };
            }
            else
                return query.one(sqlCrear, params);
        }));
        if (codPensum === 0 && codMateria === 0 && codSemestre === 0) {
            return res.status(400).json({ ok: false, msg: 'Ya existe una relación del pensum con la materia' });
        }
        return res.status(201).json({ ok: true, msg: 'Matriapensum creado con exito', codPensum, codMateria, codSemestre });
    }
    catch (error) {
        console.log(('Error: '), error);
        return res.status(500).json({ ok: false, msg: 'Error' });
    }
});
exports.default = MateriaPensumDAO;
