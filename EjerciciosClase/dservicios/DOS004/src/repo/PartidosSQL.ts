export const SQL_PARTIDOS={
    TODO_PARTIDOS:'SELECT p.id_partido, p.nombre_partido FROM partidos p',

    CREAR:'INSERT INTO partidos(nombre_partido) VALUES($1) RETURNING id_partido',

    CONFIRMAR:'SELECT COUNT(p.id_partido) AS cantidad FROM partidos p \
    WHERE LOWER(p.nombre_partido) = LOWER($1)'
}