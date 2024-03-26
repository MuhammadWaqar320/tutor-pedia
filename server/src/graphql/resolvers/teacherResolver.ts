import Teacher from "../../data/models/Teacher";
import { TeacherInterface } from "../../interfaces/teacher";
import { successResponse, errorResponse } from "../../utils/utilFunctions";
import { Document } from "mongoose";
import TeacherServiceClass from "../../services/teacherService";

const TeacherService = new TeacherServiceClass();

export const getAllTeacherResolver = async () => {
  return TeacherService.getAllData(["user","students","courses"],true);
};
export const getTeacherByIdResolver = (_: any, args: { id: string }) => {
  return TeacherService.getDataById(args.id,["user","students","courses"],true);
};
export const updateTeacherResolver = async (
  _: any,
  args: TeacherInterface & Document
) => {
  return TeacherService.updateDataById(args.id, args);
};
export const deleteTeacher=async(_:any,  args:{ id: string } )=>{
  return TeacherService.deleteById(args.id)
}

