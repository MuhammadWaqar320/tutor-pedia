"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const genericService_1 = __importDefault(require("./genericService"));
const workshopRequest_1 = __importDefault(require("../data/repo/workshopRequest"));
const WorkShopRequestRepoInstance = new workshopRequest_1.default();
class WorkShopRequestService extends genericService_1.default {
    constructor() {
        super(WorkShopRequestRepoInstance);
    }
    async createWorkShopRequest(data) {
        try {
            const dbResponse = await WorkShopRequestRepoInstance.addWorkShopRequest(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Workshop request created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = WorkShopRequestService;
