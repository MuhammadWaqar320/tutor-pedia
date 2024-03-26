import TeacherFeedbackService from "../../services/teacherFeedback";
import { TeacherFeedbackInterface } from "../../interfaces/teacher";

const TFService = new TeacherFeedbackService();

export const getAllTeacherFeedbacksResolver = async () => {
    return TFService.getAllData(["teacher","student"],true);
};

export const getTeacherFeedbackByIdResolver = async (_: any, args: { id: string }) => {
  return TFService.getDataById(args.id,["teacher","student"],true);
};

export const createTeacherFeedbackResolver = async (_: any, args: TeacherFeedbackInterface) => {
  return TFService.addTeacherFeedback(args);
};

export const updateTeacherFeedbackResolver = async (_: any, args: TeacherFeedbackInterface & any) => {
    return TFService.updateDataById(args.id, args);
}

export const deleteTeacherFeedbackResolver = async (_: any, args: { id: string }) => {
  return TFService.deleteById(args.id);
};
