"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/dbConnection.js");
const express_2 = require("graphql-http/lib/use/express");
const cors_1 = __importDefault(require("cors"));
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const gqlSchema_js_1 = __importDefault(require("./graphql/schema/gqlSchema.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.all("/graphql", (0, express_2.createHandler)({
    schema: gqlSchema_js_1.default,
    formatError: (error) => {
        return error;
    },
}));
app.get("/playground", (0, graphql_playground_middleware_express_1.default)({ endpoint: "/graphql" }));
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
