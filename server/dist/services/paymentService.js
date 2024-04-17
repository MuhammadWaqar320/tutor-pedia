"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const paymentRepo_1 = __importDefault(require("../data/repo/paymentRepo"));
const genericService_1 = __importDefault(require("./genericService"));
const PaymentRepo = new paymentRepo_1.default();
class PaymentService extends genericService_1.default {
    constructor() {
        super(PaymentRepo);
    }
    async createPayment(data) {
        try {
            const dbResponse = await PaymentRepo.addPayment(data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Payment created");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request, Error: ${error}`, null, null);
        }
    }
}
exports.default = PaymentService;
