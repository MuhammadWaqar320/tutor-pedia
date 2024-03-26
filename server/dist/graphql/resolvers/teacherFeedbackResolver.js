"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacherFeedbackResolver = exports.updateTeacherFeedbackResolver = exports.createTeacherFeedbackResolver = exports.getTeacherFeedbackByIdResolver = exports.getAllTeacherFeedbacksResolver = void 0;
const teacherFeedback_1 = __importDefault(require("../../services/teacherFeedback"));
const TFService = new teacherFeedback_1.default();
const getAllTeacherFeedbacksResolver = async () => {
    return TFService.getAllData(["teacher", "student"], true);
};
exports.getAllTeacherFeedbacksResolver = getAllTeacherFeedbacksResolver;
const getTeacherFeedbackByIdResolver = async (_, args) => {
    return TFService.getDataById(args.id, ["teacher", "student"], true);
};
exports.getTeacherFeedbackByIdResolver = getTeacherFeedbackByIdResolver;
const createTeacherFeedbackResolver = async (_, args) => {
    return TFService.addTeacherFeedback(args);
};
exports.createTeacherFeedbackResolver = createTeacherFeedbackResolver;
const updateTeacherFeedbackResolver = async (_, args) => {
    return TFService.updateDataById(args.id, args);
};
exports.updateTeacherFeedbackResolver = updateTeacherFeedbackResolver;
const deleteTeacherFeedbackResolver = async (_, args) => {
    return TFService.deleteById(args.id);
};
exports.deleteTeacherFeedbackResolver = deleteTeacherFeedbackResolver;
