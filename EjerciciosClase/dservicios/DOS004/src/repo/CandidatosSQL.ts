export const SQL_CANDIDATOS ={
    TODO_CANDIDATOS: "SELECT c.id_partido, \
	CASE WHEN c.id_partido = 0 then '\Cambio Radical'\
		WHEN c.id_partido = 1 then '\Centro Democratico'\
		WHEN c.id_partido = 2 then '\Partido Verde'\
		WHEN c.id_partido = 3 then '\Mira'\
		WHEN c.id_partido = 4 then '\Centro Demoniatico'\
        WHEN c.id_partido = 5 then '\Sin Partido Politico'\
	END AS nombre_partido, c.eval_candidato, c.id_candidato, c.nombre_candidato, c.fechanac_candidato\
    	from candidatos c, partidos p\
	WHERE c.id_partido = p.id_partido\
	ORDER BY c.eval_candidato"
} 