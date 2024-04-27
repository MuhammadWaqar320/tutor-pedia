import mongoose, { Document } from "mongoose";
import GenericRepo from "./genericRepo";
import { MessageModel } from "../models/Message";
import { Message } from "../../interfaces/chat";

class MessageRepo extends GenericRepo<Message & Document> {
  constructor() {
    super(MessageModel);
  }

  addMessage(messageData: Message) {
    const newMessage = new MessageModel({
      senderId: messageData.senderId,
      receiverId: messageData.receiverId,
      message: messageData.message,
      createdAt: Date.now(),
      updatedAt:Date.now()
    });
    return newMessage.save();
  }
}

export default MessageRepo;
