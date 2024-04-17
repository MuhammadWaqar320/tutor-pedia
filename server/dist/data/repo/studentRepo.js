"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../models/Student"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class StudentRepo extends genericRepo_1.default {
    constructor() {
        super(Student_1.default);
    }
    addStudent(studentData) {
        const newStudent = new Student_1.default({
            user: studentData.user,
            courses: studentData.courses,
            teachers: studentData.teachers,
            updatedAt: Date.now(),
        });
        return newStudent.save();
    }
    getStudentByUserId(id, populatedFields = [], isPopulated = false) {
        if (isPopulated) {
            return this.model.findOne({ user: id }).populate(populatedFields).exec();
        }
        return this.model.findById(id).exec();
    }
}
exports.default = StudentRepo;
