import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID,
  GraphQLScalarType,
  GraphQLInt,
} from "graphql";
import { UserRoleEnum } from "./EnumTypes";

export const DataType = new GraphQLScalarType({
  name: "DataType",
  description: "Represents a generic data type in GraphQL",
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    return null;
  },
});
export const ResponseType = new GraphQLObjectType({
  name: "responseType",
  fields: () => {
    return {
      code: { type: new GraphQLNonNull(GraphQLString) },
      message: { type: new GraphQLNonNull(GraphQLString) },
      success: { type: new GraphQLNonNull(GraphQLBoolean) },
      data: { type: DataType },
    };
  },
});
export const LoggedInUserType = new GraphQLObjectType({
  name: "LoggedInUser",
  fields: () => {
    return {
      id: { type: GraphQLID },
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: new GraphQLNonNull(GraphQLString) },
      role: { type: new GraphQLNonNull(UserRoleEnum) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      profileUrl: { type: new GraphQLNonNull(GraphQLString) },
    };
  },
});
export const AuthPayloadType = new GraphQLObjectType({
  name: "auth",
  fields: () => {
    return {
      success: { type: new GraphQLNonNull(GraphQLBoolean) },
      token: { type: new GraphQLNonNull(GraphQLString) },
      message: { type: new GraphQLNonNull(GraphQLString) },
      user: { type: new GraphQLNonNull(LoggedInUserType) },
    };
  },
});
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => {
    return {
      id: { type: GraphQLID },
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      phoneNo: { type: new GraphQLNonNull(GraphQLString) },
      role: { type: new GraphQLNonNull(UserRoleEnum) },
      createdAt:{type: new GraphQLNonNull(GraphQLInt)},
      updatedAt: { type: new GraphQLNonNull(GraphQLInt) },
      profileUrl:{ type: new GraphQLNonNull(GraphQLString) },
    };
  },
});