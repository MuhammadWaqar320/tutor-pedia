"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const notesRepo_1 = __importDefault(require("../data/repo/notesRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const NotesRepo = new notesRepo_1.default();
class NotesService extends genericService_1.default {
    constructor() {
        super(NotesRepo);
    }
    async createNotes(data) {
        try {
            const dbResponse = await NotesRepo.addNotes(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Notes created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = NotesService;
