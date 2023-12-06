import User from "../../models/User";

type UserArgsType = {
  username: string;
  email: string;
  password: string;
  phoneNo: string;
};

type AuthArgsType = {
  email: string;
  password: string;
};

export const getAllUserResolver = () => {
  return User.find();
};
export const getUserByIdResolver = (_: any, args: { id: string }) => {
  return User.findById(args.id);
};
export const createUserResolver = (_: any, args: UserArgsType) => {
  const newUser = new User({
    username: args.username,
    email: args.email,
    password: args.password,
    phoneNo: args.phoneNo,
  });
  return newUser.save();
};

export const AuthResolver = async (_: any, args: AuthArgsType) => {
  return User.findOne({ email: args.email });
};
