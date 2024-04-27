import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from "graphql";
import { UserType } from "./UserType";

export const WorkshopType = new GraphQLObjectType({
  name: "Workshop",
  fields: () => ({
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    date: { type: GraphQLString },
    teacherId: { type: GraphQLString },
    noOfStudents: { type: GraphQLInt },
    meetingLink: { type: GraphQLString },
    createdAt: { type: GraphQLFloat },
    updatedAt: { type: GraphQLFloat },
    detail: { type: GraphQLString },
    duration: { type: GraphQLString },
  }),
});

export const WorkshopRequestType = new GraphQLObjectType({
  name: "WorkshopRequest",
  fields: () => ({
    id: { type: GraphQLString },
    workShopId: { type: WorkshopType },
    userId: { type: UserType },
    createdAt: { type: GraphQLFloat },
    updatedAt: { type: GraphQLFloat },
    status: { type: GraphQLString },
  }),
});
