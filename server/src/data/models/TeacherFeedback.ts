import mongoose, { Document, Schema } from "mongoose";
import { TeacherFeedbackInterface } from "../../interfaces/teacher";

// Define the schema for the teacher feedback
const TeacherFeedbackSchema = new Schema<Document&TeacherFeedbackInterface>({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
  feedback: { type: String, required: true }, // The actual feedback provided by the student
  rating: { type: Number, required: true }, // A numerical rating provided by the student to evaluate the teacher
  feedbackDate: { type: Number, required: true }, // The date when the feedback was submitted
});

// Define and export the model for the teacher feedback
const TeacherFeedbackModel = mongoose.model<TeacherFeedbackInterface&Document>("TeacherFeedback", TeacherFeedbackSchema);

export default TeacherFeedbackModel;
