export const SQL_PENSUMS = {
    TODOS: 'SELECT p.cod_pensum, p.cod_programa, pr.nombre_programa, p.nombre_pensum \
        FROM pensums p, programas pr \
        WHERE p.cod_programa = pr.cod_programa \
        ORDER BY pr.nombre_programa',
    CONFIRMAR_PROGRAMA: 'SELECT COUNT(pr.cod_programa) AS programas_cantidad \
        FROM programas pr \
        WHERE pr.cod_programa = $1',
    CONFIRMAR_PENSUM: 'SELECT COUNT(p.nombre_pensum) AS cantidad \
        FROM pensums p \
        WHERE LOWER(p.nombre_pensum) = LOWER($2)',
    CREAR: 'INSERT INTO pensums (cod_programa, nombre_pensum) \
        VALUES ($1, $2) \
        RETURNING cod_pensum'
}