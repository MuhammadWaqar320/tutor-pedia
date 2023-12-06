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
} from "../resolvers/gqlResolver";
// GraphQL types
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => {
    return {
      id: { type: GraphQLID },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      phoneNo: { type: GraphQLString },
    };
  },
});
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
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        phoneNo: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: createUserResolver,
    },
    login: {
      type: UserType,
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
