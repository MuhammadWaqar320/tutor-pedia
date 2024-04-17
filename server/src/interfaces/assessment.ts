import { Schema } from "mongoose";

export interface AssessmentInterface {
    id?: string;
    type: string;
    course: Schema.Types.ObjectId;
    uploadedDate?: number;
    deadline: string;
  fileUrl: string;
  name: string;
  }