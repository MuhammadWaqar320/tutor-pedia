import { Document } from "mongoose";
import { Message } from "../../interfaces/chat";
import ConversationServiceClass from "../../services/conversationService";


const ConversationService = new ConversationServiceClass();

export const getConversationByParticipantsResolver = async (_: any, args: any) => {
  return ConversationService.getConversationByParticipants(args);
}
