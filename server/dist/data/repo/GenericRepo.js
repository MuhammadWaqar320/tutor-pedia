"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericRepo {
    model;
    constructor(model) {
        this.model = model;
    }
    getDataById(id) {
        return this.model.findById(id).exec();
    }
    getAllData() {
        return this.model.find().exec();
    }
    updateDataById(id, data) {
        return this.model
            .findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true, // Run validators for schema fields
        })
            .exec();
    }
    deleteById(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
}
exports.default = GenericRepo;