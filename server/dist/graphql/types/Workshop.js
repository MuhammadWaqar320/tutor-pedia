"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopRequestType = exports.WorkshopType = void 0;
const graphql_1 = require("graphql");
const UserType_1 = require("./UserType");
exports.WorkshopType = new graphql_1.GraphQLObjectType({
    name: "Workshop",
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        type: { type: graphql_1.GraphQLString },
        date: { type: graphql_1.GraphQLString },
        teacherId: { type: graphql_1.GraphQLString },
        noOfStudents: { type: graphql_1.GraphQLInt },
        meetingLink: { type: graphql_1.GraphQLString },
        createdAt: { type: graphql_1.GraphQLFloat },
        updatedAt: { type: graphql_1.GraphQLFloat },
        detail: { type: graphql_1.GraphQLString },
        duration: { type: graphql_1.GraphQLString },
    }),
});
exports.WorkshopRequestType = new graphql_1.GraphQLObjectType({
    name: "WorkshopRequest",
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        workShopId: { type: exports.WorkshopType },
        userId: { type: UserType_1.UserType },
        createdAt: { type: graphql_1.GraphQLFloat },
        updatedAt: { type: graphql_1.GraphQLFloat },
        status: { type: graphql_1.GraphQLString },
    }),
});
