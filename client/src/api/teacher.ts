import { UserType } from "./user";
import { StudentType } from "./student";
import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";
import { CourseType } from "./course";


export interface TeacherType extends UserType{
  id: string;
      specialization:string;
    bio:string;
    qualification:string;
    courses:CourseType[];
    students:StudentType[];
    user:UserType;
}

export interface TeacherFeedBack {
  id?: string;
  rating: number;
  feedback: string;
  student: string | StudentType;
  teacher: string|TeacherType;
}
  
const gqlQuery = gql`
query getAllTeacher {
getAllTeacher {
  id,
    updatedAt,
      bio,
      qualification,
      specialization,
      user{
      firstName,
      profileUrl,
      phoneNo,
       email,
      lastName,
      
    }   
  }  

}
`;
const getTeacherByIdQuery = gql`
  query getTeacherById($id: ID!) {
    getTeacherById(id: $id) {
      id
      updatedAt
      bio
      qualification
      specialization
      user {
        firstName
        profileUrl
        phoneNo
        email
        lastName
        createdAt
        updatedAt
        id
      }
    }
  }
`;

const deleteQuery = gql`
mutation deleteTeacher($id:ID){
  deleteTeacher(id:$id){
    success
  }
}
`;
const getFbQuery = gql`
query getAllTeacherFB{
  getAllTeacherFB {
    rating,
    feedback,
    student{
    firstName,
    lastName
    },
    teacher{
    id
    }
  }
}

`;

const createFeedbackMutation = gql`
 mutation createTeacherFeedback(
  $rating: Float!
  $student: ID!
  $teacher: ID!
  $feedback: String!
) {
  createTeacherFeedback(
    rating: $rating
    student: $student
    teacher: $teacher
    feedback: $feedback
  ) {
    success
    code
  }
}

`;

export const deleteTeacher = async (id:string): Promise<{success:boolean}|undefined> => {
  try {
    const response: any = await graphQLClient.request(deleteQuery,{id});
    return response.deleteTeacher;
  } catch (error) {
     console.log(`An error occurred while deleting data. Due to this error:${error}`);
  }
}
export const getTeacherById = async (
  id: string
): Promise<{ success: boolean } | undefined> => {
  try {
    const response: any = await graphQLClient.request(getTeacherByIdQuery, {
      id,
    });
    return response.getTeacherById;
  } catch (error) {
    console.log(
      `An error occurred while deleting data. Due to this error:${error}`
    );
  }
};

export const getAllTeachers = async():Promise<TeacherType[]|undefined> => {
    try {
      const response: any = await graphQLClient.request(gqlQuery);
  
        return response.getAllTeacher;
    } catch (error) {
        console.log(`An error occurred while fetching all course. Due to this error:${error}`);
    }
}

export const getAllTeachersFeedback = async():Promise<any> => {
    try {
      const response: any = await graphQLClient.request(getFbQuery);

        return response.getAllTeacherFB;
    } catch (error) {
        console.log(`An error occurred while fetching all course. Due to this error:${error}`);
    }
}

export const AddTeacherFeedBack = async (
  variables: TeacherFeedBack
): Promise<{ success: boolean; message:string}> => {
  try {
    const response:any=
      await graphQLClient.request(createFeedbackMutation, {
        ...variables,
      });

    return response?.createTeacherFeedback ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};