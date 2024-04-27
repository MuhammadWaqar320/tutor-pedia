"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const genericService_1 = __importDefault(require("./genericService"));
const conversationRepo_1 = __importDefault(require("../data/repo/conversationRepo"));
const ConversationRepo = new conversationRepo_1.default();
class ConversationService extends genericService_1.default {
    constructor() {
        super(ConversationRepo);
    }
    async getConversationByParticipants(data) {
        try {
            const conversation = await ConversationRepo.findByParticipants({
                $all: [data.senderId, data.receiverId]
            });
            return conversation;
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = ConversationService;
