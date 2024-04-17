import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLFloat,
} from "graphql";
import { CourseType } from "./CourseType";

export const AssessmentType = new GraphQLObjectType({
  name: "Assessment",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: new GraphQLNonNull(GraphQLString) },
    course: { type:CourseType },
    uploadedDate: { type: new GraphQLNonNull(GraphQLFloat) },
    deadline: { type: new GraphQLNonNull(GraphQLString) },
    fileUrl: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
