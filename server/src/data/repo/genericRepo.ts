import { Model,ModifyResult, IfAny, Document, Require_id,UnpackedIntersection } from "mongoose";

class GenericRepo<T extends Document> {
  protected model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }
  getDataById(id: string,populatedFields:string[]=[],isPopulated:boolean=false): Promise<UnpackedIntersection<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>, {}> | IfAny<T, any, Document<unknown, {}, T> & Require_id<T>> | null> {
    if (isPopulated) {
       return this.model.findById(id).populate(populatedFields).exec();
    }
    return this.model.findById(id).exec();
  }
 async getAllData(populatedFields:string[]=[],isPopulated:boolean=false):Promise<Omit<IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>, never>[] |IfAny<T, any, Document<unknown, {}, T> & Require_id<T>>[] > {
   if (isPopulated) {
    return this.model.find().populate(populatedFields).exec();
  }
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