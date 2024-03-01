import mongoose, { Document, Schema } from "mongoose";
import { StudentCourseInterface } from "../../interfaces/student";

// Define the schema for the student course
const StudentCourseSchema = new Schema<Document&StudentCourseInterface>({
  createdAt: { type: Number, required: true },
  updatedAt: { type: Number, required: true },
  courseId: { type: Number, required: true },
  studentId: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
  grade: { type: Number } // Optional field, no "required" constraint
});

// Define and export the model for the student course
const StudentCourseModel = mongoose.model<Document>("StudentCourse", StudentCourseSchema);

export default StudentCourseModel;
