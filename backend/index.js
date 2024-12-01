import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app=express();


//coonectiion mongoose
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database is connceted sucessfully`)
}).catch((err)=>{
    console.log(err);
});


app.listen(8000,()=>{
    console.log(`Server is running on port 8000!`);
})