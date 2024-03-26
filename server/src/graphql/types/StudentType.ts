import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLScalarType,
    GraphQLFloat,
  GraphQLList
} from "graphql";
import { CourseType } from "./CourseType";
import { UserType } from "./UserType";
import { TeacherType } from "./TeacherType";

export const StudentType:GraphQLObjectType = new GraphQLObjectType({
  name: "Student",
    fields: () => ({
    id:{type: GraphQLID},
    updatedAt: { type: new GraphQLNonNull(GraphQLFloat) },
    courses: { type: new GraphQLList(CourseType) },
    user: { type: UserType },
    teachers: { type: new GraphQLList(TeacherType) }
  })
});
