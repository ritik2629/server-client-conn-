import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import product from "./product.js";
import { connectDB } from "./mongoDB/connect.js";
import todoRoutes from './routes/todoRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json())

app.use('/todo',todoRoutes)


app.get("/", (req, res) => {
  res.status(200).json({ message: "hello ritik" });
});

// app.get("/product", (req, res) => {
//   res.json(product);
// });


const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(5050, () => {
      console.log("server is running on http://localhost:5050");
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();
