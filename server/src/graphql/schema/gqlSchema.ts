import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import {
  getAllUserResolver,
  getUserByIdResolver,
  createUserResolver,
  updateUserResolver,
  deleteUser,
} from "../resolvers/userResolver";
import { AuthResolver } from "../resolvers/authResolvers";
import { UserRoleEnum } from "../types/EnumType";
import { UserType, AuthPayloadType, ResponseType } from "../types/UserType";
import { CourseType } from "../types/CourseType";
import {
  createCourseResolver,
  deleteCourseResolver,
  getAllCoursesResolver,
  getCourseByIdResolver,
  updateCourseResolver,
} from "../resolvers/courseResolver";

// GraphQL Query
const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllUser: {
      type: new GraphQLList(UserType),
      resolve: getAllUserResolver,
    },
    getUserById: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: getUserByIdResolver,
    },
    getAllCourse: {
      type: new GraphQLList(CourseType),
      resolve: getAllCoursesResolver,
    },
    getCourseById: {
      type: CourseType,
      resolve: getCourseByIdResolver,
    },
  },
});

//GraphQL Mutation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: ResponseType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        phoneNo: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(UserRoleEnum) },
        profileUrl: { type: new GraphQLNonNull(GraphQLString) },
        bio: { type: new GraphQLNonNull(GraphQLString) },
        qualification: { type: new GraphQLNonNull(GraphQLString) },
        specialization: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: createUserResolver,
    },
    createCourse: {
      type: ResponseType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLString) },
        level: { type: new GraphQLNonNull(GraphQLInt) },
        duration: { type: new GraphQLNonNull(GraphQLString) },
        preRequisites: { type: new GraphQLNonNull(GraphQLString) },
        updatedAt: { type: new GraphQLNonNull(GraphQLInt) },
        createdAt: { type: new GraphQLNonNull(GraphQLInt) },
        coverPhotoUrl: { type: new GraphQLNonNull(GraphQLString) },
        language: { type: new GraphQLNonNull(GraphQLString) },
        isCertified: { type: new GraphQLNonNull(GraphQLBoolean) },
        rating: { type: new GraphQLNonNull(GraphQLInt) },
        startDate: { type: new GraphQLNonNull(GraphQLInt) },
        endDate: { type: new GraphQLNonNull(GraphQLInt) },
        teacher: { type: GraphQLID }, 
        students: { type: new GraphQLList(GraphQLID) },
      },
      resolve: createCourseResolver,
    },
    updateUser: {
      type: ResponseType,
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        phoneNo: { type: GraphQLString },
        role: { type: UserRoleEnum },
        profileUrl: { type: GraphQLString },
      },
      resolve: updateUserResolver,
    },
    updateCourse: {
      type: ResponseType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLString) },
        level: { type: new GraphQLNonNull(GraphQLInt) },
        duration: { type: new GraphQLNonNull(GraphQLString) },
        preRequisites: { type: new GraphQLNonNull(GraphQLString) },
        updatedAt: { type: new GraphQLNonNull(GraphQLInt) },
        createdAt: { type: new GraphQLNonNull(GraphQLInt) },
        coverPhotoUrl: { type: new GraphQLNonNull(GraphQLString) },
        language: { type: new GraphQLNonNull(GraphQLString) },
        isCertified: { type: new GraphQLNonNull(GraphQLBoolean) },
        rating: { type: new GraphQLNonNull(GraphQLInt) },
        startDate: { type: new GraphQLNonNull(GraphQLInt) },
        endDate: { type: new GraphQLNonNull(GraphQLInt) },
        teacher: { type: GraphQLID }, // Assuming teacher id is of type GraphQLID
        students: { type: new GraphQLList(GraphQLID) },
      },
      resolve: updateCourseResolver,
    },
    deleteUser: {
      type: ResponseType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: deleteUser,
    },
    deleteCourse: {
      type: ResponseType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: deleteCourseResolver,
    },
    auth: {
      type: AuthPayloadType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: AuthResolver,
    },
  },
});

// Creating Graphql schema
const Schema = new GraphQLSchema({
  query,
  mutation,
});

export default Schema;
