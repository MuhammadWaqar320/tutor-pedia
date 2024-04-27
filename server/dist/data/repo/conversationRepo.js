"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genericRepo_1 = __importDefault(require("./genericRepo"));
const Conversation_1 = require("../models/Conversation");
class ConversationRepo extends genericRepo_1.default {
    constructor() {
        super(Conversation_1.ConversationModel);
    }
    addConversation(conversationData) {
        const newConversation = new Conversation_1.ConversationModel({
            participants: conversationData.participants,
            messages: [],
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
        return newConversation.save();
    }
    findByParticipants(filterObj) {
        return Conversation_1.ConversationModel.findOne({
            participants: filterObj
        }).populate(["messages", "participants"]).exec();
    }
}
exports.default = ConversationRepo;
