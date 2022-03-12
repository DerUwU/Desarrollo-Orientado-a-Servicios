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
Object.defineProperty(exports, "__esModule", { value: true });
const conexionDB_1 = __importDefault(require("../config/conection/conexionDB"));
class PartidosDAO {
    static obtenerPartidos(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            conexionDB_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((miError) => {
                console.log("Error", miError);
                res.status(400).json({ respuesta: "No Sirvio :c" });
            });
        });
    }
    static crearPartidos(sqlConfirmar, sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionDB_1.default.task((Consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield Consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return yield Consulta.one(sqlCrear, parametros);
                }
                else {
                    return { id_partido: 0 };
                }
            }))
                .then((Respuesta) => {
                if (Respuesta.id_partido != 0) {
                    res.status(200).json({ respuesta: "Partido Creado", nuevoCodigo: Respuesta.id_partido });
                }
                else {
                    res.status(402).json({ respuesta: "Error al crear partido" });
                }
            })
                .catch((MiError) => {
                console.log(MiError);
                res.status(400).json({ respuesta: "Error en las consultas" });
            });
        });
    }
}
exports.default = PartidosDAO;
