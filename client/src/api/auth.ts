import gql from "graphql-tag";
import { GraphQLClient } from "graphql-request";
import { GraphQLError } from 'graphql';

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? ""
);

interface AuthResponseType {
  success: boolean;
  token: string|null;
  message: string;
}
type ErrorResponse = {
  status: number;
  headers: Record<string, string>;
  data: {
    auth: null;
  };
  errors: Array<{
    message: string;
  }>;
};

const userAuthMutation = gql`
  mutation userAuth($email: String!, $password: String!) {
    auth(email: $email, password: $password) {
      token
      success
    }
  }
`;

export const signIn = async (variables: {
  email: string;
  password: string;
}): Promise<AuthResponseType> => {
  try {
    const response: { auth?: AuthResponseType } = await graphQLClient.request(
      userAuthMutation,
      {
        ...variables,
      }
    );
    const {token,success} = response?.auth||{token:"",success:false};
    return {token,success,message:"logged In"};
  } catch (error: any) {
    const errorResponse: ErrorResponse = error.response;

    return {
      success:false,
      token:null,
      message:errorResponse?.errors[0]?.message??"An error occurred while processing your request."
    }
  }
};
