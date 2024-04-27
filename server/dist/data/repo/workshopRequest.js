"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorkshopRequest_1 = __importDefault(require("../models/WorkshopRequest"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class WorkShopRequestRepo extends genericRepo_1.default {
    constructor() {
        super(WorkshopRequest_1.default);
    }
    addWorkShopRequest(workShopRequestData) {
        const data = {
            workShopId: workShopRequestData.workShopId,
            userId: workShopRequestData.userId,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            status: workShopRequestData.status,
        };
        const newWorkShopRequest = new WorkshopRequest_1.default(data);
        return newWorkShopRequest.save();
    }
}
exports.default = WorkShopRequestRepo;
