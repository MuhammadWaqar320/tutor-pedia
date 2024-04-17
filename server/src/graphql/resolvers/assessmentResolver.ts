import AssessmentService from "../../services/assessmentService";
import { AssessmentInterface } from '../../interfaces/assessment';

const assessmentService = new AssessmentService();

export const getAllAssessmentsResolver = async () => {
    return assessmentService.getAllData(["course"],true);
};

export const createAssessmentResolver = async (_: any, args: AssessmentInterface) => {
    return assessmentService.createAssessment(args);
};
