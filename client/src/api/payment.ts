

import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";


const gqlQuery = gql`
query  getAllPayment {
 getAllPayment {
    id,
 paymentDate,
  amount,
  verified,
 user{
    firstName,
    lastName
},
  course{
    name
  }
}
}
`;

const createPaymentMutation = gql`
 mutation createPayment(
  $user: ID!
  $amount: String!
  $course: ID!
  $verified: Boolean!
) {
  createPayment(
    user: $user
    amount: $amount
    course: $course
    verified: $verified
  ) {
    success
    code
  }
}

`;


export const getAllPayments = async():Promise<any> => {
    try {
      const response: any = await graphQLClient.request(gqlQuery);

        return response.getAllPayment;
    } catch (error) {
        console.log(`An error occurred while fetching all payments. Due to this error:${error}`);
    }
}

export const AddNewPayment = async (
  variables: any
): Promise<{ success: boolean; message:string}> => {
  try {
    const response:any=
      await graphQLClient.request(createPaymentMutation, {
        ...variables,
      });

    return response?.createPayment ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};