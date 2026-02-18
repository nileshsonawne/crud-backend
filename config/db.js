import mongoose from 'mongoose';




 const connectDB= async()=>{
    console.log("ENV VALUE:", process.env.MONGODB_URL);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.error('❌ Connection Failed:', error.message);
    }
 }

export default connectDB