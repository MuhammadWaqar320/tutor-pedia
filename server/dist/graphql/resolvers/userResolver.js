"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserResolver = exports.createUserResolver = exports.getUserByIdResolver = exports.getAllUserResolver = void 0;
const userService_1 = __importDefault(require("../../services/userService"));
const UserService = new userService_1.default();
const getAllUserResolver = async () => {
    return UserService.getAllData();
};
exports.getAllUserResolver = getAllUserResolver;
const getUserByIdResolver = (_, args) => {
    return UserService.getDataById(args.id);
};
exports.getUserByIdResolver = getUserByIdResolver;
const createUserResolver = async (_, args) => {
    return UserService.createUser(args);
};
exports.createUserResolver = createUserResolver;
const updateUserResolver = async (_, args) => {
    return UserService.updateDataById(args.id, args);
};
exports.updateUserResolver = updateUserResolver;
const deleteUser = async (_, args) => {
    return UserService.deleteById(args.id);
};
exports.deleteUser = deleteUser;
