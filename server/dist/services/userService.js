"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const utilFunctions_1 = require("../utils/utilFunctions");
const userRepo_1 = __importDefault(require("../data/repo/userRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const studentService_1 = __importDefault(require("./studentService"));
const user_1 = require("../interfaces/user");
const teacherService_1 = __importDefault(require("./teacherService"));
const UserRepo = new userRepo_1.default();
const StuService = new studentService_1.default();
const TService = new teacherService_1.default();
class UserService extends genericService_1.default {
    constructor() {
        super(UserRepo);
    }
    async createUser(data) {
        try {
            const existingUser = await UserRepo.findUserByEmail(data.email);
            if (!existingUser) {
                const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
                const newUser = {
                    ...data,
                    password: hashedPassword,
                };
                const dbResponse = await UserRepo.addUser(newUser);
                if (data.role === user_1.UserRole.Student) {
                    await StuService.createStudent({ user: dbResponse._id,
                        updatedAt: Date.now(),
                        courses: [],
                        teachers: []
                    });
                }
                else if (data.role === user_1.UserRole.Teacher) {
                    const a = await TService.createTeacher({
                        specialization: data?.specialization,
                        bio: data?.bio,
                        qualification: data?.qualification,
                        courses: [],
                        students: [],
                        user: dbResponse._id,
                    });
                }
                return (0, utilFunctions_1.successResponse)(dbResponse, "User created");
            }
            else {
                return (0, utilFunctions_1.errorResponse)("User is already exist", "ALREADY_EXIST", null);
            }
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = UserService;
