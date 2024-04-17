import { successResponse, errorResponse } from "../utils/utilFunctions";
import { NotesInterface } from "../interfaces/notes";
import NotesRepoClass from "../data/repo/notesRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const NotesRepo = new NotesRepoClass();

class NotesService extends GenericService<NotesInterface & Document> {
  constructor() {
    super(NotesRepo);
  }

  async createNotes(data: NotesInterface) {
    try {
      const dbResponse = await NotesRepo.addNotes(data);
      return successResponse(dbResponse, "Notes created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default NotesService;
