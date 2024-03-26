"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourseResolver = exports.updateCourseResolver = exports.createCourseResolver = exports.getCourseByIdResolver = exports.getAllCoursesResolver = void 0;
const courseService_1 = __importDefault(require("../../services/courseService"));
const courseService = new courseService_1.default();
const getAllCoursesResolver = async () => {
    return courseService.getAllData(["teacher", "students"], true);
};
exports.getAllCoursesResolver = getAllCoursesResolver;
const getCourseByIdResolver = async (_, args) => {
    return courseService.getDataById(args.id, ["teacher", "students"], true);
};
exports.getCourseByIdResolver = getCourseByIdResolver;
const createCourseResolver = async (_, args) => {
    return courseService.createCourse(args);
};
exports.createCourseResolver = createCourseResolver;
const updateCourseResolver = async (_, args) => {
    return courseService.updateDataById(args.id, args);
};
exports.updateCourseResolver = updateCourseResolver;
const deleteCourseResolver = async (_, args) => {
    return courseService.deleteById(args.id);
};
exports.deleteCourseResolver = deleteCourseResolver;
