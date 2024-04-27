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
const PaymentType_1 = require("../types/PaymentType");
const paymentRsolvers_1 = require("../resolvers/paymentRsolvers");
const AssessmentType_1 = require("../types/AssessmentType");
const assessmentResolver_1 = require("../resolvers/assessmentResolver");
const NotesType_1 = require("../types/NotesType");
const notesResolver_1 = require("../resolvers/notesResolver");
const Chat_1 = require("../types/Chat");
const messageResolver_1 = require("../resolvers/messageResolver");
const conversationResolver_1 = require("../resolvers/conversationResolver");
const Workshop_1 = require("../types/Workshop");
const workshopResolver_1 = require("../resolvers/workshopResolver");
const workshopRequestResolver_1 = require("../resolvers/workshopRequestResolver");
// GraphQL Query
const query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getAllUser: {
            type: new graphql_1.GraphQLList(UserType_1.UserType),
            resolve: userResolver_1.getAllUserResolver,
        },
        getAllAssessments: {
            type: new graphql_1.GraphQLList(AssessmentType_1.AssessmentType),
            resolve: assessmentResolver_1.getAllAssessmentsResolver,
        },
        getAllNotes: {
            type: new graphql_1.GraphQLList(NotesType_1.NotesType),
            resolve: notesResolver_1.getAllNotesResolver,
        },
        getAllWorkshop: {
            type: new graphql_1.GraphQLList(Workshop_1.WorkshopType),
            resolve: workshopResolver_1.getAllWorkShopsResolver,
        },
        getAllWorkshopRequest: {
            type: new graphql_1.GraphQLList(Workshop_1.WorkshopRequestType),
            resolve: workshopRequestResolver_1.getAllWorkShopRequestsResolver,
        },
        getWorkShopByTeacherId: {
            type: Workshop_1.WorkshopType,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve: workshopResolver_1.getWorkShopByTeacherId,
        },
        getUserById: {
            type: UserType_1.UserType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: userResolver_1.getUserByIdResolver,
        },
        getAllCourse: {
            type: new graphql_1.GraphQLList(CourseType_1.CourseType),
            resolve: courseResolver_1.getAllCoursesResolver,
        },
        getCourseById: {
            type: CourseType_1.CourseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: courseResolver_1.getCourseByIdResolver,
        },
        getAllTeacher: {
            type: new graphql_1.GraphQLList(TeacherType_1.TeacherType),
            resolve: teacherResolver_1.getAllTeacherResolver,
        },
        getAllPayment: {
            type: new graphql_1.GraphQLList(PaymentType_1.PaymentType),
            resolve: paymentRsolvers_1.getAllPaymentsResolver,
        },
        getTeacherById: {
            type: TeacherType_1.TeacherType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: teacherResolver_1.getTeacherByIdResolver,
        },
        getAllStudent: {
            type: new graphql_1.GraphQLList(StudentType_1.StudentType),
            resolve: studentResolver_1.getAllStudentResolver,
        },
        getAllTeacherFB: {
            type: new graphql_1.GraphQLList(TeacherType_1.TeacherFeedbackType),
            resolve: teacherFeedbackResolver_1.getAllTeacherFeedbacksResolver,
        },
        getStudentById: {
            type: StudentType_1.StudentType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: studentResolver_1.getStudentByIdResolver,
        },
        getStudentByUserId: {
            type: StudentType_1.StudentType,
            args: {
                user: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: studentResolver_1.getStudentByUserIdResolver,
        },
        getTeacherFbById: {
            type: TeacherType_1.TeacherFeedbackType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: teacherFeedbackResolver_1.getTeacherFeedbackByIdResolver,
        },
        getAllMessages: {
            type: new graphql_1.GraphQLList(Chat_1.MessageType),
            resolve: messageResolver_1.getAllMessagesResolver,
        },
        getConversation: {
            type: Chat_1.ConversationType,
            args: {
                senderId: {
                    type: graphql_1.GraphQLString,
                },
                receiverId: {
                    type: graphql_1.GraphQLString,
                },
            },
            resolve: conversationResolver_1.getConversationByParticipantsResolver,
        },
    },
});
//GraphQL Mutation
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType_1.ResponseType,
            args: {
                firstName: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                lastName: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                email: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                password: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                phoneNo: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                role: {
                    type: new graphql_1.GraphQLNonNull(EnumType_1.UserRoleEnum),
                },
                profileUrl: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                bio: {
                    type: graphql_1.GraphQLString,
                },
                qualification: {
                    type: graphql_1.GraphQLString,
                },
                specialization: {
                    type: graphql_1.GraphQLString,
                },
            },
            resolve: userResolver_1.createUserResolver,
        },
        createCourse: {
            type: UserType_1.ResponseType,
            args: {
                name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                category: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                description: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                price: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                level: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                duration: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                preRequisites: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                coverPhotoUrl: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                language: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                isCertified: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
                },
                rating: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat),
                },
                startDate: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                endDate: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                teacher: {
                    type: graphql_1.GraphQLID,
                }, // Assuming teacher id is of type GraphQLID
            },
            resolve: courseResolver_1.createCourseResolver,
        },
        createAssessment: {
            type: UserType_1.ResponseType,
            args: {
                type: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                course: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                }, // Assuming courseId is of type GraphQLString
                deadline: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                fileUrl: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
            },
            resolve: assessmentResolver_1.createAssessmentResolver,
        },
        createNotes: {
            type: UserType_1.ResponseType,
            args: {
                type: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                course: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                }, // Assuming courseId is of type GraphQLString
                fileUrl: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
            },
            resolve: notesResolver_1.createNotesResolver,
        },
        createPayment: {
            type: UserType_1.ResponseType, // Assuming you have defined PaymentType
            args: {
                user: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                },
                amount: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                verified: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
                },
                course: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                },
            },
            resolve: paymentRsolvers_1.createPaymentResolver,
        },
        createMessage: {
            type: UserType_1.ResponseType,
            args: {
                senderId: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                receiverId: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                message: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
            },
            resolve: messageResolver_1.createMessageResolver,
        },
        createWorshop: {
            type: UserType_1.ResponseType,
            args: {
                type: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                date: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                teacherId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                noOfStudents: { type: graphql_1.GraphQLInt },
                meetingLink: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                detail: { type: graphql_1.GraphQLString },
                duration: { type: graphql_1.GraphQLString },
            },
            resolve: workshopResolver_1.createWorkShopResolver,
        },
        createWorkShopRequest: {
            type: UserType_1.ResponseType, // Assuming you have a ResponseType defined
            args: {
                workShopId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                status: { type: graphql_1.GraphQLString },
            },
            resolve: workshopRequestResolver_1.createWorkShopRequestResolver,
        },
        updateWorkShopRequest: {
            type: UserType_1.ResponseType, // Assuming you have a ResponseType defined
            args: {
                status: { type: graphql_1.GraphQLString },
                id: { type: graphql_1.GraphQLString },
            },
            resolve: workshopRequestResolver_1.updateWorkShopRequestResolver,
        },
        updateUser: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
                firstName: {
                    type: graphql_1.GraphQLString,
                },
                lastName: {
                    type: graphql_1.GraphQLString,
                },
                email: {
                    type: graphql_1.GraphQLString,
                },
                phoneNo: {
                    type: graphql_1.GraphQLString,
                },
            },
            resolve: userResolver_1.updateUserResolver,
        },
        updateStudent: {
            type: StudentType_1.StudentType,
            args: {
                updatedAt: {
                    type: graphql_1.GraphQLInt,
                },
                courses: {
                    type: new graphql_1.GraphQLList(graphql_1.GraphQLID),
                },
                user: {
                    type: graphql_1.GraphQLID,
                },
                teachers: {
                    type: new graphql_1.GraphQLList(graphql_1.GraphQLID),
                },
            },
            resolve: studentResolver_1.updateStudentResolver,
        },
        updateCourse: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
                name: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                category: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                description: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                price: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                level: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                duration: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                preRequisites: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                updatedAt: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                createdAt: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                coverPhotoUrl: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                language: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                isCertified: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
                },
                rating: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                startDate: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                endDate: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                teacher: {
                    type: graphql_1.GraphQLID,
                }, // Assuming teacher id is of type GraphQLID
                students: {
                    type: new graphql_1.GraphQLList(graphql_1.GraphQLID),
                },
            },
            resolve: courseResolver_1.updateCourseResolver,
        },
        deleteUser: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: userResolver_1.deleteUserResolver,
        },
        deleteStudent: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: studentResolver_1.deleteStudentResolver,
        },
        deleteTeacher: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: teacherResolver_1.deleteTeacherResolver,
        },
        deleteCourse: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: courseResolver_1.deleteCourseResolver,
        },
        auth: {
            type: UserType_1.AuthPayloadType,
            args: {
                email: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                password: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
            },
            resolve: authResolvers_1.AuthResolver,
        },
        createTeacherFeedback: {
            type: UserType_1.ResponseType,
            args: {
                student: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                }, // Assuming student id is of type GraphQLID
                teacher: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                }, // Assuming teacher id is of type GraphQLID
                feedback: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                rating: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat),
                },
            },
            resolve: teacherFeedbackResolver_1.createTeacherFeedbackResolver,
        },
        updateTeacherFeedback: {
            type: UserType_1.ResponseType,
            args: {
                student: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                }, // Assuming student id is of type GraphQLID
                teacher: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
                }, // Assuming teacher id is of type GraphQLID
                feedback: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                rating: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                feedbackDate: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                }, // Assuming feedbackDate is of type GraphQLInt
            },
            resolve: teacherFeedbackResolver_1.updateTeacherFeedbackResolver,
        },
        deleteTeacherFeedback: {
            type: UserType_1.ResponseType,
            args: {
                id: {
                    type: graphql_1.GraphQLID,
                },
            },
            resolve: teacherFeedbackResolver_1.deleteTeacherFeedbackResolver,
        },
    },
});
// Creating Graphql schema
const Schema = new graphql_1.GraphQLSchema({
    query,
    mutation,
});
exports.default = Schema;
