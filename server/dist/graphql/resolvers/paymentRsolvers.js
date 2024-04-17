"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentResolver = exports.getAllPaymentsResolver = void 0;
const paymentService_1 = __importDefault(require("../../services/paymentService"));
const paymentService = new paymentService_1.default();
const getAllPaymentsResolver = async () => {
    return paymentService.getAllData(["user", "course"], true);
};
exports.getAllPaymentsResolver = getAllPaymentsResolver;
const createPaymentResolver = async (_, args) => {
    return paymentService.createPayment(args);
};
exports.createPaymentResolver = createPaymentResolver;
