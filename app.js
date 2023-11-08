import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import "dotenv/config";
import CourseRoutes from "./courses/routes.js";
// import ModuleRoutes from "./modules/routes.js"

// const express = require('express')
const app = express();
app.use(cors());
// Passing JSON data to the server in an HTTP Body
app.use(express.json())
CourseRoutes(app);

Hello(app)

Lab5(app)
// ModuleRoutes(app)

app.listen(4000);
