import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
} from "graphql";
import { UserType } from "./UserType";
import { CourseType } from "./CourseType";

export const PaymentType = new GraphQLObjectType({
  name: "Payment",
  fields: () => ({
    id: { type: GraphQLID },
    user: { type: UserType },
    paymentDate: { type: GraphQLFloat },
    amount: { type: new GraphQLNonNull(GraphQLString) },
    verified: { type: new GraphQLNonNull(GraphQLBoolean) },
    course: { type: CourseType },
  }),
});
