import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

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
interface CreateUserResponse {
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
