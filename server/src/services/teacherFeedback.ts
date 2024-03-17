import { successResponse, errorResponse } from "../utils/utilFunctions";
import { TeacherFeedbackInterface } from "../interfaces/teacher";
import TeacherFeedbackRepoClass from "../data/repo/teacherFeedbackRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const TeacherFeedbackRepo = new TeacherFeedbackRepoClass();

class TeacherFeedbackService extends GenericService<TeacherFeedbackInterface & Document> {
  constructor() {
    super(TeacherFeedbackRepo);
  }

  // Add specific functionalities for teacher feedback service here
}

export default TeacherFeedbackService;
