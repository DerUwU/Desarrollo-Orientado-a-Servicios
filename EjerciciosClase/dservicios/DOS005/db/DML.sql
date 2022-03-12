INSERT INTO programas(nombre_programa) VALUES('Ingeniería de sistemas');
INSERT INTO programas(nombre_programa) VALUES('Arquitectura');
INSERT INTO programas(nombre_programa) VALUES('Derecho');

INSERT INTO materias(nombre_materia, referencia_materia) VALUES('DOS','IS');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Diseño','ARQ');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Derecho romano','DER');

INSERT INTO semestres(nombre_semestre) VALUES('Semestre 1');
INSERT INTO semestres(nombre_semestre) VALUES('Semestre 2');
INSERT INTO semestres(nombre_semestre) VALUES('Semestre 3');

INSERT INTO pensums(cod_programa, nombre_pensum) VALUES (1, 'Pensum 2022-1');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES (2, 'Pensum 2000-2');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES (1, 'Pensum 2010-2');

INSERT INTO materiapensum(cod_pensum, cod_materia, cod_semestre) VALUES(1, 1, 3);
INSERT INTO materiapensum(cod_pensum, cod_materia, cod_semestre) VALUES(2, 2, 1);
INSERT INTO materiapensum(cod_pensum, cod_materia, cod_semestre) VALUES(1, 3, 2);

INSERT INTO accesos(correo_acceso, clave_acceso) VALUES('der@gmail.com', "123456");
INSERT INTO accesos(correo_acceso, clave_acceso) VALUES('polar@gmail.com', "123456");
INSERT INTO accesos(correo_acceso, clave_acceso) VALUES('mapu@gmail.com', "123456");
