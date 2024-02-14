"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRepo_1 = __importDefault(require("../data/repo/userRepo"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserRepo = new userRepo_1.default();
class AuthService {
    async login(data) {
        try {
            const user = await UserRepo.findUserByEmail(data.email);
            if (!user) {
                throw new Error("User not found");
            }
            const isPasswordValid = await bcrypt_1.default.compare(data.password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid password");
            }
            const { _id, firstName, lastName, role, email, profileUrl } = user;
            // Generate and return a token
            const token = jsonwebtoken_1.default.sign({ id: _id, firstName, lastName, email, role, profileUrl }, `${process.env.SECRET_KEY}`, {
                expiresIn: "1d",
            });
            return {
                success: true,
                token: token,
                message: "logged in successfully",
                user: user,
            };
        }
        catch (error) {
            throw new Error(`${error}`);
        }
    }
}
exports.default = AuthService;
