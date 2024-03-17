"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherFeedback_1 = __importDefault(require("../models/TeacherFeedback"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class TeacherFeedbackRepo extends genericRepo_1.default {
    constructor() {
        super(TeacherFeedback_1.default);
    }
    addTeacherFeedback(feedbackData) {
        const newFeedback = new TeacherFeedback_1.default({
            student: feedbackData.student,
            teacher: feedbackData.teacher,
            feedback: feedbackData.feedback,
            rating: feedbackData.rating,
            feedbackDate: Date.now(),
        });
        return newFeedback.save();
    }
}
exports.default = TeacherFeedbackRepo;
