import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";
const createMutation = gql`
  mutation createWorshop(
    $type: String!
    $date: String!
    $teacherId: String!
    $noOfStudents: Int
    $meetingLink: String!
    $detail: String!
    $duration: String!
  ) {
    createWorshop(
      type: $type
      date: $date
      teacherId: $teacherId
      noOfStudents: $noOfStudents
      meetingLink: $meetingLink
      detail: $detail
      duration: $duration
      
    ) {
      success
      message
    }
  }
`;

const getById = gql`
  query getWorkShopByTeacherId($id: ID!) {
    getWorkShopByTeacherId(id: $id) {
      type
      date
      noOfStudents
      detail
      id
      duration
    }
  }
`;
export const createWorkshop = async (variables: any): Promise<any> => {
  try {
    const response: any = await graphQLClient.request(createMutation, {
      ...variables,
    });

    return response?.createWorshop ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};

export const getWorkshopById = async (id: string) => {
  try {
    const  getWorkShopById : any = await graphQLClient.request(getById, {
      id,
    });
    return (
      getWorkShopById.getWorkShopByTeacherId ?? { success: false, code: "" }
    );
  } catch (error) {
    throw error;
  }
};
