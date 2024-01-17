"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
class GenericService {
    repository;
    constructor(repo) {
        this.repository = repo;
    }
    async getDataById(id) {
        try {
            const dbResponse = await this.repository.getDataById(id);
            return (0, utilFunctions_1.successResponse)(dbResponse, "");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request. Error:${error}`, null, null);
        }
    }
    async getAllData() {
        try {
            const dbResponse = await this.repository.getAllData();
            return (0, utilFunctions_1.successResponse)(dbResponse, "");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request. Error:${error}`, null, null);
        }
    }
    async updateDataById(id, data) {
        try {
            const dbResponse = await this.repository.updateDataById(id, data);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Data has been updated");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request. Error:${error}`, null, null);
        }
    }
    async deleteById(id) {
        try {
            const dbResponse = await this.repository.deleteById(id);
            return (0, utilFunctions_1.successResponse)(dbResponse, "Data has been deleted");
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request. Error:${error}`, null, null);
        }
    }
}
exports.default = GenericService;
