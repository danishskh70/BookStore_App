import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bookRoute from './Routes/routes.js';
import userRoute from './Routes/userRoute.js'
import cors from 'cors'
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT =process.env.PORT||5000;
const URI=process.env.URI ;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
    });
    console.log("Connected to Database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); 
  }
};

connectDB();


app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
  console.log(`The app is listening on the http://localhost:${PORT}`);
})  