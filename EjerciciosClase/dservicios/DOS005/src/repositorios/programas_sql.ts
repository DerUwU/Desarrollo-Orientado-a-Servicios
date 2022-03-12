export const SQL_PROGRAMAS={
    TODOS: 'SELECT p.cod_programa, nombre_programa FROM programas p',
    
    CREAR: 'INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa',

    CARGAR: 'SELECT cod_programa, nombre_programa FROM programas WHERE cod_programa = $1',

    BORRAR: 'DELETE FROM programas WHERE cod_programa = $1'
}