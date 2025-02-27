import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch (error){
        console.log("Mongodb Connection Error: ", error);
        process.exit(1)
    }
}

export default connectDB