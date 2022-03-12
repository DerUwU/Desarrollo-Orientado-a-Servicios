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
class MateriasDAO {
    static obtenerMaterias(sqlConsulta, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { rows } = yield conexionDB_1.default.result(sqlConsulta, parameters);
                return res.status(200).json({ ok: true, resultados: rows });
            }
            catch (error) {
                console.log('Error en obtener matwrias', error);
                return res.status(400).json({ ok: false, msg: 'Error en la consulta' });
            }
        });
    }
    static crearMaterias(sqlConfirmar, sqlCrear, params, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionDB_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const { cantidad } = yield consulta.one(sqlConfirmar, params);
                if (cantidad == '0') {
                    return yield consulta.one(sqlCrear, params);
                }
                else {
                    return { codMateria: 0, cantidad };
                }
            }))
                .then(({ codMateria, cantidad }) => {
                if (codMateria != 0) {
                    return res.status(201).json({ ok: true, msg: 'Materia creada', nuevoID: codMateria });
                }
                else {
                    return res.status(400).json({ ok: false, msg: 'materia existente', cantidad });
                }
            })
                .catch((error) => {
                console.log('Error en la creacion de materias', error);
                return res.status(500).json({ ok: false, msg: 'Comuniquese con el admin' });
            });
        });
    }
}
_a = MateriasDAO;
MateriasDAO.encontrarPorID = (sqlCrear, parameters, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield conexionDB_1.default.one(sqlCrear, parameters)
        .then((dato) => {
        console.log(dato);
        return res.status(201).json({ respuesta: dato
        });
    })
        .catch((ERROR) => {
        console.log('Error al encontrar la materia: ', ERROR);
        return res.status(400).json({ ok: false, msg: 'Error en la consulta' });
    });
});
exports.default = MateriasDAO;
