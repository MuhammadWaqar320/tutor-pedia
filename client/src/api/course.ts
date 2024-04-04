import { TeacherType } from "./teacher";
import { StudentType } from "./student";
import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

export interface CourseType {
  id?: string;
    name: string;
    category: string;
    description: string;
    price: string;
    level: number;
    duration:string;
    preRequisites:string;
    upatedAt?: number;
    createAt?: number;
    coverPhotoUrl:string;
    language: string;
    isCertified: boolean;
    rating?: number;
    startDate: number;
    endDate: number;
    teacher: TeacherType|string;
    students?: StudentType[];
}
  
const gqlQuery = gql`
query getAllCourse {
  getAllCourse {
    id
    name
    category
    description
    price
    level
    duration
    preRequisites
    updatedAt
    createdAt
    coverPhotoUrl
    language
    isCertified
    rating
    startDate
    endDate
    teacher{
        bio
        id
    }
    students{
        id
    }
  }
}
`;
const deleteQuery = gql`
mutation deleteCourse($id:ID){
  deleteCourse(id:$id){
    success
  }
}
`;

export const getCourses = async():Promise<CourseType[]|undefined> => {
    try {
        const response:any = await graphQLClient.request(gqlQuery);
        return response.getAllCourse;
    } catch (error) {
        console.log(`An error occurred while fetching all course. Due to this error:${error}`);
    }
}

export const deleteCourse = async (id:string): Promise<{success:boolean}|undefined> => {
  try {
    const response: any = await graphQLClient.request(deleteQuery,{id});
    return response.deleteCourse;
  } catch (error) {
     console.log(`An error occurred while deleting data. Due to this error:${error}`);
  }
}