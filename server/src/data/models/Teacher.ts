import mongoose, { Document, Schema } from "mongoose";
import { TeacherInterface } from "../../interfaces/teacher";

// Define the schema for the teacher
const TeacherSchema = new Schema<TeacherInterface & Document>({
  specialization: { type: String, required: true },
  bio: { type: String, required: true },
  qualification: { type: String, required: true },
});

// Define and export the model for the teacher
const TeacherModel = mongoose.model<TeacherInterface & Document>("Teacher", TeacherSchema);

export default TeacherModel;
