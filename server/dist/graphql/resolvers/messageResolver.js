"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageResolver = exports.getAllMessagesResolver = void 0;
const messageService_1 = __importDefault(require("../../services/messageService"));
const MsgService = new messageService_1.default();
const getAllMessagesResolver = async () => {
    return MsgService.getAllData(["receiverId", "senderId"], true);
};
exports.getAllMessagesResolver = getAllMessagesResolver;
const createMessageResolver = async (_, args) => {
    return MsgService.createMessage(args);
};
exports.createMessageResolver = createMessageResolver;
