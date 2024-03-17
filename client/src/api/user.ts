import gql from "graphql-tag";
import { GraphQLClient } from "graphql-request";


const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? ""
);

export enum UserRole {
  Admin = "Admin",
  Teacher = "Teacher",
  Student = "Student",
}
export interface UserType {
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
  photoUrl: string;
  language:string;
  isCertified:boolean;

}
interface CreateUserResponse {
  success:boolean,
  code:string
}

interface addNewCourseResponse {
  success:boolean,
  code:string
}

const createUserMutation = gql`
  mutation CreateNewUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNo: String!
    $role: UserRole!
    $profileUrl:String!
    $bio:String!
    $qualification:String!
    $specialization:String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNo: $phoneNo
      role: $role
      profileUrl:$profileUrl
      bio:$bio
      qualification:$qualification
      specialization:$specialization
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
    
    return response?.createUser ?? { success: false, code:""  };
  } catch (error) {
    throw error;
  }
};

// export const AddNewCourse = async (
//   variables: AddCourseType
// ): Promise<addNewCourseResponse> => {
//   try{

//     return  

//   }catch (error) {
//     throw error;
//   }
// }
