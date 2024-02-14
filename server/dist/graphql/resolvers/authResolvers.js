"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const authService_1 = __importDefault(require("../../services/authService"));
const AuthService = new authService_1.default();
const AuthResolver = async (_, args) => {
    return AuthService.login(args);
};
exports.AuthResolver = AuthResolver;
