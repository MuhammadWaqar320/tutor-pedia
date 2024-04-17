import mongoose, { Schema, Document } from "mongoose";
import { AssessmentInterface } from "../../interfaces/assessment";

const AssessmentSchema: Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  uploadedDate: {
    type: Number,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const AssessmentModel = mongoose.model<AssessmentInterface& Document>("Assessment", AssessmentSchema);

export default AssessmentModel;
