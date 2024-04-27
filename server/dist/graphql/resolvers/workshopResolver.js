"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkShopStudent = exports.createWorkShopResolver = exports.getWorkShopByTeacherId = exports.getWorkShopByIdResolver = exports.getAllWorkShopsResolver = void 0;
const workshopService_1 = __importDefault(require("../../services/workshopService"));
const workShopService = new workshopService_1.default();
const getAllWorkShopsResolver = async () => {
    return workShopService.getAllData();
};
exports.getAllWorkShopsResolver = getAllWorkShopsResolver;
const getWorkShopByIdResolver = async (_, args) => {
    return workShopService.getDataById(args.id);
};
exports.getWorkShopByIdResolver = getWorkShopByIdResolver;
const getWorkShopByTeacherId = async (_, args) => {
    return workShopService.getWSbyTeacherId(args.id);
};
exports.getWorkShopByTeacherId = getWorkShopByTeacherId;
const createWorkShopResolver = async (_, args) => {
    return workShopService.createWorkShop(args);
};
exports.createWorkShopResolver = createWorkShopResolver;
const updateWorkShopStudent = async (_, args) => {
    return null;
};
exports.updateWorkShopStudent = updateWorkShopStudent;
