"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const messageRepo_1 = __importDefault(require("../data/repo/messageRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const conversationRepo_1 = __importDefault(require("../data/repo/conversationRepo"));
const server_1 = require("../server");
const MessageRepo = new messageRepo_1.default();
const ConversationRepo = new conversationRepo_1.default();
class MessageService extends genericService_1.default {
    constructor() {
        super(MessageRepo);
    }
    async createMessage(data) {
        try {
            // Check if a conversation between the sender and receiver already exists
            let conversation = await ConversationRepo.findByParticipants({
                $all: [data.senderId, data.receiverId]
            });
            // If the conversation does not exist, create a new one
            if (!conversation) {
                conversation = await ConversationRepo.addConversation({
                    participants: [data.senderId, data.receiverId],
                    messages: [] // Initialize an empty messages array
                });
            }
            // Add the message ID to the conversation's messages array
            const dbResponse = await MessageRepo.addMessage(data);
            if (dbResponse) {
                conversation?.messages?.push(dbResponse._id); // Push the message ID
                await conversation.save(); // Save the updated conversation
            }
            const receiverSocketId = (0, server_1.getReceiverSocketId)(data.receiverId);
            if (receiverSocketId) {
                server_1.io.to(receiverSocketId).emit("newMessage", data);
            }
            return (0, utilFunctions_1.successResponse)(dbResponse, "Message created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = MessageService;
