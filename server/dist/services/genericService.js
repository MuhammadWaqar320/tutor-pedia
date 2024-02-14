"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilFunctions_1 = require("../utils/utilFunctions");
const constant_1 = require("../utils/constant");
class GenericService {
    repository;
    constructor(repo) {
        this.repository = repo;
    }
    async getDataById(id) {
        try {
            return this.repository.getDataById(id);
        }
        catch (error) {
            throw new Error(`An error occurred while processing your request, Error:${error}`);
        }
    }
    async getAllData() {
        try {
            return this.repository.getAllData();
        }
        catch (error) {
            throw new Error(`An error occurred while processing your request, Error:${error}`);
        }
    }
    async updateDataById(id, data) {
        try {
            const dbResponse = await this.repository.updateDataById(id, data);
            return (0, utilFunctions_1.successResponse)(dbResponse, dbResponse ? "Data has been updated" : "Not found", dbResponse ? constant_1.gqlErrorCodes.OK : constant_1.gqlErrorCodes.notFound);
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request. Error:${error}`, null, null);
        }
    }
    async deleteById(id) {
        try {
            const dbResponse = await this.repository.deleteById(id);
            return (0, utilFunctions_1.successResponse)(dbResponse, dbResponse ? "Data has been deleted" : "Not found", dbResponse ? constant_1.gqlErrorCodes.OK : constant_1.gqlErrorCodes.notFound);
        }
        catch (error) {
            return (0, utilFunctions_1.errorResponse)(`An error occurred while processing your request. Error:${error}`, null, null);
        }
    }
}
exports.default = GenericService;
