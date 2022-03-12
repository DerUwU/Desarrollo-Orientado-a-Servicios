import express from "express"
import cors from 'cors'
import morgan from 'morgan'
import programasRuta from "../../rutas/programasRuta"
import materiasRuta from "../../rutas/materiasRuta"
import materiaPensumRuta from "../../rutas/materiaPensumRuta"
import pensumRuta from "../../rutas/pensumRuta"
import semestreRuta from "../../rutas/semestreRuta"
import accesoRuta from "../../rutas/accesoRuta"


class Servidor{

    private _app: express.Application

    constructor(){
        this._app = express()
        this.configuracion()
        this.rutas()

    }
    public configuracion():void{
        this._app.set('PORT', 8088)
        this._app.use(cors())
        this._app.use(morgan('dev'))
        this._app.use(express.json({limit:'100mb'}))
        this._app.use(express.urlencoded({extended:true}))
    }
    public rutas():void{
        this._app.use('/api/programas', programasRuta)
        this._app.use('/api/materias', materiasRuta)
        this._app.use('/api/materiaPensum', materiaPensumRuta)
        this._app.use('/api/pensum', pensumRuta)
        this._app.use('/api/semestre', semestreRuta)
        this._app.use('/api/acceso', accesoRuta)
    }
    public iniciar():void{
        this._app.listen(this._app.get('PORT'), ()=>{
            console.log('Servidor en linea')
        })
    }
}
export default Servidor;