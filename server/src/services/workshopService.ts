import { Document } from "mongoose";
import { successResponse, errorResponse } from "../utils/utilFunctions";
import { WorkShop } from "../interfaces/workshop";
import WorkShopRepo from "../data/repo/workshopRepo";
import GenericService from "./genericService";

const WorkShopRepoInstance = new WorkShopRepo();

class WorkShopService extends GenericService<WorkShop & Document> {
  constructor() {
    super(WorkShopRepoInstance);
  }

  async createWorkShop(data: WorkShop) {
    try {
      const dbResponse = await WorkShopRepoInstance.addWorkShop(data);
      return successResponse(dbResponse, "WorkShop created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
  async getWSbyTeacherId(teacherId:string) {
    try {
      const dbResponse = await WorkShopRepoInstance.getByTeacher(teacherId);

      return dbResponse;
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default WorkShopService;
