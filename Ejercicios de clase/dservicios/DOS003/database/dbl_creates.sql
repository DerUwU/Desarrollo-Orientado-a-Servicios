CREATE table facultades(

    cod_facultad serial not null,
    nombre_facultad varchar(25) not null,
    constraint PK_FACULTADES primary key(cod_facultad)

    );

ALTER table facultades owner to user_node;

CREATE table docentes(

    cod_docente serial not null,
    documento_docente varchar(20) not null,
    nombres_docente varchar(50) not null,
    apellidos_docente varchar(50) not null,
    cod_facultad int4 not null,
    tipo_docente int2 not null
        constraint CK_TIPODOCENTE check(tipo_docente in(1,2,3,4,5,6)),
    constraint PK_DOCENTE primary key(cod_docente)

);

ALTER table docentes
    add constraint FK_FACU_DOCE foreign key(cod_facultad)
    references facultades(cod_facultad)
    on delete restrict on update cascade;

SELECT d.tipo_docente,
	CASE WHEN tipo_docente = 1 then 'Decano'
		WHEN tipo_docente = 2 then 'Decano Titular'
		WHEN tipo_docente = 3 then 'Docente Asociado'
		WHEN tipo_docente = 4 then 'Docente Asistente'
		WHEN tipo_docente = 5 then 'Docente Auxiliar'
	END,
	tipo_docente, cod_docente, documento_docente, nombres_docente, apellidos_docente, cod_facultad 
from docentes d