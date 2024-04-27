import { Document } from "mongoose";
import { Message } from "../../interfaces/chat";
import MessageService from "../../services/messageService";


const MsgService = new MessageService();

export const getAllMessagesResolver = async () => {
    return MsgService.getAllData(["receiverId","senderId"],true);
};

export const createMessageResolver = async (_: any, args: Message) => {
  return MsgService.createMessage(args);
};
