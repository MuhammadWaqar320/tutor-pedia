"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotesResolver = exports.getAllNotesResolver = void 0;
const notesService_1 = __importDefault(require("../../services/notesService"));
const NotesService = new notesService_1.default();
const getAllNotesResolver = async () => {
    return NotesService.getAllData(["course"], true);
};
exports.getAllNotesResolver = getAllNotesResolver;
const createNotesResolver = async (_, args) => {
    return NotesService.createNotes(args);
};
exports.createNotesResolver = createNotesResolver;
