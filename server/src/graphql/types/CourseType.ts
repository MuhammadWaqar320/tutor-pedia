import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
    GraphQLFloat
} from "graphql";
import { TeacherType } from "./TeacherType";
import { StudentType } from "./StudentType";

export const CourseType :GraphQLObjectType= new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    category: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLString) },
    level: { type: new GraphQLNonNull(GraphQLFloat) },
    duration: { type: new GraphQLNonNull(GraphQLString) },
    preRequisites: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLFloat) },
    createdAt: { type: new GraphQLNonNull(GraphQLFloat) },
    coverPhotoUrl: { type: new GraphQLNonNull(GraphQLString) },
    language: { type: new GraphQLNonNull(GraphQLString) },
    isCertified: { type: new GraphQLNonNull(GraphQLBoolean) },
    rating: { type: new GraphQLNonNull(GraphQLFloat) },
    startDate: { type: new GraphQLNonNull(GraphQLFloat) },
    endDate: { type: new GraphQLNonNull(GraphQLFloat) },
    teacher: { type:  TeacherType }, // Assuming teacher id is of type GraphQLID
    students: { type: new GraphQLList(StudentType) }, // Assuming students ids are of type GraphQLID
  }),
});
