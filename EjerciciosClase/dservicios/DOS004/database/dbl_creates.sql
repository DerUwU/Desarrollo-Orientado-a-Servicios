-- Table: Partidos
CREATE TABLE Partidos (
    id_partido serial  NOT NULL,
    nombre_partido varchar(200)  NOT NULL,
    CONSTRAINT Partidos_pk PRIMARY KEY (id_partido)
);

-- Table: candidatos
CREATE TABLE candidatos (
    id_candidato serial  NOT NULL,0
    nombre_candidato varchar(200)  NOT NULL,
    fechanac_candidato date  NOT NULL,
    eval_candidato numeric(12,2)  NOT NULL,
    id_partido int  NOT NULL,
    Partidos_id_partido int  NOT NULL,
    CONSTRAINT candidatos_pk PRIMARY KEY (id_candidato,id_partido)
);

-- foreign keys
-- Reference: candidatos_Partidos (table: candidatos)
ALTER TABLE candidatos ADD CONSTRAINT candidatos_Partidos
    FOREIGN KEY (Partidos_id_partido)
    REFERENCES Partidos (id_partido)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- CONSULTAS

SELECT c.id_partido, 
	CASE WHEN c.id_partido = 0 then 'Cambio Radical'
		WHEN c.id_partido = 1 then 'Centro Democratico'
		WHEN c.id_partido = 2 then 'Partido Verde'
		WHEN c.id_partido = 3 then 'Mira'
		WHEN c.id_partido = 4 then 'Centro Demoniatico'
        WHEN c.id_partido = 5 then 'Sin Partido Politico'
	END AS nombre_partido, c.eval_candidato, c.id_candidato, c.nombre_candidato, c.fechanac_candidato
	from candidatos c, partidos p 
	WHERE c.id_partido = p.id_partido	
	ORDER BY c.eval_candidato

