"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiaPensumControlador_1 = __importDefault(require("../controladores/materiaPensumControlador"));
class MateriaPensumRuta {
    constructor() {
        this.config = () => {
            this.materiaPensumRuta.post('/crearMateriaPensum', materiaPensumControlador_1.default.crearMateriaPensum);
            this.materiaPensumRuta.get('/obtenerMateriaPensum', materiaPensumControlador_1.default.obtenerMateriaPensum);
        };
        this.materiaPensumRuta = (0, express_1.Router)();
        this.config();
    }
}
const materiaPensumRuta = new MateriaPensumRuta();
exports.default = materiaPensumRuta.materiaPensumRuta;
