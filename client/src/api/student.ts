import { UserType } from "./user";
import { TeacherType } from "./teacher";
import { CourseType } from "./course";
import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

export interface StudentType extends UserType{
    id: string;
    updatedAt: number;
    courses: CourseType[]; 
    user: UserType;
    teachers: TeacherType[];
}

const gqlQuery = gql`
  query getAllStudent {
    getAllStudent {
      id
      courses {
        id
        name
        category
        level
        language
        isCertified
        endDate
      }
      user {
        firstName
        profileUrl
        phoneNo
        email
        lastName
        id
      }   
    }
  }
`;
const gqlQueryForStu = gql`
query GetStudentByUserId($user: ID) {
  getStudentByUserId(user: $user) {
    courses {
      id
      name
      category
      level
      language
      isCertified
      endDate
    }
  }
}
`;

const deleteQuery = gql`
mutation deleteStudent($id:ID){
  deleteStudent(id:$id){
    success
  }
}
`;

export const deleteStudent = async (id:string): Promise<{success:boolean}|undefined> => {
  try {
    const response: any = await graphQLClient.request(deleteQuery,{id});
    return response.deleteStudent;
  } catch (error) {
     console.log(`An error occurred while deleting data. Due to this error:${error}`);
  }
}
export const getAllStudents = async():Promise<StudentType[]|undefined> => {
    try {
      const response: any = await graphQLClient.request(gqlQuery);

        return response.getAllStudent;
    } catch (error) {
        console.log(`An error occurred while fetching all students. Due to this error:${error}`);
    }
}

export const getStudentByUserId = async(userId:string):Promise<any> => {
    try {
      const response: any = await graphQLClient.request(gqlQueryForStu,{user:userId});
        return response.getStudentByUserId;
    } catch (error) {
        console.log(`An error occurred while fetching all students. Due to this error:${error}`);
    }
}