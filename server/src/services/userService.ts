import bcrypt from "bcrypt";
import { successResponse, errorResponse } from "../utils/utilFunctions";
import { UserInterface } from "../interfaces/User";
import UserRepoClass from "../data/repo/userRepo";
import GenericService from "./genericService";
import { Model, ModifyResult, IfAny, Document, Require_id } from "mongoose";

const UserRepo = new UserRepoClass();

class UserService extends GenericService<UserInterface & Document> {
  constructor() {
    super(UserRepo);
  }
  async createUser(data: UserInterface) {
    try {
      const existingUser = await UserRepo.findUserByEmail(data.email);
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser: UserInterface = {
          ...data,
          password: hashedPassword,
        };
        const dbResponse = await UserRepo.addUser(newUser);
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
