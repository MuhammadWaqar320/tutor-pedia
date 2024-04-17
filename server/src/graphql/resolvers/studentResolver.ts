import Student from "../../data/models/Student";
import { StudentInterface } from "../../interfaces/student";
import { successResponse, errorResponse } from "../../utils/utilFunctions";
import { Document } from "mongoose";
import StudentServiceClass from "../../services/studentService";

const StudentService = new StudentServiceClass();

export const getAllStudentResolver = async () => {
  return StudentService.getAllData(["teachers","courses","user"],true);
};
export const getStudentByIdResolver = (_: any, args: { id: string }) => {
  return StudentService.getDataById(args.id,["teachers","courses","user"],true);
};
export const updateStudentResolver = async (
  _: any,
  args: StudentInterface & Document
) => {
  return StudentService.updateDataById(args.id, args);
};
export const deleteStudentResolver=async(_:any,  args:{ id: string } )=>{
  return StudentService.deleteById(args.id)
}

export const getStudentByUserIdResolver= (_: any, args: { user: string }) => {
  return StudentService.getStudentByUserId(args.user,["teachers","courses","user"],true);
};

