"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConversationSchema = new mongoose_1.default.Schema({
    participants: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "User",
        }],
    messages: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }],
    createdAt: {
        type: Number,
    },
    updatedAt: {
        type: Number
    }
});
exports.ConversationModel = mongoose_1.default.model("Conversation", ConversationSchema);
