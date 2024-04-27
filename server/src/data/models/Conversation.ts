import mongoose from "mongoose";
import { Document } from "mongoose";
import { Conversation } from "../../interfaces/chat";


const ConversationSchema =new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
     messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default:[]
    }],
         createdAt: {
        type: Number,
    },
    updatedAt: {
        type:Number
    }
})

export const ConversationModel = mongoose.model<Conversation& Document>("Conversation", ConversationSchema);