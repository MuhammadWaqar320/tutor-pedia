import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from "graphql";
import {
  getAllUserResolver,
  getUserByIdResolver,
  createUserResolver,
  updateUserResolver,
  deleteUser
} from "../resolvers/userResolver";
import { AuthResolver } from "../resolvers/authResolvers";
import { UserRoleEnum } from "../types/EnumType";
import { UserType, AuthPayloadType, ResponseType } from "../types/UserType";
import { CourseType } from "../types/CourseType";
import { createCourseResolver, deleteCourseResolver, getAllCoursesResolver, getCourseByIdResolver, updateCourseResolver } from "../resolvers/courseResolver";
import { TeacherFeedbackType, TeacherType } from "../types/TeacherType";
import { getAllTeacherResolver, getTeacherByIdResolver } from "../resolvers/teacherResolver";
import { StudentType } from "../types/StudentType";
import { getAllStudentResolver, getStudentByIdResolver, updateStudentResolver } from "../resolvers/studentResolver";
import { createTeacherFeedbackResolver, deleteTeacherFeedbackResolver, getAllTeacherFeedbacksResolver, getTeacherFeedbackByIdResolver, updateTeacherFeedbackResolver } from "../resolvers/teacherFeedbackResolver";

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
      resolve:getAllCoursesResolver,
    },
    getCourseById: {
      type: CourseType,
         args: { id: { type: GraphQLID } },
      resolve:getCourseByIdResolver
    },
    getAllTeacher: {
      type: new GraphQLList(TeacherType),
      resolve:getAllTeacherResolver
    },
    getTeacherById: {
      type: TeacherType,
         args: { id: { type: GraphQLID } },
      resolve:getTeacherByIdResolver
    },
    getAllStudent: {
      type: new GraphQLList(StudentType),
      resolve:getAllStudentResolver
    },
    getAllTeacherFB: {
      type: new GraphQLList(TeacherFeedbackType),
      resolve:getAllTeacherFeedbacksResolver
    }
    ,
    getStudentById: {
      type: StudentType,
         args: { id: { type: GraphQLID } },
      resolve:getStudentByIdResolver
    },
    getTeacherFbById: {
      type: TeacherFeedbackType,
      args: { id: { type: GraphQLID } },
      resolve:getTeacherFeedbackByIdResolver
    }
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
        bio: { type: GraphQLString },
        qualification: { type: GraphQLString },
        specialization: { type: GraphQLString }
      },
      resolve: createUserResolver,
    },
    createCourse: {
      type:ResponseType,
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
    teacher: { type: GraphQLID }, // Assuming teacher id is of type GraphQLID
    students: { type: new GraphQLList(GraphQLID) },
      },
      resolve:createCourseResolver
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
        profileUrl:{ type: GraphQLString }
      },
      resolve: updateUserResolver,
    },
    updateStudent: {
      type: StudentType,
      args: {
          updatedAt: { type: GraphQLInt },
    courses: { type: new GraphQLList(GraphQLID) },
    user: { type: GraphQLID },
    teachers: { type: new GraphQLList(GraphQLID) }
      },
      resolve:updateStudentResolver
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
      resolve:updateCourseResolver
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
      resolve:deleteCourseResolver
    },
    auth: {
      type: AuthPayloadType,
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: AuthResolver,
    },
    createTeacherFeedback: {
      type: ResponseType,
      args: {
          student: { type: new GraphQLNonNull(GraphQLID) }, // Assuming student id is of type GraphQLID
  teacher: { type: new GraphQLNonNull(GraphQLID) }, // Assuming teacher id is of type GraphQLID
  feedback: { type: new GraphQLNonNull(GraphQLString) },
  rating: { type: new GraphQLNonNull(GraphQLInt) },
  feedbackDate: { type: new GraphQLNonNull(GraphQLInt) } // Assuming feedbackDate is of type GraphQLInt
      },
      resolve:createTeacherFeedbackResolver
    },
    updateTeacherFeedback: {
       type: ResponseType,
      args: {
          student: { type: new GraphQLNonNull(GraphQLID) }, // Assuming student id is of type GraphQLID
  teacher: { type: new GraphQLNonNull(GraphQLID) }, // Assuming teacher id is of type GraphQLID
  feedback: { type: new GraphQLNonNull(GraphQLString) },
  rating: { type: new GraphQLNonNull(GraphQLInt) },
  feedbackDate: { type: new GraphQLNonNull(GraphQLInt) } // Assuming feedbackDate is of type GraphQLInt
      },
      resolve:updateTeacherFeedbackResolver
    },
     deleteTeacherFeedback: {
      type: ResponseType,
      args: {
         id: { type: GraphQLID },
      },
      resolve:deleteTeacherFeedbackResolver
    },

  },
});


// Creating Graphql schema
const Schema = new GraphQLSchema({
  query,
  mutation,
});

export default Schema;
