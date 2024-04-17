import { Schema } from "mongoose";

export interface PaymentInterface {
    id?: string;
    user: Schema.Types.ObjectId;
    paymentDate: number;
    amount: string;
    verified: boolean;
    course:Schema.Types.ObjectId;
  }