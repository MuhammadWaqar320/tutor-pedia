import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

export enum UserRole {
  Admin = "Admin",
  Teacher = "Teacher",
  Student = "Student",
}
export interface UserType {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  role?: UserRole;
  password?: string;
  profileUrl?: string;
  bio?: string;
  qualification?: string;
  specialization?: string;
}


interface CreateUserResponse {
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

const updateUserMutation = gql`
  mutation updateUser(
    $id:ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNo: String!
  ) {
    updateUser(
      id:$id
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNo: $phoneNo
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

export const updateUser = async (
  variables: UserType
): Promise<CreateUserResponse> => {
  try {
    const response:any =
      await graphQLClient.request(updateUserMutation, {
        ...variables,
      });

    return response?.updateUser ?? { success: false, code: "" };
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

