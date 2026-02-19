import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../config/db.js";

import authRoutes from "../routes/authRoutes.js";
import employeeRoutes from "../routes/employeeRoutes.js";

const app = express();

// connect DB (important: avoid multiple connections)
await connectDB();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// ❌ DO NOT USE app.listen in Vercel
export default app;
