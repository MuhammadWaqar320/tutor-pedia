import mongoose, { Schema, Document } from "mongoose";
import { WorkShopRequest } from "../../interfaces/workshop";

const WorkshopRequestSchema: Schema = new Schema({
  workShopId: { type: Schema.Types.ObjectId, ref: "WorkShop", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
  status: { type: String, required: true },
});

const WorkshopRequestModel = mongoose.model<WorkShopRequest & Document>(
  "WorkshopRequest",
  WorkshopRequestSchema
);

export default WorkshopRequestModel;
