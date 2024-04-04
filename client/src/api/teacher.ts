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
  
const gqlQuery = gql`
query getAllTeacher {
getAllTeacher {
  id,
    updatedAt,
      bio,
      qualification,
      specialization,
    id, user{
      firstName,
      profileUrl,
      phoneNo,
       email,
      lastName,
      
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

export const deleteTeacher = async (id:string): Promise<{success:boolean}|undefined> => {
  try {
    const response: any = await graphQLClient.request(deleteQuery,{id});
    return response.deleteTeacher;
  } catch (error) {
     console.log(`An error occurred while deleting data. Due to this error:${error}`);
  }
}

export const getAllTeachers = async():Promise<TeacherType[]|undefined> => {
    try {
      const response: any = await graphQLClient.request(gqlQuery);
  
        return response.getAllTeacher;
    } catch (error) {
        console.log(`An error occurred while fetching all course. Due to this error:${error}`);
    }
}