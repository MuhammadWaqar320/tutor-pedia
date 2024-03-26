import lodash from "lodash";
import GenericRepo from "../data/repo/genericRepo";
import { Model, ModifyResult, IfAny, Document, Require_id,UnpackedIntersection } from "mongoose";
import {
  successResponse,
  errorResponse,
  ResponseReturnType,
} from "../utils/utilFunctions";
import { gqlErrorCodes } from "../utils/constant";

class GenericService<T extends Document> {
  protected repository: GenericRepo<T>;
  constructor(repo: GenericRepo<T>) {
    this.repository = repo;
  }
  async getDataById(
    id: string,
    populatedFields:string[]=[],isPopulated:boolean=false
  ): Promise<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>> | UnpackedIntersection<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>, {}> | null> {
    try {
      if (isPopulated) {
        return this.repository.getDataById(id,populatedFields,isPopulated);
      }
      return this.repository.getDataById(id);
    } catch (error) {
      throw new Error(
        `An error occurred while processing your request, Error:${error}`
      );
    }
  }
  async getAllData(populatedFields:string[]=[],isPopulated:boolean=false): Promise<Omit<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>, never>[] | IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>[]| void
  > {
    try {
      if (isPopulated) {
          return this.repository.getAllData(populatedFields,isPopulated);
      }
      return this.repository.getAllData();
    } catch (error) {
      throw new Error(
        `An error occurred while processing your request, Error:${error}`
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
      return successResponse(
        dbResponse,
        dbResponse ? "Data has been updated" : "Not found",
        dbResponse ? gqlErrorCodes.OK : gqlErrorCodes.notFound
      );
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
      return successResponse(
        dbResponse,
        dbResponse ? "Data has been deleted" : "Not found",dbResponse?gqlErrorCodes.OK:gqlErrorCodes.notFound
      );
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
