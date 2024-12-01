import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
//coonectiion mongoose
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database is connceted sucessfully`)
}).catch((err)=>{
    console.log(err);
});

const app=express();
//for allowing json object in req body
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use((err,req,res,nex)=>{
  const statuCode=err.statuCode || 500
  const message=err.message || "Internal Server Error"
  res.status(statuCode).json({
    success:false,
    statuCode,
    message,
  })
})

app.listen(8000,()=>{
    console.log(`Server is running on port 8000!`);
})