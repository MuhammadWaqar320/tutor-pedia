import { gqlErrorCodes } from "./constant";

export interface ResponseReturnType<T> {
  data: T;
  success: boolean;
  message: string;
  code: string;
}

export const successResponse = <T>(
  data: T,
  message: string
): ResponseReturnType<T> => {
  return {
    data: data,
    success: true,
    message: message,
    code: "OK",
  };
};

export const errorResponse = <T>(
  errorMessage: string,
  statusCode: string | null,
  data: T
): ResponseReturnType<T> => {
  return {
    data: data,
    success: false,
    message: errorMessage ?? gqlErrorCodes.internalServerError,
    code: statusCode ?? gqlErrorCodes.internalServerError,
  };
};

export const constructResponse = () => {
  
}