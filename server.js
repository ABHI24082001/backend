// index.js

import express from "express";
import dbConnect from "./config/dbconnect.js";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
<<<<<<< HEAD
import userRouter  from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import CategoryRouter from './routes/category.routes.js'
import Order from  './routes/orderss.routes.js'
import Cart from './routes/cart.routes.js'
import Review from './routes/review.routes.js'
import Branch from './routes/branch.routes.js';
import SecondaryRouter  from './routes/Twelthclass.routes.js';
import PrimaryRouter from './routes/Tenthclass.routes.js';
import BachlorRouter from './routes/bachelor.routes.js'



=======
>>>>>>> 00cbe4255ce62ac4e04592ae7870aff79ba25101

import captureRoutes from "./routes/captureRoutes.js";

const app = express();

dbConnect();
dotenv.config();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", productRouter)
app.use("/api/v1/users", CategoryRouter);
app.use("/api/v1/users", Order);
app.use("/api/v1/users", Cart);
app.use("/api/v1/users", Review);
app.use("/api/v1/users", Branch);
app.use("/api/v1/users", PrimaryRouter);
app.use("/api/v1/users", SecondaryRouter);
app.use("/api/v1/users", BachlorRouter);




=======
>>>>>>> 00cbe4255ce62ac4e04592ae7870aff79ba25101
const PORT = 8000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.use("/api/v1/capture", captureRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
<<<<<<< HEAD
});

// const PORT = process.env.PORT || 8000; // Change this to another port like 8080
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
=======
  console.log(`Base URL: ${BASE_URL}`);
});
>>>>>>> 00cbe4255ce62ac4e04592ae7870aff79ba25101
