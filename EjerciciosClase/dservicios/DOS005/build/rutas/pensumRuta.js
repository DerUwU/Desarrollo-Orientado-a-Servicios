"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pensumControlador_1 = __importDefault(require("../controladores/pensumControlador"));
class PensumRuta {
    constructor() {
        this.config = () => {
            this.pensumRuta.get('/obtenerPensum', pensumControlador_1.default.obtenerPensums);
            this.pensumRuta.post('/crearPensum', pensumControlador_1.default.crearPensum);
        };
        this.pensumRuta = (0, express_1.Router)();
        this.config();
    }
}
const pensumRuta = new PensumRuta();
exports.default = pensumRuta.pensumRuta;
