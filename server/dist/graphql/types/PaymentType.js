"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = void 0;
const graphql_1 = require("graphql");
const UserType_1 = require("./UserType");
const CourseType_1 = require("./CourseType");
exports.PaymentType = new graphql_1.GraphQLObjectType({
    name: "Payment",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        user: { type: UserType_1.UserType },
        paymentDate: { type: graphql_1.GraphQLFloat },
        amount: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        verified: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
        course: { type: CourseType_1.CourseType },
    }),
});
