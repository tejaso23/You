import express from "express";
import  cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

export {app}

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

//1.
app.use(express.json({
    limit:"16kb"
}));

//2.
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}));

//3.
app.use(express.static("public"));

//4.
app.use(cookieParser());

 

//Routes imports

import userRoute from "./routes/user.routes.js"



//Routes declaration

app.use("/api/v1/users",userRoute);
//http://localhost:8000/api/v1/users

