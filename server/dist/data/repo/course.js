"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = __importDefault(require("../models/Course"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class CourseRepo extends genericRepo_1.default {
    constructor() {
        super(Course_1.default);
    }
    addCourse(courseData) {
        const newCourse = new Course_1.default({
            name: courseData.name,
            category: courseData.category,
            description: courseData.description,
            price: courseData.price,
            level: courseData.level,
            duration: courseData.duration,
            preRequisites: courseData.preRequisites,
            updatedAt: Date.now(),
            createdAt: Date.now(),
            coverPhotoUrl: courseData.coverPhotoUrl,
            language: courseData.language,
            isCertified: courseData.isCertified,
            rating: courseData.rating,
            startDate: courseData.startDate,
            endDate: courseData.endDate,
            teacher: courseData.teacher,
            students: courseData.students,
        });
        return newCourse.save();
    }
}
exports.default = CourseRepo;
