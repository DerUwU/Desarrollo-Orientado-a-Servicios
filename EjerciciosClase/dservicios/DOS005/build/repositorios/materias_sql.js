"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIAS = void 0;
exports.SQL_MATERIAS = {
    TODOS: 'SELECT m.cod_materia, m.nombre_materia, m.referencia_materia FROM materias m',
    CONFIRMAR: 'SELECT COUNT(m.referencia_materia) AS cantidad FROM materias m WHERE LOWER(m.referencia_materia) = LOWER($2)',
    CREAR: 'INSERT INTO materias(nombre_materia, referencia_materia) VALUES($1, $2) RETURNING cod_materia',
    CARGAR: 'SELECT cod_materia, nombre_materia, referencia_materia FROM materias WHERE cod_materia = $1',
    BORRAR: 'DELETE FROM materias WHERE cod_materia = $1'
};
