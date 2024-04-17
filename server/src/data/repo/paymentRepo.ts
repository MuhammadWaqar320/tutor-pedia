import { Document } from "mongoose";
import PaymentModel from "../models/Payment";
import GenericRepo from "./genericRepo";
import { PaymentInterface } from "../../interfaces/payment";
import StudentModel from "../models/Student";
import CourseModel from "../models/Course";

class PaymentRepo extends GenericRepo<PaymentInterface & Document> {
  constructor() {
    super(PaymentModel);
  }

 async addPayment(paymentData: PaymentInterface) {
    const newPayment = new PaymentModel({
      user: paymentData.user,
      paymentDate: Date.now(),
      amount: paymentData.amount,
      verified: paymentData.verified,
      course: paymentData.course
    });

   await StudentModel.findOneAndUpdate( { user:  paymentData.user }, 
     { $push: { courses: paymentData.course } })
   
    return newPayment.save();
  }
}

export default PaymentRepo;
