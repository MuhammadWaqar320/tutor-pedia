import mongoose, { Document, Schema } from "mongoose";
import { PaymentInterface } from "../../interfaces/payment";
// Define the schema for the payment
const PaymentSchema = new Schema< PaymentInterface& Document>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: String, required: true },
  verified: { type: Boolean, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  paymentDate:{type:Number,required:true}
});

// Define and export the model for the payment
const PaymentModel = mongoose.model< PaymentInterface& Document>("Payment", PaymentSchema);

export default PaymentModel;
