import { successResponse, errorResponse } from "../utils/utilFunctions";
import { Message } from "../interfaces/chat";
import MessageRepoClass from "../data/repo/messageRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";
import ConversationRepoClass from "../data/repo/conversationRepo";
import { getReceiverSocketId, io } from "../server";

const MessageRepo = new MessageRepoClass();
const ConversationRepo = new ConversationRepoClass();

class MessageService extends GenericService<Message & Document> {
  constructor() {
    super(MessageRepo);
  }

async createMessage(data: Message) {
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
    const receiverSocketId = getReceiverSocketId(data.receiverId);
    if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage",data)
    }

    return successResponse(dbResponse, "Message created");
  } catch (error) {
    return errorResponse(
      `An error occurred while processing your request, Error: ${error}`,
      null,
      null
    );
  }
}

}

export default MessageService;
