"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructResponse = exports.errorResponse = exports.successResponse = void 0;
const constant_1 = require("./constant");
const successResponse = (data, message) => {
    return {
        data: data,
        success: true,
        message: message,
        code: "OK",
    };
};
exports.successResponse = successResponse;
const errorResponse = (errorMessage, statusCode, data) => {
    return {
        data: data,
        success: false,
        message: errorMessage ?? constant_1.gqlErrorCodes.internalServerError,
        code: statusCode ?? constant_1.gqlErrorCodes.internalServerError,
    };
};
exports.errorResponse = errorResponse;
const constructResponse = () => {
};
exports.constructResponse = constructResponse;
