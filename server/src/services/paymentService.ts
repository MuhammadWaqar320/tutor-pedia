import { successResponse, errorResponse } from "../utils/utilFunctions";
import { PaymentInterface } from "../interfaces/payment";
import PaymentRepoClass from "../data/repo/paymentRepo";
import GenericService from "./genericService";
import { Document } from "mongoose";

const PaymentRepo = new PaymentRepoClass();

class PaymentService extends GenericService<PaymentInterface & Document> {
  constructor() {
    super(PaymentRepo);
  }

  async createPayment(data: PaymentInterface) {
    try {
      const dbResponse = await PaymentRepo.addPayment(data);
      
      return successResponse(dbResponse, "Payment created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default PaymentService;
