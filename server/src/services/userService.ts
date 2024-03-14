import bcrypt from "bcrypt";
import { successResponse, errorResponse } from "../utils/utilFunctions";
import { UserInterface } from "../interfaces/user";
import UserRepoClass from "../data/repo/userRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";
import StudentService from "./studentService";
import { UserRole } from "../interfaces/user";
import TeacherService from "./teacherService";
import { TeacherInterface } from "../interfaces/teacher";

const UserRepo = new UserRepoClass();
const StuService = new StudentService();
const TService = new TeacherService();

class UserService extends GenericService<UserInterface & Document> {
  constructor() {
    super(UserRepo);
  }

  async createUser(data: UserInterface & TeacherInterface) {
    try {
      const existingUser = await UserRepo.findUserByEmail(data.email);
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser: UserInterface = {
          ...data,
          password: hashedPassword,
        };
        const dbResponse = await UserRepo.addUser(newUser);
        if (data.role === UserRole.Student) {
          await StuService.createStudent({
            user: dbResponse._id,
            updatedAt: Date.now(),
            courses: [],
            teachers: [],
          });
        } else if (data.role === UserRole.Teacher) {
          await TService.createTeacher({
            specialization: data?.specialization,
            bio: data?.bio,
            qualification: data?.qualification,
            courses: [],
            students: [],
            user: dbResponse._id,
          });
        }
        return successResponse(dbResponse, "User created");
      } else {
        return errorResponse("User is already exist", "ALREADY_EXIST", null);
      }
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default UserService;
