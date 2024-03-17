"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const courseRepo_1 = __importDefault(require("../data/repo/courseRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const CourseRepo = new courseRepo_1.default();
class CourseService extends genericService_1.default {
    constructor() {
        super(CourseRepo);
    }
    async createCourse(data) {
        try {
            const dbResponse = await CourseRepo.addCourse(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Course created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = CourseService;
