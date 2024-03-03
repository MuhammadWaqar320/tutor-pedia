import mongoose from "mongoose";
import { Document } from "mongoose";
import { TeacherFeedbackInterface } from "../../interfaces/teacher";
import TeacherFeedbackModel from "../models/TeacherFeedback";
import GenericRepo from "./genericRepo";

class TeacherFeedbackRepo extends GenericRepo<TeacherFeedbackInterface & Document> {
  constructor() {
    super(TeacherFeedbackModel);
  }

  addTeacherFeedback(feedbackData: TeacherFeedbackInterface) {
    const newFeedback = new TeacherFeedbackModel({
      student: feedbackData.student,
      teacher: feedbackData.teacher,
      feedback: feedbackData.feedback,
      rating: feedbackData.rating,
      feedbackDate: Date.now(),
    });
    return newFeedback.save();
  }

  // Add more methods as needed for specific operations related to teacher feedback
}

export default TeacherFeedbackRepo;
