import PaymentService from "../../services/paymentService";
import { PaymentInterface } from '../../interfaces/payment';

const paymentService = new PaymentService();

export const getAllPaymentsResolver = async () => {
    return paymentService.getAllData(["user", "course"], true);
};

export const createPaymentResolver = async (_: any, args: PaymentInterface) => {
  return paymentService.createPayment(args);
};

