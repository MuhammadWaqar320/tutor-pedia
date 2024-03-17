import { Document } from "mongoose";
import { StudentInterface } from "../../interfaces/student";
import StudentModel from "../models/Student";
import GenericRepo from "./genericRepo";

class StudentRepo extends GenericRepo<StudentInterface & Document> {
  constructor() {
    super(StudentModel);
  }

  addStudent(studentData: StudentInterface) {
    const newStudent = new StudentModel({
      user: studentData.user,
      courses: studentData.courses,
      teachers: studentData.teachers,
      updatedAt: Date.now(),
    });
    return newStudent.save();
  }

}

export default StudentRepo;
