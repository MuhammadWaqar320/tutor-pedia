import mongoose from "mongoose";
import { Document } from "mongoose";
import { CourseInterface } from "../../interfaces/course";
import CourseModel from "../models/Course";
import GenericRepo from "./genericRepo";

class CourseRepo extends GenericRepo<CourseInterface & Document> {
  constructor() {
    super(CourseModel);
  }

  addCourse(courseData: CourseInterface) {
    const newCourse = new CourseModel({
      name: courseData.name,
      category: courseData.category,
      description: courseData.description,
      price: courseData.price,
      level: courseData.level,
      duration: courseData.duration,
      preRequisites: courseData.preRequisites,
      updatedAt: Date.now(),
      createdAt: Date.now(),
      coverPhotoUrl: courseData.coverPhotoUrl,
      language: courseData.language,
      isCertified: courseData.isCertified,
      rating: courseData.rating,
      startDate: courseData.startDate,
      endDate: courseData.endDate,
      teacher: courseData.teacher,
      students: courseData.students,
    });
    return newCourse.save();
  }
}

export default CourseRepo;
