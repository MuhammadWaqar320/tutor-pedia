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
    level: string;
    duration:string;
    preRequisites:string;
    upatedAt?: number;
    createAt?: number;
    coverPhotoUrl:string;
    language: string;
    isCertified: boolean|string;
    rating?: number;
    startDate: number|string;
    endDate: number|string;
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
    coverPhotoUrl
    language
    isCertified
    rating
    endDate
    teacher{
        bio
        id
    }
  }
}
`;
const gqlQueryGetCourse = gql`
query  getCourseById($id:ID!) {
   getCourseById(id:$id) {
    id
    name
    category
    description
    price
    level
    duration
    coverPhotoUrl
    language
    isCertified
    rating
    endDate
    startDate
    teacher{
        bio
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
const createCourseMutation = gql`
  mutation CreateCourse(
    $name: String!
    $category: String!
    $description: String!
    $price: String!
    $level: String!
    $duration: String!
    $preRequisites: String!
    $coverPhotoUrl: String!
    $language: String!
    $isCertified: Boolean!
    $startDate: String!
    $endDate: String!
    $teacher: ID!
    $rating:Float!
  ) {
    createCourse(
      name: $name
      category: $category
      description: $description
      price: $price
      level: $level
      duration: $duration
      preRequisites: $preRequisites
      coverPhotoUrl: $coverPhotoUrl
      language: $language
      isCertified: $isCertified
      startDate: $startDate
      endDate: $endDate
      teacher: $teacher
      rating:$rating
    ) {
      success
      code
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

export const getCourseById = async (id:string): Promise<CourseType | undefined> => {
   try {
        const response:any = await graphQLClient.request(gqlQueryGetCourse,{id});
        return response.getCourseById;
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
export const AddNewCourse = async (
  variables: CourseType
): Promise<{ success: boolean; message:string}> => {
  try {
    const response:any=
      await graphQLClient.request(createCourseMutation, {
        ...variables,
      });

    return response?.createCourse ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};