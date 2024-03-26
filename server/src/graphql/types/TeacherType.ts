import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLScalarType,
    GraphQLInt,
    GraphQLList,
  GraphQLFloat
} from "graphql";
import { UserType } from "./UserType";
import { StudentType } from "./StudentType";
import { CourseType } from "./CourseType";
export const TeacherType:GraphQLObjectType = new GraphQLObjectType({
  name: "Teacher",
    fields: () => ({
    id:{type: GraphQLID},
    specialization: { type: new GraphQLNonNull(GraphQLString) },
    bio: { type: new GraphQLNonNull(GraphQLString) },
    qualification: { type: new GraphQLNonNull(GraphQLString) },
    courses: { type: new GraphQLList(CourseType) },
    students: { type: new GraphQLList(StudentType) },
    user: { type: UserType },
    updatedAt:{ type: GraphQLFloat }
  })
});

export const TeacherFeedbackType: GraphQLObjectType = new GraphQLObjectType({
  name: 'TeacherFeedback',
  fields: () => ({
    id: { type: GraphQLID },
    student: { type: StudentType },
    teacher: { type: TeacherType },
    feedback: { type: GraphQLString },
    rating: { type: GraphQLFloat },
       feedbackDate:{type:GraphQLFloat}
  }),
})