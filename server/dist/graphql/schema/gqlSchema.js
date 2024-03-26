"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const userResolver_1 = require("../resolvers/userResolver");
const authResolvers_1 = require("../resolvers/authResolvers");
const EnumType_1 = require("../types/EnumType");
const UserType_1 = require("../types/UserType");
const CourseType_1 = require("../types/CourseType");
const courseResolver_1 = require("../resolvers/courseResolver");
const TeacherType_1 = require("../types/TeacherType");
const teacherResolver_1 = require("../resolvers/teacherResolver");
const StudentType_1 = require("../types/StudentType");
const studentResolver_1 = require("../resolvers/studentResolver");
const teacherFeedbackResolver_1 = require("../resolvers/teacherFeedbackResolver");
// GraphQL Query
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getAllUser: {
            type: new graphql_1.GraphQLList(UserType_1.UserType),
            resolve: userResolver_1.getAllUserResolver,
        },
        getUserById: {
            type: UserType_1.UserType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: userResolver_1.getUserByIdResolver,
        },
        getAllCourse: {
            type: new graphql_1.GraphQLList(CourseType_1.CourseType),
            resolve: courseResolver_1.getAllCoursesResolver,
        },
        getCourseById: {
            type: CourseType_1.CourseType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: courseResolver_1.getCourseByIdResolver
        },
        getAllTeacher: {
            type: new graphql_1.GraphQLList(TeacherType_1.TeacherType),
            resolve: teacherResolver_1.getAllTeacherResolver
        },
        getTeacherById: {
            type: TeacherType_1.TeacherType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: teacherResolver_1.getTeacherByIdResolver
        },
        getAllStudent: {
            type: new graphql_1.GraphQLList(StudentType_1.StudentType),
            resolve: studentResolver_1.getAllStudentResolver
        },
        getAllTeacherFB: {
            type: new graphql_1.GraphQLList(TeacherType_1.TeacherFeedbackType),
            resolve: teacherFeedbackResolver_1.getAllTeacherFeedbacksResolver
        },
        getStudentById: {
            type: StudentType_1.StudentType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: studentResolver_1.getStudentByIdResolver
        },
        getTeacherFbById: {
            type: TeacherType_1.TeacherFeedbackType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: teacherFeedbackResolver_1.getTeacherFeedbackByIdResolver
        }
    },
});
//GraphQL Mutation
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType_1.ResponseType,
            args: {
                firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                phoneNo: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                role: { type: new graphql_1.GraphQLNonNull(EnumType_1.UserRoleEnum) },
                profileUrl: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                bio: { type: graphql_1.GraphQLString },
                qualification: { type: graphql_1.GraphQLString },
                specialization: { type: graphql_1.GraphQLString }
            },
            resolve: userResolver_1.createUserResolver,
        },
        createCourse: {
            type: UserType_1.ResponseType,
            args: {
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                category: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                price: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                level: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                duration: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                preRequisites: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                updatedAt: { type: graphql_1.GraphQLFloat },
                createdAt: { type: graphql_1.GraphQLFloat },
                coverPhotoUrl: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                language: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                isCertified: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
                rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
                startDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
                endDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
                teacher: { type: graphql_1.GraphQLID }, // Assuming teacher id is of type GraphQLID
                students: { type: new graphql_1.GraphQLList(graphql_1.GraphQLID) },
            },
            resolve: courseResolver_1.createCourseResolver
        },
        updateUser: {
            type: UserType_1.ResponseType,
            args: {
                id: { type: graphql_1.GraphQLID },
                firstName: { type: graphql_1.GraphQLString },
                lastName: { type: graphql_1.GraphQLString },
                email: { type: graphql_1.GraphQLString },
                password: { type: graphql_1.GraphQLString },
                phoneNo: { type: graphql_1.GraphQLString },
                role: { type: EnumType_1.UserRoleEnum },
                profileUrl: { type: graphql_1.GraphQLString },
            },
            resolve: userResolver_1.updateUserResolver,
        },
        updateStudent: {
            type: StudentType_1.StudentType,
            args: {
                updatedAt: { type: graphql_1.GraphQLInt },
                courses: { type: new graphql_1.GraphQLList(graphql_1.GraphQLID) },
                user: { type: graphql_1.GraphQLID },
                teachers: { type: new graphql_1.GraphQLList(graphql_1.GraphQLID) }
            },
            resolve: studentResolver_1.updateStudentResolver
        },
        updateCourse: {
            type: UserType_1.ResponseType,
            args: {
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
                students: { type: new graphql_1.GraphQLList(graphql_1.GraphQLID) },
            },
            resolve: courseResolver_1.updateCourseResolver,
        },
        deleteUser: {
            type: UserType_1.ResponseType,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve: userResolver_1.deleteUser,
        },
        deleteCourse: {
            type: UserType_1.ResponseType,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve: courseResolver_1.deleteCourseResolver,
        },
        auth: {
            type: UserType_1.AuthPayloadType,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: authResolvers_1.AuthResolver,
        },
        createTeacherFeedback: {
            type: UserType_1.ResponseType,
            args: {
                student: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }, // Assuming student id is of type GraphQLID
                teacher: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }, // Assuming teacher id is of type GraphQLID
                feedback: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                feedbackDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) } // Assuming feedbackDate is of type GraphQLInt
            },
            resolve: teacherFeedbackResolver_1.createTeacherFeedbackResolver
        },
        updateTeacherFeedback: {
            type: UserType_1.ResponseType,
            args: {
                student: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }, // Assuming student id is of type GraphQLID
                teacher: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }, // Assuming teacher id is of type GraphQLID
                feedback: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                feedbackDate: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) } // Assuming feedbackDate is of type GraphQLInt
            },
            resolve: teacherFeedbackResolver_1.updateTeacherFeedbackResolver
        },
        deleteTeacherFeedback: {
            type: UserType_1.ResponseType,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve: teacherFeedbackResolver_1.deleteTeacherFeedbackResolver
        },
    },
});
// Creating Graphql schema
const Schema = new graphql_1.GraphQLSchema({
    query,
    mutation,
});
exports.default = Schema;
