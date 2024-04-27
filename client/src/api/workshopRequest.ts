import { TeacherType } from "./teacher";
import { StudentType } from "./student";
import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";

const gqlQuery = gql`
  query getAllWorkshopRequest {
    getAllWorkshopRequest {
      id
      status
      userId {
        firstName
        lastName
        id
      }
      workShopId {
        type
        date
        id
        duration
        detail
        meetingLink
      }
    }
  }
`;

const createMutation = gql`
  mutation createWorkShopRequest(
    $userId: String!
    $workShopId: String!
    $status: String!
  ) {
    createWorkShopRequest(
      userId: $userId
      workShopId: $workShopId
      status: $status
    ) {
      success
      message
    }
  }
`;

const updateMutation = gql`
  mutation updateWorkShopRequest($id: String!, $status: String!) {
    updateWorkShopRequest(id: $id, status: $status) {
      success
      code
    }
  }
`;

export const updateRequest = async (variables: any): Promise<any> => {
  try {
    const response: any = await graphQLClient.request(updateMutation, {
      ...variables,
    });

    return response?.updateWorkShopRequest ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};

export const getRequests = async (): Promise<any> => {
  try {
    const response: any = await graphQLClient.request(gqlQuery);
    return response.getAllWorkshopRequest;
  } catch (error) {
    console.log(
      `An error occurred while fetching all course. Due to this error:${error}`
    );
  }
};

export const AddRequest = async (
  variables: any
): Promise<{ success: boolean; message: string }> => {
  try {
    const response: any = await graphQLClient.request(createMutation, {
      ...variables,
    });

    return response?.createWorkShopRequest ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};
