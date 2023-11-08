import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import "dotenv/config";
import CourseRoutes from "./courses/routes.js"
import ModuleRoutes from "./modules/routes.js"

// const express = require('express')
const app = express();
app.use(
	cors({
		credentials: true,
		origin: process.env.FRONTEND_URL,
	})
)
// Passing JSON data to the server in an HTTP Body
app.use(express.json())
const PORT = 4000

Hello(app)
Lab5(app)
CourseRoutes(app)
ModuleRoutes(app)

app.listen(process.env.PORT || PORT)
