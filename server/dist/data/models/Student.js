"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const StudentSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_2.Schema.Types.ObjectId, ref: 'User', required: true },
    courses: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Course' }],
    teachers: [{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Teacher' }],
    updatedAt: { type: Number }
});
const StudentModel = mongoose_1.default.model("Student", StudentSchema);
exports.default = StudentModel;
