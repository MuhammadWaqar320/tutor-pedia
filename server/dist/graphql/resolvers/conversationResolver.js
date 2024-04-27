"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversationByParticipantsResolver = void 0;
const conversationService_1 = __importDefault(require("../../services/conversationService"));
const ConversationService = new conversationService_1.default();
const getConversationByParticipantsResolver = async (_, args) => {
    return ConversationService.getConversationByParticipants(args);
};
exports.getConversationByParticipantsResolver = getConversationByParticipantsResolver;
