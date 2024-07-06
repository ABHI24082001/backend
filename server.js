import express  from "express";
import  dbConnect  from "./config/dbconnect.js";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import captureRoutes from "./routes/captureRoutes.js";




const app = express();
dbConnect()
dotenv.config();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());



app.use("/api/v1/capture", captureRoutes);


app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });