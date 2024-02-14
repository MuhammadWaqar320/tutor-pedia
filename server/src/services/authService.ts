import bcrypt from "bcrypt";
import UserRepoClass from "../data/repo/userRepo";
import jwt from "jsonwebtoken";
import { AuthInterface } from "../interfaces/Auth";

const UserRepo = new UserRepoClass();

class AuthService  {
  async login(data: AuthInterface) {
    try {
      const user = await UserRepo.findUserByEmail(data.email);

      if (!user) {
        throw new Error("User not found");
      }
      const isPasswordValid = await bcrypt.compare(
        data.password,
        user.password
      );
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const { _id, firstName, lastName, role, email,profileUrl } = user;
      // Generate and return a token
      const token = jwt.sign({id:_id,firstName,lastName,email,role,profileUrl}, `${process.env.SECRET_KEY}`, {
        expiresIn: "1d",
      });

      return {
        success: true,
        token: token,
        message: "logged in successfully",
        user: user,
      };
    } catch (error) {
      throw new Error(
        `${error}`
      );
    }
  }
}

export default AuthService;
