import { UserRole } from "../../interfaces/User";
import { GraphQLEnumType } from "graphql";

export const UserRoleEnum = new GraphQLEnumType({
  name: "UserRole",
  values: {
    Admin: { value: UserRole.Admin },
    Student: { value: UserRole.Student },
    Teacher: { value: UserRole.Teacher },
  },
});
