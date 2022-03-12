"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const programasRuta_1 = __importDefault(require("../../rutas/programasRuta"));
const materiasRuta_1 = __importDefault(require("../../rutas/materiasRuta"));
const materiaPensumRuta_1 = __importDefault(require("../../rutas/materiaPensumRuta"));
const pensumRuta_1 = __importDefault(require("../../rutas/pensumRuta"));
const semestreRuta_1 = __importDefault(require("../../rutas/semestreRuta"));
const accesoRuta_1 = __importDefault(require("../../rutas/accesoRuta"));
class Servidor {
    constructor() {
        this._app = (0, express_1.default)();
        this.configuracion();
        this.rutas();
    }
    configuracion() {
        this._app.set('PORT', 8088);
        this._app.use((0, cors_1.default)());
        this._app.use((0, morgan_1.default)('dev'));
        this._app.use(express_1.default.json({ limit: '100mb' }));
        this._app.use(express_1.default.urlencoded({ extended: true }));
    }
    rutas() {
        this._app.use('/api/programas', programasRuta_1.default);
        this._app.use('/api/materias', materiasRuta_1.default);
        this._app.use('/api/materiaPensum', materiaPensumRuta_1.default);
        this._app.use('/api/pensum', pensumRuta_1.default);
        this._app.use('/api/semestre', semestreRuta_1.default);
        this._app.use('/api/acceso', accesoRuta_1.default);
    }
    iniciar() {
        this._app.listen(this._app.get('PORT'), () => {
            console.log('Servidor en linea');
        });
    }
}
exports.default = Servidor;
