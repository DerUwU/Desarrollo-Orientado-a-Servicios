# Repaso
## Inicio del proyecto
#### Inicializar el gestor de paquetes
```txt
npm init -y
```
### Instalar los modulos necesarios
```txt
npm i cors morgan express pg-promise 
```
### Instalar el tipado de los modulos
```txt
npm i @types/cors --save-dev
```
```txt
npm i @types/morgan --save-dev
```
```txt
npm i @types/pg-promise --save-dev
```
```txt
npm i @types/express --save-dev
```
### Instalar nodemon en modo desarrollo
```txt
npm i nodemon --save-dev
```
### Inicilizar y configurar ts
```txt
tsc --init

```
Abrir el archivo `tsconfig.json` y cambiar lo siguiente:
```js
{
    "compilerOptions": {
        ...
    "outDir": "./build"
    ...

}

}

```
### Configurar los scripts del proyecto
Abrir el archivo `package.json` y cambiar lo siguiente:
```json
{
 "scripts": {
    ...
    "buid": "tsc -w",
    "dev": "nodemon build/index.js"
 }
  }
```
## Postgres
### DDL(data definition language)
```sql
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
ALTER table programas owner to user_node;
ALTER table materias owner to user_node;
ALTER table semestres owner to user_node;
ALTER table pensums owner to user_node;
ALTER table materiapensum owner to user_node;


CREATE unique index indice_nombre_programa ON programas (nombre_programa);

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
```
### DML(data manipulation language)
```sql
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
```
## Conectar nuestro proyecto a la base de datos
### Crear variables de conexion

Creamos el archivo `src/config/dominios/var_db.ts`
```ts
export default {
    user: 'user_node',
    host: 'localhost',
    database: 'db_tercera',
    password: '1234',
    port: 5432
}
```
### Camelizar las columnas de la base de datos
```ts
import pgPromise from 'pg-promise';

export interface IClient { };

export function camelizeColumns(data: any) {
  const tmp = data[0];
  for (const prop in tmp) {
    const camel = pgPromise.utils.camelize(prop);
    if (!(camel in tmp)) {
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        d[camel] = d[prop];
        delete d[prop];
      }
    }
  }
}

```
### Definir opciones para la conexion con postgres
```ts
import pgPromise from 'pg-promise';
import { camelizeColumns, IClient } from './funcionesConexion';

export const opcionesPG: pgPromise.IInitOptions<IClient> = {
  receive(data, result, e) { camelizeColumns(data); }
};

```
### Establecer la coneción con la base de datos
```ts
import pgPromise from "pg-promise";
import { opcionesPG } from "./opcionesConexion";
import variablesConexion from "../dominios/var_db"

const pgp = pgPromise(opcionesPG);
const pool = pgp(variablesConexion);

pool.connect()
.then((conn)=>{
    console.log("Conectado a: ", variablesConexion.database);
    conn.done();
})
.catch((miError)=>{
    console.log(miError);
});

export default pool;
```
## TABLA: programas
### Programas: Repositorio
```ts
export const SQL_PROGRAMAS={
    TODOS: 'SELECT p.cod_programa, nombre_programa FROM programas p',
    
    CREAR: 'INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa'
}
```
### Programas: DAO(Data access object)
#### Obtener todos los programas
```ts
import {Response} from 'express';
import pool from '../config/conexion/conexionDB';


class ProgramaDAO{
    protected static obtenerProgramas = async(sqlConsulta:string, parameters:any, res: Response): Promise<any>=>{
        await pool.result(sqlConsulta, parameters)
        .then((respuesta:any) =>{
            return res.status(200).json({
                ok: true, 
                resultado: respuesta.rows
            })


        })
        .catch((ERROR:any)=>{
            console.log('Error en obtener los programa: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})
        
        })



    }
}

export default ProgramaDAO
```
#### Crear un programa

