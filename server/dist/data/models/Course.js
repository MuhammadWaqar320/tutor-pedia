"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const CourseSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    preRequisites: {
        type: String
    },
    updatedAt: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Number,
        required: true
    },
    coverPhotoUrl: {
        type: String
    },
    language: {
        type: String,
        required: true
    },
    isCertified: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number
    },
    startDate: {
        type: Number
    },
    endDate: {
        type: Number
    },
    teacher: { type: mongoose_2.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    students: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Student' }],
});
const CourseModel = mongoose_1.default.model("Course", CourseSchema);
exports.default = CourseModel;
