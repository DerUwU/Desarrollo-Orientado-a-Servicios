import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

import rutafacultadapi from '../../routes/FacultadRutas'


class Server {
    private _app: express.Application

    constructor() {
        this._app = express()
        this.config()
        this.routes()
    }

    public config(): void {
        this._app.set('PORT', 8088)
        this._app.use(cors())
        this._app.use(morgan('dev'))
        this._app.use(express.json({ limit: '100mb' }))
        this._app.use(express.urlencoded({ extended : true }))
    }

    public routes(): void {
        this._app.use('/api', rutafacultadapi)
    }

    public init(): void {
        this._app.listen(this._app.get('PORT'), () => {
            console.log(`Servidor corriendo en modo local en http://localhost:${this._app.get('PORT')}`)
        })
    }
}


export default Server