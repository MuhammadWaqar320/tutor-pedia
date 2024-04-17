"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentByUserIdResolver = exports.deleteStudentResolver = exports.updateStudentResolver = exports.getStudentByIdResolver = exports.getAllStudentResolver = void 0;
const studentService_1 = __importDefault(require("../../services/studentService"));
const StudentService = new studentService_1.default();
const getAllStudentResolver = async () => {
    return StudentService.getAllData(["teachers", "courses", "user"], true);
};
exports.getAllStudentResolver = getAllStudentResolver;
const getStudentByIdResolver = (_, args) => {
    return StudentService.getDataById(args.id, ["teachers", "courses", "user"], true);
};
exports.getStudentByIdResolver = getStudentByIdResolver;
const updateStudentResolver = async (_, args) => {
    return StudentService.updateDataById(args.id, args);
};
exports.updateStudentResolver = updateStudentResolver;
const deleteStudentResolver = async (_, args) => {
    return StudentService.deleteById(args.id);
};
exports.deleteStudentResolver = deleteStudentResolver;
const getStudentByUserIdResolver = (_, args) => {
    return StudentService.getStudentByUserId(args.user, ["teachers", "courses", "user"], true);
};
exports.getStudentByUserIdResolver = getStudentByUserIdResolver;
