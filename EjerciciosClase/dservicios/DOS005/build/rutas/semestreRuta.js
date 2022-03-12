"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const semestreControlador_1 = __importDefault(require("../controladores/semestreControlador"));
class SemestreRuta {
    constructor() {
        this.config = () => {
            this.semestreRuta.get('/obtenerSemestre', semestreControlador_1.default.obtenerSemesters);
            this.semestreRuta.post('/crearSemestre', semestreControlador_1.default.crearSemestres);
        };
        this.semestreRuta = (0, express_1.Router)();
        this.config();
    }
}
const semestreRuta = new SemestreRuta();
exports.default = semestreRuta.semestreRuta;
