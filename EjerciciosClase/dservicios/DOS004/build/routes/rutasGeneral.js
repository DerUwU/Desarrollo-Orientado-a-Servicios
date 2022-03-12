"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CandidatosController_1 = __importDefault(require("../controller/CandidatosController"));
const PartidosController_1 = __importDefault(require("../controller/PartidosController"));
const PartidosController_2 = __importDefault(require("../controller/PartidosController"));
class GeneralRutas {
    constructor() {
        this.rutasGeneralAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutasGeneralAPI.get("/candidatos", CandidatosController_1.default.darCandidatos);
        this.rutasGeneralAPI.get("/partidos", PartidosController_2.default.darPartidos);
        this.rutasGeneralAPI.post("/partidos/crear", PartidosController_1.default.crearPartidos);
    }
}
const generalRutas = new GeneralRutas();
exports.default = generalRutas.rutasGeneralAPI;
