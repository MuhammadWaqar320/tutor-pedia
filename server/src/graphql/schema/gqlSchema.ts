import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
} from "graphql";
import {
  getAllUserResolver,
  getUserByIdResolver,
  createUserResolver,
  updateUserResolver,
  deleteUser
} from "../resolvers/userResolver";
import { AuthResolver } from "../resolvers/authResolvers";
import { UserRoleEnum } from "../types/EnumTypes";
import { UserType,AuthPayloadType,ResponseType } from "../types/UserTypes";

// GraphQL Query
const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllUser: {
      type: new GraphQLList(UserType),
      resolve: getAllUserResolver,
    },
    getUserById: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: getUserByIdResolver,
    },
  },
});

//GraphQL Mutation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: ResponseType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        phoneNo: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(UserRoleEnum) },
        profileUrl: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        qualification: { type: new GraphQLNonNull(GraphQLString) },
        specialization: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: createUserResolver,
    },
    updateUser: {
      type: ResponseType,
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        phoneNo: { type: GraphQLString },
        role: { type: UserRoleEnum },
        profileUrl:{ type: GraphQLString }
      },
      resolve: updateUserResolver,
    },
    deleteUser: {
      type: ResponseType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: deleteUser,
    },
    auth: {
      type: AuthPayloadType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: AuthResolver,
    },
  },
});


// Creating Graphql schema
const Schema = new GraphQLSchema({
  query,
  mutation,
});

export default Schema;
