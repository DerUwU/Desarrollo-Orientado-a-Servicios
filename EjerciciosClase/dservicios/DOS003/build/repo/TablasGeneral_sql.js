"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DOCENTES = exports.SQL_FACULTAD = void 0;
exports.SQL_FACULTAD = {
    TODASFACULTADES: 'SELECT f.cod_facultad, f.nombre_facultad from facultades f'
};
exports.SQL_DOCENTES = {
    TODASDOCENTES: "SELECT d.tipo_docente, \
	CASE WHEN tipo_docente = 1 then '\Decano'\
		WHEN tipo_docente = 2 then '\Decano Titular'\
		WHEN tipo_docente = 3 then '\Docente Asociado'\
		WHEN tipo_docente = 4 then '\Docente Asistente'\
		WHEN tipo_docente = 5 then '\Docente Auxiliar'\
	END AS tipo_docente, d.cod_docente, d.documento_docente, d.nombres_docente, d.apellidos_docente, f.nombre_facultad \
from docentes d, facultades f \
WHERE f.cod_facultad = d.cod_facultad"
};
