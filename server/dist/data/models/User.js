"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("../../interfaces/User");
const UserSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    role: {
        type: String,
        enum: [User_1.UserRole.Admin, User_1.UserRole.Teacher, User_1.UserRole.Student],
        default: "Teacher",
    },
    createdAt: {
        type: Number,
    },
    updatedAt: {
        type: Number
    },
    profileUrl: {
        type: String,
    },
});
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