```ts
import {Response} from 'express';
import pool from '../config/conexion/conexionDB';


class ProgramaDAO{


    protected static crearProgrmas = async(sqlCrear:string, parameters:any, res:Response):Promise<any>=>{
        await pool.one(sqlCrear, parameters)
        .then((respuesta:any)=>{
            return res.status(201).json({ok:true, msg: 'Programa creado', nuevoID: respuesta.codPrograma
            })

        })
        .catch((ERROR:any)=>{
            console.log('Error en crear el programa: ', ERROR)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})

        })


    }
}

export default ProgramaDAO
```
### Programas: controlador`
```ts
import ProgramaDAO from "../daos/programaDAO"
import { SQL_PROGRAMAS } from "../repositorios/programas_sql"
import {Request, Response} from 'express';

class ProgramasControlador extends ProgramaDAO{
    public obtenerProgrmas = (req:Request, res:Response):void=>{
        ProgramaDAO.obtenerProgramas(SQL_PROGRAMAS.TODOS, [], res )
    }

    public crearPrograma = (req:Request, res:Response):void =>{
        const {nombrePrograma} = req.body
        ProgramaDAO.crearProgrmas(SQL_PROGRAMAS.CREAR, [nombrePrograma], res)

    }

}
const programaControlador = new ProgramasControlador()
export default programaControlador
```
### Rutas: programas
```ts
import { Router } from "express";
import programaControlador from "../controladores/programasControlador";

class ProgramaRuta{
    public programaRuta: Router

    constructor(){
        this.programaRuta = Router()
        this.configuracion()
    }

    public configuracion():void{
        this.programaRuta.get('/obtnerprograma', programaControlador.obtenerProgrmas)
        this.programaRuta.post('/crearprograma', programaControlador.crearPrograma)
    }
}
const programaRuta = new ProgramaRuta()
export default programaRuta.programaRuta
```
## Servidor
```ts
import express from "express"
import cors from 'cors'
import morgan from 'morgan'
import programasRuta from "../../rutas/programasRuta"


class Servidor{

    private _app: express.Application

    constructor(){
        this._app = express()
        this.configuracion()
        this.rutas()

    }
    public configuracion():void{
        this._app.set('PORT', 8082)
        this._app.use(cors())
        this._app.use(morgan('dev'))
        this._app.use(express.json({limit:'100mb'}))
        this._app.use(express.urlencoded({extended:true}))
    }
    public rutas():void{
        this._app.use('/api/programas', programasRuta)
    }
    public iniciar():void{
        this._app.listen(this._app.get('PORT'), ()=>{
            console.log('Servidor en linea')
        })
    }
}
export default Servidor;
```
## Tabla: Materias
### Repositorio: materias
```ts
export const SQL_MATERIAS = {
    TODOS: 'SELECT m.cod_materias, m.nombre_materia, m.referencia_materia FROM materias m',

    CONFIRMAR: 'SELECT COUNT(m.referencia_materia) AS cantidad FROM materias m WHERE LOWER(m.referencia_materia) = LOWER($2)',

    CREAR: 'INSERT INTO materias(nombre_materia, referencia_materia) VALUES($1, $2) RETURNING cod_materia'
}
```
### DAO: materias
```ts
import { Response } from "express";
import pool from "../config/conexion/conexionDB";

class MateriasDAO{
    protected static async obtenerMaterias(sqlConsulta:string, parameters:any, res:Response): Promise<any>{
        try {
            const {rows} = await pool.result(sqlConsulta, parameters)
            return res.status(200).json({ok:true, resultados: rows})

            
        } catch (error) {
            console.log('Error en obtener matwrias',error)
            return res.status(400).json({ok:false, msg:'Error en la consulta'})
            
        }


    }

    protected static async crearMaterias(sqlConfirmar:string, sqlCrear:string, params:any, res:Response): Promise<any>{
        await pool.task(async consulta=>{
            const {cantidad} = await consulta.one(sqlConfirmar, params)
            if (cantidad == '0') {
                return await consulta.one(sqlCrear, params)
                
            } else {
                return {codMateria: 0, cantidad}
            }

        })
        .then(({codMateria, cantidad})=>{
            if (codMateria !=0) {
                return res.status(201).json({ok:true, msg: 'Materia creada', nuevoID: codMateria})
                
            } else {
                return res.status(400).json({ok:false, msg:'materia existente', cantidad})
                
            }

        })
        .catch((error:any)=>{
            console.log('Error en la creacion de materias', error)
            return res.status(500).json({ok:false, msg:'Comuniquese con el admin'})
        })
    }

}
```

### Materias: controlador 
```ts
import { Response, Request } from "express";
import MateriasDAO from "../daos/materiasDAO";
import { SQL_MATERIAS } from "../repositorios/materias_sql";

class MateriasControlador extends MateriasDAO{
    public obtenerMaterias(req:Request, res:Response):void{
        MateriasDAO.obtenerMaterias(SQL_MATERIAS.TODOS, [], res)


    }
    public crearMaterias(req:Request, res:Response):void{
        const {nombreMateria, referenciaMateria} = req.body;
        MateriasDAO.crearMaterias(SQL_MATERIAS.CONFIRMAR, SQL_MATERIAS.CREAR, [nombreMateria, referenciaMateria], res)

    }
}
const materiasControlador = new MateriasControlador()
export default materiasControlador
```
### Materias: rutas
```ts
import { Router } from "express";
import materiasControlador from "../controladores/materiasControlador";

class MateriasRutas{
    public materiasRuta: Router


    constructor(){
        this.materiasRuta = Router()
        this.configuracion()
    }
    public configuracion():void{
        this.materiasRuta.get('/obtenermateria', materiasControlador.obtenerMaterias)
        this.materiasRuta.post('/crearmateria', materiasControlador.crearMaterias)
    }
    
}
const materiasRutas = new MateriasRutas()
export default materiasRutas.materiasRuta
```
