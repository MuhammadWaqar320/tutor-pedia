import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLFloat,
} from "graphql";
import { CourseType } from "./CourseType";

export const NotesType = new GraphQLObjectType({
  name: "Notes",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: new GraphQLNonNull(GraphQLString) },
    course: { type:CourseType },
    uploadedDate: { type: new GraphQLNonNull(GraphQLFloat) },
    fileUrl: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
