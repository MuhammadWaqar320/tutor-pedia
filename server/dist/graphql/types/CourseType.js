"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseType = void 0;
const graphql_1 = require("graphql");
exports.CourseType = new graphql_1.GraphQLObjectType({
    name: "Course",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        category: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        price: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        level: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        duration: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        preRequisites: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        updatedAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        createdAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        coverPhotoUrl: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        language: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        isCertified: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        startDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        endDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        teacher: { type: graphql_1.GraphQLID }, // Assuming teacher id is of type GraphQLID
        students: { type: new graphql_1.GraphQLList(graphql_1.GraphQLID) }, // Assuming students ids are of type GraphQLID
    }),
});
