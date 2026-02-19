import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();

const app = express();

await connectDB();

app.use(cors({ origin: "*"}));
app.use(express.json());

app.get("/", (req,res)=>res.send("API Working"));

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

export default app;
