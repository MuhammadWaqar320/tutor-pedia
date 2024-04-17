import NotesServiceClass from "../../services/notesService";
import { NotesInterface } from '../../interfaces/notes';

const NotesService = new NotesServiceClass();

export const getAllNotesResolver = async () => {
    return NotesService.getAllData(["course"],true);
};

export const createNotesResolver = async (_: any, args: NotesInterface) => {
    return NotesService.createNotes(args);
};
