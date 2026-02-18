
// import express from "express"
// import "dotenv/config"
// import cors from "cors"
// import connectDB from "./config/db.js"
//  import authRoutes from './routes/authRoutes.js'
// import employeeRoutes from './routes/employeeRoutes.js'
// //Initialize Express App

// const app = express()

// // connect data base
//   await connectDB()

// // middleware

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true}))
// app.use(express.json())

// app.use("/api/auth",authRoutes);
// app.use("/api/employees",employeeRoutes);



// const PORT = process.env.PORT || 5000;

// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)
// )

import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();

// connect DB (important: do NOT await globally in serverless)
connectDB();

app.use(cors({
  origin: "*",   // ⚠️ localhost CORS blocks Vercel frontend
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

export default app;   // ⭐ VERY IMPORTANT
