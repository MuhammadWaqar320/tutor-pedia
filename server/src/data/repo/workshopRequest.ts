import { Document } from "mongoose";
import { WorkShopRequest } from "../../interfaces/workshop";
import WorkShopRequestModel from "../models/WorkshopRequest";
import GenericRepo from "./genericRepo";

class WorkShopRequestRepo extends GenericRepo<Document> {
  constructor() {
    super(WorkShopRequestModel);
  }

  addWorkShopRequest(workShopRequestData: WorkShopRequest) {
    const data = {
      workShopId: workShopRequestData.workShopId,
      userId: workShopRequestData.userId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: workShopRequestData.status,
    };
    const newWorkShopRequest = new WorkShopRequestModel(data);
    return newWorkShopRequest.save();
  }
}

export default WorkShopRequestRepo;
