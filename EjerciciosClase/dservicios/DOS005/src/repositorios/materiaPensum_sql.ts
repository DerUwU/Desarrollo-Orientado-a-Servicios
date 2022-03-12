export const SQL_MATERIA_PENSUM = {
    TODOS: 'SELECT mp.cod_pensum, p.nombre_pensum, mp.cod_semestre, s.nombre_semestre, mp.cod_materia, m.nombre_materia \
        FROM materiapensum mp, pensums p, semestres s, materias m \
        WHERE mp.cod_pensum = p.cod_pensum AND mp.cod_semestre = s.cod_semestre AND mp.cod_materia = m.cod_materia \
        ORDER BY mp.cod_pensum',
    CONFIRMAR_PENSUM: 'SELECT COUNT(p.cod_pensum) AS pensum_cantidad\
        FROM pensums p \
        WHERE p.cod_pensum = $1',
    CONFIRMAR_MATERIA: 'SELECT COUNT(su.cod_materia) AS materia_cantidad \
        FROM materias m \
        WHERE m.cod_materia = $1',
    CONFIRMAR_SEMESTRE: 'SELECT COUNT(s.cod_semestre) AS semestre_cantidad \
        FROM semestres s \
        WHERE s.cod_semestre = $1',
    CONFIRMAR_MATERIAPENSUM: 'SELECT COUNT(mp.cod_pensum) AS p_cantidad, COUNT(mp.cod_materia) AS s_cantidad \
        FROM materiapensum mp \
        WHERE mp.pensum_id = $1 AND .subject_id = $2',
    CREAR: 'INSERT INTO materiapensum (cod_pensum, cod_materia, cod_semestre) \
        VALUES ($1, $2, $3) \
        RETURNING cod_pensum, cod_materia, cod_semestre'
}