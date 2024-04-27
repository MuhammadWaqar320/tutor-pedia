import { WorkShop } from "../../interfaces/workshop";
import WorkShopService from "../../services/workshopService";
import { Document } from "mongoose";

const workShopService = new WorkShopService();

export const getAllWorkShopsResolver = async () => {
  return workShopService.getAllData();
};

export const getWorkShopByIdResolver = async (_: any, args: { id: string }) => {
  return workShopService.getDataById(args.id);
};

export const getWorkShopByTeacherId = async (_: any, args: any) => {
  return workShopService.getWSbyTeacherId(args.id);
};
export const createWorkShopResolver = async (_: any, args: WorkShop) => {
  return workShopService.createWorkShop(args);
};

export const updateWorkShopStudent = async (
  _: any,
  args: { id: string; studentId: string }
) => {
  return null;
};
