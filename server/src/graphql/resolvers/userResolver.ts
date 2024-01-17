import User from "../../data/models/User";
import { UserInterface } from "../../interfaces/User";
import { successResponse, errorResponse } from "../../utils/utilFunctions";
import { AuthArgsInterface } from "../../interfaces/Auth";
import UserServiceClass from "../../services/userService";

const UserService = new UserServiceClass();

export const getAllUserResolver = async() => {
  const responseData = await UserService.getAllData();
  return responseData
};
export const getUserByIdResolver = (_: any, args: { id: string }) => {
  return User.findById(args.id);
};
export const createUserResolver = async (_: any, args: UserInterface) => {
  const responseData = await UserService.createUser(args);
  return responseData;
};

export const AuthResolver = async (_: any, args: AuthArgsInterface) => {
  const user = await User.findOne({ email: args.email });

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
