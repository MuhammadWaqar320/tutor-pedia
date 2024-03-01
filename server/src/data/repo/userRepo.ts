import User from "../models/User";
import { Model,ModifyResult, IfAny, Document, Require_id } from "mongoose";
import { UserInterface } from "../../interfaces/user";
import GenericRepo from "./genericRepo";

class UserRepo extends GenericRepo<UserInterface& Document> {
  constructor(){
    super(User);
  }
  addUser(userData: UserInterface) {
    const newUser = new User({
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData?.email,
      password: userData?.password,
      phoneNo: userData?.phoneNo,
      role: userData?.role,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      profileUrl:userData?.profileUrl
    });
    return newUser.save();
  }
  findUserByEmail(email: string) {
    return User.findOne({ email: email }).exec();
  }
}

export default UserRepo;
