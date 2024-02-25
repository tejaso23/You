import mongoose from "mongoose"

import {DB_name} from "../constants.js"
import {app} from "../app.js"


const ConnnectDb = async  ()=>{

    try{
        let connect_DB = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_name}`).then(

            
        );
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error;
        })
        console.log(`\nMongoDB connection established !! DB host : ${connect_DB.connection.host} \n`);
    }catch(error){

        console.log("Mongo DB connecrion Failed : ",error);
        process.exit(1);
    }
     
};

export default ConnnectDb;