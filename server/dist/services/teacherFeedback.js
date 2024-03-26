"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const teacherFeedbackRepo_1 = __importDefault(require("../data/repo/teacherFeedbackRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const TeacherFeedbackRepo = new teacherFeedbackRepo_1.default();
class TeacherFeedbackService extends genericService_1.default {
    constructor() {
        super(TeacherFeedbackRepo);
    }
    async addTeacherFeedback(data) {
        try {
            const dbResponse = await TeacherFeedbackRepo.addTeacherFeedback(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = TeacherFeedbackService;
