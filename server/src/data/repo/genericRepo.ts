import { Model,ModifyResult, IfAny, Document, Require_id } from "mongoose";

class GenericRepo<T extends Document> {
  protected model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }
  getDataById(id: string): Promise<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>> | null> {
    return this.model.findById(id).exec();
  }
  getAllData():Promise<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>[]> {
    return this.model.find().exec();
  }
  updateDataById(id: string, data: any):Promise<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>> | null> {
    return this.model
      .findByIdAndUpdate(id, data, {
        new: true, // Return the updated document
        runValidators: true, // Run validators for schema fields
      })
      .exec();
  }
  deleteById(id: string):Promise<ModifyResult<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>>>{
    return this.model.findByIdAndDelete(id).exec();
  }
}

export default GenericRepo;
