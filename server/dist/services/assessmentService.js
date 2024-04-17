"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const assessmentRepo_1 = __importDefault(require("../data/repo/assessmentRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const AssessmentRepo = new assessmentRepo_1.default();
class AssessmentService extends genericService_1.default {
    constructor() {
        super(AssessmentRepo);
    }
    async createAssessment(data) {
        try {
            const dbResponse = await AssessmentRepo.addAssessment(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Assessment created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = AssessmentService;
