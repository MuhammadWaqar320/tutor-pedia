import { AuthInterface } from "../../interfaces/Auth";
import AuthServiceClass from "../../services/authService";

const AuthService = new AuthServiceClass();

export const AuthResolver = async (_: any, args: AuthInterface) => {
    return AuthService.login(args);
};
