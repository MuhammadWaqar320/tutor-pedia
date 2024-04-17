"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = __importDefault(require("../models/Payment"));
const genericRepo_1 = __importDefault(require("./genericRepo"));
const Student_1 = __importDefault(require("../models/Student"));
class PaymentRepo extends genericRepo_1.default {
    constructor() {
        super(Payment_1.default);
    }
    async addPayment(paymentData) {
        const newPayment = new Payment_1.default({
            user: paymentData.user,
            paymentDate: Date.now(),
            amount: paymentData.amount,
            verified: paymentData.verified,
            course: paymentData.course
        });
        await Student_1.default.findOneAndUpdate({ user: paymentData.user }, { $push: { courses: paymentData.course } });
        return newPayment.save();
    }
}
exports.default = PaymentRepo;
