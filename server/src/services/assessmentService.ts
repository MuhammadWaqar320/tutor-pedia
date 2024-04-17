import { successResponse, errorResponse } from "../utils/utilFunctions";
import { AssessmentInterface } from "../interfaces/assessment";
import AssessmentRepoClass from "../data/repo/assessmentRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const AssessmentRepo = new AssessmentRepoClass();

class AssessmentService extends GenericService<AssessmentInterface & Document> {
  constructor() {
    super(AssessmentRepo);
  }

  async createAssessment(data: AssessmentInterface) {
    try {
      const dbResponse = await AssessmentRepo.addAssessment(data);
      return successResponse(dbResponse, "Assessment created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default AssessmentService;
