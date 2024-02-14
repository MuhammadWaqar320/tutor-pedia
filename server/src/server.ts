import express from "express";
import "./config/dbConnection.js";
import { createHandler } from "graphql-http/lib/use/express";
import cors from "cors";
import expressPlayground from "graphql-playground-middleware-express";
import Schema from "./graphql/schema/gqlSchema.js";
import dotenv from "dotenv";
import { GraphQLError } from 'graphql';

dotenv.config();

const app = express();

app.use(cors());
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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
