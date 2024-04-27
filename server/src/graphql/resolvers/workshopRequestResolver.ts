import { WorkShopRequest } from "../../interfaces/workshop";
import WorkShopRequestService from "../../services/workshopRequestService";

const workShopRequestService = new WorkShopRequestService();

export const getAllWorkShopRequestsResolver = async () => {
  return workShopRequestService.getAllData(["userId", "workShopId"], true);
};

export const createWorkShopRequestResolver = async (
  _: any,
  args: WorkShopRequest
) => {
  return workShopRequestService.createWorkShopRequest(args);
};

export const updateWorkShopRequestResolver = async (_: any, args: any) => {
  return workShopRequestService.updateDataById(args?.id ?? "", {
    status: args.status,
  } as any);
};
// You can define more resolvers for workshop requests as needed
