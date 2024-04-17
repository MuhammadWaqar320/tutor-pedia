import { Document } from "mongoose";
import AssessmentModel from "../models/Assessment";
import { AssessmentInterface } from "../../interfaces/assessment";
import GenericRepo from "./genericRepo";

class AssessmentRepo extends GenericRepo<AssessmentInterface & Document> {
  constructor() {
    super(AssessmentModel);
  }

  addAssessment(assessmentData: AssessmentInterface) {
    const newAssessment = new AssessmentModel({
      type: assessmentData.type,
      course: assessmentData.course,
      uploadedDate: Date.now(),
      deadline: assessmentData.deadline,
      fileUrl: assessmentData.fileUrl,
      name:assessmentData.name
    });
    return newAssessment.save();
  }
}

export default AssessmentRepo;
