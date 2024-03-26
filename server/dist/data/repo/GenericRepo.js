"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericRepo {
    model;
    constructor(model) {
        this.model = model;
    }
    getDataById(id, populatedFields = [], isPopulated = false) {
        if (isPopulated) {
            return this.model.findById(id).populate(populatedFields).exec();
        }
        return this.model.findById(id).exec();
    }
    async getAllData(populatedFields = [], isPopulated = false) {
        if (isPopulated) {
            return this.model.find().populate(populatedFields).exec();
        }
        return this.model.find().exec();
    }
    updateDataById(id, data) {
        return this.model
            .findByIdAndUpdate(id, data, {
            new: true, // Return the updated document
            runValidators: true, // Run validators for schema fields
        })
            .exec();
    }
    deleteById(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
}
exports.default = GenericRepo;
