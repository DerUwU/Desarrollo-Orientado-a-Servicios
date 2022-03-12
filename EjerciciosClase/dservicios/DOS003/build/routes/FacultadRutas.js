"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacultadControlador_1 = __importDefault(require("../controller/FacultadControlador"));
const DocenteControlador_1 = __importDefault(require("../controller/DocenteControlador"));
class FacultadesRutas {
    constructor() {
        this.rutaFacultadAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutaFacultadAPI.get("/givef", FacultadControlador_1.default.darFacul);
        this.rutaFacultadAPI.get("/gived", DocenteControlador_1.default.darDocentes);
    }
}
const facultadesRutas = new FacultadesRutas();
exports.default = facultadesRutas.rutaFacultadAPI;
