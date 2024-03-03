"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courseRepo_1 = __importDefault(require("../data/repo/courseRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const CourseRepo = new courseRepo_1.default();
class CourseService extends genericService_1.default {
    constructor() {
        super(CourseRepo);
    }
}
exports.default = CourseService;
