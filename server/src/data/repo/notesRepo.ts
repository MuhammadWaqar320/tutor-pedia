import { Document } from "mongoose";
import NotesModel from "../models/Notes";
import { NotesInterface } from "../../interfaces/notes";
import GenericRepo from "./genericRepo";

class NotesRepo extends GenericRepo<NotesInterface & Document> {
  constructor() {
    super(NotesModel);
  }

  addNotes(NotesData: NotesInterface) {
    const newNotes = new NotesModel({
      type: NotesData.type,
      course: NotesData.course,
      uploadedDate: Date.now(),
      fileUrl: NotesData.fileUrl,
      name:NotesData.name
    });
    return newNotes.save();
  }
}

export default NotesRepo;
