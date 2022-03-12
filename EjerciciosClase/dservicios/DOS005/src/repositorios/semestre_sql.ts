export const SQL_SEMESTRES = {
    TODOS: 'SELECT s.cod_semestre, s.nombre_semestre FROM semestres s ORDER BY s.nombre_semestre',
    CONFIRMAR: 'SELECT COUNT(s.nombre_semestre) AS amount FROM semestres s WHERE LOWER(s.nombre_semestre) = LOWER($1)',
    CREAR: 'INSERT INTO semestres (nombre_semestre) VALUES ($1) RETURNING cod_semestre'
}