"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genericRepo_1 = __importDefault(require("./genericRepo"));
const Message_1 = require("../models/Message");
class MessageRepo extends genericRepo_1.default {
    constructor() {
        super(Message_1.MessageModel);
    }
    addMessage(messageData) {
        const newMessage = new Message_1.MessageModel({
            senderId: messageData.senderId,
            receiverId: messageData.receiverId,
            message: messageData.message,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
        return newMessage.save();
    }
}
exports.default = MessageRepo;
