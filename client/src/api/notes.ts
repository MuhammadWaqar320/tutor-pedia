import gql from "graphql-tag";
import { graphQLClient } from "@/config/gqlConfig";
import { CourseType } from "./course";

export interface NotesType {
    id?: string;
    type: string;
    course: CourseType|string;
    uploadedDate?: number;
  fileUrl: string;
  name: string;
  }
  
const gqlQuery = gql`
query getAllNotes{
  getAllNotes {
    id,
    type,
    uploadedDate,
    fileUrl,
    name,
    course{
      name
    }   
  }
}
`;

const createNotesMutation = gql`
  mutation CreateNotes(
    $type: String!
    $course: String!
    $fileUrl: String!
    $name:String!
  ) {
    createNotes(
      type: $type
      course: $course
      fileUrl: $fileUrl
      name:$name
    ) {
      success
      code
    }
  }
`;

export const getNotes = async():Promise<NotesType[]|undefined> => {
    try {
        const response:any = await graphQLClient.request(gqlQuery);
        return response.getAllNotes;
    } catch (error) {
        console.log(`An error occurred while fetching all course. Due to this error:${error}`);
    }
}

export const AddNewNotes = async (
  variables: NotesType
): Promise<{ success: boolean; message:string}> => {
  try {
    const response:any=
      await graphQLClient.request(createNotesMutation, {
        ...variables,
      });

    return response?.createNotes ?? { success: false, code: "" };
  } catch (error) {
    throw error;
  }
};