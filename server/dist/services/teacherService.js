"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const teacherRepo_1 = __importDefault(require("../data/repo/teacherRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const TeacherRepo = new teacherRepo_1.default();
class TeacherService extends genericService_1.default {
    constructor() {
        super(TeacherRepo);
    }
    async createTeacher(data) {
        try {
            const dbResponse = await TeacherRepo.addTeacher(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Teacher created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = TeacherService;
