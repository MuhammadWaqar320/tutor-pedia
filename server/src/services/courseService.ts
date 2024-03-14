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
  async createCourse() {
    
  }
}

export default CourseService;
