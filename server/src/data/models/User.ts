import mongoose from "mongoose";
import { UserInterface } from "../../interfaces/User";
import { UserRole } from "../../interfaces/User";
import { Document } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  role: {
    type: String,
    enum: [UserRole.Admin, UserRole.Teacher, UserRole.Student],
    default: "Teacher",
  },
  createdAt: {
    type: Number,
  },
  updatedAt:{
    type:Number
  }, 
  profileUrl: {
    type: String,
  },
});

const UserModel = mongoose.model<UserInterface & Document>("User", UserSchema);

export default UserModel;
