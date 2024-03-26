import { TeacherType } from "./teacher";
import { StudentType } from "./student";
import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

export interface CourseType {
  id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    level: number;
    duration:string;
    preRequisites:string;
    upatedAt: number;
    createAt: number;
    coverPhotoUrl:string;
    language: string;
    isCertified: boolean;
    rating: number;
    startDate: number;
    endDate: number;
    teacher: TeacherType;
    students: StudentType[];
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

export const getCourses = async():Promise<CourseType[]|undefined> => {
    try {
        const response:any = await graphQLClient.request(gqlQuery);
        return response.getAllCourse;
    } catch (error) {
        console.log(`An error occurred while fetching all course. Due to this error:${error}`);
    }
}

