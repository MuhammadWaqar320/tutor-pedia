"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceiverSocketId = exports.io = void 0;
const express_1 = __importDefault(require("express"));
require("./config/dbConnection.js");
const express_2 = require("graphql-http/lib/use/express");
const cors_1 = __importDefault(require("cors"));
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const gqlSchema_js_1 = __importDefault(require("./graphql/schema/gqlSchema.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app); // Create an HTTP server instance
const userSocketMap = {};
exports.io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:3000", // Set the CORS origin for Socket.IO
        methods: ["GET", "POST"] // Adjust the allowed HTTP methods as needed
    }
});
const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};
exports.getReceiverSocketId = getReceiverSocketId;
app.use((0, cors_1.default)()); // Use the default CORS middleware for Express
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.all("/graphql", (0, express_2.createHandler)({
    schema: gqlSchema_js_1.default,
    formatError: (error) => {
        return error;
    },
}));
app.get("/playground", (0, graphql_playground_middleware_express_1.default)({ endpoint: "/graphql" }));
exports.io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId)
        userSocketMap[userId] = socket.id;
    exports.io.emit("getOnlineUsers", Object.keys(userSocketMap));
    console.log("A new client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        delete userSocketMap[userId];
        exports.io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});
httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
