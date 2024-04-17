import mongoose, { Schema, Document } from "mongoose";
import { NotesInterface } from "../../interfaces/notes";

const NotesSchema: Schema = new mongoose.Schema({
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
  fileUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const NotesModel = mongoose.model<NotesInterface& Document>("Notes", NotesSchema);

export default NotesModel;
