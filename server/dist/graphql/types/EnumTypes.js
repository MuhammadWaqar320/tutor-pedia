"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleEnum = void 0;
const user_1 = require("../../interfaces/user");
const graphql_1 = require("graphql");
exports.UserRoleEnum = new graphql_1.GraphQLEnumType({
    name: "UserRole",
    values: {
        Admin: { value: user_1.UserRole.Admin },
        Student: { value: user_1.UserRole.Student },
        Teacher: { value: user_1.UserRole.Teacher },
    },
});
