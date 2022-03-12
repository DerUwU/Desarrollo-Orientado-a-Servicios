"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const opcionesConexion_1 = require("./opcionesConexion");
const var_basededatos_1 = __importDefault(require("../dominios/var_basededatos"));
const pgp = (0, pg_promise_1.default)(opcionesConexion_1.opcionesPG);
const pool = pgp(var_basededatos_1.default);
pool.connect()
    .then((con) => {
    console.log('Conexion exitosa a la BD: ', var_basededatos_1.default.database, con.done);
})
    .catch((miError) => {
    console.log(miError);
});
exports.default = pool;
