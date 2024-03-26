"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacher = exports.updateTeacherResolver = exports.getTeacherByIdResolver = exports.getAllTeacherResolver = void 0;
const teacherService_1 = __importDefault(require("../../services/teacherService"));
const TeacherService = new teacherService_1.default();
const getAllTeacherResolver = async () => {
    return TeacherService.getAllData(["user", "students", "courses"], true);
};
exports.getAllTeacherResolver = getAllTeacherResolver;
const getTeacherByIdResolver = (_, args) => {
    return TeacherService.getDataById(args.id, ["user", "students", "courses"], true);
};
exports.getTeacherByIdResolver = getTeacherByIdResolver;
const updateTeacherResolver = async (_, args) => {
    return TeacherService.updateDataById(args.id, args);
};
exports.updateTeacherResolver = updateTeacherResolver;
const deleteTeacher = async (_, args) => {
    return TeacherService.deleteById(args.id);
};
exports.deleteTeacher = deleteTeacher;
