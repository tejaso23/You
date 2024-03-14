//require('dotenv').config({path:"./env"})
//more stardard approach
import dotenv from "dotenv";
import ConnnectDb from "./db/index.js";
import {app} from "./app.js"




dotenv.config({path:'./.env'});
ConnnectDb().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
     })
}).catch((err)=>{


    console.log("MONGO db connection failed !!! ",err);
})