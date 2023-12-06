"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const gqlResolver_1 = require("../resolvers/gqlResolver");
// GraphQL types
const UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => {
        return {
            id: { type: graphql_1.GraphQLID },
            username: { type: graphql_1.GraphQLString },
            email: { type: graphql_1.GraphQLString },
            password: { type: graphql_1.GraphQLString },
            phoneNo: { type: graphql_1.GraphQLString },
        };
    },
});
// GraphQL Query
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getAllUser: {
            type: new graphql_1.GraphQLList(UserType),
            resolve: gqlResolver_1.getAllUserResolver,
        },
        getUserById: {
            type: UserType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: gqlResolver_1.getUserByIdResolver,
        },
    },
});
//GraphQL Mutation
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                username: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                phoneNo: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: gqlResolver_1.createUserResolver,
        },
        login: {
            type: UserType,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: gqlResolver_1.AuthResolver,
        },
    },
});
// Creating Graphql schema
const Schema = new graphql_1.GraphQLSchema({
    query,
    mutation,
});
exports.default = Schema;
