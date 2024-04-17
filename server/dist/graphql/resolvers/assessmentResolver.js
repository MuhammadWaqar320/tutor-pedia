"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssessmentResolver = exports.getAllAssessmentsResolver = void 0;
const assessmentService_1 = __importDefault(require("../../services/assessmentService"));
const assessmentService = new assessmentService_1.default();
const getAllAssessmentsResolver = async () => {
    return assessmentService.getAllData(["course"], true);
};
exports.getAllAssessmentsResolver = getAllAssessmentsResolver;
const createAssessmentResolver = async (_, args) => {
    return assessmentService.createAssessment(args);
};
exports.createAssessmentResolver = createAssessmentResolver;
