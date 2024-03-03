"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacherFeedbackRepo_1 = __importDefault(require("../data/repo/teacherFeedbackRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const TeacherFeedbackRepo = new teacherFeedbackRepo_1.default();
class TeacherFeedbackService extends genericService_1.default {
    constructor() {
        super(TeacherFeedbackRepo);
    }
}
exports.default = TeacherFeedbackService;
