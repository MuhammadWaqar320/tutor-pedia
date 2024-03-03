import { successResponse, errorResponse } from "../utils/utilFunctions";
import { TeacherInterface } from "../interfaces/teacher";
import TeacherRepoClass from "../data/repo/teacherRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const TeacherRepo = new TeacherRepoClass();

class TeacherService extends GenericService<TeacherInterface & Document> {
  constructor() {
    super(TeacherRepo);
  } 
  async createTeacher(data:TeacherInterface ) {
    try {
        const dbResponse = await TeacherRepo.addTeacher(data);
        return successResponse(dbResponse, "Teacher created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default TeacherService;
