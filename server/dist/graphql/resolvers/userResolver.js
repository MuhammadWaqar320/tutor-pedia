"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = exports.createUserResolver = exports.getUserByIdResolver = exports.getAllUserResolver = void 0;
const User_1 = __importDefault(require("../../data/models/User"));
const userService_1 = __importDefault(require("../../services/userService"));
const UserService = new userService_1.default();
const getAllUserResolver = async () => {
    const responseData = await UserService.getAllData();
    return responseData;
};
exports.getAllUserResolver = getAllUserResolver;
const getUserByIdResolver = (_, args) => {
    return User_1.default.findById(args.id);
};
exports.getUserByIdResolver = getUserByIdResolver;
const createUserResolver = async (_, args) => {
    const responseData = await UserService.createUser(args);
    return responseData;
};
exports.createUserResolver = createUserResolver;
const AuthResolver = async (_, args) => {
    const user = await User_1.default.findOne({ email: args.email });
    if (!user) {
        return {
            success: false,
            token: "",
            message: "user not found",
            user: null,
        };
    }
    return {
        success: true,
        token: "sdfkl234kjf234234",
        message: "good",
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
        },
    };
};
exports.AuthResolver = AuthResolver;
