import { successResponse, errorResponse } from "../utils/utilFunctions";
import { Conversation } from "../interfaces/chat";
import GenericService from "./genericService";
import { Document } from "mongoose";
import ConversationRepoClass from "../data/repo/conversationRepo";

const ConversationRepo = new ConversationRepoClass();

class ConversationService extends GenericService<Conversation & Document> {
  constructor() {
    super(ConversationRepo);
    }
    async getConversationByParticipants(data:any) {
       try {
        const conversation=await ConversationRepo.findByParticipants({
      $all: [data.senderId, data.receiverId]
        })
           return conversation;
       } catch (error) {
         return errorResponse(
      `An error occurred while processing your request, Error: ${error}`,
      null,
      null
    );
       }
    }
    
}

export default ConversationService;
