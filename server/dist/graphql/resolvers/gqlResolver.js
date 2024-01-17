"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = exports.createUserResolver = exports.getUserByIdResolver = exports.getAllUserResolver = void 0;
const User_1 = __importDefault(require("../../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utilFunctions_1 = require("../../utils/utilFunctions");
const getAllUserResolver = () => {
    return User_1.default.find();
};
exports.getAllUserResolver = getAllUserResolver;
const getUserByIdResolver = (_, args) => {
    return User_1.default.findById(args.id);
};
exports.getUserByIdResolver = getUserByIdResolver;
const createUserResolver = async (_, args) => {
    try {
        const existingUser = await User_1.default.findOne({ email: args.email });
        if (!existingUser) {
            const hashedPassword = await bcrypt_1.default.hash(args.password, 10);
            const newUser = new User_1.default({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                password: hashedPassword,
                phoneNo: args.phoneNo,
                role: args.role,
            });
            const dbResponse = await newUser.save();
            return (0, utilFunctions_1.successResponse)(dbResponse, "User created");
        }
        else {
            return (0, utilFunctions_1.errorResponse)("User is already exist", "ALREADY_EXIST", null);
        }
    }
    catch (error) {
        return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
    }
};
exports.createUserResolver = createUserResolver;
const AuthResolver = async (_, args) => {
    const user = await User_1.default.findOne({ email: args.email });
    console.log("---:", user);
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
