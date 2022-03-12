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