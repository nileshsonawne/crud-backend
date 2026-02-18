// import mongoose from "mongoose";


//  const employeeSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     position: { type: String, required: true },
//     salary:{ type: Number, required: true }
//  },{timestamps:true})


//  export default mongoose.model('Employee', employeeSchema)


import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },


    email: { type: String, required: true },

    position: { type: String, required: true },
    salary: { type: Number, required: true },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
