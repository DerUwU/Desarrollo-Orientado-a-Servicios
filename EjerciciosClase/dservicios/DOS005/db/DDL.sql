CREATE table programas(
    cod_programa serial not null,
    nombre_programa varchar(200) not null,
    CONSTRAINT PK_PROGRAMAS PRIMARY KEY(cod_programa)
);

CREATE table materias(
    cod_materia serial not null,
    nombre_materia varchar(200) not null,
    referencia_materia varchar(200) not null,
    CONSTRAINT PK_MATERIAS PRIMARY KEY(cod_materia)
);

CREATE table semestres(

    cod_semestre serial not null,
    nombre_semestre varchar(200) not null,
    CONSTRAINT PK_SEMESTRES PRIMARY KEY(cod_semestre)
);

CREATE table pensums(
    cod_pensum serial not null,
    cod_programa int4 not null,
    nombre_pensum varchar(250) not null,
    CONSTRAINT PK_PENSUMS PRIMARY KEY(cod_pensum)
);

CREATE table materiapensum(
    cod_pensum int4 not null,
    cod_materia int4 not null,
    cod_semestre int4 not null,
    CONSTRAINT PK_MATERIAPENSUM PRIMARY KEY(cod_pensum, cod_materia)
);

CREATE table accesos(
    cod_acceso serial not null,
    correo_acceso varchar(200) not null,
    clave_acceso varchar(200) not null,
    CONSTRAINT PK_ACCESOS PRIMARY KEY(cod_acceso)
);

ALTER table accesos owner to user_node;
ALTER table programas owner to user_node;
ALTER table materias owner to user_node;
ALTER table semestres owner to user_node;
ALTER table pensums owner to user_node;
ALTER table materiapensum owner to user_node;


CREATE unique index indice_nombre_programa ON programas (nombre_programa);
CREATE unique index indice_correo_acceso ON accesos (correo_acceso);


ALTER table pensums
 ADD CONSTRAINT FK_PROGRAMAS_PENSUMS FOREIGN KEY(cod_programa)
 REFERENCES programas(cod_programa)
 ON DELETE restrict ON UPDATE cascade;

ALTER table materiapensum
 ADD CONSTRAINT FK_PENSUM_MATERIAPENSUM FOREIGN KEY(cod_pensum)
 REFERENCES pensums(cod_pensum)
 ON DELETE restrict ON UPDATE cascade;

ALTER table materiapensum
 ADD CONSTRAINT FK_MATERIA_MATERIAPENSUM FOREIGN KEY(cod_materia)
 REFERENCES materias(cod_materia)
 ON DELETE restrict ON UPDATE cascade;

ALTER table materiapensum
 ADD CONSTRAINT FK_SEMESTRE_MATERIAPENSUM FOREIGN KEY(cod_semestre)
 REFERENCES semestres(cod_semestre)
 ON DELETE restrict ON UPDATE cascade;