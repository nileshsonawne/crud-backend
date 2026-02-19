import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";

import authRoutes from "../routes/authRoutes.js";
import employeeRoutes from "../routes/employeeRoutes.js";

dotenv.config();

const app = express();

await connectDB();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// ❌ NO app.listen here
export default app;
