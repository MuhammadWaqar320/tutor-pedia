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
  AuthResolver,
} from "../resolvers/userResolver";
import { UserRoleEnum } from "../types/EnumTypes";
import { UserType,AuthType,ResponseType } from "../types/UserTypes";

// GraphQL Query
const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllUser: {
      type: ResponseType,
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
      },
      resolve: createUserResolver,
    },
    Auth: {
      type: AuthType,
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
