import { Document } from "mongoose";
import { successResponse, errorResponse } from "../utils/utilFunctions";
import { WorkShopRequest } from "../interfaces/workshop";
import GenericService from "./genericService";
import WorkShopRequestRepo from "../data/repo/workshopRequest";

const WorkShopRequestRepoInstance = new WorkShopRequestRepo();

class WorkShopRequestService extends GenericService<Document> {
  constructor() {
    super(WorkShopRequestRepoInstance);
  }

  async createWorkShopRequest(data: WorkShopRequest) {
    try {
      const dbResponse = await WorkShopRequestRepoInstance.addWorkShopRequest(
        data
      );
      return successResponse(dbResponse, "Workshop request created");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request, Error: ${error}`,
        null,
        null
      );
    }
  }
}

export default WorkShopRequestService;
