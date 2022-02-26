"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testDAO_1 = __importDefault(require("../daos/testDAO"));
class TestController extends testDAO_1.default {
    attackMe(req, res) {
        TestController.getInfo(req, res);
    }
}
const testController = new TestController();
exports.default = testController;
