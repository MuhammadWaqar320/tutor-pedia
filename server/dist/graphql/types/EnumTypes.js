"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleEnum = void 0;
const User_1 = require("../../interfaces/User");
const graphql_1 = require("graphql");
exports.UserRoleEnum = new graphql_1.GraphQLEnumType({
    name: "UserRole",
    values: {
        Admin: { value: User_1.UserRole.Admin },
        Student: { value: User_1.UserRole.Student },
        Teacher: { value: User_1.UserRole.Teacher },
    },
});
