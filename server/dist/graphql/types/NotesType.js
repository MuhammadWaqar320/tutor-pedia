"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesType = void 0;
const graphql_1 = require("graphql");
const CourseType_1 = require("./CourseType");
exports.NotesType = new graphql_1.GraphQLObjectType({
    name: "Notes",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        type: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        course: { type: CourseType_1.CourseType },
        uploadedDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        fileUrl: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    }),
});
