import mongoose from "mongoose";
import { Document } from "mongoose";
import { TeacherInterface } from "../../interfaces/teacher";
import TeacherModel from "../models/Teacher";
import GenericRepo from "./genericRepo";

class TeacherRepo extends GenericRepo<TeacherInterface & Document> {
  constructor() {
    super(TeacherModel);
  }

  addTeacher(teacherData: TeacherInterface) {
    const newTeacher = new TeacherModel({
      specialization: teacherData.specialization,
      bio: teacherData.bio,
      qualification: teacherData.qualification,
      courses: teacherData.courses,
      students: teacherData.students,
      user: teacherData.user,
    });
    return newTeacher.save();
  }
}

export default TeacherRepo;
