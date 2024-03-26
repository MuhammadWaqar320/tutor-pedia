"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherFeedbackType = exports.TeacherType = void 0;
const graphql_1 = require("graphql");
const UserType_1 = require("./UserType");
const StudentType_1 = require("./StudentType");
const CourseType_1 = require("./CourseType");
exports.TeacherType = new graphql_1.GraphQLObjectType({
    name: "Teacher",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        specialization: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        bio: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        qualification: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        courses: { type: new graphql_1.GraphQLList(CourseType_1.CourseType) },
        students: { type: new graphql_1.GraphQLList(StudentType_1.StudentType) },
        user: { type: UserType_1.UserType },
        updatedAt: { type: graphql_1.GraphQLFloat }
    })
});
exports.TeacherFeedbackType = new graphql_1.GraphQLObjectType({
    name: 'TeacherFeedback',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        student: { type: StudentType_1.StudentType },
        teacher: { type: exports.TeacherType },
        feedback: { type: graphql_1.GraphQLString },
        rating: { type: graphql_1.GraphQLFloat },
        feedbackDate: { type: graphql_1.GraphQLFloat }
    }),
});
