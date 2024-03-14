import User from "../../data/models/User";
import { UserInterface } from "../../interfaces/user";
import { successResponse, errorResponse } from "../../utils/utilFunctions";
// import { AuthInterface } from "../../interfaces/auth";
import UserServiceClass from "../../services/userService";
import { Document } from "mongoose";
import { TeacherInterface } from "../../interfaces/teacher";

const UserService = new UserServiceClass();

export const getAllUserResolver = async () => {
  return UserService.getAllData();
};
export const getUserByIdResolver = (_: any, args: { id: string }) => {
  return UserService.getDataById(args.id);
};
export const createUserResolver = async (_: any, args: UserInterface&TeacherInterface) => {
  return UserService.createUser(args);
};
export const updateUserResolver = async (
  _: any,
  args: UserInterface & Document
) => {
  return UserService.updateDataById(args.id, args);
};
export const deleteUser=async(_:any,  args:{ id: string } )=>{
  return UserService.deleteById(args.id)
}

