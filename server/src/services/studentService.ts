import { successResponse, errorResponse } from "../utils/utilFunctions";
import { StudentInterface } from "../interfaces/student";
import StudentRepoClass from "../data/repo/studentRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const StudentRepo = new StudentRepoClass();

class StudentService extends GenericService<StudentInterface & Document> {
  constructor() {
    super(StudentRepo);
  }
  async createStudent(data:StudentInterface) {
    try {
        const dbResponse = await StudentRepo.addStudent(data);
        return successResponse(dbResponse, "Student created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
  async getStudentByUserId( userId: string,
    populatedFields:string[]=[],isPopulated:boolean=false) {
       try {
      if (isPopulated) {
        return StudentRepo.getStudentByUserId(userId,populatedFields,isPopulated);
      }
      return StudentRepo.getStudentByUserId(userId);
    } catch (error) {
      throw new Error(
        `An error occurred while processing your request, Error:${error}`
      );
    }
  }

}

export default StudentService;
