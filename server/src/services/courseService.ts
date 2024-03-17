import { successResponse, errorResponse } from "../utils/utilFunctions";
import { CourseInterface } from "../interfaces/course";
import CourseRepoClass from "../data/repo/courseRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const CourseRepo = new CourseRepoClass();

class CourseService extends GenericService<CourseInterface & Document> {
  constructor() {
    super(CourseRepo);
  }
  async createCourse(data:CourseInterface) {
      try {
        const dbResponse = await CourseRepo.addCourse(data);
        return successResponse(dbResponse, "Course created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default CourseService;
