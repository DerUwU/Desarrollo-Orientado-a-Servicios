--DATOS PARTIDOS

INSERT into partidos(id_partido, nombre_partido)
values(0, 'Cambio Radical');

INSERT into partidos(id_partido, nombre_partido)
values(1, 'Centro Democratico');

INSERT into partidos(id_partido, nombre_partido)
values(2, 'Partido Verde');

INSERT into partidos(id_partido, nombre_partido)
values(3, 'Mira');

INSERT into partidos(id_partido, nombre_partido)
values(4, 'Centro Demoniatico');

INSERT into partidos(id_partido, nombre_partido)
values(5, 'Sin Partido Politico');


SELECT * FROM partidos

--DATOS CANDIDATOS

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(0,'Alberto Muñoz','1990-02-5',0.1,0);

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(1,'Maria Paula','2000-10-11',1,4);

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(2,'Derghikzon Martinez','2000-03-04',0.5,5);

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(3,'Carlos Paez','2000-06-02',0.6,2);

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(4,'Natalia Ramirez','2000-03-04',0.7,5);

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(5,'Ozuna xd','1998-03-05',0.1,1);

INSERT into candidatos(id_candidato, nombre_candidato, fechanac_candidato, eval_candidato, id_partido)
values(6,'aaaaaaaaaa','1945-12-23',1,3);