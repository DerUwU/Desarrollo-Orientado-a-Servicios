"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacultadControlador_1 = __importDefault(require("../../src/controller/FacultadControlador"));
class FacultadesRutas {
    constructor() {
        this.rutaFacultadAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.rutaFacultadAPI.get("../lasquiero", FacultadControlador_1.default.darFacul);
    }
}
const facultadesRutas = new FacultadesRutas();
exports.default = facultadesRutas.rutaFacultadAPI;
