import lodash from "lodash";
import GenericRepo from "../data/repo/genericRepo";
import { Model, ModifyResult, IfAny, Document, Require_id } from "mongoose";
import {
  successResponse,
  errorResponse,
  ResponseReturnType,
} from "../utils/utilFunctions";

class GenericService<T extends Document> {
  protected repository: GenericRepo<T>;
  constructor(repo: GenericRepo<T>) {
    this.repository = repo;
  }
  async getDataById(
    id: string
  ): Promise<
    ResponseReturnType<IfAny<
      T,
      any,
      Document<unknown, {}, T> & Require_id<T>
    > | null>
  > {
    try {
      const dbResponse = await this.repository.getDataById(id);
      return successResponse(dbResponse, "");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request. Error:${error}`,
        null,
        null
      );
    }
  }
  async getAllData(): Promise<
    | ResponseReturnType<
        IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>[]
      >
    | ResponseReturnType<null>
  > {
    try {
      const dbResponse = await this.repository.getAllData();
      return successResponse(dbResponse, "");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request. Error:${error}`,
        null,
        null
      );
    }
  }
  async updateDataById(
    id: string,
    data: T
  ): Promise<
    ResponseReturnType<IfAny<
      T,
      any,
      Document<unknown, {}, T> & Require_id<T>
    > | null>
  > {
    try {
      const dbResponse = await this.repository.updateDataById(id, data);
      return successResponse(dbResponse, "Data has been updated");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request. Error:${error}`,
        null,
        null
      );
    }
  }
  async deleteById(
    id: string
  ): Promise<
    | ResponseReturnType<
        ModifyResult<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>>
      >
    | ResponseReturnType<null>
  > {
    try {
      const dbResponse = await this.repository.deleteById(id);
      return successResponse(dbResponse, "Data has been deleted");
    } catch (error) {
      return errorResponse(
        `An error occurred while processing your request. Error:${error}`,
        null,
        null
      );
    }
  }
}

export default GenericService;
