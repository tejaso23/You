import mongoose from "mongoose"

import {DB_name} from "../constants.js"

const ConnnectDb =async  ()=>{

    try{
        let connect_DB = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_name}`);
        console.log(`\n  MongoDB connection established !! DB host : ${connect_DB.connection.host}`);
    }catch(error){

        console.log("Mongo DB connecrion Failed : ",error);
        process.exit(1);
    }
     
};

export default ConnnectDb;