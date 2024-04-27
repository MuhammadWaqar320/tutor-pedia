import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
    GraphQLFloat,
  GraphQLList
} from "graphql";
import { UserType } from "./UserType";
import { DataType } from "./UserType";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    id: { type: GraphQLID },
    senderId: { type:  GraphQLID },
    receiverId: { type:  GraphQLID },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLFloat },
    updatedAt: { type: GraphQLFloat },
  }),
});

export const ConversationType = new GraphQLObjectType({
  name: "Conversation",
  fields: () => ({
    id: { type: GraphQLID },
    participants: { type:new GraphQLList(UserType) },
    messages: { type: new GraphQLList(MessageType) },
    createdAt: { type: GraphQLFloat },
    updatedAt: { type: GraphQLFloat },
  }),
});
