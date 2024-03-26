"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentType = void 0;
const graphql_1 = require("graphql");
const CourseType_1 = require("./CourseType");
const UserType_1 = require("./UserType");
const TeacherType_1 = require("./TeacherType");
exports.StudentType = new graphql_1.GraphQLObjectType({
    name: "Student",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        updatedAt: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
        courses: { type: new graphql_1.GraphQLList(CourseType_1.CourseType) },
        user: { type: UserType_1.UserType },
        teachers: { type: new graphql_1.GraphQLList(TeacherType_1.TeacherType) }
    })
});
