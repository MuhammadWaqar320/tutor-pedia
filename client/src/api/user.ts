import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

export enum UserRole {
  Admin = "Admin",
  Teacher = "Teacher",
  Student = "Student",
}
export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  role: UserRole;
  password: string;
  profileUrl: string;
  bio?: string;
  qualification?: string;
  specialization?: string;
}

export interface AddCourseType {
  name: string;
  category: string;
  description: string;
  price: string;
  level: number;
  duration: number;
  preRequisites: string;
  coverPhotoUrl: string;
  language: string;
  isCertified: boolean;
  rating: number;
  updatedAt?: number;
  createdAt?: number;
  startDate?: number;
  endDate?: number;
  students?: string;
  teacher?: string;
}
interface CreateUserResponse {
  success: boolean;
  code: string;
}

interface addNewCourseResponse {
  success: boolean;
  code: string;
}

const createUserMutation = gql`
  mutation CreateNewUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNo: String!
    $role: UserRole!
    $profileUrl: String!
    $bio: String!
    $qualification: String!
    $specialization: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNo: $phoneNo
      role: $role
      profileUrl: $profileUrl
      bio: $bio
      qualification: $qualification
      specialization: $specialization
    ) {
      success
      code
    }
  }
`;

const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourse(
    $name: String!
    $category: String!
    $description: String!
    $price: String!
    $level: Int!
    $duration: String!
    $preRequisites: String!
    $updatedAt: Int!
    $createdAt: Int!
    $coverPhotoUrl: String!
    $language: String!
    $isCertified: Boolean!
    $rating: Int!
    $startDate: Int!
    $endDate: Int!
    $teacher: ID
    $students: [ID]!
  ) {
    createCourse(
      name: $name
      category: $category
      description: $description
      price: $price
      level: $level
      duration: $duration
      preRequisites: $preRequisites
      updatedAt: $updatedAt
      createdAt: $createdAt
      coverPhotoUrl: $coverPhotoUrl
      language: $language
      isCertified: $isCertified
      rating: $rating
      startDate: $startDate
      endDate: $endDate
      teacher: $teacher
      students: $students
    ) {
      success
      code
    }
  }
`;

export const createNewUser = async (
  variables: UserType
): Promise<CreateUserResponse> => {
  try {
    const response: { createUser?: CreateUserResponse } =
      await graphQLClient.request(createUserMutation, {
        ...variables,
      });

    return response?.createUser ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};


const deleteQuery = gql`
mutation deleteUser($id:ID){
  deleteUser(id:$id){
    success
  }
}
`;

export const deleteUser = async (id:string): Promise<{success:boolean}|undefined> => {
  try {
    const response: any = await graphQLClient.request(deleteQuery,{id});
    return response.deleteUser;
  } catch (error) {
     console.log(`An error occurred while deleting data. Due to this error:${error}`);
  }
}

export const AddNewCourse = async (
  variables: AddCourseType
): Promise<addNewCourseResponse> => {
  try {
    const response: { createCourse?: addNewCourseResponse } =
      await graphQLClient.request(CREATE_COURSE_MUTATION, {
        ...variables,
      });

    return response?.createCourse ?? { success: false, code: "" };
  } catch (error) {
    console.log(error, "checkingsss");
    throw error;
  }
};
