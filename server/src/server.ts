import express from "express";
import "./config/dbConnection.js";
import { createHandler } from "graphql-http/lib/use/express";
import cors from "cors";
import expressPlayground from "graphql-playground-middleware-express";
import Schema from "./graphql/schema/gqlSchema.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/graphql", createHandler({ schema:Schema}));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(port,() => {
  console.log(`Server is running on port ${port}`);
})
