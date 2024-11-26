import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bookRoute from './Routes/routes.js';
import userRoute from './Routes/userRoute.js'
import cors from 'cors'
const app = express();
const PORT =process.env.PORT|| 4000;
const URI=process.env.URI || "mongodb://localhost:27017/bookStore";

app.use(cors());
app.use(express.json());
dotenv.config();

  
try {
  mongoose.connect(URI,{useNewUrlParser : true,
    useUnifiedTopology:true
  });
  console.log("Connected to Database");
} catch (error) {
  console.log(console.error("Error:",error));
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{
  console.log(`The app is listening on the http://localhost:${PORT}`);
}) 