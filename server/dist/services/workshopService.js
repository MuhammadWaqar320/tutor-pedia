"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const workshopRepo_1 = __importDefault(require("../data/repo/workshopRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const WorkShopRepoInstance = new workshopRepo_1.default();
class WorkShopService extends genericService_1.default {
    constructor() {
        super(WorkShopRepoInstance);
    }
    async createWorkShop(data) {
        try {
            const dbResponse = await WorkShopRepoInstance.addWorkShop(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "WorkShop created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
    async getWSbyTeacherId(teacherId) {
        try {
            const dbResponse = await WorkShopRepoInstance.getByTeacher(teacherId);
            return dbResponse;
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = WorkShopService;
