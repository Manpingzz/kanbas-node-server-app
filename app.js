import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import UserRoutes from "./users/routes.js";
import session from "express-session";

// const express = require('express')
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

const app = express();
app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));

app.use(express.json());

// app.use(cors());
// app.use(express.json());
// const PORT = 4000;
UserRoutes(app);

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
