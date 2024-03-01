import mongoose, { Document, Schema } from "mongoose";
import { TeacherCourseInterface } from "../../interfaces/teacher";

// Define the schema for the teacher course
const TeacherCourseSchema = new Schema<Document&TeacherCourseInterface>({
  createdAt: { type: Number, required: true },
  updatedAt: { type: Number, required: true },
  courseId: { type: Number, required: true },
  teacherId: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
});

// Define and export the model for the teacher course
const TeacherCourseModel = mongoose.model<Document>("TeacherCourse", TeacherCourseSchema);

export default TeacherCourseModel;
