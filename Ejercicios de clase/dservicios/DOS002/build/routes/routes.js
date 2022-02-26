"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller/controller"));
class route {
    constructor() {
        this.routeAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routeAPI.get("/ruta1", controller_1.default.searchRoute1);
        this.routeAPI.get("/ruta2", controller_1.default.searchRoute2);
        this.routeAPI.get("/ruta3", controller_1.default.searchRoute3);
    }
}
const Route = new route();
exports.default = Route.routeAPI;
