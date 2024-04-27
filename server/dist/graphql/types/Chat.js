"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationType = exports.MessageType = void 0;
const graphql_1 = require("graphql");
const UserType_1 = require("./UserType");
exports.MessageType = new graphql_1.GraphQLObjectType({
    name: "Message",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        senderId: { type: graphql_1.GraphQLID },
        receiverId: { type: graphql_1.GraphQLID },
        message: { type: graphql_1.GraphQLString },
        createdAt: { type: graphql_1.GraphQLFloat },
        updatedAt: { type: graphql_1.GraphQLFloat },
    }),
});
exports.ConversationType = new graphql_1.GraphQLObjectType({
    name: "Conversation",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        participants: { type: new graphql_1.GraphQLList(UserType_1.UserType) },
        messages: { type: new graphql_1.GraphQLList(exports.MessageType) },
        createdAt: { type: graphql_1.GraphQLFloat },
        updatedAt: { type: graphql_1.GraphQLFloat },
    }),
});
