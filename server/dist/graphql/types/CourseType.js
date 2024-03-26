"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseType = void 0;
const graphql_1 = require("graphql");
const TeacherType_1 = require("./TeacherType");
const StudentType_1 = require("./StudentType");
exports.CourseType = new graphql_1.GraphQLObjectType({
    name: "Course",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        category: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        price: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        level: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        duration: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        preRequisites: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        updatedAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        createdAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        coverPhotoUrl: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        language: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        isCertified: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        startDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        endDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        teacher: { type: TeacherType_1.TeacherType }, // Assuming teacher id is of type GraphQLID
        students: { type: new graphql_1.GraphQLList(StudentType_1.StudentType) }, // Assuming students ids are of type GraphQLID
    }),
});
