"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_1 = __importDefault(require("../models/Teacher"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class TeacherRepo extends genericRepo_1.default {
    constructor() {
        super(Teacher_1.default);
    }
    addTeacher(teacherData) {
        const newTeacher = new Teacher_1.default({
            specialization: teacherData.specialization,
            bio: teacherData.bio,
            qualification: teacherData.qualification,
            courses: teacherData.courses,
            students: teacherData.students,
            user: teacherData.user,
        });
        return newTeacher.save();
    }
}
exports.default = TeacherRepo;
