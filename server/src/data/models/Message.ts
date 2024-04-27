import mongoose from "mongoose";
import { Document } from "mongoose";
import { Message } from "../../interfaces/chat";


const MessageSchema =new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
     receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    message: {
        type: String,
        required:true
    },
    createdAt: {
        type: Number,
    },
    updatedAt: {
        type:Number
    }
})

export const MessageModel = mongoose.model<Message& Document>("Message", MessageSchema);