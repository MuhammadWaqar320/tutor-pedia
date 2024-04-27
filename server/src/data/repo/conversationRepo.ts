import mongoose, { Document } from "mongoose";
import { Conversation } from "../../interfaces/chat";
import GenericRepo from "./genericRepo";
import { ConversationModel } from "../models/Conversation";

class ConversationRepo extends GenericRepo<Conversation & Document> {
  constructor() {
    super(ConversationModel);
  }

  addConversation(conversationData: Conversation) {
    const newConversation = new ConversationModel({
      participants: conversationData.participants,
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return newConversation.save();
  }
  findByParticipants(filterObj:object) {
    return ConversationModel.findOne({
      participants:filterObj
    }).populate(["messages","participants"]).exec();
  }
}

export default ConversationRepo;
