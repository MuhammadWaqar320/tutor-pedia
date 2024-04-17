"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Assessment_1 = __importDefault(require("../models/Assessment"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class AssessmentRepo extends genericRepo_1.default {
    constructor() {
        super(Assessment_1.default);
    }
    addAssessment(assessmentData) {
        const newAssessment = new Assessment_1.default({
            type: assessmentData.type,
            course: assessmentData.course,
            uploadedDate: Date.now(),
            deadline: assessmentData.deadline,
            fileUrl: assessmentData.fileUrl,
            name: assessmentData.name
        });
        return newAssessment.save();
    }
}
exports.default = AssessmentRepo;
