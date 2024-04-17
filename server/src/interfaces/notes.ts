import { Schema } from "mongoose";

export interface NotesInterface {
    id?: string;
    type: string;
    course: Schema.Types.ObjectId;
    uploadedDate?: number;
  fileUrl: string;
  name: string;
  }