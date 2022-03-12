import pgPromise from "pg-promise";
import { opcionesPG } from "./opcionesConexion";
import variableConexion from "../dominios/var_basededatos";

const pgp = pgPromise(opcionesPG);
const pool = pgp(variableConexion);

pool.connect()
    .then((con)=>{
        console.log('Conexion exitosa a la BD: ', variableConexion.database ,
        con.done)
    })
    .catch((miError)=>{
        console.log(miError)
    });

export default pool;
