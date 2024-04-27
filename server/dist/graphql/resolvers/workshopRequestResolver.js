"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkShopRequestResolver = exports.createWorkShopRequestResolver = exports.getAllWorkShopRequestsResolver = void 0;
const workshopRequestService_1 = __importDefault(require("../../services/workshopRequestService"));
const workShopRequestService = new workshopRequestService_1.default();
const getAllWorkShopRequestsResolver = async () => {
    return workShopRequestService.getAllData(["userId", "workShopId"], true);
};
exports.getAllWorkShopRequestsResolver = getAllWorkShopRequestsResolver;
const createWorkShopRequestResolver = async (_, args) => {
    return workShopRequestService.createWorkShopRequest(args);
};
exports.createWorkShopRequestResolver = createWorkShopRequestResolver;
const updateWorkShopRequestResolver = async (_, args) => {
    return workShopRequestService.updateDataById(args?.id ?? "", {
        status: args.status,
    });
};
exports.updateWorkShopRequestResolver = updateWorkShopRequestResolver;
// You can define more resolvers for workshop requests as needed
