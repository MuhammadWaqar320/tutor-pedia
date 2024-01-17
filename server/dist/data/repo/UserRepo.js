"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class UserRepo extends genericRepo_1.default {
    constructor() {
        super(User_1.default);
    }
    addUser(userData) {
        const newUser = new User_1.default({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            phoneNo: userData.phoneNo,
            role: userData.role,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
        return newUser.save();
    }
    findUserByEmail(email) {
        return User_1.default.findOne({ email: email }).exec();
    }
}
exports.default = UserRepo;
