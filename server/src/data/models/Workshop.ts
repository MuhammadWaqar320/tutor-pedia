import mongoose, { Schema, Document } from "mongoose";
import { StudentInterface } from "../../interfaces/student";
import { WorkShop } from "../../interfaces/workshop";

const WorkShopSchema: Schema = new Schema({
  type: { type: String, required: true },
  date: { type: String, required: true },
  teacherId: { type: String, required: true },
  noOfStudents: { type: Number },
  meetingLink: { type: String, required: true },
  createdAt: { type: Number, required: true },
  updatedAt: { type: Number, required: true },
  detail: { type: String, required: true },
  duration:{type:String}
});

const WorkShopModel = mongoose.model<WorkShop & Document>(
  "WorkShop",
  WorkShopSchema
);

export default WorkShopModel;
