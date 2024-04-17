"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const studentRepo_1 = __importDefault(require("../data/repo/studentRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const StudentRepo = new studentRepo_1.default();
class StudentService extends genericService_1.default {
    constructor() {
        super(StudentRepo);
    }
    async createStudent(data) {
        try {
            const dbResponse = await StudentRepo.addStudent(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Student created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
    async getStudentByUserId(userId, populatedFields = [], isPopulated = false) {
        try {
            if (isPopulated) {
                return StudentRepo.getStudentByUserId(userId, populatedFields, isPopulated);
            }
            return StudentRepo.getStudentByUserId(userId);
        }
        catch (error) {
            throw new Error(`An error occurred while processing your request, Error:${error}`);
        }
    }
}
exports.default = StudentService;
