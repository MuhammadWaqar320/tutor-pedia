import express from "express";
import "./config/dbConnection.js";
import { createHandler } from "graphql-http/lib/use/express";
import cors from "cors";
import expressPlayground from "graphql-playground-middleware-express";
import Schema from "./graphql/schema/gqlSchema.js";
import dotenv from "dotenv";
import { GraphQLError } from 'graphql';
import { Server } from "socket.io";
import http from "http";

dotenv.config();

const app = express();
const httpServer = http.createServer(app); // Create an HTTP server instance
const userSocketMap:any = {};
export const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Set the CORS origin for Socket.IO
    methods: ["GET", "POST"] // Adjust the allowed HTTP methods as needed
  }
});

export const getReceiverSocketId = (receiverId:any) => {
  return userSocketMap[receiverId];
}

app.use(cors()); // Use the default CORS middleware for Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all(
  "/graphql",
  createHandler({
    schema: Schema,
    formatError: (error: Readonly<Error | GraphQLError>) => {
      return error;
    },
  })
);
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

io.on("connection", (socket) => {

  const userId: any = socket.handshake.query.userId;
  
  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers",Object.keys(userSocketMap))

  console.log("A new client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    delete userSocketMap[userId];
    
  io.emit("getOnlineUsers",Object.keys(userSocketMap))
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
