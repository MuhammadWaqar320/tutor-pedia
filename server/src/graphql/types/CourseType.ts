import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from "graphql";

export const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    category: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLString) },
    level: { type: new GraphQLNonNull(GraphQLInt) },
    duration: { type: new GraphQLNonNull(GraphQLString) },
    preRequisites: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLInt) },
    createdAt: { type: new GraphQLNonNull(GraphQLInt) },
    coverPhotoUrl: { type: new GraphQLNonNull(GraphQLString) },
    language: { type: new GraphQLNonNull(GraphQLString) },
    isCertified: { type: new GraphQLNonNull(GraphQLBoolean) },
    rating: { type: new GraphQLNonNull(GraphQLInt) },
    startDate: { type: new GraphQLNonNull(GraphQLInt) },
    endDate: { type: new GraphQLNonNull(GraphQLInt) },
    teacher: { type: GraphQLID }, // Assuming teacher id is of type GraphQLID
    students: { type: new GraphQLList(GraphQLID) }, // Assuming students ids are of type GraphQLID
  }),
});
