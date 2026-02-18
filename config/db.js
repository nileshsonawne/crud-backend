// import mongoose from 'mongoose';




//  const connectDB= async()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("MongoDB Connected");
        
//     } catch (error) {
//         console.error('❌ Connection Failed:', error.message);
//     }
//  }

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Error:", error);
  }
};

export default connectDB;
