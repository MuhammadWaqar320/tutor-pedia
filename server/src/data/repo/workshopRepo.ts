import { Document, Model } from "mongoose";
import { WorkShop } from "../../interfaces/workshop";
import WorkShopModel from "../models/Workshop";
import GenericRepo from "./genericRepo";

class WorkShopRepo extends GenericRepo<WorkShop & Document> {
  constructor() {
    super(WorkShopModel);
  }

  addWorkShop(workShopData: WorkShop) {
    const data = {
      type: workShopData.type,
      date: workShopData.date,
      teacherId: workShopData.teacherId,
      noOfStudents: workShopData.noOfStudents,
      meetingLink: workShopData.meetingLink,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      detail: workShopData.detail,
      duration: workShopData.duration,
    };
    const newWorkShop = new WorkShopModel(data);
    return newWorkShop.save();
  }
  getByTeacher(teacherId: string) {
    return WorkShopModel.findOne({ teacherId });
  };
}

export default WorkShopRepo;
