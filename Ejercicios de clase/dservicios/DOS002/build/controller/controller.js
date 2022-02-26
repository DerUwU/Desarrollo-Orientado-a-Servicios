"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = __importDefault(require("../daos/dao"));
class controller extends dao_1.default {
    searchRoute1(req, res) {
        controller.getInfo1(req, res);
    }
    searchRoute2(req, res) {
        controller.getInfo2(req, res);
    }
    searchRoute3(req, res) {
        controller.getInfo3(req, res);
    }
}
const Controller = new controller();
exports.default = Controller;
