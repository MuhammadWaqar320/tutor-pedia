"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = exports.AuthType = exports.LoggedInUserType = exports.ResponseType = exports.DataType = void 0;
const graphql_1 = require("graphql");
const EnumTypes_1 = require("./EnumTypes");
exports.DataType = new graphql_1.GraphQLScalarType({
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
exports.ResponseType = new graphql_1.GraphQLObjectType({
    name: "response_type",
    fields: () => {
        return {
            code: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            message: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            success: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
            data: { type: exports.DataType },
        };
    },
});
exports.LoggedInUserType = new graphql_1.GraphQLObjectType({
    name: "LoggedInUser",
    fields: () => {
        return {
            id: { type: graphql_1.GraphQLID },
            firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            role: { type: new graphql_1.GraphQLNonNull(EnumTypes_1.UserRoleEnum) },
        };
    },
});
exports.AuthType = new graphql_1.GraphQLObjectType({
    name: "auth",
    fields: () => {
        return {
            success: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
            token: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            message: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            user: { type: new graphql_1.GraphQLNonNull(exports.LoggedInUserType) },
        };
    },
});
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => {
        return {
            id: { type: graphql_1.GraphQLID },
            firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            phoneNo: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            role: { type: new graphql_1.GraphQLNonNull(EnumTypes_1.UserRoleEnum) },
            createdAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
            updatedAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        };
    },
});
