"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Workshop_1 = __importDefault(require("../models/Workshop"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
class WorkShopRepo extends genericRepo_1.default {
    constructor() {
        super(Workshop_1.default);
    }
    addWorkShop(workShopData) {
        const data = {
            type: workShopData.type,
            date: workShopData.date,
            teacherId: workShopData.teacherId,
            noOfStudents: workShopData.noOfStudents,
            meetingLink: workShopData.meetingLink,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            detail: workShopData.detail,
            duration: workShopData.duration,
        };
        const newWorkShop = new Workshop_1.default(data);
        return newWorkShop.save();
    }
    getByTeacher(teacherId) {
        return Workshop_1.default.findOne({ teacherId });
    }
    ;
}
exports.default = WorkShopRepo;
