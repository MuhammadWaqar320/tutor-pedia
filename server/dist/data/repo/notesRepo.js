"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notes_1 = __importDefault(require("../models/Notes"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class NotesRepo extends genericRepo_1.default {
    constructor() {
        super(Notes_1.default);
    }
    addNotes(NotesData) {
        const newNotes = new Notes_1.default({
            type: NotesData.type,
            course: NotesData.course,
            uploadedDate: Date.now(),
            fileUrl: NotesData.fileUrl,
            name: NotesData.name
        });
        return newNotes.save();
    }
}
exports.default = NotesRepo;
