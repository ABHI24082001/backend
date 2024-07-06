// index.js

import express from "express";
import dbConnect from "./config/dbconnect.js";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import captureRoutes from "./routes/captureRoutes.js";

const app = express();

dbConnect();
dotenv.config();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 8000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.use("/api/v1/capture", captureRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URL: ${BASE_URL}`);
});
