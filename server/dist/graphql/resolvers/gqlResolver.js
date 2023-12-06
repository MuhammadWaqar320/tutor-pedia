"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = exports.createUserResolver = exports.getUserByIdResolver = exports.getAllUserResolver = void 0;
const User_1 = __importDefault(require("../../models/User"));
const getAllUserResolver = () => {
    return User_1.default.find();
};
exports.getAllUserResolver = getAllUserResolver;
const getUserByIdResolver = (_, args) => {
    return User_1.default.findById(args.id);
};
exports.getUserByIdResolver = getUserByIdResolver;
const createUserResolver = (_, args) => {
    const newUser = new User_1.default({
        username: args.username,
        email: args.email,
        password: args.password,
        phoneNo: args.phoneNo,
    });
    return newUser.save();
};
exports.createUserResolver = createUserResolver;
const AuthResolver = async (_, args) => {
    return User_1.default.findOne({ email: args.email });
};
exports.AuthResolver = AuthResolver;
