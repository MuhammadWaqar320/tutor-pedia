"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const userResolver_1 = require("../resolvers/userResolver");
const authResolvers_1 = require("../resolvers/authResolvers");
const EnumTypes_1 = require("../types/EnumTypes");
const UserTypes_1 = require("../types/UserTypes");
// GraphQL Query
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getAllUser: {
            type: new graphql_1.GraphQLList(UserTypes_1.UserType),
            resolve: userResolver_1.getAllUserResolver,
        },
        getUserById: {
            type: UserTypes_1.UserType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: userResolver_1.getUserByIdResolver,
        },
    },
});
//GraphQL Mutation
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserTypes_1.ResponseType,
            args: {
                firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                phoneNo: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                role: { type: new graphql_1.GraphQLNonNull(EnumTypes_1.UserRoleEnum) },
                profileUrl: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                bio: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                qualification: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                specialization: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: userResolver_1.createUserResolver,
        },
        updateUser: {
            type: UserTypes_1.ResponseType,
            args: {
                id: { type: graphql_1.GraphQLID },
                firstName: { type: graphql_1.GraphQLString },
                lastName: { type: graphql_1.GraphQLString },
                email: { type: graphql_1.GraphQLString },
                password: { type: graphql_1.GraphQLString },
                phoneNo: { type: graphql_1.GraphQLString },
                role: { type: EnumTypes_1.UserRoleEnum },
                profileUrl: { type: graphql_1.GraphQLString }
            },
            resolve: userResolver_1.updateUserResolver,
        },
        deleteUser: {
            type: UserTypes_1.ResponseType,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve: userResolver_1.deleteUser,
        },
        auth: {
            type: UserTypes_1.AuthPayloadType,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: authResolvers_1.AuthResolver,
        },
    },
});
// Creating Graphql schema
const Schema = new graphql_1.GraphQLSchema({
    query,
    mutation,
});
exports.default = Schema;
