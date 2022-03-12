"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testController_1 = __importDefault(require("../controller/testController"));
class testRoutes {
    constructor() {
        this.routesTestAPI = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routesTestAPI.get("/get-info", testController_1.default.attackMe);
    }
}
const TestRoutes = new testRoutes();
exports.default = TestRoutes.routesTestAPI;
