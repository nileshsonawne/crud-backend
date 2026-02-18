import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();

// DB connect
connectDB();

// ---------- CORS FIX (Express 5 + Vercel Compatible) ----------
const allowedOrigins = [
  "http://localhost:5173",
  "https://crud-frontend.vercel.app" // add your frontend URL later
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, true); // allow for testing (remove in production)
    }
  },
  credentials: true
}));

// Handle preflight requests manually (important for Vercel)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
// --------------------------------------------------------------

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

export default app;
